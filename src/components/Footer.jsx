import { DataBiz, Audophile, Maker, Meet } from "../images/index";
const Footer = () => {
  return (
    <div>
      <div className="brands flex p-2  md:gap-8 mt-3 md:mt-20 ">
        <div className="brand">
          <img src={DataBiz} alt="" />
        </div>
        <div className="brand">
          <img src={Audophile} alt="" />
        </div>
        <div className="brand">
          <img src={Meet} alt="" />
        </div>
        <div className="brand">
          <img src={Maker} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
