import DefaultLayout from "app/layouts";
import { auth, db } from "app/services/firebase";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spending } from "types/Spending";
import {
  dateTimeFormatDay,
  dateTimeFormatMonth,
  dateTimeFormatVietNam,
  dateTimeFormatYear,
} from "utils/datetime";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function Chart() {
  const [user] = useAuthState(auth);
  const dataCollectionSpending = collection(db, "Spending");
  const [incomeMonth, setIncomeMonth] = useState<number | null>(null);
  const [expensesMonth, setExpensesMonth] = useState<number | null>(null);
  const [incomeYear, setIncomeYear] = useState<number | null>(null);
  const [expensesYear, setExpensesYear] = useState<number | null>(null);
  const [spendingList, setSpendingList] = useState<Spending[]>([]);
  const [monthSelect, setMonthSelect] = useState<number>(
    dateTimeFormatMonth(dateTimeFormatVietNam(new Date()))
  );
  const [yearSelect, setYearSelect] = useState<number>(
    dateTimeFormatYear(dateTimeFormatVietNam(new Date()))
  );

  const [dataOFMonth, setDataOFMonth] = useState<any>([]);
  const [dataOFYear, setDataOFYear] = useState<any>([]);
  const [incomeChartOFMonth, setIncomeChartOFMonth] = useState<number[]>([]);
  const [expensesChartOFMonth, setExpensesChartOFMonth] = useState<number[]>(
    []
  );
  const [data, setData] = useState<any>();
  const handleFetchSpending = async () => {
    const q = query(dataCollectionSpending, where("uid", "==", user?.uid));
    const querySnapshot = await getDocs(q);
    const data: any = [];
    querySnapshot.forEach((doc: any) => {
      data.push({ idDoc: doc.id, ...doc.data() });
    });
    setSpendingList(data);
  };
  useEffect(() => {
    handleFetchSpending();
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    if (spendingList) {
      setDataOFMonth(
        spendingList.filter(
          (val: Spending) =>
            dateTimeFormatMonth(val.date) === monthSelect &&
            dateTimeFormatYear(val.date) === yearSelect
        )
      );
      setDataOFYear(
        spendingList.filter(
          (val: Spending) => dateTimeFormatYear(val.date) === yearSelect
        )
      );
    }
  }, [monthSelect, spendingList, yearSelect]);

  useEffect(() => {
    if (spendingList) {
      const thuNhapMonth = dataOFMonth
        .filter((val) => val.type === "INCOME")
        .reduce((sum, obj) => {
          return sum + obj.amount;
        }, 0);
      const chiTieuMonth = dataOFMonth
        .filter((val) => val.type === "EXPENSES")
        .reduce((sum, obj) => {
          return sum + obj.amount;
        }, 0);
      setIncomeMonth(thuNhapMonth);
      setExpensesMonth(chiTieuMonth);

      const thuNhapYear = dataOFYear
        .filter((val) => val.type === "INCOME")
        .reduce((sum, obj) => {
          return sum + obj.amount;
        }, 0);
      const chiTieuYear = dataOFYear
        .filter((val) => val.type === "EXPENSES")
        .reduce((sum, obj) => {
          return sum + obj.amount;
        }, 0);
      setIncomeYear(thuNhapYear);
      setExpensesYear(chiTieuYear);
    }
  }, [spendingList, dataOFMonth, dataOFYear]);

  useEffect(() => {
    let dataIncome: number[] = [];
    for (let i = 1; i <= 31; i++) {
      dataIncome.push(
        dataOFMonth
          .filter(
            (val) => val.type === "INCOME" && dateTimeFormatDay(val.date) === i
          )
          .reduce((sum, obj) => {
            return sum + obj.amount;
          }, 0)
      );
    }
    setIncomeChartOFMonth(dataIncome);

    let dataExpenses: number[] = [];
    for (let i = 1; i <= 31; i++) {
      dataExpenses.push(
        dataOFMonth
          .filter(
            (val) =>
              val.type === "EXPENSES" && dateTimeFormatDay(val.date) === i
          )
          .reduce((sum, obj) => {
            return sum + obj.amount;
          }, 0)
      );
    }
    setExpensesChartOFMonth(dataExpenses);
  }, [spendingList, dataOFMonth, dataOFYear]);

  console.log(incomeChartOFMonth);

  return (
    <>
      <DefaultLayout />
      <div>
        <div className="main-header">
          <div className="content-bg-wrap bg-group" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Stats and Analytics</h1>
                  <p>
                    Welcome to your stats and analytics dashboard! Here you’l
                    see all your profile stats like: visits, new friends,
                    average comments, likes, social media reach, annual graphs,
                    and much more!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            className="img-bottom"
            src="img/group-bottom.webp"
            alt="friends"
            width={1087}
            height={148}
          />
        </div>
        {/* ... end Main Header Groups */}
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-content">
                  <ul className="statistics-list-count">
                    <li>
                      <div className="points">
                        <span>Thu nhập tháng {monthSelect}</span>
                      </div>
                      <div className="count-stat">
                        {incomeMonth?.toLocaleString()}
                        <span className="indicator positive"> + 4.207</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-content">
                  <ul className="statistics-list-count">
                    <li>
                      <div className="points">
                        <span>Chi tiêu tháng {monthSelect}</span>
                      </div>
                      <div className="count-stat">
                        {expensesMonth?.toLocaleString()}
                        <span className="indicator negative"> - 12.352</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-content">
                  <ul className="statistics-list-count">
                    <li>
                      <div className="points">
                        <span>Chi tiêu năm {yearSelect}</span>
                      </div>
                      <div className="count-stat">
                        {expensesYear?.toLocaleString()}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-content">
                  <ul className="statistics-list-count">
                    <li>
                      <div className="points">
                        <span>Thu nhập năm {yearSelect}</span>
                      </div>
                      <div className="count-stat">
                        {incomeYear?.toLocaleString()}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                <div className="ui-block-title">
                  <div className="h6 title">Năm</div>
                  <select
                    className="form-select form-control without-border"
                    value={yearSelect.toString()}
                    onChange={(e) =>
                      setYearSelect(parseInt(e.target.value, 10))
                    }
                  >
                    <option value="2020">Năm 2020</option>
                    <option value="2021">Năm 2021</option>
                    <option value="2022">Năm 2022</option>
                    <option value="2023">Năm 2023</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                <div className="ui-block-title">
                  <div className="h6 title">Biểu đồ thu chi tháng</div>
                  <select
                    className="form-select form-control without-border"
                    value={monthSelect.toString()}
                    onChange={(e) =>
                      setMonthSelect(parseInt(e.target.value, 10))
                    }
                  >
                    <option value="1">Tháng 1</option>
                    <option value="2">Tháng 2</option>
                    <option value="3">Tháng 3</option>
                    <option value="4">Tháng 4</option>
                    <option value="5">Tháng 5</option>
                    <option value="6">Tháng 6</option>
                    <option value="7">Tháng 7</option>
                    <option value="8">Tháng 8</option>
                    <option value="9">Tháng 9</option>
                    <option value="10">Tháng 10</option>
                    <option value="11">Tháng 11</option>
                    <option value="12">Tháng 12</option>
                  </select>
                </div>
                <div className="ui-block-content">
                  <Bar
                    data={{
                      labels: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                        31,
                      ],
                      datasets: [
                        {
                          label: "Thu nhập",
                          backgroundColor: "#cffafe",
                          borderColor: "#06b6d4",
                          borderWidth: 1,
                          data: incomeChartOFMonth,
                        },
                        {
                          label: "Chi tiêu",
                          backgroundColor: "#ede9fe",
                          borderColor: "#7c3aed",
                          borderWidth: 1,
                          data: expensesChartOFMonth,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block responsive-flex h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Lines Graphic</div>
                  <div className="points align-right">
                    <span>
                      <span className="statistics-point bg-yellow" />
                      THIS YEAR
                    </span>
                    <span>
                      <span className="statistics-point bg-primary" />
                      LAST YEAR
                    </span>
                  </div>
                  <select className="form-select form-control without-border">
                    <option value="CUR">LAST 3 MONTH</option>
                    <option value="LY">LAST YEAR (2016)</option>
                  </select>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  {/*--------------------------------------- LINE-GRAPHIC-CHART ----------------------------------*/}
                  <div className="chart-js chart-js-line-graphic">
                    <canvas id="line-graphic-chart" width={730} height={300} />
                  </div>
                  {/*
        JS libraries for LINE-GRAPHIC-CHART:
        js/libs/Chart.min.js
        js/libs/chartjs-plugin-deferred.min.js
        js/libs/loader.min.js
       */}
                  {/* JS-init for LINE-GRAPHIC-CHART: js/libs/run-chart.min.js */}
                  {/*------------------------------- ... end LINE-GRAPHIC-CHART ----------------------------------*/}
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Colors Pie Chart</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  <div className="chart-with-statistic">
                    <ul className="statistics-list-count">
                      <li>
                        <div className="points">
                          <span>
                            <span className="statistics-point bg-purple" />
                            Status Updates
                          </span>
                        </div>
                        <div className="count-stat">8.247</div>
                      </li>
                      <li>
                        <div className="points">
                          <span>
                            <span className="statistics-point bg-breez" />
                            Multimedia
                          </span>
                        </div>
                        <div className="count-stat">5.630</div>
                      </li>
                      <li>
                        <div className="points">
                          <span>
                            <span className="statistics-point bg-primary" />
                            Shared Posts
                          </span>
                        </div>
                        <div className="count-stat">1.498</div>
                      </li>
                      <li>
                        <div className="points">
                          <span>
                            <span className="statistics-point bg-yellow" />
                            Blog Posts
                          </span>
                        </div>
                        <div className="count-stat">1.136</div>
                      </li>
                    </ul>
                    {/*-------------------------------------- PIE-COLOR-CHART ----------------------------------*/}
                    <div className="chart-js chart-js-pie-color">
                      <canvas id="pie-color-chart" width={180} height={180} />
                      <div className="general-statistics">
                        16.502
                        <span>Last Month Posts</span>
                      </div>
                    </div>
                    {/*
          JS libraries for PIE-COLOR-CHART:
          js/libs/Chart.min.js
          js/libs/chartjs-plugin-deferred.min.js
          js/libs/loader.min.js
         */}
                    {/* JS-init for PIE-COLOR-CHART: js/libs/run-chart.min.js */}
                    {/*------------------------------- ... end PIE-COLOR-CHART ---------------------------------*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Pie Chart with Text</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  {/*-------------------------------------------- PIE-CHART --------------------------------------*/}
                  <div className="circle-progress circle-pie-chart">
                    <div
                      className="pie-chart"
                      data-value="0.68"
                      data-startcolor="#38a9ff"
                      data-endcolor="#317cb6"
                    >
                      <div className="content">
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                  {/*
        JS libraries for PIE-CHART:
        js/libs/circle-progress.min.js
       */}
                  {/* JS-init for PIE-CHART: js/libs/run-chart.min.js */}
                  {/*---------------------------------- ... end PIE-CHART ----------------------------------------*/}
                  <div className="chart-text">
                    <h6>Friends Comments</h6>
                    <p>
                      68% of friends that visit your profile comment on your
                      posts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Worldwide Statistics</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  <div className="world-statistics">
                    <div className="world-statistics-img">
                      <img
                        loading="lazy"
                        src="img/world-map.webp"
                        alt="map"
                        width={520}
                        height={281}
                      />
                    </div>
                    <ul className="country-statistics">
                      <li>
                        <img
                          loading="lazy"
                          src="img/flag1.webp"
                          alt="flag"
                          width={16}
                          height={11}
                        />
                        <span className="country">United States</span>
                        <span className="count-stat">86.134</span>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src="img/flag2.webp"
                          alt="flag"
                          width={16}
                          height={11}
                        />
                        <span className="country">Mexico</span>
                        <span className="count-stat">35.136</span>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src="img/flag3.webp"
                          alt="flag"
                          width={16}
                          height={11}
                        />
                        <span className="country">France</span>
                        <span className="count-stat">12.600</span>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src="img/flag4.webp"
                          alt="flag"
                          width={16}
                          height={11}
                        />
                        <span className="country">Spain</span>
                        <span className="count-stat">9.471</span>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src="img/flag5.webp"
                          alt="flag"
                          width={16}
                          height={11}
                        />
                        <span className="country">Ireland</span>
                        <span className="count-stat">8.058</span>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src="img/flag6.webp"
                          alt="flag"
                          width={16}
                          height={11}
                        />
                        <span className="country">Argentina</span>
                        <span className="count-stat">5.653</span>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src="img/flag7.webp"
                          alt="flag"
                          width={16}
                          height={11}
                        />
                        <span className="country">Ecuador</span>
                        <span className="count-stat">2.924</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Country Detail</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content js-google-map">
                  {/*----------------------------------------- US-CHART-MAP --------------------------------------*/}
                  <div
                    id="us-chart-map"
                    style={{
                      width: "270px",
                      height: "180px",
                      maxWidth: "100%",
                    }}
                  />
                  {/*
        JS libraries for US-CHART-MAP:
        js/libs/Chart.min.js
        js/libs/chartjs-plugin-deferred.min.js
        js/libs/loader.min.js
       */}
                  {/* JS-init for US-CHART-MAP: js/libs/run-chart.min.js */}
                  {/*---------------------------------- ... end US-CHART-MAP -------------------------------------*/}
                  <ul className="statistics-list-count style-2">
                    <li>
                      <div className="points">
                        <span>
                          <span className="statistics-point bg-blue" />
                          Profile Visits
                        </span>
                      </div>
                      <div className="count-stat">4.290</div>
                    </li>
                    <li>
                      <div className="points">
                        <span>
                          <span className="statistics-point bg-breez" />
                          Post Likes
                        </span>
                      </div>
                      <div className="count-stat">2.758</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Progress Bars</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  <div className="skills-item">
                    <div className="skills-item-info">
                      <span className="skills-item-title">
                        Orange Gradient Progress
                      </span>
                      <span className="skills-item-count">
                        <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={62}
                          data-from={0}
                        />
                        <span className="units">62%</span>
                      </span>
                    </div>
                    <div className="skills-item-meter">
                      <span
                        className="skills-item-meter-active bg-primary"
                        style={{ width: "62%" }}
                      />
                    </div>
                  </div>
                  <div className="skills-item">
                    <div className="skills-item-info">
                      <span className="skills-item-title">Violet Progress</span>
                      <span className="skills-item-count">
                        <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={46}
                          data-from={0}
                        />
                        <span className="units">46%</span>
                      </span>
                    </div>
                    <div className="skills-item-meter">
                      <span
                        className="skills-item-meter-active bg-purple"
                        style={{ width: "46%" }}
                      />
                    </div>
                  </div>
                  <div className="skills-item">
                    <div className="skills-item-info">
                      <span className="skills-item-title">Blue Progress</span>
                      <span className="skills-item-count">
                        <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={79}
                          data-from={0}
                        />
                        <span className="units">79%</span>
                      </span>
                    </div>
                    <div className="skills-item-meter">
                      <span
                        className="skills-item-meter-active bg-blue"
                        style={{ width: "79%" }}
                      />
                    </div>
                  </div>
                  <div className="skills-item">
                    <div className="skills-item-info">
                      <span className="skills-item-title">Aqua Progress</span>
                      <span className="skills-item-count">
                        <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={34}
                          data-from={0}
                        />
                        <span className="units">34%</span>
                      </span>
                    </div>
                    <div className="skills-item-meter">
                      <span
                        className="skills-item-meter-active bg-breez"
                        style={{ width: "34%" }}
                      />
                    </div>
                  </div>
                  <div className="skills-item">
                    <div className="skills-item-info">
                      <span className="skills-item-title">Yellow Progress</span>
                      <span className="skills-item-count">
                        <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={95}
                          data-from={0}
                        />
                        <span className="units">95%</span>
                      </span>
                    </div>
                    <div className="skills-item-meter">
                      <span
                        className="skills-item-meter-active bg-yellow"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Icons with Text</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  <div className="monthly-indicator-wrap">
                    <div className="monthly-indicator">
                      <a href="/#" className="btn btn-control bg-blue">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="#olymp-happy-face-icon" />
                        </svg>
                      </a>
                      <div className="monthly-count">
                        9.855
                        <span className="period">Likes</span>
                      </div>
                    </div>
                    <div className="monthly-indicator">
                      <a href="/#" className="btn btn-control bg-blue">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="#olymp-happy-face-icon" />
                        </svg>
                      </a>
                      <div className="monthly-count">
                        6.721
                        <span className="period">Shares</span>
                      </div>
                    </div>
                    <div className="monthly-indicator">
                      <a href="/#" className="btn btn-control bg-blue">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="#olymp-happy-face-icon" />
                        </svg>
                      </a>
                      <div className="monthly-count">
                        2.047
                        <span className="period">Comments</span>
                      </div>
                    </div>
                    <div className="monthly-indicator">
                      <a href="/#" className="btn btn-control bg-blue">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="#olymp-happy-face-icon" />
                        </svg>
                      </a>
                      <div className="monthly-count">
                        1.536
                        <span className="period">Messages</span>
                      </div>
                    </div>
                    <div className="monthly-indicator">
                      <a href="/#" className="btn btn-control bg-primary">
                        <svg className="olymp-comments-post-icon">
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </a>
                      <div className="monthly-count">
                        Paragraph
                        <span className="period">
                          Lorem ipsum dolor sit amet, consectetur icing elit,
                          sed do eiusmod tempor incididunt ut ore et dolore
                          magna aliqua. Ut enim ad minim an quis nostrud
                          exercitation.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                <div className="ui-block-title">
                  <div className="h6 title">Yearly Line Graphic</div>
                  <select className="form-select form-control without-border">
                    <option value="LY">LAST YEAR (2016)</option>
                    <option value={2}>CURRENT YEAR (2017)</option>
                  </select>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  {/*----------------------------------------- LINE-CHART ----------------------------------------*/}
                  <div className="chart-js chart-js-line-chart">
                    <canvas id="line-chart" width={1400} height={380} />
                  </div>
                  {/*
        JS libraries for LINE-CHART:
        js/libs/Chart.min.js
        js/libs/chartjs-plugin-deferred.min.js
        js/libs/loader.min.js
       */}
                  {/* JS-init for LINE-CHART: js/libs/run-chart.min.js */}
                  {/*---------------------------------- ... end LINE-CHART ---------------------------------------*/}
                </div>
                <hr />
                <div className="ui-block-content display-flex content-around">
                  {/*--------------------------------------- PIE-SMALL-CHART -------------------------------------*/}
                  <div className="chart-js chart-js-small-pie">
                    <canvas id="pie-small-chart" width={90} height={90} />
                  </div>
                  {/*
        JS libraries for PIE-SMALL-CHART:
        js/libs/Chart.min.js
        js/libs/chartjs-plugin-deferred.min.js
        js/libs/loader.min.js
       */}
                  {/* JS-init for PIE-SMALL-CHART: js/libs/run-chart.min.js */}
                  {/*------------------------------- ... end PIE-SMALL-CHART -------------------------------------*/}
                  <div className="points points-block">
                    <span>
                      <span className="statistics-point bg-breez" />
                      Yearly Likes
                    </span>
                    <span>
                      <span className="statistics-point bg-yellow" />
                      Yearly Comments
                    </span>
                  </div>
                  <div className="text-stat">
                    <div className="count-stat">2.758</div>
                    <div className="title">Total Likes</div>
                    <div className="sub-title">This Year</div>
                  </div>
                  <div className="text-stat">
                    <div className="count-stat">5.420,7</div>
                    <div className="title">Average Likes</div>
                    <div className="sub-title">By Month</div>
                  </div>
                  <div className="text-stat">
                    <div className="count-stat">42.973</div>
                    <div className="title">Total Comments</div>
                    <div className="sub-title">This Year</div>
                  </div>
                  <div className="text-stat">
                    <div className="count-stat">3.581,1</div>
                    <div className="title">Average Comments</div>
                    <div className="sub-title">By Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Progress Bars</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  {/*--------------------------------------- TWO-BAR-CHART-2 -------------------------------------*/}
                  <div className="chart-js chart-js-two-bar">
                    <canvas id="two-bar-chart-2" width={400} height={300} />
                  </div>
                  {/*
        JS libraries for TWO-BAR-CHART-2:
        js/libs/Chart.min.js
        js/libs/chartjs-plugin-deferred.min.js
        js/libs/loader.min.js
       */}
                  {/* JS-init for TWO-BAR-CHART-2: js/libs/run-chart.min.js */}
                  {/*------------------------------- ... end TWO-BAR-CHART-2 -------------------------------------*/}
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Number with Slider</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  <div className="swiper-container" data-slide="fade">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="statistics-slide">
                          <div
                            className="count-stat"
                            data-swiper-parallax={-500}
                          >
                            248
                          </div>
                          <div className="title" data-swiper-parallax={-100}>
                            <span className="c-primary">Olympus</span> Posts
                            Rank
                          </div>
                          <div
                            className="sub-title"
                            data-swiper-parallax={-100}
                          >
                            The Olympus Rank measures the quantity of comments,
                            likes and posts.
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="statistics-slide">
                          <div
                            className="count-stat"
                            data-swiper-parallax={-500}
                          >
                            358
                          </div>
                          <div className="title" data-swiper-parallax={-100}>
                            <span className="c-primary">Olympus</span> Posts
                            Rank
                          </div>
                          <div
                            className="sub-title"
                            data-swiper-parallax={-100}
                          >
                            The Olympus Rank measures the quantity of comments,
                            likes and posts.
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="statistics-slide">
                          <div
                            className="count-stat"
                            data-swiper-parallax={-500}
                          >
                            711
                          </div>
                          <div className="title" data-swiper-parallax={-100}>
                            <span className="c-primary">Olympus</span> Posts
                            Rank
                          </div>
                          <div
                            className="sub-title"
                            data-swiper-parallax={-100}
                          >
                            The Olympus Rank measures the quantity of comments,
                            likes and posts.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination pagination-blue" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
              <div className="ui-block h-100 mb-0">
                <div className="ui-block-title">
                  <div className="h6 title">Pie Chart</div>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>
                <div className="ui-block-content">
                  {/*----------------------------------------- RADAR-CHART ---------------------------------------*/}
                  <div className="chart-js chart-radar">
                    <canvas
                      className="radar-chart"
                      id="radar-chart"
                      width={400}
                      height={300}
                    />
                  </div>
                  {/*
        JS libraries for RADAR-CHART:
        js/libs/Chart.min.js
        js/libs/chartjs-plugin-deferred.min.js
        js/libs/loader.min.js
       */}
                  {/* JS-init for RADAR-CHART: js/libs/run-chart.min.js */}
                  {/*---------------------------------- ... end RADAR-CHART --------------------------------------*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
