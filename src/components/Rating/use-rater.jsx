import { useState } from "react";

/**
 * Usage:
 *
 * raterState = useRater()
 *
 * const {selectedRate} = raterState;
 *
 * ...
 *
 * return \<Rater state={raterState} />
 */
export default function useRater() {
  const [selectedRate, setSelectedRate] = useState(1);

  return { selectedRate, setSelectedRate };
}
