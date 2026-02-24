import Carousel from "../../components/UI/Carousel/Carousel.jsx";
import Service from "../../components/Service.jsx";
import Shop from "../../components/UI/Button/Shop.jsx";
import { Link } from "react-router-dom";
import Mostselling from "../Home/Mostselling.jsx";
import FGD from "./FGD.jsx";
import "./home.css";
import pepsi from "../../assets/banner/poster2.jpg";
import vital from "../../assets/img/water/vital.png";
import vigor from "../../assets/img/energy/vigor.jpg";
import krud from "../../assets/img/energy/krud.png";
import cocakh from "../../assets/img/energy/cocakh.jpg";
import pocarisweat from "../../assets/img/water/pocarisweat.jpg";
import soymilk from "../../assets/img/juice/YeosSoyMilk.png";

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

        <section className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between lg:h-[65vh]">
          {/* Left big */}
          <article className="w-full lg:w-[39%] h-[250px] sm:h-[350px] lg:h-full">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/489697449_1081441190695298_9057656553511109265_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=b895b5&_nc_ohc=-j-eCiG9GUMQ7kNvwFgPEdq&_nc_oc=AdmkO1OEKM34af67odxvg6ZHv0UoNntPcXTySwxkzaFyUyciAYY_epKq3_J9fUGsBII&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=EFuIiO7M_1nGq_cVp1HLQQ&oh=00_AfsbSUM9aKCYXysnnD9_MhEztFlCxKdJZj0AA9M1VGzWWQ&oe=69A30D6F"
              alt="ads-img"
            />
          </article>

          {/* Middle column */}
          <article className="w-full lg:w-[39%] flex flex-col gap-4 lg:h-full">
            <div className="w-full h-[200px] sm:h-[260px] lg:h-[39%]">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://cdn.i.haymarketmedia.asia/?n=campaign-asia/content/04-Cambodia-Beer-Cred.jpg"
                alt="ads"
              />
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4 lg:h-[59%]">
              <div className="w-full sm:w-1/2 h-[200px] sm:h-auto">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src="https://www.ad-wow.com/brandpage/images/ys_brpg1_Plasma_ads_s.png"
                  alt="ads"
                />
              </div>

              <div className="w-full sm:w-1/2 h-[200px] sm:h-auto">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src="https://image.isu.pub/221202111849-ed89bda5ac2e943c88ae107d4f5d60ca/jpg/page_1_social_preview.jpg"
                  alt="ads"
                />
              </div>
            </div>
          </article>

          {/* Right tall */}
          <article className="w-full lg:w-[20%] h-[250px] sm:h-[350px] lg:h-full">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.openfoodfacts.org/images/products/884/710/074/2247/front_en.13.full.jpg"
              alt="ads"
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
        {/* top rate drink */}
        <section className="top-rate flex flex-col lg:flex-row gap-4 justify-between">
          {/* Left banner */}
          <article className="top-rate1 w-full lg:w-[45%] h-full md:h-[200px] lg:h-[200px] py-20 ">
            <h1 className="font-bold text-2xl md:text-3xl text-white px-6 md:px-8">
              <span className="text-green-500">Our</span> Top Most Products
              <br />
              Check It Now
            </h1>
            <div className="px-8 py-5">
              <Link to={"/shop"}>
                {" "}
                <button className="bg-green-500 hover:bg-green-600 font-bold text-white px-5 py-2 rounded-sm cursor-pointer">
                  Shop now
                </button>
              </Link>
            </div>
          </article>

          {/* Right rating list */}
          <article className="w-full lg:w-[54%] h-auto md:min-h-[200px]">
            <h1 className="font-bold text-xl md:text-2xl text-center mt-1">
              Top Rating
            </h1>

            {/* Cards grid: 1 col on mobile, 2 cols on md+ (same as your 2 halves) */}
            <div className="rating-pro mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  id: 1,
                  img: vital,
                  title: "ទឹកបរិសុទ្ធវីតាល់​ 500ML",
                  subtitle: "Miniral Water",
                  price: "$0.25",
                },
                {
                  id: 2,
                  img: cocakh,
                  title: "Cambodia Cola 330ml",
                  subtitle: "energydrink",
                  price: "$0.56",
                },
                {
                  id: 3,
                  img: vigor,
                  title: "Vigor Energy Drink Can 250ml",
                  subtitle: "energydrink",
                  price: "$0.70",
                },
                {
                  id: 4,
                  img: krud,
                  title: "Krud Energy Drink 250ml",
                  subtitle: "energydrink",
                  price: "$0.8",
                },
                {
                  id: 5,
                  img: soymilk,
                  title: "Yeos Soy Milk",
                  subtitle: "Juice",
                  price: "$0.50",
                },
                {
                  id: 6,
                  img: pocarisweat,
                  title: "Pocari Sweat 500ml",
                  subtitle: "Water&Hydration",
                  price: "$0.90",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="rt-por-card w-full flex items-stretch"
                >
                  {/* Image */}
                  <div className="img w-[90px] md:w-[100px] h-[90px] md:h-[100px] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.img}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="rt-des flex-1 px-4 py-3 md:px-5 md:py-4">
                    <h2 className="font-bold text-sm md:text-base line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="text-sm opacity-80">{item.subtitle}</p>
                    <p className="font-bold mt-1">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
        <section className=" w-full h-100 mt-10">
          <img
            className="w-full h-full object-fit"
            src="https://www.coca-cola.com/content/dam/onexp/kh/en/offerings/fanta/H281447-Fanta-Desktop-Banner-1440x810px.jpg"
            alt=""
          />
        </section>
      </section>
    </>
  );
};

export default Homepage;
