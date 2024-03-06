import { Skeleton } from "./ui/skeleton";

export default function ProductPreviewSkeleton({
  articleClass,
  imageWrapperClass,
}) {
  return (
    <article className={"flex flex-col gap-1 w-[240px] " + articleClass}>
      <Skeleton className={"w-[240px] h-[240px] " + imageWrapperClass} />
      <Skeleton className="mt-2 h-6" />
      <Skeleton className="h-6" />
      <div className="flex gap-2 flex-wrap">
        <Skeleton className="h-6 flex-1" />
        <Skeleton className="h-6 flex-1" />
      </div>
    </article>
  );
}
