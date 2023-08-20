import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogInContext } from "../LogInContextComponent";
import { ThemeContext } from "../ThemeContextComponent";

export const LogIn = () => {
  const { user, setUser } = useContext(LogInContext);
  const { classToBe4 } = useContext(ThemeContext);
  const navigate = useNavigate();
  const userName = useRef();
  const pass = useRef();
  const url = "https://dummyjson.com/auth/login";

  const promise = async (e) => {
    const username = userName.current.value;
    const password = pass.current.value;

    e.preventDefault();
    try {
      const data = await axios.post(url, {
        username: `${username}`,
        password: `${password}`,
      });
      setUser(data.data);
      navigate("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="log-div">
      <form className={classToBe4}>
        <label>Username</label>
        <input className="log-input" ref={userName} type="text" id="name" />

        <label>Password</label>
        <input className="log-input" ref={pass} type="password" id="pass" />
        <button className="btn white btn-l" onClick={(e) => promise(e)}>
          Log in
        </button>
      </form>
    </div>
  );
};
