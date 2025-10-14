import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Homepage from "./pages/Home/Homepage";
import Aboutpage from "./pages/About/Aboutpage";
import Contactpage from "./pages/Contact/Contactpage";
import Favoritepage from "./pages/Favorite/Favoritepage";
import Shoppage from "./pages/Shop/Shoppage";
import Beer from "./pages/Shop/Beer";
import Water from "./pages/Shop/Waterpage";
import Juice from "./pages/Shop/Juicepage";
import Energy from "./pages/Shop/Energypage";
import Soft from "./pages/Shop/Softdrinkpage";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/favorite" element={<Favoritepage />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/shop/beer" element={<Beer />} />
          <Route path="/shop/water" element={<Water />} />
          <Route path="/shop/juice" element={<Juice />} />
          <Route path="/shop/energydrink" element={<Energy />} />
          <Route path="/shop/softdrink" element={<Soft />} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
