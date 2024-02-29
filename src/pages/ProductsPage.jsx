import ProductPreview from "@/components/ProductPreview";
import { Button } from "@/components/ui/button";
import useGetRequest from "@/hooks/use-get-request";
import { Link } from "react-router-dom";

function ProductsPage() {
  const queryParams = {
    userId: import.meta.env.VITE_STORE_OWNER_ID,
    _embed: "products",
  };

  const productsCat1 = useGetRequest("/categories/1", queryParams);
  const productsCat2 = useGetRequest("/categories/2", queryParams);
  const productsCat3 = useGetRequest("/categories/3", queryParams);
  const productsCat4 = useGetRequest("/categories/4", queryParams);

  const categories = [productsCat1, productsCat2, productsCat3, productsCat4];

  return (
    <div className="flex flex-col gap-y-4">
      {categories.map((category, index) => {
        return (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">{category?.result?.name}</h1>
              <Button asChild className="bg-mainBlack text-lg">
                <Link to={`${category?.result?.id}`}>View All</Link>
              </Button>
            </div>
            <div className="flex gap-3 justify-between flex-wrap lg:flex-nowrap">
              {category?.result?.products?.slice(0, 4).map((product, index) => {
                return (
                  <ProductPreview
                    key={index}
                    id={product.id}
                    imageUrl={product.image}
                    title={product.title}
                    price={product.price}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsPage;
