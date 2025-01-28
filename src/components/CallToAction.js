import heroImg from "../assets/images/restauranfood.jpg";
import { Link, useNavigate } from "react-router-dom";

import { useReducer, useState } from "react";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleReserveTableClick = () => {};
  return (
    <>
      <div className="container-calltoaction">
        <div id="home-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          {/* <Link to="/booking"> */}
          <button onClick={() => navigate("/booking")}>Reserve a Table</button>
          {/* </Link> */}
        </div>
        <img src={heroImg} alt="hero image" className="hero-img" />
      </div>
    </>
  );
};

export default CallToAction;
