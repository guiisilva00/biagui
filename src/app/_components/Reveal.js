"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

/* Aparição suave durante o scroll. Só anima transform/opacity. */
export default function Reveal({ children, delay = 0, from = "up", className = "", style }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-from={from}
      data-seen={seen}
      className={`${styles.reveal} ${className}`}
      style={{ ...style, "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
