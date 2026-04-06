import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Homepage from "./pages/Home/Homepage";
import Aboutpage from "./pages/About/Aboutpage";
import Contactpage from "./pages/Contact/Contactpage";
import Favoritepage from "./pages/Favorite/Favoritepage";
import CreateAcc from "./pages/Account/CreateAccount";
import Shoppage from "./pages/Shop/Shoppage";
import Error404 from "./pages/Error404";
import CategoryPage from "./pages/Shop/CategoryPage";
import CartProvider from "./context/CartProvider";
import Cartpage from "./components/cart/Cartpage";
import FavoriteProvider from "./context/FavoriteProvider";
import Review from "./pages/Review";
import Profile from "./pages/Account/Profile";
import LoginPage from "./pages/Account/LoginPage";
import ProductDetail from "./pages/Product/ProductDetail";
import Payments from "./pages/Product/Payments";
import { SearchProvider } from "./context/SearchContext";
function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <FavoriteProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/reviews" element={<Review />} />
                <Route path="/contact" element={<Contactpage />} />
                <Route path="/favorite" element={<Favoritepage />} />
                <Route path="/create_Account" element={<CreateAcc />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/shop" element={<Shoppage />} />
                <Route path="/payment" element={<Payments />} />
                <Route path="/shop/:category" element={<CategoryPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cartpage />} />
                <Route path="/*" element={<Error404 />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FavoriteProvider>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
