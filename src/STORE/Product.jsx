import Rating from "./Rating";
import { useState } from "react";
export default function Product({ product }) {
  const initialDescriptionLength = 70;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = product.description;
  const truncatedDescription = showFullDescription
    ? description
    : description.slice(0, initialDescriptionLength) + "...";

  return (
    <div>
      <div className="card align-items-center" style={{ width: "24rem" }}>
        <div className="row">
          <img
            className="card-img-top pt-2 col-11"
            src={product.image}
            alt="Card image cap"
            style={{ width: "13rem", height: "13rem" }}
          />
          <div style={{ position: "absolute", right: "0.2rem" }}>
            <Rating rate={product.rating.rate} />
          </div>
        </div>

        <div className="card-body">
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text">
            {truncatedDescription}
            {description.length > initialDescriptionLength && (
              <button
                className="btn btn-link-secondary"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? (
                  <h6>
                    <small>Show Less</small>
                  </h6>
                ) : (
                  <h6>
                    <small>Show More</small>
                  </h6>
                )}
              </button>
            )}
          </p>

          <h6 className="text text-danger ">Extra 15% off</h6>
          <h4 className="text text-secondary">{product.price} $</h4>
          <a className="btn btn-warning col-12 text-danger fw-bold">
            Buy It Now
          </a>
        </div>
      </div>
    </div>
  );
}
