import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  FiLock,
  FiTruck,
  FiChevronLeft,
  FiCreditCard,
  FiDollarSign,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { toast } from "react-toastify";

const Payments = () => {
  const { cartItems, totalPrice, totalQty, clearCart, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Cambodia",
  });

  const [paymentMethod, setPaymentMethod] = useState("aba");
  const [errors, setErrors] = useState({});
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Force clear cart function - more aggressive approach
  const forceClearCart = () => {
    console.log("Force clearing cart...");
    console.log("Cart items before clear:", cartItems);

    // Try multiple approaches to clear the cart
    try {
      // Method 1: Use clearCart if available
      if (clearCart && typeof clearCart === "function") {
        clearCart();
        console.log("Used clearCart function");
      }

      // Method 2: Remove each item individually
      if (removeFromCart && typeof removeFromCart === "function") {
        const itemsToRemove = [...cartItems];
        itemsToRemove.forEach((item) => {
          removeFromCart(item.id);
        });
        console.log("Removed items individually");
      }

      // Method 3: Clear localStorage directly
      localStorage.removeItem("cart");
      console.log("Cleared localStorage cart");

      // Method 4: Clear sessionStorage if used
      sessionStorage.removeItem("cart");
      console.log("Cleared sessionStorage cart");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }

    console.log("Cart clearing completed");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!shippingInfo.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!shippingInfo.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (
      !/^\d{9,15}$/.test(shippingInfo.phoneNumber.replace(/\s/g, ""))
    ) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!shippingInfo.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!shippingInfo.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission - INSTANT without loading
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Clear cart FIRST before showing success
    forceClearCart();

    // Show success message
    toast.success("Payment successful! Your order has been placed.");

    // Set order completed
    setOrderCompleted(true);

    // Force a page reload to ensure cart is cleared
    setTimeout(() => {
      window.location.href = "/shop";
    }, 2000);
  };

  // Manual redirect function
  const handleManualRedirect = () => {
    // Force reload to ensure cart is cleared
    window.location.href = "/shop";
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Debug cart items
  useEffect(() => {
    console.log("Current cart items:", cartItems);
    console.log("Cart total:", totalPrice);
  }, [cartItems, totalPrice]);

  // Redirect to shop if cart is empty and not in order completed state
  useEffect(() => {
    if (cartItems.length === 0 && !orderCompleted) {
      navigate("/shop");
    }
  }, [cartItems, navigate, orderCompleted]);

  // Success screen component - NO LOADING SPINNER
  const SuccessScreen = () => (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <FiCheck className="text-green-500 text-4xl" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. Cart has been cleared.
          Redirecting to shop...
        </p>
        <button
          onClick={handleManualRedirect}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Go to Shop Now
        </button>
      </div>
    </div>
  );

  if (orderCompleted) {
    return <SuccessScreen />;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/shop"
          className="inline-flex items-center text-sm text-gray-600 hover:text-[#178ED8] mb-6 transition"
        >
          <FiChevronLeft className="mr-1" /> Back to Shopping
        </Link>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              {/* Shipping Information */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-6 border-b pb-4 flex items-center gap-2">
                  <FiTruck className="text-[#178ED8]" /> Shipping Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full p-2 border rounded focus:border-[#178ED8] outline-none ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <FiAlertCircle className="mr-1" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={shippingInfo.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className={`w-full p-2 border rounded focus:border-[#178ED8] outline-none ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <FiAlertCircle className="mr-1" /> {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleInputChange}
                      placeholder="Enter your street address"
                      className={`w-full p-2 border rounded focus:border-[#178ED8] outline-none ${errors.address ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <FiAlertCircle className="mr-1" /> {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      className={`w-full p-2 border rounded focus:border-[#178ED8] outline-none ${errors.city ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <FiAlertCircle className="mr-1" /> {errors.city}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={handleInputChange}
                      placeholder="Enter postal code"
                      className="w-full p-2 border border-gray-300 rounded focus:border-[#178ED8] outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:border-[#178ED8] outline-none"
                    >
                      <option value="Cambodia">Cambodia</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Laos">Laos</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-6 border-b pb-4 flex items-center gap-2">
                  <FiCreditCard className="text-[#178ED8]" /> Payment Method
                </h2>

                <div className="space-y-4">
                  {/* ABA PAY Option */}
                  <label
                    className={`p-5 border-2 rounded-xl flex items-center justify-between cursor-pointer transition ${
                      paymentMethod === "aba"
                        ? "border-[#178ED8] bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="payment"
                        value="aba"
                        checked={paymentMethod === "aba"}
                        onChange={() => setPaymentMethod("aba")}
                        className="w-5 h-5 accent-[#178ED8]"
                      />
                      <div>
                        <p className="font-bold text-[#03527E] text-lg">
                          ABA PAY
                        </p>
                        <p className="text-sm text-gray-600">
                          Pay instantly via ABA Mobile app
                        </p>
                      </div>
                    </div>
                    {/* ABA Logo Placeholder */}
                    <div className="bg-[#03527E] text-white px-3 py-1 rounded font-bold italic">
                      ABA'
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label
                    className={`p-5 border-2 rounded-xl flex items-center gap-4 cursor-pointer transition ${
                      paymentMethod === "cod"
                        ? "border-[#178ED8] bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="w-5 h-5 accent-[#178ED8]"
                    />
                    <div className="flex items-center gap-3">
                      <FiDollarSign className="text-xl text-gray-600" />
                      <span className="font-medium text-gray-700">
                        Cash on Delivery
                      </span>
                    </div>
                  </label>
                </div>
              </section>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="max-h-60 overflow-y-auto mb-6 space-y-4 pr-2">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center text-sm"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium text-gray-800">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              Qty: {item.qty}
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold">
                          ${(item.price * item.qty).toFixed(2)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">No items in cart</p>
                  )}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${Number(totalPrice).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${(Number(totalPrice) * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span className="text-[#178ED8]">
                      $
                      {(
                        Number(totalPrice) +
                        5 +
                        Number(totalPrice) * 0.1
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 font-bold py-4 rounded-lg transition shadow-md flex items-center justify-center gap-2 bg-[#178ED8] hover:bg-blue-600 text-white"
                >
                  <FiLock />{" "}
                  {paymentMethod === "aba" ? "Pay Now with ABA" : "Place Order"}
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By placing this order, you agree to our Terms of Service and
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payments;
