import clsx from "clsx";

export default function ScreenOverlay({
  children,
  state,
  close,
  notCloseable,
}) {
  const { transitionState } = state;

  const defaultClasses =
    "fixed z-50 h-screen w-screen top-0 left-0 bg-black transition-all duration-400";

  let stateClass = "";
  switch (transitionState) {
    case "closed":
      stateClass = "hidden";
      break;
    case "closing":
      stateClass = "bg-opacity-0 opacity-0";
      break;
    case "opening":
      stateClass = "bg-opacity-0 opacity-0";
      break;
    case "open":
      stateClass = "bg-opacity-50 opacity-100";
      break;
    default:
      "hidden";
  }

  return (
    <div
      className={clsx(defaultClasses, stateClass)}
      onClick={() => !notCloseable && close()}
    >
      {children}
    </div>
  );
}
