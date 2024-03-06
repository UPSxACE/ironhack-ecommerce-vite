import ProductPreview from "@/components/ProductPreview";
import ProductPreviewSkeleton from "@/components/ProductPreviewSkeleton";
import useGetRequest from "@/hooks/use-get-request";
import { useParams } from "react-router-dom";

const categories = {
  1: "Cellphones",
  2: "Monitors",
  3: "Gaming",
  4: "Accessories",
};

function ProductsCategoryPage() {
  const { id } = useParams();

  const {
    done,
    error,
    result: categoryProducts,
  } = useGetRequest(`products`, {
    _embed: "rates",
    categoryId: id,
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">{categories[id]}</h1>
      </div>
      <div className="flex flex-wrap justify-between gap-3">
        {(!done || error) &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => {
            return <ProductPreviewSkeleton key={x} />;
          })}
        {done &&
          !error &&
          categoryProducts?.map((product, index) => {
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
}

export default ProductsCategoryPage;
