import { Link } from "react-router-dom";
import StaticRating from "./StaticRating/StaticRating";

export default function ProductPreview({
  id,
  title,
  price,
  rating,
  ratingCount,
  imageUrl,
  linkClass,
  articleClass,
  imageWrapperClass,
  imageClass,
}) {
  return (
    <Link to={"/"} className={linkClass}>
      <article className={"flex flex-col gap-1 w-[240px] " + articleClass}>
        <div className={"bg-gray-100 w-[240px] h-[240px] " + imageWrapperClass}>
          <img
            src={imageUrl}
            className={"w-full h-full object-cover " + imageClass}
          />
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
