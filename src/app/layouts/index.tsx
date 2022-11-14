import Header from "app/components/Header";
import NavBarLeft from "app/components/NavBarLeft";
import NavBarRight from "app/components/NavbarRight";
import Preloader from "app/components/Preloader";
import Chart from "app/container/Chart";
import FriendsBirthday from "app/container/FriendsBirthday";
import MusicPlay from "app/container/MusicPlay";
import NewsFeed from "app/container/NewsFeed";
import ProfilePage from "app/container/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Preloader />
      <NavBarLeft />
      <NavBarRight />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/newsfeed" element={<NewsFeed />}></Route>
          <Route path="/musicplay" element={<MusicPlay />}></Route>
          <Route path="/friendbirthday" element={<FriendsBirthday />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
        </Routes>
      </BrowserRouter>
      <a className="back-to-top" href="/#">
        <svg className="back-icon" width={14} height={18}>
          <use xlinkHref="#olymp-back-to-top" />
        </svg>
      </a>
    </>
  );
}
