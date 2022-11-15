import LoginPage from "app/components/LoginPage";
import Register from "app/components/Register";
import AccountProfile from "app/container/AccountProfile";
import Chart from "app/container/Chart";
import FriendsBirthday from "app/container/FriendsBirthday";
import MusicPlay from "app/container/MusicPlay";
import NewsFeed from "app/container/NewsFeed";
import ProfilePage from "app/container/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/newsfeed" element={<NewsFeed />}></Route>
          <Route path="/musicplay" element={<MusicPlay />}></Route>
          <Route path="/friendbirthday" element={<FriendsBirthday />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
          <Route path="/accountprofile" element={<AccountProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
