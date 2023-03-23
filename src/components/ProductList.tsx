import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);
  console.log(products);

  //afterRender
  useEffect(() => {
    console.log("Fetching products");
    setProducts(["Clothing", "Household"]);
  });

  return <div>ProductList</div>;
};

export default ProductList;
