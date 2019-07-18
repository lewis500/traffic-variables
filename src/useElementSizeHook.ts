// 'use strict'
import React, {
  useCallback,
  useState,
  useLayoutEffect,
  DOMElement
} from "react";
type Size = {
  width: number;
  height: number;
};
const getSize = (el: HTMLElement):Size =>
  !el
    ? { width: 0, height: 0 }
    : { width: el.offsetWidth, height: el.offsetHeight };
export default function useComponentSize(
  ref: React.RefObject<HTMLElement>,
  transform?: (v: Size) => Size
) {
  const [size, setSize] = useState(getSize(ref ? ref.current : null));

  const handleResize = useCallback(
    () => ref.current && setSize(getSize(ref.current)),
    [ref]
  );

  useLayoutEffect(() => {
    if (!ref.current) return;

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref.current]);

  return transform ? transform(size) : size;
}
