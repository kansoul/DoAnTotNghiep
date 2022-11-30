import { db } from "app/services/firebase";
import Draft, { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const stateFromHTML = require("draft-js-import-html").stateFromHTML;

export default function ViewDiary(props: {
  openViewDiary: boolean;
  setOpenViewDiary: (value: boolean) => void;
  dataDiary: any;
  reloadData: any;
}) {
  const { openViewDiary, setOpenViewDiary, dataDiary, reloadData } = props;
  const [isPublic, setPublic] = useState<boolean>(dataDiary.isPublic);
  const [title, setTitle] = useState<string>(dataDiary.title);
  const [defaultContent, setDefaultContent] = useState<any>(dataDiary.content);
  const defaultValue: any = stateFromHTML(defaultContent);
  const EditorState = Draft.EditorState;
  const initialState = () => EditorState.createEmpty();

  const [editorState, setEditorState] = useState<any | null>(initialState);
  useEffect(() => {
    setEditorState(EditorState.createWithContent(defaultValue));
  }, []);

  const handleUpdateDiary = () => {
    const dataCollection = doc(db, "Diary", dataDiary?.idDoc);
    const data: any = {
      id: dataDiary?.id,
      uid: dataDiary?.uid,
      title: dataDiary?.title,
      content:
        (editorState &&
          draftToHtml(convertToRaw(editorState?.getCurrentContent()))) ||
        "",
      like: dataDiary?.like,
      date: dataDiary?.date,
      isPublic,
    };
    updateDoc(dataCollection, data)
      .then(() => {
        setOpenViewDiary(false);
        console.log("success");
        reloadData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className={`modal fade default-diary ${openViewDiary ? "show" : ""}`}
        id="create-event"
        tabIndex={-1}
        role="dialog"
        style={
          openViewDiary
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
                setOpenViewDiary(false);
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
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group label-floating is-select">
                <label className="control-label">Công khai</label>
                <select
                  className="form-select"
                  value={isPublic ? "true" : "false"}
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
                  editorState={editorState}
                  onEditorStateChange={(e: any) => setEditorState(e)}
                />
              </div>
              <button
                type="button"
                onClick={() => handleUpdateDiary()}
                className="btn btn-breez btn-lg full-width"
                style={{ paddingTop: "10px" }}
              >
                Chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
