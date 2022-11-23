import AccountProfile from "app/container/AccountProfile";
import Chart from "app/container/Chart";
import FriendsBirthday from "app/container/FriendsBirthday";
import LoginOrSignin from "app/container/LoginOrSignin";
import MusicPlay from "app/container/MusicPlay";
import NewsFeed from "app/container/NewsFeed";
import ProfileOfFriend from "app/container/ProfileOfFriend";
import ProfilePage from "app/container/ProfilePage";
import SearchFriend from "app/container/SearchFriend";
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
              <Route path="*" element={<Navigate replace to="/profile" />} />
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/newsfeed" element={<NewsFeed />}></Route>
              <Route path="/musicplay" element={<MusicPlay />}></Route>
              <Route
                path="/friendbirthday"
                element={<FriendsBirthday />}
              ></Route>
              <Route path="/chart" element={<Chart />}></Route>
              <Route
                path="/accountprofile"
                element={<AccountProfile />}
              ></Route>
              <Route path="/searchfriend" element={<SearchFriend />}></Route>
              <Route
                path="/profileoffriend"
                element={<ProfileOfFriend />}
              ></Route>
            </Routes>
          </BrowserRouter>
        ))}
    </div>
  );
}

export default App;
