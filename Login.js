import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const Login = () => {
  const auth = localStorage.getItem("token");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [alluser, setalluser] = useState([]);
  let history = useHistory();

  const loginForm = (e) => {

    e.preventDefault();
    const users = { email: email, password: password };

    setalluser([...alluser, users]);
    console.log(alluser);
    axios.post(`https://reqres.in/api/login`, users).then((res) => {
      console.log(res);
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      history.push("/home");
      alert("Login Successfully.....");
    
    });
  };

  return (
    <>
      
      <div className="bcolor">
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-4 pt-5 pt-sm-2 text-center">
                  <div className="card-3d-wrap shadow mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h2  className="m-3">Login</h2>
                            <form onSubmit={loginForm}>
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-style"
                                  value={email}
                                  onChange={(e) => setemail(e.target.value)}
                                  placeholder="Your Email"
                                  required
                                />
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  name="password"
                                  className="form-style"
                                  value={password}
                                  onChange={(e) => setpassword(e.target.value)}
                                  autoComplete="off"
                                  placeholder="Your Password"
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="submit mt-3 m-1"
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                          <p className="Already registered text-right">
                          Don't have an account? <a href="/register">create here</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;