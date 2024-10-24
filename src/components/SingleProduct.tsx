import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }: any) => {
  const { _id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Link to={`/products/${_id}`}>
          <img src={image_url} alt="Shoes" className="bg-rose-400" />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p className="line-clamp-1">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
