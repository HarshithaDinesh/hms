import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  async function loginn() {
    await axios
      .post("/userApi/login", { email, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div>
        <div>
          <input
            placeholder="enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="enter password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={loginn}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;
