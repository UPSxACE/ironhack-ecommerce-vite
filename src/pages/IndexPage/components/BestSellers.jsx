import { Link } from "react-router-dom";
// import Button from "../../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function BestSellers() {
  return (
    <section id="best-sellers" className="flex mt-8">
      <Link to={"/"}>
        <article className="max-w-[240px] flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Best Selling Products</h1>
          <p className="text-stone-500 font-medium">
            The most wanted products, ready to be shipped to 47 different
            countries, including yours.
          </p>

          <Button className={"bg-mainBlack w-fit"}>
            See More <FaArrowRightLong className="ml-2" />
          </Button>
          {/* <Button Icon={FaArrowRightLong}>See more</Button> */}
        </article>
      </Link>
    </section>
  );
}
