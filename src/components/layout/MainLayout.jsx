import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import {
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
  FiHeart,
  FiBell,
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
      type="button"
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

  // Cart drawer (no cart items logic anymore)
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categoriesRef = useRef(null);
  const mobileCategoriesRef = useRef(null);
  const cartDrawerRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => !v);
    // close mobile categories when closing menu
    if (isMobileMenuOpen) setIsMobileCategoriesOpen(false);
    // close cart when opening menu
    if (!isMobileMenuOpen) setIsCartOpen(false);
  };

  const toggleCategories = () => setIsCategoriesOpen((v) => !v);
  const toggleMobileCategories = () => setIsMobileCategoriesOpen((v) => !v);

  const openCart = () => {
    setIsCartOpen(true);
    setIsMobileMenuOpen(false);
  };
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((v) => !v);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeCart();
  };

  // Close dropdowns/drawer when clicking outside
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
      // close drawer if click is outside the drawer when it's open
      if (
        isCartOpen &&
        cartDrawerRef.current &&
        !cartDrawerRef.current.contains(event.target)
      ) {
        // This is mostly redundant because backdrop handles it, but it's safe.
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
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
                <button
                  className="absolute right-0 top-0 bottom-0 px-3 flex items-center"
                  type="button"
                >
                  <FiSearch className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Right side icons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleCart}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
                type="button"
              >
                <FiShoppingCart className="text-xl" />
                <span className="text-sm">Cart</span>
              </button>

              <button
                className="flex gap-2 px-4 py-2 text-black transition"
                type="button"
              >
                <MdOutlineAccountCircle className="text-2xl text-gray-700" />
                Account
              </button>
            </div>

            {/* Animated Mobile menu button */}
            <AnimatedBurgerIcon
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Navigation Bar */}
          <nav className="hidden md:flex items-center justify-between py-3 border-t border-gray-200">
            {/* Left - Categories */}
            <div className="flex items-center">
              <div className="relative" ref={categoriesRef}>
                <button
                  className="flex items-center space-x-1 px-4 py-2 text-white bg-[#178ED8] hover:bg-blue-400 font-bold transition"
                  onClick={toggleCategories}
                  type="button"
                >
                  <span>All Categories</span>
                  <FiChevronDown
                    className={`transform transition-transform duration-200 ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

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

            {/* Center links */}
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

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <Link to="/favorite">
                <button
                  className="text-gray-700 hover:text-blue-600 transition relative"
                  type="button"
                >
                  <FiHeart className="text-2xl" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    2
                  </span>
                </button>
              </Link>

              <button
                className="text-gray-700 hover:text-blue-600 transition relative"
                type="button"
              >
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
                  <button
                    className="absolute right-0 top-0 bottom-0 px-3 flex items-center"
                    type="button"
                  >
                    <FiSearch className="text-gray-500" />
                  </button>
                </div>

                <div className="relative" ref={mobileCategoriesRef}>
                  <button
                    className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition"
                    onClick={toggleMobileCategories}
                    type="button"
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
                    onClick={openCart}
                    className="flex items-center space-x-2 text-gray-700"
                    type="button"
                  >
                    <FiShoppingCart className="text-3xl" />
                    <span className="text-sm">Cart</span>
                  </button>

                  <button
                    className="flex gap-2 px-4 py-2 text-black transition"
                    type="button"
                  >
                    <MdOutlineAccountCircle className="text-3xl text-gray-700" />
                    Account
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-6 pt-2">
                  <button className="text-gray-700 relative" type="button">
                    <FiHeart className="text-3xl" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <button className="text-gray-700 relative" type="button">
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

      {/* Right-side Cart Drawer (responsive) */}
      <div
        className={`fixed inset-0 z-50 ${isCartOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isCartOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-out ${
            isCartOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={handleBackdropClick}
        />

        {/* Drawer */}
        <aside
          ref={cartDrawerRef}
          className={`absolute right-0 top-0 h-full w-[22rem] max-w-[90vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">Shopping Cart</h3>
            <button
              onClick={closeCart}
              className="text-gray-400 hover:text-gray-600 p-1"
              type="button"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Content placeholder (no add-to-cart feature) */}
          <div className="p-6 text-gray-600">
            <p className="text-sm">You are not order yet</p>
          </div>
        </aside>
      </div>

      <main className="p-4">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
