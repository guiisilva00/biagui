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
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState("closed"); // closed | opening | open
  const albumRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2500);
    return () => window.clearTimeout(timer);
  }, []);

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
      <header className={styles.cover} data-state={loading ? "loading" : state}>
        <div className={styles.table} aria-hidden="true" />
        {loading ? (
          <div className={styles.loader} role="status" aria-label="Preparando o álbum">
            <span className={styles.spinner} aria-hidden="true">
              {Array.from({ length: 8 }, (_, i) => <span className={styles.dot} key={i} />)}
            </span>
            <span className={styles.loadingLabel} aria-hidden="true">carregando</span>
          </div>
        ) : (
          <Envelope state={state} onOpen={open} />
        )}
      </header>
      {state === "open" && (
        <div ref={albumRef} className={styles.albumWrap}>
          <Album />
        </div>
      )}
    </main>
  );
}
