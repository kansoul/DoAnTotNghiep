import { auth, db } from "app/services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spending } from "types/Spending";
import { dateTimeFormatTime } from "utils/datetime";
import { v4 as uuidv4 } from "uuid";
import TransactionItem from "../../TransactionItem";
import "../index.css";

const transactionTypeOptions: any = [
  {
    optionId: "INCOME",
    displayText: "Thu nhập",
  },
  {
    optionId: "EXPENSES",
    displayText: "Chi tiêu",
  },
];

export default function AddSpending(props: {
  openSpendingPopup: boolean;
  setOpenSpendingPopup: (value: boolean) => void;
  datePicker: any;
  reloadData: any;
  spendingList: Spending[];
}) {
  const {
    openSpendingPopup,
    setOpenSpendingPopup,
    datePicker,
    reloadData,
    spendingList,
  } = props;
  const [user] = useAuthState(auth);
  const dataCollectionSpending = collection(db, "Spending");

  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<"INCOME" | "EXPENSES" | string>("INCOME");
  const [desc, setDesc] = useState<string>("");
  const [time, setTime] = useState<string>(dateTimeFormatTime(new Date()));

  const handleAddSpending = async () => {
    const data: Spending = {
      id: uuidv4(),
      uid: user?.uid,
      title,
      amount,
      type,
      backgroundColor: type === "INCOME" ? "#cffafe" : "#ede9fe",
      desc,
      date: datePicker,
      time,
    };
    addDoc(dataCollectionSpending, data)
      .then(() => {
        console.log("Successfully updated doc");
        reloadData();
        setOpenSpendingPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetData = () => {
    reloadData();
    setOpenSpendingPopup(false);
  };

  return (
    <div
      className={`modal fade default-diary ${openSpendingPopup ? "show" : ""}`}
      id="create-event"
      tabIndex={-1}
      role="dialog"
      style={
        openSpendingPopup
          ? {
              display: "block",
              overflowX: "hidden",
              overflowY: "auto",
              top: "65px",
              width: "100%",
            }
          : {}
      }
    >
      <div className="modal-dialog window-popup create-event" role="document">
        <div className="modal-content">
          <span
            className="close icon-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              handleResetData();
            }}
          >
            <svg className="olymp-close-icon">
              <use xlinkHref="#olymp-close-icon" />
            </svg>
          </span>
          <div className="transaction-details">
            <form className="transaction-form" onSubmit={() => {}}>
              <h1 className="transaction-header">Thêm giao dịch</h1>
              <label className="input-label" htmlFor="title">
                Tên giao dịch
              </label>
              <input
                type="text"
                id="title"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tên giao dịch..."
              />
              <label className="input-label" htmlFor="amount">
                Số tiền
              </label>
              <input
                type="number"
                id="amount"
                className="input"
                value={amount}
                onChange={(e) => setAmount(e.target.valueAsNumber)}
                placeholder="Số tiền..."
              />
              <label className="input-label" htmlFor="amount">
                Thời gian
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Giờ..."
              />
              <label className="input-label" htmlFor="select">
                Loại
              </label>
              <select
                id="select"
                className="input"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {transactionTypeOptions.map((eachOption) => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <textarea
                value={desc}
                className="input"
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Ghi chu"
              />
              <button
                type="button"
                onClick={() => handleAddSpending()}
                className="button"
              >
                Thêm
              </button>
            </form>
            <div className="history-transactions">
              <h1 className="transaction-header">Lịch sử</h1>
              <div className="transactions-table-container">
                <ul className="transactions-table">
                  <li className="table-header">
                    <p className="table-header-cell">Tên giao dịch</p>
                    <p className="table-header-cell">Số tiền</p>
                    <p className="table-header-cell">Loại</p>
                    <p className="table-header-cell">Chi tiết</p>
                  </li>
                  {spendingList &&
                    spendingList.length > 0 &&
                    spendingList
                      .filter((val) => val.date === datePicker)
                      .map((val) => <TransactionItem spendingValue={val} />)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
