import { useNavigate } from "react-router-dom";

const menuItem = [
  {
    id: "home",
    path: "/",
    name: "Home",
  },
  {
    id: "about",
    path: "/#about",
    name: "About",
  },
  {
    id: "Menu",
    path: "/maintenance",
    name: "Menu",
  },
  {
    id: "reservations",
    path: "/booking",
    name: "Reservations",
  },
  {
    id: "login",
    path: "/maintenance",
    name: "Login",
  },
];

const Nav = () => {
  const navigate = useNavigate();
  const handleClick = (anchor, path) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(path);
    }
  };
  return (
    <nav>
      <ul className="nav-bar">
        {menuItem.map((items) => (
          <li key={items.id}>
            <a href={items.path} onClick={handleClick(items.id, items.path)}>
              {items.name}
            </a>
          </li>
        ))}
        <button className="nav-button">Order Online</button>
      </ul>
    </nav>
  );
};

export default Nav;
