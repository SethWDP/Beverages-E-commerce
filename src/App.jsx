import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Homepage from "./pages/Home/Homepage";
import Aboutpage from "./pages/About/Aboutpagepage";
import Contactpage from "./pages/Contact/Contactpage";
import Favoritepage from "./pages/Favorite/Favoritepage";
import Shoppage from "./pages/Shop/Shoppage";
import Beer from "./pages/Shop/Beer";
import Energypage from "./pages/Shop/Energypage";
import Juicepage from "./pages/Shop/Juicepage";
import Waterpage from "./pages/Shop/Waterpage";
import Softdrinkpage from "./pages/Shop/Softdrinkpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/favotite" element={<Favoritepage />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/beer" element={<Beer />} />
          <Route path="/energydrink" element={<Energypage />} />
          <Route path="/freshjuice" element={<Juicepage />} />
          <Route path="/water" element={<Waterpage />} />
          <Route path="/softdrink" element={<Softdrinkpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
