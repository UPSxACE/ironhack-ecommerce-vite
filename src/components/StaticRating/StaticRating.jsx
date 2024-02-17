import Star from "./components/Star";

export default function StaticRating({ rating }) {
  return (
    <div className="flex text-yellow-400 text-lg">
      <Star on={true} />
      <Star on={rating >= 2} />
      <Star on={rating >= 3} />
      <Star on={rating >= 4} />
      <Star on={rating >= 5} />
    </div>
  );
}
