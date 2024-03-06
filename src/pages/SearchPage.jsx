import LoadingSpinner from "@/components/LoadingSpinner";
import ProductPreview from "@/components/ProductPreview";
import useGetRequest from "@/hooks/use-get-request";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { query } = useParams();

  const {
    done,
    error,
    result: products,
    updateParams,
  } = useGetRequest("/products", {
    userId: import.meta.env.VITE_STORE_OWNER_ID,
    _embed: "rates",
    q: query,
  });

  useEffect(() => {
    const obj = {
      userId: import.meta.env.VITE_STORE_OWNER_ID,
      _embed: "rates",
      q: query,
    };
    updateParams(obj);
  }, [query, updateParams]);

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl">
        <strong className="font-bold">Searching for:</strong> {query}
      </h1>
      {done && !error && (
        <span className="mb-4 text-gray-600">Results: {products?.length}</span>
      )}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
        {(!done || error) && (
          <div className="col-span-1 xs:col-span-2 md:col-span-3 lg:col-span-4 h-full flex justify-center items-center">
            <LoadingSpinner />
          </div>
        )}
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
                linkClass={"w-full"}
                articleClass={"w-full"}
                imageWrapperClass={"w-full"}
              />
            );
          })}
      </div>
    </div>
  );
}
