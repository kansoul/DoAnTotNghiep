import Header from "app/components/Header";
import NavBarLeft from "app/components/NavBarLeft";
import NavBarRight from "app/components/NavbarRight";
import Preloader from "app/components/Preloader";
import { useState } from "react";
import ChatBox from "./Chatbot";

export default function DefaultLayout() {
  const [showChatBox, setShowChatBox] = useState<boolean>(false);
  return (
    <>
      <Preloader />
      <NavBarLeft />
      <NavBarRight />
      <Header />
      <ChatBox showChatBox={showChatBox} setShowChatBox={setShowChatBox} />
      <span className="back-to-top" onClick={() => setShowChatBox(true)}>
        <svg className="back-icon" width={14} height={18}>
          <use xlinkHref="#olymp-back-to-top" />
        </svg>
      </span>
    </>
  );
}
