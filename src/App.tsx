import AccountProfile from "app/container/AccountProfile";
import Chart from "app/container/Chart";
import Diary from "app/container/Diary";
import FriendsBirthday from "app/container/FriendsBirthday";
import LoginOrSignin from "app/container/LoginOrSignin";
import MusicPlay from "app/container/MusicPlay";
import NewsFeed from "app/container/NewsFeed";
import ProfileOfFriend from "app/container/ProfileOfFriend";
import ProfilePage from "app/container/ProfilePage";
import SearchFriend from "app/container/SearchFriend";
import Todos from "app/container/Todos";
import { auth } from "app/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      {!loading &&
        (!user?.email ? (
          <BrowserRouter>
            <LoginOrSignin />
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Navigate replace to="/newsfeed" />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/newsfeed" element={<NewsFeed />} />
              <Route path="/musicplay" element={<MusicPlay />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/friendbirthday" element={<FriendsBirthday />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/accountprofile" element={<AccountProfile />} />
              <Route path="/searchfriend" element={<SearchFriend />} />
              <Route path="/profileoffriend" element={<ProfileOfFriend />} />
              <Route path="/diary" element={<Diary />} />
            </Routes>
          </BrowserRouter>
        ))}
    </div>
  );
}

export default App;
