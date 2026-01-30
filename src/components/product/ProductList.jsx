export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.id} className="p-4 border rounded">
          {p.name}
        </div>
      ))}
    </div>
  );
}
