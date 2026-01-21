import ProductCard from "./ProductCard";

const Card = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          img={item.img}
          name={item.name}
          category={item.category}
          priceR={item.priceR}
          priceD={item.priceD}
        />
      ))}
    </div>
  );
};

export default Card;
