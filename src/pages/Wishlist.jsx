import Table from "../components/Table";
import useWishlist from "../hooks/useWishlist";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <>
      <h2 className="text-3xl text-semibold text-teal-400 text-center my-5">
        Your Products
      </h2>
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
            {wishlist.map((product) => (
              <Table
                key={product.id}
                product={product}
                removeFromWishlist={removeFromWishlist}
              ></Table>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
