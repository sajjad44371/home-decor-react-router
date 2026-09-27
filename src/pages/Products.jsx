import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const searchedProducts = term
    ? products.filter((product) => product.name.toLowerCase().includes(term))
    : products;

  return (
    <>
      <div>
        <div className="flex justify-between items-center pt-10">
          <h2 className="text-3xl font-semibold">
            All Products{" "}
            <span className="text-sm">
              ({searchedProducts.length} Products Found)
            </span>
          </h2>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                placeholder="Search Products"
                onChange={(e) => setSearch(e.target.value)}
                defaultValue={search}
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
