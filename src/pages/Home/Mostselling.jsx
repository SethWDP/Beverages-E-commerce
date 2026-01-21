import Card from "../../components/UI/Card/Card";
import F1 from "../../assets/Product_Img/Freshy.png";

const Mostselling = () => {
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
  ];

  return (
    <section className="most-sell my-10">
      <h2 className="font-bold text-2xl">
        <span className="text-blue-500">Most</span> Selling
      </h2>

      <article className="box-card my-4 w-full h-100 ">
        {/* ✅ PASS PROPS HERE */}
        <Card products={mostSellingProducts} />
      </article>
    </section>
  );
};

export default Mostselling;
