"use client";

import { useEffect, useRef, useState } from "react";
import Envelope from "./Envelope";
import Album from "./Album";
import styles from "./Experience.module.css";

/*
  Experience — controla a abertura do envelope e libera o álbum.
  Enquanto o envelope está fechado o álbum nem é renderizado, então
  não existe scroll: a primeira tela é só o envelope.
*/
export default function Experience() {
  const [state, setState] = useState("closed"); // closed | opening | open
  const albumRef = useRef(null);

  function open() {
    setState("opening");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setState("open"), reduce ? 50 : 1700);
  }

  useEffect(() => {
    if (state !== "open") return;
    albumRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }, [state]);

  return (
    <main className={styles.main}>
      <header className={styles.cover} data-state={state}>
        <div className={styles.table} aria-hidden="true" />
        <Envelope state={state} onOpen={open} />
      </header>
      {state === "open" && (
        <div ref={albumRef} className={styles.albumWrap}>
          <Album />
        </div>
      )}
    </main>
  );
}
