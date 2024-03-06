import { Link } from "react-router-dom";
// import Button from "../../../components/Button";
import ProductPreview from "@/components/ProductPreview";
import ProductPreviewSkeleton from "@/components/ProductPreviewSkeleton";
import { Button } from "@/components/ui/button";
import useGetRequest from "@/hooks/use-get-request";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BestSellers() {
  const {
    result: products,
    done,
    error,
  } = useGetRequest("/products", {
    userId: import.meta.env.VITE_STORE_OWNER_ID,
    _page: 1,
    _limit: 3,
    _embed: "rates",
    _sort: "purchases",
    _order: "desc",
  });

  return (
    <section id="best-sellers" className="flex mt-8 flex-wrap lg:flex-nowrap">
      <article className="flex flex-col gap-4 basis-full lg:basis-0 lg:flex-1 pr-0 lg:pr-4">
        <h1 className="text-4xl font-bold">Best Selling Products</h1>
        <p className="text-stone-500 font-medium">
          The most wanted products, ready to be shipped to 47 different
          countries, including yours.
        </p>
        <Link to={"/products"}>
          <Button className={"bg-mainBlack w-fit"}>
            See More <FaArrowRightLong className="ml-2" />
          </Button>{" "}
        </Link>
        {/* <Button Icon={FaArrowRightLong}>See more</Button> */}
      </article>

      <div className="flex mt-8 lg:mt-0 gap-12 lg:gap-4 flex-wrap lg:flex-nowrap justify-around lg:justify-between w-full">
        {(!done || error) &&
          [1, 2, 3].map((x) => {
            return (
              <ProductPreviewSkeleton
                articleClass={"max-sm:w-full max-sm:h-auto"}
                imageWrapperClass={"max-sm:w-full max-h-[320px]"}
                key={x}
              />
            );
          })}
        {done &&
          !error &&
          products.map((product) => {
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
                key={product.id}
                id={product.id}
                imageUrl={product.image}
                title={product.title}
                price={product.price}
                rating={rateAverage}
                ratingCount={rateCount}
                linkClass={"max-sm:w-full max-sm:h-auto"}
                articleClass={"max-sm:w-full max-sm:h-auto"}
                imageWrapperClass={"w-full w-full"}
                imageClass={"max-h-[320px]"}
              />
            );
          })}
      </div>
    </section>
  );
}
