import ProductPreview from "@/components/ProductPreview";
import ProductPreviewSkeleton from "@/components/ProductPreviewSkeleton";
import useGetRequest from "@/hooks/use-get-request";

function LazyProductPreview({ productId }) {
  const {
    result: product,
    done,
    error,
  } = useGetRequest(`/products/${productId}`, { _embed: "rates" });

  const rateCount = product?.rates ? product.rates.length : 0;

  const rateSum =
    rateCount > 0
      ? product.rates.reduce(
          (accRate, currRate) => accRate + currRate.rating,
          0
        )
      : 0;
  const rateAverage = Math.floor(rateSum / rateCount);

  if (!done || error) {
    return <ProductPreviewSkeleton />;
  }

  return (
    <ProductPreview
      id={product?.id}
      imageUrl={product?.image}
      title={product?.title}
      price={product?.price}
      rating={rateAverage}
      ratingCount={rateCount}
      linkClass={"w-full"}
      articleClass={"w-full"}
      imageWrapperClass={"w-full"}
    />
  );
}

export default LazyProductPreview;
