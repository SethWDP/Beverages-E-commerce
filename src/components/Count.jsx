import React, { useState, useEffect, useRef } from "react";

const StatCard = ({ endValue, label, description, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = endValue / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, endValue, delay]);

  return (
    <div
      ref={cardRef}
      className=" bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl px-20 py-8 text-center text-white shadow-lg transform transition-all duration-500 hover:scale-105"
    >
      <div className="text-5xl font-bold mb-2">{count.toLocaleString()}K +</div>
      <div className="text-2xl font-semibold mb-3">{label}</div>
      <div className="text-sm text-blue-100">{description}</div>
    </div>
  );
};

export default function Count() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-around gap-10 max-w-7xl mx-auto">
          <StatCard
            endValue={20}
            label="Sold"
            description="lorem is not simply random text"
            delay={0}
          />
          <StatCard
            endValue={10}
            label="Products"
            description="lorem is not simply random text"
            delay={200}
          />
          <StatCard
            endValue={7}
            label="Customers"
            description="lorem is not simply random text"
            delay={400}
          />
        </div>
      </div>

      {/* Additional spacer */}
      {/* <div className="h-screen"></div> */}
    </div>
  );
}
