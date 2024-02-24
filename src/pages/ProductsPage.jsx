import { Axis3DIcon } from "lucide-react";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductPreview from "@/components/ProductPreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [ProductsCategory1, setProductsCategory1] = useState(null);
  const [ProductsCategory2, setProductsCategory2] = useState(null);
  const [ProductsCategory3, setProductsCategory3] = useState(null);
  const [ProductsCategory4, setProductsCategory4] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category/1?_embed=products")
      .then((results) => {
        console.log(results, "results here");
        setProductsCategory1(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category/2?_embed=products")
      .then((results) => {
        setProductsCategory2(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category/3?_embed=products")
      .then((results) => {
        setProductsCategory3(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category/4?_embed=products")
      .then((results) => {
        setProductsCategory4(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(ProductsCategory1);
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">{ProductsCategory1?.name}</h1>
          <Button asChild className="bg-mainBlack text-lg">
            <Link to={`${ProductsCategory1?.id}`}>View All</Link>
          </Button>
        </div>
        <div className="flex gap-3 justify-between flex-wrap lg:flex-nowrap">
          {ProductsCategory1?.products?.slice(0, 4).map((product, index) => {
            return <ProductPreview key={index} imageUrl={product.image} title={product.title} price={product.price} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">{ProductsCategory2?.name}</h1>
          <Button asChild className="bg-mainBlack text-lg">
            <Link to={`${ProductsCategory2?.id}`}>View All</Link>
          </Button>
        </div>
        <div className="flex gap-3 justify-between flex-wrap lg:flex-nowrap">
          {ProductsCategory2?.products?.slice(0, 4).map((product, index) => {
            return <ProductPreview key={index} imageUrl={product.image} title={product.title} price={product.price} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">{ProductsCategory3?.name}</h1>
          <Button asChild className="bg-mainBlack text-lg">
            <Link to={`${ProductsCategory3?.id}`}>View All</Link>
          </Button>
        </div>
        <div className="flex gap-3 justify-between flex-wrap lg:flex-nowrap">
          {ProductsCategory3?.products?.slice(0, 4).map((product, index) => {
            return <ProductPreview key={index} imageUrl={product.image} title={product.title} price={product.price} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">{ProductsCategory4?.name}</h1>
          <Button asChild className="bg-mainBlack text-lg">
            <Link to={`${ProductsCategory4?.id}`}>View All</Link>
          </Button>
        </div>
        <div className="flex gap-3 justify-between flex-wrap lg:flex-nowrap">
          {ProductsCategory4?.products?.slice(0, 4).map((product, index) => {
            return <ProductPreview key={index} imageUrl={product.image} title={product.title} price={product.price} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;

// <Link href={`products/${}`}>View All</Link>
/*useEffect(()=> {
    axios
    .get("http://localhost:3000/category?_embed=products")
    .then((results)=> {
      console.log(results, "embed category products")
    })

  })*/
