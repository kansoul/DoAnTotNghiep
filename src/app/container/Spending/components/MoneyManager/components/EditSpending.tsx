import { db } from "app/services/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
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

export default function EditSpending(props: {
  openEditSpending: boolean;
  setOpenEditSpending: (value: boolean) => void;
  viewEvent: any;
  reloadData: any;
}) {
  const { openEditSpending, setOpenEditSpending, viewEvent, reloadData } =
    props;

  const [title, setTitle] = useState<string>(viewEvent?.title);
  const [amount, setAmount] = useState<number>(viewEvent?.amount);
  const [type, setType] = useState<"INCOME" | "EXPENSES" | string>(
    viewEvent?.type
  );
  const [desc, setDesc] = useState<string>(viewEvent?.desc);
  const [time, setTime] = useState<string>(viewEvent?.time);

  const handleEditSpending = async () => {
    const data: any = {
      id: viewEvent?.id,
      uid: viewEvent?.uid,
      title,
      amount,
      type,
      backgroundColor: type === "INCOME" ? "#cffafe" : "#ede9fe",
      desc,
      date: viewEvent?.date,
      time,
    };
    const dataDocSpending = doc(db, "Spending", viewEvent?.idDoc);

    updateDoc(dataDocSpending, data)
      .then(() => {
        console.log("Successfully updated doc");
        reloadData();
        setOpenEditSpending(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetData = () => {
    reloadData();
    setOpenEditSpending(false);
  };

  return (
    <div
      className={`modal fade default-diary ${openEditSpending ? "show" : ""}`}
      id="create-event"
      tabIndex={-1}
      role="dialog"
      style={
        openEditSpending
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
          <div className="transaction-details-edit">
            <form className="transaction-form-edit" onSubmit={() => {}}>
              <h1 className="transaction-header">Chi tiết giao dịch</h1>
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
                onClick={() => handleEditSpending()}
                className="button"
              >
                Sửa
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
