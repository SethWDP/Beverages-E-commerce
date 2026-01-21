import React from "react";
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const Service = () => {
  return (
    <>
      <section className="service my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="service-box h-60 border-4 border-orange-500 flex flex-col items-center justify-center gap-2 text-center px-4">
          <MdOutlineLocalShipping className="text-orange-500 text-5xl" />
          <h2 className="font-bold text-lg">Free Shipping</h2>
          <p className="text-sm">Free shipping on all order above $20</p>
        </div>

        <div className="service-box h-60 border-4 border-blue-500 flex flex-col items-center justify-center gap-2 text-center px-4">
          <MdOutlineSupportAgent className="text-blue-500 text-5xl" />
          <h2 className="font-bold text-lg">24x7 Support</h2>
          <p className="text-sm">Contact us 24 hours a day, 7 days a week</p>
        </div>

        <div className="service-box h-60 border-4 border-green-500 flex flex-col items-center justify-center gap-2 text-center px-4">
          <FaMoneyBillTrendUp className="text-green-500 text-5xl" />
          <h2 className="font-bold text-lg">Payment Secure</h2>
          <p className="text-sm">100% secure payment system</p>
        </div>
      </section>
    </>
  );
};

export default Service;
