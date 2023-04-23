import productApi from "@/apis/product.api";
import ProductCart from "@/components/ProductCart";
import { Product, ProductList } from "@/types/product.type";
import { SuccessResponse } from "@/types/utils.type";
import { GetStaticProps } from "next";
import React from "react";

type ProductListPage = {
  products: SuccessResponse<ProductList>;
};

export default function ProductListPage({ products }: ProductListPage) {
  return (
    <div className="grid grid-cols-2 sf-grid sf__ms-wrapper sf__col-5 md:grid-cols-3 xl:grid-cols-5 ">
      {products.data.products.map((product) => (
        <ProductCart key={product._id} product={product}></ProductCart>
      ))}
    </div>
  );
}
export const getStaticProps: GetStaticProps<{
  products: SuccessResponse<ProductList>;
}> = async (context) => {
  const { data: products } = await productApi.getProducts();
  return {
    props: {
      products,
    },
  };
};
