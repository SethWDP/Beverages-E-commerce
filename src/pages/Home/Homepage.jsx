import Carousel from "../../components/UI/Carousel/Carousel.jsx";
import Service from "../../components/Service.jsx";
import pepsi from "../../assets/banner/poster2.jpg";
import Shop from "../../components/UI/Button/Shop.jsx";
import { Link } from "react-router-dom";
import Mostselling from "../Home/Mostselling.jsx";
import FGD from "./FGD.jsx";
import "./home.css";
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
        {/* banner carousel */}
        <section>
          <Carousel />
        </section>
        {/* sevice section */}
        <section className="service">
          <Service />
        </section>

        <section className="poster-ads w-full h-[65vh] flex justify-between">
          <article className="w-[39%] h-auto">
            <img
              className=" w-full h-full object-fit"
              src="https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/489697449_1081441190695298_9057656553511109265_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=iZLuAd9OZdwQ7kNvwGNXx_1&_nc_oc=AdlA15D4NUArQZrjJFNsbhDEaDlAk7gBcVoT5iAzy-QO0oOXEIPP-D3ulznsjBHCLMQ&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=85HExs6awFkpETkkPU2ZDA&oh=00_AfqBeYjHHsTMgoJAd325kk1SapaX5TnHA3UTsR2IffO5wA&oe=697D0A2F"
              alt="ads-img"
            />
          </article>
          <article className="-600 w-[39%] h-auto flex flex-col justify-between ">
            <div className="w-full h-[39%]">
              <img
                className=" w-full h-full object-cover"
                src="https://cdn.i.haymarketmedia.asia/?n=campaign-asia/content/04-Cambodia-Beer-Cred.jpg"
                alt="ads"
              />
            </div>
            <div className="w-full h-[59%] flex justify-between">
              <div className=" w-[49%] h-auto">
                <img
                  className=" w-full h-full object-cover"
                  src="https://www.ad-wow.com/brandpage/images/ys_brpg1_Plasma_ads_s.png"
                  alt="ads"
                />
              </div>
              <div className=" w-[49%] h-auto">
                <img
                  className=" w-full h-full object-cover"
                  src="https://image.isu.pub/221202111849-ed89bda5ac2e943c88ae107d4f5d60ca/jpg/page_1_social_preview.jpg"
                  alt="ads"
                />
              </div>
            </div>
          </article>
          <article className="  w-[20%] h-auto">
            <img
              className="w-full h-full object-cover"
              src="https://images.openfoodfacts.org/images/products/884/710/074/2247/front_en.13.full.jpg"
              alt=""
            />
          </article>
        </section>
        {/* Promotional Ads Section */}

        {/* Banner Ads Section */}
        <section className="banner-ads my-10 w-full min-h-[120px] md:min-h-[150px] lg:h-120">
          <h1 className=" font-bold text-2xl">
            <span className=" text-blue-500">Feel-good</span> beverages
          </h1>
          <FGD />
        </section>
        <section className="top-rate flex flex-col lg:flex-row gap-4 justify-between">
          <article className="top-rate1 w-full lg:w-[49%] h-[150px] md:h-[200px] lg:h-150 bg-red-300">
            <h1 className="font-bold text-3xl text-white p-25">
              {" "}
              <span className=" text-green-400">Our</span> Top Most Products{" "}
              <br />
              Check It Now
            </h1>
          </article>
          <article className=" w-full lg:w-[49%] h-[150px] md:h-[200px] lg:h-150 bg-pink-300 flex items-center justify-center">
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
