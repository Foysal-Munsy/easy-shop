// Home Page
import Hero from "./Components/Hero";
import HighlightedProducts from "./Components/HighlightedProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold">Highlighted Products</h2>
        <HighlightedProducts />
      </div>
    </div>
  );
}
