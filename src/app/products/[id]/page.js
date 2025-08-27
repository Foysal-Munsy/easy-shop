import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  const data = await fetch(`http://localhost:3000/products.json`, {
    cache: "no-store",
  });
  const products = await data.json();
  const product = products.find((p) => p.id === id);
  console.log("🚀 ~ page ~ product:", product);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Details</h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        {/* Product Image */}
        <figure className="lg:w-1/2 p-4">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="object-cover w-full h-full rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </figure>

        {/* Product Info */}
        <div className="card-body lg:w-1/2 p-6">
          <h2 className="card-title text-2xl font-bold">{product.title}</h2>
          <p className="text-lg font-semibold text-primary mb-2">
            Price: ${product.price}
          </p>
          <p className="mb-4">{product.fullDescription}</p>

          <div className="mb-4">
            <p className="font-semibold">Availability:</p>
            <span
              className={`badge ${
                product.availability === "In Stock"
                  ? "badge-success"
                  : "badge-error"
              }`}
            >
              {product.availability}
            </span>
          </div>

          <p className="mb-4">
            <span className="font-semibold">Category: </span>
            {product.category}
          </p>

          <div>
            <p className="font-semibold mb-2">Features:</p>
            <ul className="list-disc list-inside">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="card-actions mt-6">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
