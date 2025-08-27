import React from "react";
import AllProducts from "./Components/AllProducts";

export default function page() {
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-3xl font-bold">Explore The Products</h2>
      <AllProducts />
    </div>
  );
}
