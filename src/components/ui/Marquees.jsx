import Marquee from "react-fast-marquee";
import l1 from "../../assets/logo/coca.png";
import l2 from "../../assets/logo/hanuman.png";
import l3 from "../../assets/logo/redbull.png";
import l4 from "../../assets/logo/sting.png";
import l5 from "../../assets/logo/vattanac.jpg";
import l6 from "../../assets/logo/Vital.png";
import l7 from "../../assets/logo/vigor.png";
import l8 from "../../assets/logo/khmerBeverages.png";

const Marquees = () => {
  return (
    <Marquee speed={80} pauseOnHover={true} gradient={false}>
      <img src={l1} alt="logo" className="h-25 w-auto mx-10 object-contain" />
      <img src={l2} alt="logo" className="h-25 w-auto mx-10 object-contain" />
      <img src={l3} alt="logo" className="h-25 w-auto mx-10 object-contain" />
      <img src={l4} alt="logo" className="h-40 w-auto mx-10 object-contain" />
      <img src={l5} alt="logo" className="h-25 w-auto mx-10 object-contain" />
      <img src={l6} alt="logo" className="h-25 w-auto mx-10 object-contain" />
      <img src={l7} alt="logo" className="h-25 w-auto mx-10 object-contain" />
      <img src={l8} alt="logo" className="h-25 w-auto mx-10 object-contain" />
    </Marquee>
  );
};

export default Marquees;
