const ProductCard = ({ product }) => {
  const { name, category, price, image, description } = product;
  return (
    <>
      <div className="card bg-base-100 shadow-sm hover:scale-105 transition-all ease-in-out">
        <figure>
          <img className="h-75 w-full" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
