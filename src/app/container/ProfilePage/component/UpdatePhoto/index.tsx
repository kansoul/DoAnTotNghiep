import { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "app/services/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function UpdatePhoto(props: {
  openPopup: boolean;
  docId: string;
  typeOfPhoto: string;
  reloadData: any;
}) {
  const { openPopup, docId, typeOfPhoto, reloadData } = props;
  const [file, setFile] = useState<any>();

  const [preview, setPreview] = useState<any>();
  const refInput = useRef<any>();
  const refClose = useRef<any>();

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  function handleChange(event) {
    if (!event.target.files || event.target.files.length === 0) {
      setFile(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setFile(event.target.files[0]);
  }
  function handleUploadImgUrl() {
    if (!file) {
      alert("Please choose a file first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const dataCollection = doc(db, "Users", docId);
          updateDoc(
            dataCollection,
            typeOfPhoto === "imgUrl" ? { imgUrl: url } : { coverImg: url }
          )
            .then(() => {
              console.log("Successfully url success!");
              reloadData();
              setFile(null);
              setPreview(null);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
    );
    refClose.current.click();
  }
  return (
    <div
      className={`modal fade ${openPopup ? "show" : ""}`}
      id="update-header-photo"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="update-header-photo"
      aria-hidden="true"
    >
      <div
        className="modal-dialog window-popup update-header-photo"
        role="document"
      >
        <div className="modal-content">
          <a
            href="/#"
            className="close icon-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            ref={refClose}
          >
            <svg className="olymp-close-icon">
              <use xlinkHref="#olymp-close-icon" />
            </svg>
          </a>
          <div className="modal-header">
            <h6 className="title">
              Update {typeOfPhoto === "imgUrl" ? "Avatar" : "Cover"} Photo
            </h6>
          </div>
          <div className="modal-body center-item">
            <span className="upload-photo-item">
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                ref={refInput}
                style={{ display: "none" }}
              />

              {preview ? (
                <img
                  src="/svg-icons/ok.svg"
                  alt="Ok"
                  onClick={() => handleUploadImgUrl()}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <svg
                  className="olymp-computer-icon"
                  onClick={() => refInput.current.click()}
                  style={{ cursor: "pointer" }}
                >
                  <use xlinkHref="#olymp-computer-icon" />
                </svg>
              )}
              <h6>Upload Photo</h6>
              <span>Browse your computer.</span>
            </span>
          </div>
          {preview && (
            <img
              src={preview}
              alt=""
              width="100"
              height="100"
              className=" center-item"
            />
          )}
        </div>
      </div>
    </div>
  );
}
