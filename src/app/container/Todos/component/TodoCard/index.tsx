import { db } from "app/services/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Todo } from "types/Todo";

export default function TodoCard(props: {
  typeTodo: boolean;
  dataTodos: Todo;
}) {
  const { typeTodo, dataTodos } = props;
  const idDoc: any = dataTodos.idDoc;
  const dataDocTodo = doc(db, "Todos", idDoc);

  const completeTodo = async () => {
    updateDoc(dataDocTodo, {
      status: "COMPLETED",
    })
      .then(() => {
        console.log("Complete Todo");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteTodo = async () => {
    deleteDoc(dataDocTodo)
      .then(() => {
        console.log("Complete Todo");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card" style={{ width: "18rem", margin: "7px" }}>
      <div className="card-body">
        <h5 className="card-title">{dataTodos?.title}</h5>
        <p className="card-text">{dataTodos?.content}</p>
        {typeTodo ? (
          <div>
            <button className="btn btn-primary" onClick={() => completeTodo()}>
              Hoàn thành
            </button>
            <button
              className="btn btn-primary"
              onClick={() => deleteTodo()}
              style={{ marginLeft: "35%" }}
            >
              Xóa
            </button>
          </div>
        ) : (
          <button className="btn btn-secondary" disabled>
            Đã hoàn thành
          </button>
        )}
      </div>
    </div>
  );
}
