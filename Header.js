import React from 'react'
import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";

 const Header = () => {
  const history = useHistory()

  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/")
  }
  return (

    <>
      <header className={classes.header}>
      <h1>Shopy</h1>
      <a href="#contact">contact</a>
      <a href="#home">home</a>
      <a href="#About">About</a>
     <button onClick={Logout}>LogOut</button>
     </header> 

     <section className={classes.sec}>
     <h1>Welcome to the Shopy...</h1>
     </section>
</>
  );
};

export default Header;

