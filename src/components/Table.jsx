const Table = ({ product, removeFromWishlist }) => {
  const { name, image, price, id } = product;

  const handleRemoveWishlist = (id) => {
    removeFromWishlist(id);
  };

  return (
    <>
      <tbody>
        <tr>
          <td>
            <div className="flex items-center gap-3">
              <div className="font-bold">{name}</div>
              <div></div>
            </div>
          </td>
          <td>
            <div className="avatar">
              <div className="rounded-lg h-20 w-20">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </td>
          <td>${price}</td>
          <th>
            <button
              onClick={() => handleRemoveWishlist(id)}
              className="btn btn-ghost btn-xs"
            >
              Remove
            </button>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default Table;
