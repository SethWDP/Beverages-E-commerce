import { useState } from "react";
import spp from "../../assets/banner/spp.jpg";
import { MapPin, Mail, Phone, Facebook } from "lucide-react";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <section className="container m-auto min-h-screen bg-gray-50">
      {/* HEADER SECTION - Responsive Height */}
      <header className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={spp}
          alt="banner"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Contact
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 text-center max-w-2xl italic">
            "Get in Touch With Our Support Team"
          </p>
        </div>
      </header>

      {/* MAIN CONTENT - Grid layout for better control */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
          {/* INFO CARD - Left Side */}
          <aside className="w-full lg:w-[30%] bg-sky-600 p-6 md:p-12 text-white shadow-xl flex flex-col ">
            <h2 className="text-3xl text-center md:text-5xl font-bold md:mb-12">
              Contact Us
            </h2>
            <ul className="space-y-8 md:space-y-10 ">
              <li className="flex gap-5 items-start">
                <div className="bg-white/20 p-3 ">
                  <MapPin size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-sky-100">
                    St 888 Russian Federation Blvd, Phnom Penh
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-sky-100">beverages_007@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-sky-100">0987-654-432-1</p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Facebook size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Facebook</h4>
                  <p className="text-sky-100">Team Beverages Official</p>
                </div>
              </li>
            </ul>
          </aside>

          {/* FORM CARD - Right Side */}
          <main className="w-full lg:w-[70%] rounded-xl p-6 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Get In Touch
              </h2>
              <p className="text-gray-500 text-lg">
                We'd love to hear from you. Please fill out the form below.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    First Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.firstName}
                    name="firstName"
                    type="text"
                    placeholder="firstName"
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Last Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.lastName}
                    name="lastName"
                    type="text"
                    placeholder="lastName"
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Email Address
                </label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Message
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg shadow-sky-200 hover:shadow-sky-300 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </main>
        </div>

        {/* MAP SECTION - Full width with rounded corners */}
        <div className="mt-16 md:mt-24 w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Russian%20Federation%20Blvd%20(110),%20Phnom%20Penh%20120404+(My%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
