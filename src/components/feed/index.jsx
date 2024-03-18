import "./index.scss";
import img from "../../assets/dining.png";
import img1 from "../../assets/living.png";
import img2 from "../../assets/bedroom.png";

const Browse = () => {
  return (
    <>
      <section className="browse">
        <div className="container">
          <h2>Browse The Range</h2>
          <p style={{ opacity: "0.7" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="browse_w">
            <div className="brow_card">
              <img src={img} alt="" />
              <p>Dining</p>
            </div>
            <div className="brow_card">
              <img src={img1} alt="" />
              <p>Living</p>
            </div>
            <div className="brow_card">
              <img src={img2} alt="" />
              <p>Bedroom</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
