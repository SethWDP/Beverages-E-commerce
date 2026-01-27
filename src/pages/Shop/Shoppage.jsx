import React from "react";
import "./shop.css";
import b1 from "../../assets/banner/kbbanner.jpeg";
const Shoppage = () => {
  return (
    <section className="container mx-auto px-4">
      <section className="bg-banner hero">
        <div className="hero__content">
          <h1>BEVERAGES FOR ALL</h1>
          <p>Home for some of your favourite drink brand</p>
          <button className="hero__btn">View All Our Drinks</button>
        </div>
      </section>

      <section className="w-full mt-10">
        <div
          className="
    flex flex-col gap-4
    lg:flex-row lg:h-[70vh]
  "
        >
          {/* LEFT BIG IMAGE */}
          <article
            className="
      w-full lg:w-[35%]
      h-[300px] lg:h-full
    "
          >
            <img
              className="w-full h-full object-cover"
              src="https://www.drgcambodia.com/wp-content/uploads/2021/11/vigor-power-energy-drink-cambodia.jpg"
              alt="poster"
            />
          </article>

          {/* RIGHT SIDE */}
          <article
            className="
      w-full lg:w-[65%]
      flex flex-col gap-4
    "
          >
            {/* TOP RIGHT */}
            <div
              className="
        w-full
        h-[200px] sm:h-[240px] lg:h-[58%]
      "
            >
              <img
                className="w-full h-full object-cover"
                src={b1}
                alt="banner"
              />
            </div>

            {/* BOTTOM RIGHT */}
            <div
              className="
        w-full
        flex flex-col gap-4
        sm:flex-row
        h-auto lg:h-[40%]
      "
            >
              {/* bottom left */}
              <div
                className="
          w-full sm:w-[60%]
          h-[200px] lg:h-full
        "
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.myportfolio.com/7a564a61-74c5-42bd-a228-b8899283bec7/41a1d70e-1d6a-4c2e-9beb-17ff1e90c455_rw_1920.jpg?h=78878a7ce357b8ec146f37ea6a6059de"
                  alt=""
                />
              </div>

              {/* bottom right */}
              <div
                className="
          w-full sm:w-[40%]
          h-[200px] lg:h-full
        "
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/736x/75/8d/8f/758d8f6b465b7f95bc7891c1b658b4b0.jpg"
                  alt=""
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Shoppage;
