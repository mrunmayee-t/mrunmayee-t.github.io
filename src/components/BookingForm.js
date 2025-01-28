import React, { useState } from "react";
import restaurant from "../assets/images/restaurant.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
const BookingForm = (props) => {
  const [bookingDate, setDate] = useState("");
  const [bookingTime, setTime] = useState("");
  const [guestsNumber, setGuestes] = useState("");
  const [ocasion, setOcasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState(props.availableTimes);
  const [tableBooking, setTableBooking] = useState("");

  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString("en-CA"),
      time: availableTimes[0],
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      handleSubmitForm(values);
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be at most 10")
        .required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
  });

  const handleDateChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  const handleSubmitForm = (e) => {
    //e.preventDefault();
    props.submitForm(e);
  };

  return (
    <>
      <div className="container-booking-form">
        <form
          style={{
            display: "grid",
            width: "300px",
            gap: "20px",
            margin: "auto",
          }}
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            data-testid="date-id"
            value={bookingDate}
            onChange={(e) => handleDateChange(e.target.value)}
            {...formik.getFieldProps("date")}
          />
          <span className="error-text">
            {formik.touched.date && formik.errors.date}
          </span>
          <label htmlFor="res-time">Choose time</label>
          <select
            {...formik.getFieldProps("time")}
            id="res-time"
            data-testid="time"
            value={bookingTime}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((element, index) => (
              <option key={index}>{element}</option>
            ))}
          </select>
          <span className="error-text">
            {formik.touched.time && formik.errors.time}
          </span>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            data-testid="guests"
            value={guestsNumber}
            required={true}
            onChange={(e) => setGuestes(e.target.value)}
            {...formik.getFieldProps("guests")}
          />
          <span className="error-text">
            {formik.touched.guests && formik.errors.guests}
          </span>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            data-testid="ocasion"
            value={ocasion}
            onChange={(e) => setOcasion(e.target.value)}
            {...formik.getFieldProps("ocassion")}
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
          <span className="error-text">
            {formik.touched.ocasion && formik.errors.ocasion}
          </span>
          <button
            data-testid="submit"
            aria-label="On Click"
            type="submit"
            style={{ width: "100%" }}
          >
            Make Your reservation
          </button>
        </form>
        <img
          src={restaurant}
          style={{
            width: "50rem",
            height: "30rem",
            margin: "auto",
            marginTop: "2%",
          }}
        />
      </div>
    </>
  );
};

export default BookingForm;
