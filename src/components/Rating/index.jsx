import { useState } from "react";
import Star from "./components/Star";

export default function Rater({ raterState }) {
  const { selectedRate, setSelectedRate } = raterState;
  const [hoverRate, setHoverRate] = useState(1);

  function onHover(e) {
    let target = e.target;
    if (e.target.tagName === "path") {
      target = target.parentNode;
    }
    const starNumber = Number(target.getAttribute("data-number"));

    setHoverRate((current) => {
      if (starNumber > current) {
        return starNumber;
      }
      return current;
    });
  }

  function onLeaveHover() {
    setHoverRate(0);
  }

  function onClick(e) {
    let target = e.target;
    if (e.target.tagName === "path") {
      target = target.parentNode;
    }
    const starNumber = Number(target.getAttribute("data-number"));

    setSelectedRate(starNumber);
  }

  return (
    <div
      className="flex text-yellow-400 text-lg"
      onMouseMove={onHover}
      onMouseOut={onLeaveHover}
    >
      <Star
        on={hoverRate >= 1 || selectedRate >= 1}
        number={1}
        onClick={onClick}
      />
      <Star
        on={hoverRate >= 2 || (hoverRate === 0 && selectedRate >= 2)}
        number={2}
        onClick={onClick}
      />
      <Star
        on={hoverRate >= 3 || (hoverRate === 0 && selectedRate >= 3)}
        number={3}
        onClick={onClick}
      />
      <Star
        on={hoverRate >= 4 || (hoverRate === 0 && selectedRate >= 4)}
        number={4}
        onClick={onClick}
      />
      <Star
        on={hoverRate >= 5 || (hoverRate === 0 && selectedRate >= 5)}
        number={5}
        onClick={onClick}
      />
    </div>
  );
}
