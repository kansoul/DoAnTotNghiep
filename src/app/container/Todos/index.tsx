import DefaultLayout from "app/layouts";
import { auth, db } from "app/services/firebase";
import { query, where, onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Todo } from "types/Todo";
import AddTodo from "./component/AddTodo";
import TodoCard from "./component/TodoCard";

export default function Todos() {
  const [openAddTodo, setOpenAddTodo] = useState<boolean>(false);
  const [todosList, setTodosList] = useState<Todo[]>();
  const [todosListWaiting, setTodosListWaiting] = useState<Todo[]>();
  const [todosListCompleted, setTodosListCompleted] = useState<Todo[]>();
  const [user] = useAuthState(auth);
  const dataCollectionTodos = collection(db, "Todos");

  useEffect(() => {
    let data: any = [];
    const q = query(dataCollectionTodos, where("uid", "==", user?.uid));
    const todoList = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          data = data.filter((val) => val.idDoc);
          data.push({ idDoc: change.doc.id, ...change.doc.data() });
        }
        if (change.type === "modified") {
          data = data.filter((val) => val.idDoc !== change.doc.id);
          data.push({ idDoc: change.doc.id, ...change.doc.data() });
        }
        if (change.type === "removed") {
          data = data.filter((val) => val.idDoc !== change.doc.id);
        }
        setTodosList(data);
      });
    });
    return todoList;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (todosList) {
      setTodosListWaiting(todosList.filter((val) => val.status === "WAITING"));
      setTodosListCompleted(
        todosList.filter((val) => val.status === "COMPLETED")
      );
    }
  }, [todosList]);

  return (
    <>
      <DefaultLayout />
      <div
        style={{
          marginBottom: "10px",
          textAlign: "right",
          margin: "10px",
        }}
      >
        <button
          className="btn btn-danger"
          style={{
            color: "white",
          }}
          onClick={() => {
            setOpenAddTodo(true);
          }}
        >
          Thêm việc cần làm
        </button>
      </div>
      <div
        style={{ background: "#fff", padding: "20px", marginBottom: "10px" }}
      >
        <p
          style={{
            color: "black",
            fontSize: "19px",
            fontWeight: "bold",
          }}
        >
          Việc cần làm
        </p>
        <div className="todo">
          {todosListWaiting &&
            todosListWaiting.length > 0 &&
            todosListWaiting.map((todoListWaiting: Todo) => (
              <TodoCard typeTodo dataTodos={todoListWaiting} />
            ))}
        </div>
      </div>
      <div style={{ background: "#fff", padding: "20px" }}>
        <p
          style={{
            color: "black",
            fontSize: "19px",
            fontWeight: "bold",
          }}
        >
          Việc đã hoàn thành
        </p>
        <div className="todo">
          {todosListCompleted &&
            todosListCompleted.length > 0 &&
            todosListCompleted.map((todoListCompleted: Todo) => (
              <TodoCard typeTodo={false} dataTodos={todoListCompleted} />
            ))}
        </div>
      </div>
      {openAddTodo && <AddTodo openAddTodo setOpenAddTodo={setOpenAddTodo} />}
    </>
  );
}
