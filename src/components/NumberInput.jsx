import { useState } from "react";
import { Button } from "./ui/button";

export default function NumberInput(props) {
  const [value, setValue] = useState(0);
  return (
    <fieldset
      {...props}
      className={
        "flex-[1.25] flex h-10 min-w-[120px] max-w-[200px] " +
        (props.className || "")
      }
    >
      <Button
        className="rounded-e-none bg-mainBlack"
        onClick={() => setValue((value) => Math.max(0, value - 1))}
      >
        -
      </Button>
      <div className="flex-[1.25] flex justify-center items-center h-full border border-black">
        <span>{value}</span>
      </div>
      <Button
        className="rounded-s-none bg-mainBlack"
        onClick={() => setValue((value) => value + 1)}
      >
        +
      </Button>
    </fieldset>
  );
}
