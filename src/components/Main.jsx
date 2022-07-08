import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <div className="grid">
        <div className="hero_text">
          <h1>Make remote work</h1>
          <div className="">
            <p>
              Get your team in sync, no matter your location. Streamline
              processes,create team rituals, and watch productivity soar.
            </p>
          </div>
          <button>Learn more</button>
        </div>

        <div className="hero-bg"></div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
