import NumberInputSm from "@/components/NumberInputSm";
import { Button } from "@/components/ui/button";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function CartItem({ data, onClickLess, onClickMore, onDelete }) {
  return (
    <article className="flex gap-3 items-start bg-gray-100 overflow-hidden rounded-lg">
      <img src={data.image} className="w-2/6 max-w-56 h-auto" />
      <div className="flex flex-col gap-1 flex-1 min-h-full pt-2 pb-3">
        <h1 className="text-xl font-semibold line-clamp-1">{data.title}</h1>
        <p className="line-clamp-4 text-sm text-gray-500">
          {data.description}{" "}
        </p>
        <span className="font-medium mt-auto">${data.price}</span>
        <div>
          <NumberInputSm
            value={data._amount}
            onClickLess={onClickLess}
            onClickMore={onClickMore}
          />
        </div>
      </div>
      <div className="pr-2">
        <Button
          variant="transparent"
          className="rounded-full text-2xl text-gray-500 p-0 pt-2   "
          size="sm"
          onClick={onDelete}
        >
          <IoIosCloseCircleOutline />
        </Button>
      </div>
    </article>
  );
}
