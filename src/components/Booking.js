import { useState } from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  // const [bookingDate, setDate] = useState("");
  // const [bookingTime, setTime] = useState("");
  // const [guestsNumber, setGuestes] = useState("");
  // const [ocasion, setOcasion] = useState("");
  // const [availableTimes, setAvailableTimes] = useState([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);
  // const [tableBooking, setTableBooking] = useState("");

  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
};

export default Booking;
