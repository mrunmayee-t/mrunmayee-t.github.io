import confirm from "../assets/images/confirm.png";

const ConfirmBooking = () => {
  return (
    <>
      <div className="container-confirm-booking">
        <img className="confirm-booking-img" src={confirm} />
        <p className="confirm-booking-text">Booking is confirmed!</p>
      </div>
    </>
  );
};

export default ConfirmBooking;
