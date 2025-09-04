import React from "react";
import Card from "../components/Card";
import { productData } from "../data/products";

const Product = () => {
  return (
    <>
      <main className="p-3">
        <h1 className="display-2 fw-bold text-center">Explore Our Products</h1>
        <hr />
        <div className="container">
          <div className="row">
            {productData.filter(product => product.category == "Pants").map((product) => (
              <div className="col-4">
                 <Card
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category = {product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
