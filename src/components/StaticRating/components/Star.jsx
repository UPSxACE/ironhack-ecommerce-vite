import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Star({ on }) {
  const classes = "p-1 py-1 first-of-type:pl-0 last-of-type:pr-0";

  if (on) {
    return (
      <div className={classes}>
        <FaStar />
      </div>
    );
  }

  return (
    <div className={classes}>
      <FaRegStar />
    </div>
  );
}
