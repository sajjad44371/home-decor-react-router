import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import useWishlist from "../hooks/useWishlist";

const ProductDetails = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const { products } = useProducts();
  const { addToWishlist } = useWishlist();

  const productData = products.find((product) => product.id === id);
  if (!productData) {
    return <p>Loading...</p>;
  }

  const handleSetWishlist = (product) => {
    addToWishlist(product);
  };

  return (
    <>
      <div className="flex justify-center items-center py-10">
        <div className="aura aura-rainbow">
          <div className="card w-3xl mx-auto bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold mb-5">{productData.name}</h2>
              </div>
              <figure>
                <img
                  className="w-full h-100 rounded-2xl"
                  src={productData.image}
                  alt={productData.name}
                />
              </figure>
              <div>
                <p>{productData.description}</p>
              </div>
              <div className="flex gap-5">
                <div className="badge badge-neutral badge-outline">
                  {productData.category}
                </div>
                <div className="badge badge-neutral badge-outline">
                  {productData.material}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="badge badge-soft badge-secondary">
                  ${productData.price}
                </div>
                <div className="badge badge-soft badge-success">
                  {productData.stock ? "In stock" : "Out of stock"}
                </div>
              </div>
              <div className="badge badge-md">
                Size: {productData.dimensions}
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handleSetWishlist(productData)}
                  className="btn btn-primary btn-block btn-outline"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
