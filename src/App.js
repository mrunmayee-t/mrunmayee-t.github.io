import "./App.css";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Header from "./components/Header";
import { useEffect, useReducer } from "react";
import ConfirmBooking from "./components/ConfirmBooking";
import Maintenance from "./components/Maintenance";

const App = () => {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const navigate = useNavigate();
  const submitAPI = function (formData) {
    return true;
  };

  const updateTimes = (state, date) => {
    return fetchAPI(new Date(date));
  };

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmBooking");
    }
  };

  // useEffect(() => {
  //   const fetchDataAPI = (date) => {
  //     const response = fetchAPI(date);
  //     console.log(response);
  //   };

  //   fetchDataAPI(new Date());
  // }, []);

  return (
    <>
      {/* <BrowserRouter> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/confirmBooking" element={<ConfirmBooking />}></Route>
        <Route path="/maintenance" element={<Maintenance />}></Route>
      </Routes>
      <Footer />
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
