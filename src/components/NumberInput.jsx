import { Button } from "./ui/button";

export default function NumberInput(props) {
  return (
    <fieldset
      className={
        "flex-[1.25] flex h-10 min-w-[120px] max-w-[200px] " +
        (props.className || "")
      }
    >
      <Button
        className="rounded-e-none bg-mainBlack"
        onClick={props.onClickLess}
      >
        -
      </Button>
      <div className="flex-[1.25] flex justify-center items-center h-full border border-black">
        <span>{props.value}</span>
      </div>
      <Button
        className="rounded-s-none bg-mainBlack"
        onClick={props.onClickMore}
      >
        +
      </Button>
    </fieldset>
  );
}
