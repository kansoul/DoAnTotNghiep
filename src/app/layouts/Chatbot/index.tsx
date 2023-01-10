import { auth, db } from "app/services/firebase";
import axios from "axios";
import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Configuration, OpenAIApi } from "openai";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ChatBot } from "types/ChatBot";
import { dateTimeFormat } from "utils/datetime";
import ChatBotCard from "./ChatbotCard";
import "./index.css";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function ChatBox(props: {
  showChatBox: boolean;
  setShowChatBox: (value: boolean) => void;
}) {
  const [user] = useAuthState(auth);
  const { showChatBox, setShowChatBox } = props;
  const [isLoading, setLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);

  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<ChatBot | null>(null);
  const dataCollectionChatBot = collection(db, "ChatBot");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [showChatBox, conversation, isLoading]);

  useEffect(() => {
    let data: any = {};
    const q = query(dataCollectionChatBot, where("uid", "==", user?.uid));
    const test = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          data = { idDoc: change.doc.id, ...change.doc.data() };
        }
        if (change.type === "modified") {
          data = { idDoc: change.doc.id, ...change.doc.data() };
        }
        setConversation(data);
      });
    });
    return test;
    // eslint-disable-next-line
  }, []);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const openSearchYouTube = async (char: string) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC3u84MGjZsUCQIpbO9wyvNfS3xsrqVbCQ&q=${char}&type=video&maxResults=1`
      );
      return window.open(
        `https://www.youtube.com/watch?v=${response.data.items[0].id.videoId}`,
        "_blank",
        "noopener,noreferrer"
      );
    } catch (error) {
      return console.error(error);
    }
  };
  useEffect(() => {
    if (
      listening &&
      (transcript.toLowerCase() === "send" ||
        transcript.toLowerCase() === "gửi") &&
      message
    ) {
      buttonRef.current.click();
      return setMessage("");
    }
    if (
      !listening &&
      (transcript.toLowerCase().includes("mở bài hát") ||
        transcript.toLowerCase().includes("tìm bài hát"))
    ) {
      openSearchYouTube(
        transcript.substring(transcript.indexOf("bài hát") - 1)
      );
    }
    if (
      listening &&
      (transcript.toLowerCase() === "clear" ||
        transcript.toLowerCase() === "xóa") &&
      message
    ) {
      return setMessage("");
    }
    if (transcript && !listening) {
      if (
        transcript.toLowerCase() !== "send" &&
        transcript.toLowerCase() !== "gửi" &&
        transcript.toLowerCase() !== "xóa"
      ) {
        setMessage(transcript);
      }
    }
  }, [transcript, listening]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message && conversation) {
      const dataDocChatBot = doc(db, "ChatBot", conversation.idDoc);
      updateDoc(dataDocChatBot, {
        message: arrayUnion({
          botMessage: false,
          userMessage: true,
          text: message,
          sendAt: dateTimeFormat(new Date()),
        }),
      })
        .then(() => {
          setLoading(true);
          setMessage("");
          openai
            .createCompletion({
              model: "text-davinci-003",
              prompt: message,
              max_tokens: 3000,
              temperature: 0.7,
              top_p: 1,
              frequency_penalty: 0.49,
              presence_penalty: 0,
            })
            .then((response) => {
              updateDoc(dataDocChatBot, {
                message: arrayUnion({
                  botMessage: true,
                  userMessage: false,
                  text: response?.data.choices[0]?.text,
                  sendAt: dateTimeFormat(new Date()),
                }),
              })
                .then(() => {
                  setLoading(false);
                })
                .catch((error) => {
                  console.log(error);
                });
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleListening = () => {
    if (transcript) resetTranscript();
    SpeechRecognition.startListening();
  };
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return showChatBox ? (
    <div>
      <div className="chatbox">
        <div className="top-bar">
          <div className="avatarChat">
            <p>D</p>
          </div>
          <div className="name">Diary Bot</div>
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowChatBox(false)}
              width={24}
              height={24}
              style={{ marginRight: "10px" }}
              version="1.1"
              viewBox="0 0 512 512"
            >
              <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
            </svg>
          </div>
        </div>
        <div className="middle scroll-custom">
          <div className="col-display">
            <ul>
              {conversation &&
                conversation.message.length > 0 &&
                conversation.message.map((entry) => (
                  <ChatBotCard data={entry} />
                ))}
            </ul>
            {isLoading && (
              <div className="typing incoming">
                <div className="bubble lower">
                  <div className="ellipsis one" />
                  <div className="ellipsis two" />
                  <div className="ellipsis three" />
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", overflow: "hidden" }}
        >
          <textarea
            className="form-control scroll-custom"
            placeholder="Type a message..."
            value={message}
            onChange={handleChange}
            style={{
              minHeight: "unset",
              fontSize: "18px",
              border: "unset",
              height: "60px",
            }}
          />
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="28px"
            height="28px"
            onClick={handleListening}
            viewBox="0,0,256,256"
            style={{ margin: "auto", cursor: "pointer" }}
          >
            <g fill={listening ? "#FF0000" : "#0abbf1"}>
              <g transform="scale(10.66667,10.66667)">
                <path d="M12,0c-2.19922,0 -4,1.80078 -4,4v7c0,2.19922 1.80078,4 4,4c2.19922,0 4,-1.80078 4,-4v-7c0,-2.19922 -1.80078,-4 -4,-4zM3,11c0,4.60547 3.52344,8.42969 8,8.9375v4.0625h2v-4.0625c4.47656,-0.50781 8,-4.33203 8,-8.9375h-2c0,3.85547 -3.14453,7 -7,7c-3.85547,0 -7,-3.14453 -7,-7z"></path>
              </g>
            </g>
          </svg>
          <button
            type="submit"
            style={{ position: "static", background: "white", outline: "none" }}
            ref={buttonRef}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              style={{ width: "30px", height: "30px", marginLeft: "10px" }}
            >
              <g fill="#71a4ec">
                <g transform="scale(8.53333,8.53333)">
                  <path d="M26,3c-0.09597,0.00066 -0.19135,0.01513 -0.2832,0.04297c-0.02704,0.00734 -0.05375,0.01581 -0.08008,0.02539l-21.98633,6.99219v0.00391c-0.39063,0.14577 -0.64983,0.5186 -0.65039,0.93555c0.00074,0.34922 0.18361,0.67277 0.48242,0.85352l6.68164,5.30078l13.20899,-10.52734l-10.52734,13.20898l5.29688,6.67773c0.18051,0.3015 0.50602,0.48613 0.85742,0.48633c0.41694,-0.00056 0.78978,-0.25976 0.93555,-0.65039h0.00391l6.99805,-22.00586c0.00715,-0.01997 0.01366,-0.04016 0.01953,-0.06055c0.02784,-0.09185 0.04231,-0.18723 0.04297,-0.2832c0,-0.55228 -0.44772,-1 -1,-1z"></path>
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </div>
  ) : null;
}
