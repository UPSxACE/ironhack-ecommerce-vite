import Breadcrumbs from "@/components/Breadcrumbs";
import NumberInput from "@/components/NumberInput";
import StaticRating from "@/components/StaticRating/StaticRating";
import { Button } from "@/components/ui/button";
import useGetRequest from "@/hooks/use-get-request";
import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { useParams } from "react-router-dom";

function calculateInitialState(id) {
  const favoritesStrArrLocalStorage = localStorage.getItem("favorites"); // ['2'] or null

  if (favoritesStrArrLocalStorage === null) {
    return false;
  } else {
    return JSON.parse(favoritesStrArrLocalStorage.includes(id));
  }
}

export default function ProductDetailsPage() {
  const { id } = useParams();

  const {
    result: product,
    done,
    error,
  } = useGetRequest("/products/" + id, {
    _embed: "rates",
    _expand: "category",
  });

  const [favorited, setFavorited] = useState(calculateInitialState(id));

  const categoryName = (done && product?.category?.name) || "";

  const rateCount = product?.rates ? product.rates.length : 0;
  const rateSum = rateCount > 0 ? product.rates.reduce((accRate, currRate) => accRate + currRate.rating, 0) : 0;
  const rateAverage = Math.floor(rateSum / rateCount);

  function unfavorite() {
    let currentValue = localStorage.getItem("favorites");

    if (currentValue === null) {
      currentValue = "[]";
    }

    const currentValueArr = JSON.parse(currentValue);
    const currentValueIndex = currentValueArr.indexOf(id);
    if(currentValueIndex === -1){
      setFavorited(false);
    } else {
      // remove it
      currentValueArr.splice(currentValueIndex, 1)

      const newValue = JSON.stringify(currentValueArr)
      localStorage.setItem('favorites', newValue)
      setFavorited(false)
      
    }

  }

  function favorite() {
    let currentValue = localStorage.getItem("favorites");

    if (currentValue === null) {
      currentValue = "[]";
    }

    const currentValueArr = JSON.parse(currentValue);
    currentValueArr.push(id);

    const newValue = JSON.stringify(currentValueArr);

    localStorage.setItem("favorites", newValue);
    setFavorited(true);
  }

  return (
    <div>
      <Breadcrumbs className={"mb-3 text-lg"} text={"Store / " + categoryName} />
      <section id="product-details" className="grid gap-2 sm:gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2">
        <img src={product?.image || ""} className="h-auto bg-gray-100" />
        <article className="flex flex-col gap-4 sm:gap-5">
          <header className="flex flex-col gap-1">
            <h1 className="text-2xl lg:text-4xl font-bold">{product?.title || ""}</h1>
            <div className="flex gap-2 flex-wrap">
              <StaticRating rating={rateAverage} />
              <span className="font-medium text-gray-500">({rateCount} Reviews)</span>
            </div>
            <span className="text-2xl lg:text-3xl">${product?.price || ""}</span>
          </header>
          <p className="text-lg">{product?.description || ""}</p>
          <hr className="border-black" />
          <div className="flex gap-2 flex-wrap justify-center">
            <NumberInput className="w-full shrink-0 basis-full xs:basis-0" />
            <Button className="flex-1 bg-mainBlack">Add to Cart</Button>
            {favorited ? (
              <Button className={"flex-1 border border-red-600 xs:max-w-10 p-[0.6rem]"} variant="outline" onClick={unfavorite}>
                <HeartIcon fill={"red"} color="red" />
              </Button>
            ) : (
              <Button className={"flex-1 border border-mainBlack xs:max-w-10 p-[0.6rem]"} variant="outline" onClick={favorite}>
                <HeartIcon />
              </Button>
            )}
          </div>
          <div className="flex flex-col border border-black flex-1 rounded-md divide-y divide-black">
            <article className="flex-1 min-h-[64px] flex items-center p-5 text-6xl gap-4">
              <TbTruckDelivery strokeWidth={1} />
              <div>
                <h2 className="text-lg font-medium">Free Delivery</h2>
                <p className="underline underline-offset-1 text-base font-medium">Enter your postal code for Delivery Availability</p>
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
