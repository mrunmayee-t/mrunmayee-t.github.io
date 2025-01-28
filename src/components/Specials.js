import greekSalad from "../assets/images/greek salad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import lemonDessert from "../assets/images/lemon dessert.jpg";
import delivery from "../assets/images/delivery.svg";
import { useNavigate } from "react-router-dom";

const dataSource = [
  {
    title: "Greek Salad",
    src: greekSalad,
    price: "$12.00",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    title: "Bruchetta",
    src: bruchetta,
    price: "$5.99",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
  },
  {
    title: "Lemon Dessert",
    src: lemonDessert,
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Specials = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-div-specials">
        <h1 style={{ color: "black" }}>This weeks specials!</h1>
        <button onClick={() => navigate("/maintenance")}>Online Menu</button>
      </div>

      <div className="card-div">
        {dataSource.map((element, index) => (
          <div key={index} className="card-inner-div">
            <div className="wrapper">
              <img className="card-img" src={element.src} alt={element.title} />
            </div>
            <div className="inner-div">
              <p className="card-title">{element.title}</p>
              <p className="card-price">{element.price}</p>
            </div>
            <div style={{ width: "15rem", height: "15vh" }}>
              <p className="card-desc">{element.description}</p>
            </div>
            <p className="order-delivery">
              Order a delivery
              <img className="delivery-img" src={delivery}></img>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Specials;
