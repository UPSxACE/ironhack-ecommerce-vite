import { Link } from "react-router-dom";
import StaticRating from "./StaticRating/StaticRating";

export default function ProductPreview({
  title,
  price,
  rating,
  ratingCount,
  imageUrl,
}) {
  return (
    <Link to={"/"}>
      <article className="flex flex-col gap-1 w-[240px]">
        <div className="bg-gray-100 w-[240px] h-[240px]">
          <img src={imageUrl} className="w-full h-full" />
        </div>
        <h1 className="font-medium mt-2">{title}</h1>
        <span className="text-red-600 font-medium">${price}</span>
        <div className="flex gap-2 flex-wrap">
          <StaticRating rating={rating} />
          <span className="font-medium text-gray-500">({ratingCount})</span>
        </div>
      </article>
    </Link>
  );
}
