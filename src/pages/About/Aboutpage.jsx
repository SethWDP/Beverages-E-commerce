import Service from "../../components/Service";
import a1 from "../../assets/banner/drink.png";
import a2 from "../../assets/banner/drink2.webp";
import a3 from "../../assets/banner/drink3.jpg";
import { Goal, Medal, Leaf, Users } from "lucide-react";
import Count from "../../components/Count";
import Marquees from "../../components/UI/Marquees";
const Aboutpage = () => {
  return (
    <>
      <section className="about container mx-auto px-4 py-8">
        {/* ABOUT */}
        <section className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <main className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 h-[250px] md:h-[300px]">
              <img
                src={a1}
                alt="img"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="h-[250px] md:h-[250px]">
              <img
                src={a2}
                alt="img"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="h-[250px] md:h-[250px]">
              <img
                src={a3}
                alt="img"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </main>

          <article className="w-full lg:w-[45%] flex flex-col gap-4 px-4 lg:px-10 py-6 lg:py-10">
            <h1 className="font-bold text-3xl lg:text-4xl">
              <span className=" text-[#178ED8]">About</span> Us
            </h1>
            <h3 className="text-xl lg:text-2xl font-bold w-full lg:w-[70%]">
              WE BELIEVE EVERY DRINK SHOULD BE A GREAT EXPERIENCE.
            </h3>
            <article className="flex flex-col gap-4 text-[0.95rem] lg:text-[1rem] w-full lg:w-[75%]">
              <p>
                Our passion is simple: to bring you the best beverages from
                around the world. We carefully choose every item, partnering
                with producers who care about quality and the environment.
              </p>
              <p>
                We are more than just a store. We are your guide to new flavors
                and unique drinks. Whether you love coffee, tea, or a refreshing
                soda, we make it easy for you to find something special.
              </p>
              <p>
                Our goal is to help you create great moments and memories. We
                offer a simple shopping process, helpful recommendations, and
                fast delivery, so you can enjoy the perfect drink for any
                occasion.
              </p>
            </article>
          </article>
        </section>

        {/* OUR JOURNEY (ADDED) */}
        <section className="py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* LEFT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                <span className="text-[#178ED8]">Our</span>{" "}
                <span className="text-gray-800">Journey</span>
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
                Founded in 2023, DailyDrinks started with a simple mission: to
                deliver fresh, quality beverages to every doorstep in Cambodia.
                What began as a small operation has grown into the nation's
                trusted beverage delivery platform.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
                We believe that everyone deserves access to their favorite
                drinks, whether it's an energy boost for work, refreshment after
                exercise, or celebration drinks for special moments.
              </p>

              {/* Timeline */}
              <div className="mt-8 flex gap-4">
                <div className="relative w-[2px] bg-[#178ED8]/30">
                  <span className="absolute top-1 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#178ED8]" />
                  <span className="absolute top-[108px] left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#178ED8]" />
                  <span className="absolute top-[215px] left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#178ED8]" />
                </div>

                <div className="space-y-10">
                  <div>
                    <p className="text-[#178ED8] font-semibold">2023</p>
                    <p className="mt-2 text-gray-800 font-medium">
                      Company Founded
                    </p>
                  </div>

                  <div>
                    <p className="text-[#178ED8] font-semibold">2024</p>
                    <p className="mt-2 text-gray-800 font-medium">
                      First 1000 Customers
                    </p>
                  </div>

                  <div>
                    <p className="text-[#178ED8] font-semibold">2025</p>
                    <p className="mt-2 text-gray-800 font-medium">
                      Expanded to 24/7 Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full">
              <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                <div className="h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
                  <img
                    src={a1} // or use a1
                    alt="Our Journey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <article className="bg-[#F7FAFC] flex flex-col gap-8 justify-center items-center p-6 md:p-8 rounded-lg">
            <Goal className="text-blue-400 font-bold" size={60} />
            <h2 className="font-bold text-2xl md:text-3xl text-[#2C3E50] text-center">
              Our Mission
            </h2>
            <p className="text-center text-sm md:text-base">
              To provide convenient access to quality beverages while supporting
              local communities and sustainable practices. We strive to make
              every sip count towards a better future.
            </p>
          </article>
          <article className="bg-[#F7FAFC] flex flex-col gap-8 justify-center items-center p-6 md:p-8 rounded-lg">
            <Goal className="text-blue-400 font-bold" size={60} />
            <h2 className="font-bold text-2xl md:text-3xl text-[#2C3E50] text-center">
              Our Vision
            </h2>
            <p className="text-center text-sm md:text-base">
              To become Cambodia's leading beverage delivery platform, known for
              exceptional service and community impact. We envision a future
              where quality drinks are just a click away for everyone.
            </p>
          </article>
        </section>

        <section className="my-12">
          <h1 className="text-[#4B4A4B] font-bold text-2xl md:text-3xl lg:text-4xl text-center my-8">
            <span className="text-[#4CAF50]">Our</span> Core Values
          </h1>
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F7FAFC] flex flex-col justify-center items-center gap-5 p-6 rounded-lg">
              <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg">
                <Medal size={40} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center">
                Quality First
              </h3>
              <p className="text-center text-sm md:text-base">
                We source only the finest ingredients and partner with trusted
                brands to ensure every product meets our high standards.
              </p>
              <ul className="decoration-0 text-sky-600 text-sm md:text-base">
                <li>✓ Premium Sourcing</li>
                <li>✓ Quality Control</li>
                <li>✓ Fresh Guarantee</li>
              </ul>
            </div>
            <div className="bg-[#F7FAFC] flex flex-col justify-center items-center gap-5 p-6 rounded-lg">
              <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg">
                <Leaf size={40} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center">
                Sustainability
              </h3>
              <p className="text-center text-sm md:text-base">
                We're committed to environmental responsibility through
                eco-friendly packaging and sustainable business practices.
              </p>
              <ul className="decoration-0 text-sky-600 text-sm md:text-base">
                <li>✓ Recyclable Packaging</li>
                <li>✓ Carbon Neutral Delivery</li>
                <li>✓ Green Initiatives</li>
              </ul>
            </div>
            <div className="bg-[#F7FAFC] flex flex-col justify-center items-center gap-5 p-6 rounded-lg">
              <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg">
                <Users size={40} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center">
                Community
              </h3>
              <p className="text-center text-sm md:text-base">
                We support local suppliers and workers, creating opportunities
                and giving back to the communities we serve.
              </p>
              <ul className="decoration-0 text-sky-600 text-sm md:text-base">
                <li>✓ Local Partnerships</li>
                <li>✓ Fair Employment</li>
                <li>✓ Community Programs</li>
              </ul>
            </div>
          </article>
        </section>
        {/* SERVICE */}
        <section className="sevice py-8 lg:py-12">
          <h1 className="font-bold text-2xl lg:text-3xl text-center my-4">
            <span className=" text-[#178ED8]">Our</span>Service
          </h1>
          <p className="text-center text-sm lg:text-base px-4">
            Exceptional beverages deserve exceptional service. We're dedicated
            to making your discovery and enjoyment as smooth as your favorite
            drink.
          </p>
          <Service />
        </section>
        <section className=" ">
          {/* count */}
          <Count />
        </section>
        <section className=" mt-10 ">
          <h1 className=" font-bold text-3xl text-center">
            <span className=" text-sky-500">Our</span> Collaborations
          </h1>
          <p className=" text-center mt-4">
            We partner with world-class beverage brands to bring you authentic
            and refreshing drinks.
          </p>
          <article className=" mt-10">
            {" "}
            <Marquees />
          </article>
        </section>
        <section className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-3xl">
            {/* Title */}
            <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-sky-500">Share</span>{" "}
              <span className="text-gray-700">Your Experience</span>
            </h1>

            <p className="text-center text-gray-500 mt-3">
              Your feedback helps us improve our service
            </p>

            {/* Card */}
            <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 md:p-10">
              <form className="space-y-6">
                {/* Label */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Feedback
                  </label>

                  <textarea
                    rows={7}
                    placeholder="Tell us about your experience with Daily Drinks..."
                    className="w-full rounded-md border border-gray-300 bg-white p-4 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>

                {/* Rating */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Overall Experience
                  </span>

                  {/* simple visual stars (swap for buttons if you want clickable) */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        className="h-5 w-5 fill-yellow-400"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.373 2.452a1 1 0 00-.364 1.118l1.287 3.965c.3.921-.755 1.688-1.54 1.118l-3.373-2.452a1 1 0 00-1.175 0l-3.373 2.452c-.784.57-1.838-.197-1.539-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.805 9.392c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.965z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Aboutpage;
