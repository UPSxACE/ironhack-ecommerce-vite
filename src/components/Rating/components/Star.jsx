import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Star({ on, number, onClick }) {
  const classes = "p-1 py-1 first-of-type:pl-0 last-of-type:pr-0";

  if (on) {
    return (
      <div data-number={String(number)} className={classes} onClick={onClick}>
        <FaStar data-number={String(number)} />
      </div>
    );
  }

  return (
    <div data-number={String(number)} className={classes} onClick={onClick}>
      <FaRegStar data-number={String(number)} />
    </div>
  );
}
