import ProductPreview from "@/components/ProductPreview";
import { Button } from "@/components/ui/button";
import useGetRequest from "@/hooks/use-get-request";
import { Link } from "react-router-dom";

function ProductsPage() {
  const queryParams = (categoryId) => ({
    userId: import.meta.env.VITE_STORE_OWNER_ID,
    _embed: "rates",
    categoryId,
  });

  const productsCat1 = useGetRequest("/products", queryParams(1));
  const productsCat2 = useGetRequest("/products", queryParams(2));
  const productsCat3 = useGetRequest("/products", queryParams(3));
  const productsCat4 = useGetRequest("/products", queryParams(4));

  const categories = [
    { id: 1, name: "Cellphones", request: productsCat1 },
    { id: 2, name: "Monitors", request: productsCat2 },
    { id: 3, name: "Gaming", request: productsCat3 },
    { id: 4, name: "Accessories", request: productsCat4 },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      {categories.map((category, index) => {
        const { id, name, request } = category;
        const { result: products, error, done } = request;

        return (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">{name}</h1>
              <Button asChild className="bg-mainBlack text-lg">
                <Link to={String(id)}>View All</Link>
              </Button>
            </div>
            <div className="flex gap-3 justify-between flex-wrap lg:flex-nowrap">
              {products?.slice(0, 4).map((product, index) => {
                const rateCount = product?.rates ? product.rates.length : 0;
                const rateSum =
                  rateCount > 0
                    ? product.rates.reduce(
                        (accRate, currRate) => accRate + currRate.rating,
                        0
                      )
                    : 0;
                const rateAverage = Math.floor(rateSum / rateCount);

                return (
                  <ProductPreview
                    key={index}
                    id={product.id}
                    imageUrl={product.image}
                    title={product.title}
                    price={product.price}
                    rating={rateAverage}
                    ratingCount={rateCount}
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
