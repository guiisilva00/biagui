"use client";

import { useEffect, useRef, useState } from "react";
import Paper from "./Paper";
import styles from "./Lyrics.module.css";

/*
  Lyrics — trecho da letra em letras gordinhas, como na tela de letras do Spotify.
  A linha que passa pelo meio da tela fica em destaque; as outras ficam mais apagadas.
  lines: array de textos (cada item é um verso/bloco).
*/
export default function Lyrics({ lines, tone = "violet", edge = 1, rotate = 0, credit }) {
  const boxRef = useRef(null);
  const lineRefs = useRef([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      let best = -1;
      let bestDist = Infinity;
      lineRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(bestDist < window.innerHeight * 0.38 ? best : -1);
    };
    const onScroll = () => {
      if (visible && !raf) raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
    });
    io.observe(box);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Paper tone={tone} edge={edge} rotate={rotate}>
      <div ref={boxRef} className={styles.lyrics}>
        {lines.map((text, i) => (
          <p
            key={i}
            ref={(el) => (lineRefs.current[i] = el)}
            className={styles.line}
            data-active={active === i}
            onClick={() => setActive(i)}
          >
            {text}
          </p>
        ))}
        {credit && <p className={styles.credit}>{credit}</p>}
        <p className={styles.hint}>(clique no nome da musica pra ir pro spotify)</p>
      </div>
    </Paper>
  );
}
