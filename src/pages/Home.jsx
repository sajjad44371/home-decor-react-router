import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <div>
        <div className="flex justify-between items-center pt-10">
          <h2 className="text-3xl font-semibold">Featured Products</h2>
          <Link className="btn btn-outline" to="/products">
            See All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
