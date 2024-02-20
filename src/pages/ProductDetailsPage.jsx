import Breadcrumbs from "@/components/Breadcrumbs";
import NumberInput from "@/components/NumberInput";
import StaticRating from "@/components/StaticRating/StaticRating";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";

export default function ProductDetailsPage() {
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <Breadcrumbs className={"mb-3 text-lg"} text={"Store / Gaming"} />
      <section
        id="product-details"
        className="grid gap-2 sm:gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2"
      >
        <img src="/examples/product-img.png" className="h-auto bg-gray-100" />
        <article className="flex flex-col gap-4 sm:gap-5">
          <header className="flex flex-col gap-1">
            <h1 className="text-2xl lg:text-4xl font-bold">Product Title</h1>
            <div className="flex gap-2 flex-wrap">
              <StaticRating rating={4} />
              <span className="font-medium text-gray-500">(150 Reviews)</span>
            </div>
            <span className="text-2xl lg:text-3xl">$190.32</span>
          </header>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            convallis nisl a risus congue blandit. Ut eget mattis diam. Duis
            nibh nisl, volutpat sed euismod at, vestibulum vitae odio.
            Suspendisse sodales nulla quam, quis mattis orci gravida in.
          </p>
          <hr className="border-black" />
          <div className="flex gap-2 flex-wrap justify-center">
            <NumberInput className="w-full shrink-0 basis-full xs:basis-0" />
            <Button className="flex-1 bg-mainBlack">Add to Cart</Button>
            {favorite ? (
              <Button
                className={
                  "flex-1 border border-red-600 xs:max-w-10 p-[0.6rem]"
                }
                variant="outline"
                onClick={() => setFavorite(!favorite)}
              >
                <HeartIcon fill={"red"} color="red" />
              </Button>
            ) : (
              <Button
                className={
                  "flex-1 border border-mainBlack xs:max-w-10 p-[0.6rem]"
                }
                variant="outline"
                onClick={() => setFavorite(!favorite)}
              >
                <HeartIcon />
              </Button>
            )}
          </div>
          <div className="flex flex-col border border-black flex-1 rounded-md divide-y divide-black">
            <article className="flex-1 min-h-[64px] flex items-center p-5 text-6xl gap-4">
              <TbTruckDelivery strokeWidth={1} />
              <div>
                <h2 className="text-lg font-medium">Free Delivery</h2>
                <p className="underline underline-offset-1 text-base font-medium">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </article>
            <article className="flex-1 min-h-[64px] flex items-center p-5 text-6xl gap-4">
              <HiOutlineArrowPath strokeWidth={1} />
              <div>
                <h2 className="text-lg font-medium">Free Delivery</h2>
                <p className="text-base font-medium">
                  Free 30 Days Delivery Returns. <u>Details.</u>
                </p>
              </div>
            </article>
          </div>
        </article>
      </section>
    </div>
  );
}
