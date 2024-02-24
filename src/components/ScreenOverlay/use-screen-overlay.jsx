import { useEffect, useState } from "react";

export default function useScreenOverlay(initOpen) {
  const [transitionState, setTransitionState] = useState(
    initOpen ? "open" : "closed"
  );

  useEffect(() => {
    // disable scroll
    if (transitionState === "opening") {
      console.log(window.scrollY);
      document.body.classList.toggle("modalOpen", true);
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
    }

    // restore scroll
    if (transitionState === "closed") {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.body.classList.toggle("modalOpen", false);
    }
  }, [transitionState]);

  useEffect(() => {
    console.log("unmount");
    // restore scroll on unMount
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.body.classList.toggle("modalOpen", false);
    };
  }, []);

  function show() {
    setTransitionState("opening");
    setTimeout(() => {
      setTransitionState("open");
    }, 0);
  }

  function close() {
    setTransitionState("closing");
    setTimeout(() => {
      setTransitionState("closed");
    }, 400);
  }

  return { state: { transitionState, setTransitionState }, show, close };
}
