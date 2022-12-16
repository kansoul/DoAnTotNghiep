import { Spending } from "types/Spending";
import "./index.css";

const TransactionItem = (props: { spendingValue: Spending }) => {
  const { spendingValue } = props;
  return (
    <li className="table-row">
      <p className="transaction-text">{spendingValue?.title}</p>
      <p className="transaction-text">{spendingValue?.amount}</p>
      <p className="transaction-text">{spendingValue?.type}</p>
      <p className="transaction-text">{spendingValue?.desc}</p>
      <div className="delete-container">
        <button className="delete-button" type="button" id="delete">
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
