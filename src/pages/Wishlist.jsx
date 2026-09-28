import { useMemo, useState } from "react";
import Table from "../components/Table";
import useWishlist from "../hooks/useWishlist";
import { List, ListSortAscending, ListSortDescending } from "lucide-react";
import Chart from "../components/Chart";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const [sortOrder, setSortOrder] = useState("default");

  const handleClear = () => {
    clearWishlist();
  };

  const handleSortToggle = () => {
    if (sortOrder === "default") {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("default");
    }
  };

  const sortedProducts = useMemo(() => {
    const productsCopy = [...wishlist];

    if (sortOrder === "asc") {
      return productsCopy.sort((a, b) => a.price - b.price);
    }
    if (sortOrder === "desc") {
      return productsCopy.sort((a, b) => b.price - a.price);
    }

    return wishlist;
  }, [sortOrder, wishlist]);

  const renderSortIcon = () => {
    if (sortOrder === "asc")
      return <ListSortAscending className="w-5 h-5 text-blue-500" />;
    if (sortOrder === "desc")
      return <ListSortDescending className="w-5 h-5 text-blue-500" />;
    return <List className="w-5 h-5 text-blue-500"></List>;
  };

  return (
    <>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-3xl text-semibold text-teal-400">
          Your Products{" "}
          <span className="text-sm">({wishlist.length} Products found)</span>
        </h2>
        <div className="flex justify-between items-center gap-5">
          <button onClick={handleClear} className="btn btn-outline btn-sm">
            Clear
          </button>
          <button onClick={handleSortToggle} className="btn btn-outline btn-sm">
            Sort {renderSortIcon()}
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {sortedProducts.map((product) => (
              <Table
                key={product.id}
                product={product}
                removeFromWishlist={removeFromWishlist}
              ></Table>
            ))}
          </table>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl">Wishlist Summary</h2>
        <div className="rounded-xl p-5">
          <Chart></Chart>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
