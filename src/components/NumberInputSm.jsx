import { Button } from "./ui/button";
export default function NumberInputSm(props) {
  return (
    <fieldset
      className={"flex-[1.25] flex h-8 w-[100px] " + (props.className || "")}
    >
      <Button
        className="rounded-e-none bg-mainBlack px-3"
        size="xs"
        onClick={props.onClickLess}
      >
        -
      </Button>
      <div className="flex-[1.25] flex justify-center items-center h-full border border-black">
        <span>{props.value}</span>
      </div>
      <Button
        className="rounded-s-none bg-mainBlack px-3"
        size="xs"
        onClick={props.onClickMore}
      >
        +
      </Button>
    </fieldset>
  );
}
