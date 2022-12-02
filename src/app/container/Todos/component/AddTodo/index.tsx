import { auth, db } from "app/services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Todo } from "types/Todo";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo(props: {
  openAddTodo: boolean;
  setOpenAddTodo: (value: boolean) => void;
}) {
  const { openAddTodo, setOpenAddTodo } = props;
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleAddTodo = async () => {
    const data: Todo = {
      id: uuidv4(),
      uid: user?.uid,
      title,
      content,
      status: "WAITING",
      createdAt: new Date(),
    };
    try {
      await addDoc(collection(db, "Todos"), data);
      setOpenAddTodo(false);
    } catch (err: any) {
      console.error(err);
      alert("Co loi xay ra");
    }
  };
  return (
    <div
      className={`modal fade default-diary ${openAddTodo ? "show" : ""}`}
      id="create-event"
      tabIndex={-1}
      role="dialog"
      style={
        openAddTodo
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
              setOpenAddTodo(false);
            }}
          >
            <svg className="olymp-close-icon">
              <use xlinkHref="#olymp-close-icon" />
            </svg>
          </span>
          <div className="modal-header">
            <h6 className="title">Thêm việc cần làm</h6>
          </div>
          <div className="modal-body">
            <div className="form-group label-floating">
              <label className="control-label">Tiêu đề</label>
              <input
                className="form-control"
                name="titleAddDiary"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <textarea
              style={{
                width: "100%",
                resize: "none",
                border: "1px solid #e6ecf5",
                marginBottom: "10px",
              }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                handleAddTodo();
              }}
              className="btn btn-breez btn-lg full-width"
              style={{ paddingTop: "10px" }}
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
