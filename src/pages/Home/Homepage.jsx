import img2 from "../../assets/banner/marindagreen1.jpg";
import Carousel from "../../components/UI/Carousel/Carousel.jsx";
import Service from "../../components/Service.jsx";
import pepsi from "../../assets/banner/poster2.jpg";
import Shop from "../../components/UI/Button/Shop.jsx";
import { Link } from "react-router-dom";
import ProductCard from "../../components/UI/Card/ProductCard.jsx";
import Card from "../../components/UI/Card/Card.jsx";
import Mostselling from "../Home/Mostselling.jsx";

const Homepage = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        {/* Hero / Slide Section */}
        <header className="slide-banner bg-[#EBF6FD] w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex flex-col lg:flex-row">
          <article className="w-full my-10 lg:w-[60%] h-full flex flex-col justify-center gap-3 md:gap-5 px-4 md:px-10 lg:px-20 py-8 lg:py-0">
            <h1 className="text-[#08335B] font-bold font-poppins text-2xl md:text-3xl lg:text-5xl">
              Fresh up! The whole new experience of soft drinks
            </h1>
            <p className="text-[#9895A3] w-full lg:w-[70%] font-bold text-sm md:text-base">
              Premium beverages, chilled and delivered. Popular picks and
              trusted brands — refresh your day with DailyDrinks.
            </p>
            <div className="my-5 flex gap-5">
              <Link to={"/shop"}>
                {" "}
                <Shop />
              </Link>
            </div>
          </article>
          <section className="pro-1 w-full lg:w-[40%] h-[200px] md:h-[500px] lg:h-full flex justify-center items-center">
            <div className="w-[95%] h-[95%] md:w-[60%] md:h-[60%] -rotate-10 my-15">
              <img
                src={pepsi}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </section>
        </header>

        {/* Most Selling Section */}
        <section className="most-sell my-10">
          <Mostselling />
        </section>
        <section>
          <Carousel />
        </section>
        {/* Promotional Ads Section */}
        <section className="pro-ad my-10 flex flex-col lg:flex-row gap-4 justify-between">
          <article className="pro-ad1 w-full lg:w-[49%] h-[150px] md:h-[200px] lg:h-150 bg-amber-300"></article>
          <article className="pro-ad1 w-full lg:w-[49%] h-[150px] md:h-[200px] lg:h-150 bg-green-300"></article>
        </section>
        {/* Banner Ads Section */}
        <section className="banner-ads w-full min-h-[120px] md:min-h-[150px] lg:h-120 bg-amber-500 my-10">
          {/* <img className=" object-fit w-[100%] h-[100%]" src={} alt="" />  */}
        </section>
        <section className="service">
          <Service />
        </section>
        <section className="top-rate flex flex-col lg:flex-row gap-4 justify-between">
          <article className="top-rate1 w-full lg:w-[49%] h-[150px] md:h-[200px] lg:h-150 bg-red-300">
            <img className="object-cover w-full h-full" src={img2} alt="" />
          </article>
          <article className="top-rate1 w-full lg:w-[49%] h-[150px] md:h-[200px] lg:h-150 bg-pink-300 flex items-center justify-center">
            <h1 className="font-bold text-xl md:text-2xl text-center">
              Top Rating
            </h1>
          </article>
        </section>
      </section>
    </>
  );
};

export default Homepage;
