import React, { useCallback, useRef, useState } from "react";

export const useDrag = () => {
  const [offsetX, setOffsetX] = useState(0);
  const dragStartXRef = useRef<number | null>(null);
  const dragStartOffsetRef = useRef(0);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);

      dragStartXRef.current = +e.clientX;
      dragStartOffsetRef.current = offsetX;
    },
    [offsetX],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (dragStartXRef.current === null) return;

      const deltaX = e.clientX - dragStartXRef.current;
      setOffsetX(Math.min(0, +dragStartOffsetRef.current + +deltaX));
    },
    [],
  );

  const endDrag = useCallback(() => {
    dragStartXRef.current = null;
  }, []);

  return { handlePointerDown, handlePointerMove, endDrag, offsetX };
};
