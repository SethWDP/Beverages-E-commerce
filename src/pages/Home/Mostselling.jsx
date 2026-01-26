import ProductCard from "../../components/UI/Card/ProductCard";

const Mostselling = () => {
  return (
    <section className="most-sell my-10">
      <h2 className="font-bold text-2xl">
        <span className="text-blue-500">Most</span> Selling
      </h2>

      <article className="box-card my-4 w-full h-100 ">
        {/* ✅ PASS PROPS HERE */}
        <ProductCard />
      </article>
    </section>
  );
};

export default Mostselling;
