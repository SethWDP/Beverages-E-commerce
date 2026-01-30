import { useParams } from "react-router-dom";
import products from "../../data/product";
import ProductList from "../../components/product/ProductList";

const titles = {
  water: "Water & Hydration",
  energydrink: "Energy Drink",
  softdrink: "Soft & Soda Drink",
  beer: "Beer & Alcohol",
  juice: "Juice",
};

export default function CategoryPage() {
  const { category } = useParams();
  const filtered = products.filter((p) => p.category === category);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{titles[category] ?? category}</h1>
        <p className="text-sm text-gray-500">{filtered.length} items</p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <ProductList products={filtered} />
      )}
    </section>
  );
}
