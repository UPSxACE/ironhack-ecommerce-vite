import { Link } from "react-router-dom";
// import Button from "../../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import ProductPreview from "@/components/ProductPreview";

export default function BestSellers() {
  return (
    <section id="best-sellers" className="flex mt-8 flex-wrap lg:flex-nowrap">
      <article className="flex flex-col gap-4 basis-full lg:basis-0 lg:flex-1 pr-0 lg:pr-4">
        <h1 className="text-4xl font-bold">Best Selling Products</h1>
        <p className="text-stone-500 font-medium">
          The most wanted products, ready to be shipped to 47 different
          countries, including yours.
        </p>
        <Link to={"/"}>
          <Button className={"bg-mainBlack w-fit"}>
            See More <FaArrowRightLong className="ml-2" />
          </Button>{" "}
        </Link>
        {/* <Button Icon={FaArrowRightLong}>See more</Button> */}
      </article>

      <div className="flex mt-8 lg:mt-0 gap-12 lg:gap-2 flex-wrap lg:flex-nowrap justify-center lg:justify-between">
        <ProductPreview
          imageUrl={"/examples/product-img.png"}
          title={"Product Title"}
          price={"123.23"}
          rating={4}
          ratingCount={88}
        />
        <ProductPreview
          imageUrl={"/examples/product-img.png"}
          title={"Product Title"}
          price={"123.23"}
          rating={4}
          ratingCount={88}
        />
        <ProductPreview
          imageUrl={"/examples/product-img.png"}
          title={"Product Title"}
          price={"123.23"}
          rating={4}
          ratingCount={88}
        />
      </div>
    </section>
  );
}
