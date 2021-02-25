import React, { useContext, useEffect, useState} from "react";
import UserContext from "../../contexts/UserContext";
import API from "../../utils/API";
import NoMatch from "../../pages/NoMatch";

export default function Portal() {
  const { userData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState()

  useEffect(async () => {
    userData;
    try {
      const id = userData.user.id;
      await API.getUserById(id).then((res) => {
        setUser(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }, [userData]);



  return (
    <>
      <UserContext.Provider value={{ userData }}>
        <div className="home-screen">
          {loading === false && (
            <div className="page">
              {userData.user ?  (
                <div className="container-fluid">
                  Welcome {userData.user.displayName} !
                </div>
              ) : (
                <div>
                  <NoMatch />
                </div>
              )}
            </div>
          )}
        </div>
      </UserContext.Provider>
    </>
  );
}
