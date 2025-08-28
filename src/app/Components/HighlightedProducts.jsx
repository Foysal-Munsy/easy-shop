import ProductCard from "./ProductCard";

export default async function HighlightedProducts() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products.json`,
    {
      cache: "no-store",
    }
  );
  const products = await data.json();
  //   console.log("🚀 ~ HighlightedProducts ~ products:", products);

  return (
    <div>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
