import ProductPreview from "@/components/ProductPreview";
import ProductPreviewSkeleton from "@/components/ProductPreviewSkeleton";
import { Button } from "@/components/ui/button";
import useGetRequest from "@/hooks/use-get-request";
import { Link } from "react-router-dom";

function ProductsPage() {
  const queryParams = (categoryId) => ({
    userId: import.meta.env.VITE_STORE_OWNER_ID,
    _embed: "rates",
    _limit: 4,
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
              {(!done || error) &&
                [1, 2, 3, 4].map((x) => {
                  return <ProductPreviewSkeleton key={x} />;
                })}
              {done &&
                !error &&
                products?.map((product, index) => {
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
                      linkClass={
                        "max-lg:flex-1 max-sm:basis-full max-sm:max-w-full max-md:basis-[calc(50%-(0.75rem/2))] max-md:max-w-[calc(50%-(0.75rem/2))] max-lg:basis-[calc((100%/3)-(1.5rem/3))] max-lg:max-w-[calc((100%/3)-(1.5rem/3))] max-lg:h-auto"
                      }
                      articleClass={"max-lg:w-full max-sm:h-auto"}
                      imageWrapperClass={"w-full w-full"}
                      imageClass={"max-h-[320px]"}
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
