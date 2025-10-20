import React from "react";
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const Service = () => {
  return (
    <>
      <section className="service flex justify-between gap-4 my-10 ">
        <div className="service-box w-110 h-60 border-4 border-orange-500 flex flex-col items-center justify-center gap-2 ">
          <MdOutlineLocalShipping className=" text-orange-500 text-[4rem]" />
          <h2 className=" font-bold">Free Shipping</h2>
          <p>Free shipping on all order above $20</p>
        </div>
        <div className="service-box w-110 h-60 border-4 border-blue-500 flex flex-col items-center justify-center gap-2">
          <MdOutlineSupportAgent className=" text-blue-500 text-[4rem]" />
          <h2 className=" font-bold">24x7 Support</h2>
          <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
        <div className="service-box w-110 h-60 border-4 border-green-500 flex flex-col items-center justify-center gap-2">
          <FaMoneyBillTrendUp className="text-green-500 text-[4rem]" />
          <h2 className=" font-bold">Payment Secure</h2>
          <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
      </section>
    </>
  );
};

export default Service;
