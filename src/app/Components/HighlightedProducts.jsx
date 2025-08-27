"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function HighlightedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);
  if (loading) <p>Loading.....</p>;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
