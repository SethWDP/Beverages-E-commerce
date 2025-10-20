import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiHeart,
  FiBell,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";

// Custom Animated Burger Icon Component
const AnimatedBurgerIcon = ({ isOpen, onClick }) => {
  return (
    <button
      className="md:hidden w-6 h-6 flex flex-col justify-center items-center relative"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span
        className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
        }`}
      />
      <span
        className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
        }`}
      />
    </button>
  );
};

const MainLayout = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Orange Juice",
      price: 4.99,
      quantity: 2,
      image: "https://picsum.photos/seed/juice1/60/60.jpg",
    },
    {
      id: 2,
      name: "Green Tea",
      price: 3.49,
      quantity: 1,
      image: "https://picsum.photos/seed/tea1/60/60.jpg",
    },
  ]);

  const categoriesRef = useRef(null);
  const mobileCategoriesRef = useRef(null);
  const cartRef = useRef(null);
  const mobileCartRef = useRef(null);
  const mobileCartContentRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileCategoriesOpen(false);
    }
    if (!isMobileMenuOpen) {
      setIsCartOpen(false);
    }
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleMobileCategories = () => {
    setIsMobileCategoriesOpen(!isMobileCategoriesOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle backdrop click with better logic
  const handleBackdropClick = (e) => {
    // Only close if clicking directly on the backdrop (not on children)
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false);
      }
      if (
        mobileCategoriesRef.current &&
        !mobileCategoriesRef.current.contains(event.target)
      ) {
        setIsMobileCategoriesOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1
                className="text-2xl font-bold text-[#178ED8] cursor-pointer"
                onClick={() => navigate("/")}
              >
                DailyDrinks
              </h1>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-0 top-0 bottom-0 px-3 flex items-center">
                  <FiSearch className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Right side icons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative" ref={cartRef}>
                <button
                  onClick={toggleCart}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
                >
                  <FiShoppingCart className="text-xl" />
                  <span className="text-sm">{getTotalItems()} items</span>
                </button>

                {/* Cart Dropdown */}
                <div
                  className={`absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-96 transition-all duration-200 origin-top ${
                    isCartOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800">
                        Shopping Cart
                      </h3>
                      <button
                        onClick={closeCart}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <FiX className="text-xl" />
                      </button>
                    </div>
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <div className="p-8 text-center text-gray-500">
                        <FiShoppingCart className="text-4xl mx-auto mb-2 text-gray-300" />
                        <p>Your cart is empty</p>
                      </div>
                    ) : (
                      <div className="p-4 space-y-4">
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-800 text-sm">
                                {item.name}
                              </h4>
                              <p className="text-blue-600 font-semibold">
                                ${item.price}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                              >
                                <FiMinus className="text-xs" />
                              </button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                              >
                                <FiPlus className="text-xs" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 transition"
                            >
                              <FiTrash2 className="text-lg" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {cartItems.length > 0 && (
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-gray-800">
                          Total:
                        </span>
                        <span className="text-xl font-bold text-blue-600">
                          ${getTotalPrice()}
                        </span>
                      </div>
                      <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                        Proceed to Checkout
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <button className="flex gap-2 px-4 py-2 text-black  transition">
                <MdOutlineAccountCircle className="text-2xl text-gray-700" />{" "}
                Account
              </button>
            </div>

            {/* Animated Mobile menu button */}
            <AnimatedBurgerIcon
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Navigation Bar - Modified to center navigation links */}
          <nav className="hidden md:flex items-center justify-between py-3 border-t border-gray-200">
            {/* Left section - Categories dropdown */}
            <div className="flex items-center">
              <div className="relative" ref={categoriesRef}>
                <button
                  className="flex items-center space-x-1 px-4 py-2 text-white bg-[#178ED8] hover:bg-blue-400 font-bold transition"
                  onClick={toggleCategories}
                >
                  <span>All Categories</span>
                  <FiChevronDown
                    className={`transform transition-transform duration-200 ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Categories dropdown */}
                <div
                  className={`absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 transition-all duration-200 origin-top ${
                    isCategoriesOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <Link
                    to={"/shop/water"}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Water&Hydration
                  </Link>
                  <Link
                    to="/shop/energydrink"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Energy Drink
                  </Link>
                  <Link
                    to={"/shop/softdrink"}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Soft&Soda Drink
                  </Link>
                  <Link
                    to={"/shop/beer"}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Beer&Alcohol
                  </Link>
                  <Link
                    to={"/shop/juice"}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Juice
                  </Link>
                </div>
              </div>
            </div>

            {/* Center section - Navigation links */}
            <div className="flex-1 flex justify-center">
              <div className="flex space-x-20">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  About
                </Link>
                <Link
                  to="/shop"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Shop
                </Link>
                <Link
                  to="/reviews"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Reviews
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right section - Notification icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition relative">
                <FiHeart className="text-2xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="text-gray-700 hover:text-blue-600 transition relative">
                <FiBell className="text-2xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  5
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                  />
                  <button className="absolute right-0 top-0 bottom-0 px-3 flex items-center">
                    <FiSearch className="text-gray-500" />
                  </button>
                </div>

                <div className="relative" ref={mobileCategoriesRef}>
                  <button
                    className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition"
                    onClick={toggleMobileCategories}
                  >
                    <span>All Categories</span>
                    <FiChevronDown
                      className={`transform transition-transform duration-200 ${
                        isMobileCategoriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isMobileCategoriesOpen
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 space-y-2 pt-2">
                      <Link
                        to={"/shop/water"}
                        className="block py-1 text-gray-700 hover:text-blue-600 transition"
                      >
                        Water&Hydration
                      </Link>
                      <Link
                        to="/shop/energydrink"
                        className="block py-1 text-gray-700 hover:text-blue-600 transition"
                      >
                        Energy Drink
                      </Link>
                      <Link
                        to={"/shop/softdrink"}
                        className="block py-1 text-gray-700 hover:text-blue-600 transition"
                      >
                        Soft&Soda Drink
                      </Link>
                      <Link
                        to={"/shop/beer"}
                        className="block py-1 text-gray-700 hover:text-blue-600 transition"
                      >
                        Beer&Alcohol
                      </Link>
                      <Link
                        to={"/shop/juice"}
                        className="block py-1 text-gray-700 hover:text-blue-600 transition"
                      >
                        Juice
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  to="/"
                  className="py-2 text-gray-700 hover:text-blue-600 transition"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="py-2 text-gray-700 hover:text-blue-600 transition"
                >
                  About
                </Link>
                <Link
                  to="/shop"
                  className="py-2 text-gray-700 hover:text-blue-600 transition"
                >
                  Shop
                </Link>
                <Link
                  to="/reviews"
                  className="py-2 text-gray-700 hover:text-blue-600 transition"
                >
                  Reviews
                </Link>
                <Link
                  to="/contact"
                  className="py-2 text-gray-700 hover:text-blue-600 transition"
                >
                  Contact
                </Link>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button
                    onClick={toggleCart}
                    className="flex items-center space-x-1 text-gray-700"
                  >
                    <FiShoppingCart className="text-3xl" />
                    <span className="text-sm">{getTotalItems()} items</span>
                  </button>
                  <button className="flex gap-2 px-4 py-2 text-black  transition">
                    <MdOutlineAccountCircle className="text-3xl text-gray-700" />{" "}
                    Account
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-6 pt-2">
                  <button className="text-gray-700 relative">
                    <FiHeart className="text-3xl" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <button className="text-gray-700 relative">
                    <FiBell className="text-3xl" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      5
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Cart Modal - Completely rewritten with better event handling */}
      {isCartOpen && (
        <div
          ref={mobileCartRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:hidden"
          onClick={handleBackdropClick}
        >
          <div
            ref={mobileCartContentRef}
            className="bg-white w-full max-h-[80vh] overflow-hidden rounded-t-2xl animate-slide-up"
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Shopping Cart</h3>
                <button
                  onClick={closeCart}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <FiShoppingCart className="text-4xl mx-auto mb-2 text-gray-300" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm">
                          {item.name}
                        </h4>
                        <p className="text-blue-600 font-semibold">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition active:bg-gray-200"
                          type="button"
                        >
                          <FiMinus className="text-xs" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition active:bg-gray-200"
                          type="button"
                        >
                          <FiPlus className="text-xs" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition p-1"
                        type="button"
                      >
                        <FiTrash2 className="text-lg" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-gray-800">Total:</span>
                  <span className="text-xl font-bold text-blue-600">
                    ${getTotalPrice()}
                  </span>
                </div>
                <button
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition active:bg-blue-800"
                  type="button"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <main className="p-4">
        <Outlet />
      </main>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
