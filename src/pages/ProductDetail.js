import React from "react";
import BannerTitle from "../components/Banner/BannerTitle";
import ProductSingle from "../components/Product/ProductSingle";
import { ProductItem } from "../data/Product";
const ProductDetail = () => {
  console.log(ProductItem);

  const product = ProductItem.filter((Product) => Product.id === 2);
  console.log(product);

  return (
    <div>
      <BannerTitle></BannerTitle>
      <ProductSingle></ProductSingle>
    </div>
  );
};

export default ProductDetail;
