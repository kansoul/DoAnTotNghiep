import Register from "app/components/Register";
import LoginPage from "app/components/LoginPage";
import { useState } from "react";

export default function LoginOrSignin() {
  const [stateLogin, setStateLogin] = useState<boolean>(true);
  return stateLogin ? (
    <LoginPage setStateLogin={setStateLogin} />
  ) : (
    <Register />
  );
}
