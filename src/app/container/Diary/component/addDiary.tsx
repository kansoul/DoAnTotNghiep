import { auth, db } from "app/services/firebase";
import Draft, { convertToRaw } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import draftToHtml from "draftjs-to-html";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";

export default function AddDiary(props: {
  openAddDiary: boolean;
  setOpenAddDiary: (value: boolean) => void;
  datePicker: any;
  reloadData: any;
}) {
  const dataCollection = collection(db, "Diary");
  const { openAddDiary, setOpenAddDiary, datePicker, reloadData } = props;
  const [isPublic, setPublic] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("");
  const [user] = useAuthState(auth);
  const [defaultContent, setDefaultContent] = useState<any>("<p></p>");
  const defaultValue: any = stateFromHTML(defaultContent);
  const EditorState = Draft.EditorState;
  const initialState = () => EditorState.createEmpty();

  const [editorState, setEditorState] = useState<any | null>(initialState);
  useEffect(() => {
    setEditorState(EditorState.createWithContent(defaultValue));
  }, []);
  const handleAddDiary = async () => {
    const data = {
      content: editorState
        ? draftToHtml(convertToRaw(editorState?.getCurrentContent()))
        : "",
      id: uuidv4(),
      uid: user?.uid,
      title: title,
      like: [],
      comment: [],
      date: datePicker,
      isPublic: isPublic,
    };
    addDoc(dataCollection, data)
      .then(() => {
        console.log("Successfully updated doc");
        reloadData();
        setOpenAddDiary(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleResetData = () => {
    reloadData();
    setOpenAddDiary(false);
  };
  return (
    <>
      <div
        className={`modal fade default-diary ${openAddDiary ? "show" : ""}`}
        id="create-event"
        tabIndex={-1}
        role="dialog"
        style={
          openAddDiary
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
            <div className="modal-header">
              <h6 className="title">Viết nhật ký</h6>
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
              <div className="form-group label-floating is-select">
                <label className="control-label">Công khai</label>
                <select
                  className="form-select"
                  name="isPublicAddDiary"
                  onChange={(e) => {
                    if (e.target.value === "true") {
                      setPublic(true);
                    }
                    if (e.target.value === "false") {
                      setPublic(false);
                    }
                  }}
                >
                  <option value="true">Công khai</option>
                  <option value="false">Không công khai</option>
                </select>
              </div>
              <div
                style={{
                  height: "400px",
                  paddingBottom: "20px",
                }}
              >
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  wrapperStyle={{ height: "90%" }}
                  editorStyle={{
                    height: "90%",
                    border: "2px solid #f2f4f5",
                    paddingInline: "10px",
                    paddingBottom: "10px",
                    background: "#f7f9fa",
                  }}
                  onEditorStateChange={(e: any) => setEditorState(e)}
                />
              </div>
              <button
                type="button"
                onClick={() => handleAddDiary()}
                className="btn btn-breez btn-lg full-width"
                style={{ paddingTop: "10px" }}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
