import { useState, useEffect, useRef, useContext } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
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
import { CartContext } from "../../context/CartContext";

const AnimatedBurgerIcon = ({ isOpen, onClick }) => {
  return (
    <button
      className="md:hidden w-10 h-10 flex flex-col justify-center items-center relative"
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
  const { pathname } = useLocation();

  // cart from context
  const {
    cartItems,
    totalQty,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categoriesRef = useRef(null);
  const mobileCategoriesRef = useRef(null);
  const cartDrawerRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => !v);
    // when opening menu, close cart
    setIsCartOpen(false);
  };

  const toggleCategories = () => setIsCategoriesOpen((v) => !v);
  const toggleMobileCategories = () => setIsMobileCategoriesOpen((v) => !v);

  const openCart = () => {
    setIsCartOpen(true);
    setIsMobileMenuOpen(false);
    setIsMobileCategoriesOpen(false);
  };
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((v) => !v);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeCart();
  };

  // close menus when route changes (nice UX)
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileCategoriesOpen(false);
    setIsCategoriesOpen(false);
    setIsCartOpen(false);
  }, [pathname]);

  // click outside for desktop categories + mobile categories
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      )
        setIsCategoriesOpen(false);

      if (
        mobileCategoriesRef.current &&
        !mobileCategoriesRef.current.contains(event.target)
      )
        setIsMobileCategoriesOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // escape key close
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
          {/* =============== MOBILE HEADER (center logo like your screenshot) =============== */}
          <div className="md:hidden py-3">
            {/* Row 1: burger | centered logo | icons */}
            <div className="grid grid-cols-3 items-center">
              {/* Left: Burger */}
              <div className="justify-self-start">
                <AnimatedBurgerIcon
                  isOpen={isMobileMenuOpen}
                  onClick={toggleMobileMenu}
                />
              </div>

              {/* Center: Logo */}
              <div className="justify-self-center">
                <h1
                  className="text-xl font-bold text-[#178ED8] cursor-pointer flex items-center gap-1"
                  onClick={() => navigate("/")}
                >
                  DailyDrinks
                </h1>
              </div>

              {/* Right: Icons */}
              <div className="justify-self-end flex items-center gap-5">
                <Link to="/favorite" className="relative text-gray-700">
                  <FiHeart className="text-xl" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    2
                  </span>
                </Link>

                <button
                  onClick={openCart}
                  type="button"
                  className="relative text-gray-700"
                >
                  <FiShoppingCart className="text-xl" />
                  {totalQty > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                      {totalQty}
                    </span>
                  )}
                </button>

                <button type="button" className="text-gray-700">
                  <MdOutlineAccountCircle className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Row 2: Full-width Search */}
            <div className="mt-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label="Search"
                >
                  <FiSearch className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* =============== DESKTOP HEADER =============== */}
          <div className="hidden md:block">
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

              {/* Search Bar */}
              <div className="flex flex-1 max-w-lg mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-1 flex items-center"
                    type="button"
                    aria-label="Search"
                  >
                    <FiSearch className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Right icons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleCart}
                  className="relative flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
                  type="button"
                >
                  <FiShoppingCart className="text-xl" />
                  <span className="text-sm">Cart</span>

                  {totalQty > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalQty}
                    </span>
                  )}
                </button>

                <button
                  className="flex gap-2 px-4 py-2 text-black transition"
                  type="button"
                >
                  <MdOutlineAccountCircle className="text-2xl text-gray-700" />
                  Account
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center justify-between py-3 border-t border-gray-200">
              <div className="flex items-center">
                <div className="relative" ref={categoriesRef}>
                  <button
                    className="flex items-center space-x-1 px-4 py-2 text-white bg-[#178ED8] hover:bg-blue-400 font-bold transition rounded-md"
                    onClick={toggleCategories}
                    type="button"
                    aria-expanded={isCategoriesOpen}
                    aria-controls="categories-menu"
                  >
                    <span>All Categories</span>
                    <FiChevronDown
                      className={`transform transition-transform duration-200 ${
                        isCategoriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id="categories-menu"
                    role="menu"
                    className={`absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 transition-all duration-200 origin-top z-50 ${
                      isCategoriesOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Link
                      to="/shop/water"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      role="menuitem"
                    >
                      Water&Hydration
                    </Link>
                    <Link
                      to="/shop/energydrink"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      role="menuitem"
                    >
                      Energy Drink
                    </Link>
                    <Link
                      to="/shop/softdrink"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      role="menuitem"
                    >
                      Soft&Soda Drink
                    </Link>
                    <Link
                      to="/shop/beer"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      role="menuitem"
                    >
                      Beer&Alcohol
                    </Link>
                    <Link
                      to="/shop/juice"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      role="menuitem"
                    >
                      Juice
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="flex space-x-20">
                  <Link to="/" className="text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    About
                  </Link>
                  <Link
                    to="/shop"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/reviews"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Reviews
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Contact
                  </Link>
                </div>
              </div>

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
          </div>

          {/* =============== MOBILE MENU  =============== */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {/* categories */}
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
                        to="/shop/water"
                        className="block py-1 text-gray-700 hover:text-blue-600"
                      >
                        Water&Hydration
                      </Link>
                      <Link
                        to="/shop/energydrink"
                        className="block py-1 text-gray-700 hover:text-blue-600"
                      >
                        Energy Drink
                      </Link>
                      <Link
                        to="/shop/softdrink"
                        className="block py-1 text-gray-700 hover:text-blue-600"
                      >
                        Soft&Soda Drink
                      </Link>
                      <Link
                        to="/shop/beer"
                        className="block py-1 text-gray-700 hover:text-blue-600"
                      >
                        Beer&Alcohol
                      </Link>
                      <Link
                        to="/shop/juice"
                        className="block py-1 text-gray-700 hover:text-blue-600"
                      >
                        Juice
                      </Link>
                    </div>
                  </div>
                </div>

                {/* pages */}
                <Link to="/" className="py-2 text-gray-700 hover:text-blue-600">
                  Home
                </Link>
                <Link
                  to="/about"
                  className="py-2 text-gray-700 hover:text-blue-600"
                >
                  About
                </Link>
                <Link
                  to="/shop"
                  className="py-2 text-gray-700 hover:text-blue-600"
                >
                  Shop
                </Link>
                <Link
                  to="/reviews"
                  className="py-2 text-gray-700 hover:text-blue-600"
                >
                  Reviews
                </Link>
                <Link
                  to="/contact"
                  className="py-2 text-gray-700 hover:text-blue-600"
                >
                  Contact
                </Link>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button
                    onClick={openCart}
                    className="relative flex items-center space-x-2 text-gray-700"
                    type="button"
                  >
                    <FiShoppingCart className="text-2xl" />
                    <span className="text-sm">Cart</span>
                    {totalQty > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {totalQty}
                      </span>
                    )}
                  </button>

                  <button
                    className="flex gap-2 px-4 py-2 text-black transition"
                    type="button"
                  >
                    <MdOutlineAccountCircle className="text-2xl text-gray-700" />
                    Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 ${
          isCartOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isCartOpen}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-out ${
            isCartOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={handleBackdropClick}
        />

        <aside
          ref={cartDrawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
          className={`absolute right-0 top-0 h-full w-[22rem] max-w-[90vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">
              Shopping Cart {totalQty > 0 ? `(${totalQty})` : ""}
            </h3>
            <button
              onClick={closeCart}
              className="text-gray-400 hover:text-gray-600 p-1"
              type="button"
              aria-label="Close cart"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="p-4 h-[calc(100%-170px)] overflow-auto">
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-600">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 border-b pb-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />

                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.category}</p>

                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm font-bold text-green-600">
                          ${item.price}{" "}
                          <span className="text-xs text-gray-500">USD</span>
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-xs hover:underline"
                          type="button"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-2 py-1 border rounded"
                          type="button"
                        >
                          -
                        </button>
                        <span className="text-sm">{item.qty}</span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="px-2 py-1 border rounded"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 ">
            <div className="flex items-center justify-between font-semibold">
              <span>Total:</span>
              <span>${Number(totalPrice).toFixed(2)}</span>
            </div>

            <button
              className={`mt-3 w-full py-2 rounded font-semibold ${
                cartItems.length === 0
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#178ED8] text-white hover:bg-blue-500"
              }`}
              type="button"
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
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
