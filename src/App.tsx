import LoginPage from "app/components/LoginPage";
import Register from "app/components/Register";
import DefaultLayout from "app/layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<DefaultLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
