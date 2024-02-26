import React from "react";
import ProductPreview from "@/components/ProductPreview";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ProductsCategoryPage() {
  const { id } = useParams();
  const [productCategory, setProductCategory] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/categories/${id}?_embed=products`).then((res) => {
      console.log(res);
      setProductCategory(res.data);
    });
  }, [id]);

  if (productCategory === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">{productCategory?.name}</h1>
        <Button asChild className="bg-mainBlack text-lg">
          <Link to={`${productCategory?.id}`}>View All</Link>
        </Button>
      </div>
      <div className="flex flex-wrap justify-between gap-3">
        {productCategory?.products?.map((product, index) => {
          return <ProductPreview key={index} id={product.id} imageUrl={product.image} title={product.title} price={product.price} />;
        })}
      </div>
    </div>
  );
}

export default ProductsCategoryPage;
