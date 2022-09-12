import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

 const Register=()=> {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [alluser, setalluser] = useState([]);
  let history = useHistory();

  const RegForm = (e) => {
    e.preventDefault();
    const users = { email: email, password: password };

    setalluser([...alluser, users]);
    console.log(alluser);
    axios.post(`https://reqres.in/api/register`, users).then((res) => {
      console.log(res);
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      history.push("/login");
      alert("register Successfully.....");
      
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
                            <h2  className="m-3">Register</h2>
                            <form  onSubmit={RegForm}>
                            <div className="mb-2  form-group">
                                <input
                                    type="text"
                                    className="form-style"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div className="mb-2 form-group">
                                <input
                                    type="text"
                                    className="form-style"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                              <div className="form-group mb-2">
                                <input
                                  type="email"
                                  name="email"
                                  value={email}
                                  onChange={(e) => setemail(e.target.value)}
                                  className="form-style"
                                 
                                  placeholder=" Email"
                                  required
                                />
                              </div>
                              <div className="form-group mb-2">
                                <input
                                  type="password"
                                  name="password"
                                  className="form-style"
                                  value={password}
                                  onChange={(e) => setpassword(e.target.value)}
                                  autoComplete="off"
                                  placeholder=" Password"
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="submit mt-3 m-2"
                               
                              >
                                Submit
                              </button>
                              <p className="Already registered text-right">
                                 Already registered <a href="/login">sign in?</a>
                             </p>
                            </form>
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
      </div>
    
      </>
    )};
  export default Register;