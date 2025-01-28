import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

const dataSource = [
  {
    name: "Steen Laurvig",
    message:
      "It’s a fine dining with awesome Mediterranean food! Their Pita bread and hummus is too good and so is the falafel platter. We went with family, so on occasions reservation is advisable.",
    rating: 2,
    img: user1,
  },
  {
    name: "Donatelo Antolino",
    message:
      "A very classy nice restaurant. A warm welcoming, followed by an excellent service, with a lot of attention to details on order to please you.",
    rating: 4,
    img: user2,
  },
  {
    name: "Alison Seow",
    message:
      "Nice ambiance, caring service, big surprize every time food came to the table - it just looked so awesome and tasted even better!",
    rating: 3,
    img: user3,
  },
];

const CustomersSay = () => {
  return (
    <>
      <div className="testimonials-main-container">
        <h1 style={{ color: "black", textAlign: "center" }}>Testimonials</h1>
        <div className="card-div">
          {dataSource.map((element, index) => (
            <div key={index} className="customersay-card-inner-div">
              <RatingReview
                rating={element.rating}
                setRating={element.rating}
              />

              <div className="inner-div">
                <img
                  className="customersay-card-img"
                  src={element.img}
                  alt={element.name}
                />
                <p className=".card-title customersay-card-name">
                  {element.name}
                </p>
              </div>
              <div style={{ width: "10rem", height: "22vh" }}>
                <p className="customersay-card-msg">{element.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomersSay;

const RatingReview = ({ rating, setRating }) => {
  return (
    <div style={{ padding: "1rem" }}>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className="start"
            style={{
              cursor: "pointer",
              color: rating >= star ? "gold" : "gray",
              fontSize: `35px`,
            }}
            onClick={() => {
              setRating(star);
            }}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
};
