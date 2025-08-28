// Home Page
import { getServerSession } from "next-auth";
import Hero from "./Components/Hero";
import HighlightedProducts from "./Components/HighlightedProducts";
import UserInfo from "./Components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Hero />
      <UserInfo />
      {JSON.stringify(session)}
      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold">Highlighted Products</h2>
        <HighlightedProducts />
      </div>
    </div>
  );
}
