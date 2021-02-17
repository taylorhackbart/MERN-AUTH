import React from "react";

function NoMatch() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        {" "}
        404 PAGE NOT FOUND{" "}
      </h1>
      <h3 style={{ textAlign: "center", marginBottom: "50px" }}> You may not be logged in! Login here: 
        <a href="/login"> LOGIN </a>
      </h3>
    </>
  );
}
export default NoMatch;
