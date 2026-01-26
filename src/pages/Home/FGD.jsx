// FGD = feel good drink
import Marquee from "react-fast-marquee";
import g1 from "../../assets/img/juice/YeosLychee.png";
import g2 from "../../assets/img/juice/YeosSoyMilk.png";
import g3 from "../../assets/img/juice/YeosWhite-Gourd.png";
import g4 from "../../assets/img/energy/IZE-.png";
import g5 from "../../assets/img/energy/Krud.png";
import g6 from "../../assets/img/energy/exprez.png";
import g7 from "../../assets/img/energy/Wurkz.png";
import g8 from "../../assets/img/beer/hanuman.png";
const FGD = () => {
  return (
    <Marquee speed={90} pauseOnHover={true} gradient={false}>
      <img src={g1} alt="logo" className="h-100 w-auto mx-10 object-contain" />
      <img src={g2} alt="logo" className="h-100 w-auto mx-10 object-contain" />
      <img src={g3} alt="logo" className="h-100 w-auto mx-10 object-contain" />
      <img src={g4} alt="logo" className="h-80 w-auto mx-10 object-contain" />
      <img src={g5} alt="logo" className="h-100 w-auto mx-10 object-contain" />
      <img src={g6} alt="logo" className="h-100 w-auto mx-10 object-contain" />
      <img src={g7} alt="logo" className="h-100 w-auto mx-10 object-contain" />
      <img src={g8} alt="logo" className="h-100 w-auto mx-10 object-contain" />
    </Marquee>
  );
};

export default FGD;
