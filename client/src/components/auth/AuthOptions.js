import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const home = () => history.push("/portal");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <nav className="auth-options">
      {/* if the user is logged in, it will show these buttons:  */}
      {userData.user ? (
        <div className="align-me">
          <div className="row-employee">
            <button className="employee-button" onClick={home}>
              {" "}
              PORTAL{" "}
            </button>
          </div>
          <div className="row-logout">
            <button className="logout-button" onClick={logout}>
              LOGOUT
            </button>
          </div>
        </div>
      ) : (
        <>
        {/* if the user is not logged in, it will show these:  */}
          <div className="align-me">
            <button className="login-button" onClick={login}>
              LOGIN
            </button>
            <button className="register-button" onClick={register}>
              REGISTER
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
