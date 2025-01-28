import Nav from "./Nav";
import Logo from "../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <img
        src={Logo}
        alt="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <Nav />
    </header>
  );
};

export default Header;
