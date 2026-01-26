import Card from "./Card.jsx";
import F1 from "../../../assets/Product_Img/Freshy.png";
import { Carousel } from "primereact/carousel";
import "./productCard.css";

const ProductCard = () => {
  const mostSellingProducts = [
    {
      id: "f1",
      name: "ទឹកបរិសុទ្ធកម្ពុជា​ 500ml",
      category: "Mineral Water",
      priceR: "៛1,000",
      priceD: "$0.25",
      img: F1,
    },
    {
      id: "f2",
      name: "ទឹកបរិសុទ្ធកម្ពុជា​ 500ml",
      category: "Mineral Water",
      priceR: "៛1,000",
      priceD: "$0.25",
      img: F1,
    },
    {
      id: "f3",
      name: "ទឹកបរិសុទ្ធកម្ពុជា​ 500ml",
      category: "Mineral Water",
      priceR: "៛1,000",
      priceD: "$0.25",
      img: F1,
    },
    {
      id: "f4",
      name: "ទឹកបរិសុទ្ធកម្ពុជា​ 500ml",
      category: "Mineral Water",
      priceR: "៛1,000",
      priceD: "$0.25",
      img: F1,
    },
    {
      id: "f5",
      name: "ទឹកបរិសុទ្ធកម្ពុជា​ 500ml",
      category: "Mineral Water",
      priceR: "៛1,000",
      priceD: "$0.25",
      img: F1,
    },
  ];

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
        <Card
          img={p.img}
          name={p.name}
          category={p.category}
          priceR={p.priceR}
          priceD={p.priceD}
        />
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
