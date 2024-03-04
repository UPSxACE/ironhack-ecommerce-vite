import ProductPreview from "@/components/ProductPreview";
import useGetRequest from "@/hooks/use-get-request";
import { useParams } from "react-router-dom";
import LazyProductPreview from "./LazyProductPreview";

export default function FavouritesPage() {
  const productsLocalStorge = localStorage.getItem("favorites") || "[]"
  const productIds = JSON.parse(productsLocalStorge).map(idStr => Number(idStr))

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl">Favourites</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productIds?.map((productId, index) => {
          return <LazyProductPreview key={index} productId={productId} />;
        })}
      </div>
    </div>
  );
}
