import React, { useState, useEffect } from "react";
import NavBar from "./components/Nav";
import UserContext from "./contexts/UserContext";
import API from "./utils/API";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";

//PUBLIC ROUTES
import HomePage from "./pages/Home/Home.js";
import NoMatch from "./pages/NoMatch";

//AUTH IMPORTS
import Portal from "./components/Portal/Portal.js";
import { Login, Register } from "./components/auth";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
        console.log("no token has been found");
      }
      const tokenRes = await API.postToken(null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        const userRes = await API.getUsers({
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <div className="page-container">
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <NavBar />
          <div className="app-background">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/portal" component={Portal} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
