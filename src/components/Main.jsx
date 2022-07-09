import Footer from "./Footer";
import HeroBg from "../images/image-hero-desktop.png";
import HeroBgMobile from "../images/image-hero-mobile.png";
const Main = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row-reverse justify-evenly gap-4 ">
        <div className="hidden md:flex hero-bg  ">
          <img src={HeroBg} alt="" />
        </div>
        {/* Mobile */}
        <div className="md:hidden hero-bg  ">
          <img src={HeroBgMobile} alt="" />
        </div>

        <div className="hero_text p-4 mt-10 md:p-0 md:mt-40 ">
          <h1 className="text-3xl  md:text-6xl mb-10 text-center md:text-start">
            Make remote work
          </h1>
          <div className="mb-8 text-center md:text-start">
            <p>
              Get your team in sync, no matter your location. Streamline
              processes,create team rituals, and watch productivity soar.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="btn  py-3 px-6">Learn more</button>
          </div>{" "}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
