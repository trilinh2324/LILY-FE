import React from "react";
import "./Bed.css";
import { products } from "./products";
import "./Products.css";
import { Link } from "react-router-dom";
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
export default function Bed() {
  const filteredProducts = products.filter(
    (product) => product.category === "Bed"
  );
  console.log(filteredProducts);
  return (
    <div className="Bed-Products">
      <h1>Bed</h1>
      <div className="Bed-productsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Bed-cardproduct">
              <MDBCardImage
                className="Bed-ProductsImg"
                src={product.image}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle className="Bed-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Bed-ProductsCategory">
                  {product.category}
                </MDBCardText>
                <MDBCardText className="Bed-ProductsPrice">
                  Price: {product.price}
                </MDBCardText>
              </MDBCardBody>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}