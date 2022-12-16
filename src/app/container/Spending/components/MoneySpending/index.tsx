import { useEffect, useState } from "react";
import { Spending } from "types/Spending";
import "./index.css";

export default function MoneySpending(props: { spendingList: Spending[] }) {
  const { spendingList } = props;
  const [balance, setBalance] = useState<number | null>(null);
  const [income, setIncome] = useState<number | null>(null);
  const [expenses, setExpenses] = useState<number | null>(null);
  console.log(spendingList);
  useEffect(() => {
    if (spendingList) {
      const thuNhap = spendingList
        .filter((val) => val.type === "INCOME")
        .reduce((sum, obj) => {
          return sum + obj.amount;
        }, 0);
      const chiTieu = spendingList
        .filter((val) => val.type === "EXPENSES")
        .reduce((sum, obj) => {
          return sum + obj.amount;
        }, 0);
      setIncome(thuNhap);
      setExpenses(chiTieu);
    }
  }, [spendingList]);
  useEffect(() => {
    if (income && expenses) setBalance(income - expenses);
  }, [income, expenses]);
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Số dư của bạn</p>
          <p
            className="details-money"
            id="balanceAmount"
            style={balance && balance < 0 ? { color: "red" } : {}}
          >
            {balance?.toLocaleString()} VND
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Thu nhập của bạn</p>
          <p className="details-money" id="incomeAmount">
            {income?.toLocaleString()} VND
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p className="details-text">Chi tiêu của bạn</p>
          <p className="details-money" id="expensesAmount">
            {expenses?.toLocaleString()} VND
          </p>
        </div>
      </div>
    </div>
  );
}
