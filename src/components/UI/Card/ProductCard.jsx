import Card from "./Card.jsx";
import F1 from "../../../assets/Product_Img/Freshy.png";
import { Carousel } from "primereact/carousel";
import "./productCard.css";
import products from "../../../data/product.js";

const ProductCard = () => {
  const mostSellingProducts = products.filter((p) => p.isMostSelling);

  // Like the official demo
  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 5, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const productTemplate = (p) => {
    return (
      <div className="flex justify-center">
        <Card product={p} />
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={mostSellingProducts}
        numVisible={5}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        circular
        autoplayInterval={4000}
        showIndicators
      />
    </div>
  );
};

export default ProductCard;
