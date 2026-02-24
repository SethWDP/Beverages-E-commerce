import Card from "../ui/card/Card"; // ឲ្យត្រឹម path របស់បង

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <Card
          key={p.id}
          img={p.img}
          name={p.name}
          category={p.category}
          priceR={`$${p.price}`}
          priceD={p.currency || "USD"}
          product={p} // ✅ for AddToCart
        />
      ))}
    </div>
  );
}
