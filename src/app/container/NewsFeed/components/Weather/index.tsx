import ReactWeather, { useOpenWeather } from "react-open-weather";
import { useGeolocated } from "react-geolocated";

export default function Weather() {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "099283687e52ee167216564f98f7b53e",
    lat: coords?.latitude || "16.054407",
    lon: coords?.longitude || "108.202164",
    lang: "vi",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    // <div className="widget w-weather">
    //   <a href="#" className="more">
    //     <svg className="olymp-three-dots-icon">
    //       <use xlinkHref="#olymp-three-dots-icon" />
    //     </svg>
    //   </a>
    //   <div className="wethear-now inline-items">
    //     <div className="temperature-sensor">64°</div>
    //     <div className="max-min-temperature">
    //       <span>58°</span>
    //       <span>76°</span>
    //     </div>
    //     <svg className="olymp-weather-partly-sunny-icon">
    //       <use xlinkHref="#olymp-weather-partly-sunny-icon" />
    //     </svg>
    //   </div>
    //   <div className="wethear-now-description">
    //     <div className="climate">Partly Sunny</div>
    //     <span>
    //       Real Feel: <span>67°</span>
    //     </span>
    //     <span>
    //       Chance of Rain: <span>49%</span>
    //     </span>
    //   </div>
    //   <ul className="weekly-forecast">
    //     <li>
    //       <div className="day">sun</div>
    //       <svg className="olymp-weather-sunny-icon">
    //         <use xlinkHref="#olymp-weather-sunny-icon" />
    //       </svg>
    //       <div className="temperature-sensor-day">60°</div>
    //     </li>
    //     <li>
    //       <div className="day">mon</div>
    //       <svg className="olymp-weather-partly-sunny-icon">
    //         <use xlinkHref="#olymp-weather-partly-sunny-icon" />
    //       </svg>
    //       <div className="temperature-sensor-day">58°</div>
    //     </li>
    //     <li>
    //       <div className="day">tue</div>
    //       <svg className="olymp-weather-cloudy-icon">
    //         <use xlinkHref="#olymp-weather-cloudy-icon" />
    //       </svg>
    //       <div className="temperature-sensor-day">67°</div>
    //     </li>
    //     <li>
    //       <div className="day">wed</div>
    //       <svg className="olymp-weather-rain-icon">
    //         <use xlinkHref="#olymp-weather-rain-icon" />
    //       </svg>
    //       <div className="temperature-sensor-day">70°</div>
    //     </li>
    //     <li>
    //       <div className="day">thu</div>
    //       <svg className="olymp-weather-storm-icon">
    //         <use xlinkHref="#olymp-weather-storm-icon" />
    //       </svg>
    //       <div className="temperature-sensor-day">58°</div>
    //     </li>
    //     <li>
    //       <div className="day">fri</div>
    //       <svg className="olymp-weather-snow-icon">
    //         <use xlinkHref="#olymp-weather-snow-icon" />
    //       </svg>
    //       <div className="temperature-sensor-day">68°</div>
    //     </li>
    //     <li>
    //       <div className="day">sat</div>
    //       <svg className="olymp-weather-wind-icon-header">
    //         <use xlinkHref="#olymp-weather-wind-icon-header" />
    //       </svg>
    //       <div className="temperature-sensor-day">65°</div>
    //     </li>
    //   </ul>
    //   <div className="date-and-place">
    //     <h5 className="date">
    //       {new Date().toLocaleDateString("en-GB", {
    //         day: "numeric",
    //         month: "long",
    //         year: "numeric",
    //       })}
    //     </h5>
    //     <div className="place"> Da Nang, Viet Nam </div>
    //   </div>
    // </div>
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="vi"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      showForecast
    />
  );
}
