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

        <div className="hero_text mt-2 md:p-0 md:mt-20 ">
          <h1 className="text-3xl mb-2 text-center md:text-left md:text-6xl  md:mb-10 ">
            Make remote work
          </h1>
          <div className="p-2 mb-4 md:mb-8 text-center md:text-start">
            <p>
              Get your team in sync, no matter your location. Streamline
              processes,create team rituals, and watch productivity soar.
            </p>
          </div>
          <div className="flex mb-2 justify-center md:justify-start">
            <button className="btn py-3  hover:bg-transparent hover:text-black hover:outline-[2px] px-6">
              Learn more
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Main;
