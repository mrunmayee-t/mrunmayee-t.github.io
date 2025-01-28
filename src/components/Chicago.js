import img1 from "../assets/images/Mario and Adrian A.jpg";
import img2 from "../assets/images/Mario and Adrian b.jpg";

const Chicago = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "30rem",
          padding: "1%",
        }}
      >
        <div className="about-container-div" id="about-section">
          <h1 style={{ color: "black" }}>Little Lemon</h1>
          <h2 style={{ color: "black" }}>Chicago</h2>
          <p style={{ color: "black" }}>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day. Little Lemon is owned by two Italian brothers, Mario and
            Adrian, who moved to the United States to pursue their shared dream
            of owning a restaurant. To craft the menu, Mario relies on family
            recipes and his experience as a chef in Italy. Adrian does all the
            marketing for the restaurant and led the effort to expand the menu
            beyond classic Italian to incorporate additional cuisines from the
            Mediterranean region.
          </p>
        </div>
        <img className="about-img" src={img1} alt="img1" />
        <img
          className="about-img"
          style={{ zIndex: "9", top: "30%", left: "70%" }}
          src={img2}
          alt="img2"
        />
      </div>
    </>
  );
};

export default Chicago;
