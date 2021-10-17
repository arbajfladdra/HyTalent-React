// Images
import HeroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="row ">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-item hero-info">
            <h1>
              Empowers graduates to <br /> discover, develop, and <br /> apply
              their skills
            </h1>
          </div>
          <div className="hero-item hero-img-wrapper">
            <a href="/register">
              <img
                className="hero-img"
                src={HeroImg}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
