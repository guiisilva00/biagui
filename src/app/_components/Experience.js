"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Envelope from "./Envelope";
import Album from "./Album";
import MusicPlayer from "./MusicPlayer";
import { TRACK } from "./trackData";
import styles from "./Experience.module.css";

/*
  Experience — a capa (título, envelope, convite para rolar) e o álbum.
  Enquanto o envelope está fechado o álbum nem é renderizado, então
  não existe scroll. Depois de aberto, a capa convida a rolar; o ponteiro
  (ou o dedo) inclina o envelope levemente e move as pétalas ao fundo.
*/
const PETALS = [
  { x: "8%", y: "18%", s: 1, d: 0.9, t: 14, c: "terracotta", r: 20 },
  { x: "90%", y: "14%", s: 0.8, d: 1.4, t: 18, c: "lavender", r: -30 },
  { x: "16%", y: "62%", s: 0.7, d: 1.1, t: 16, c: "sage", r: 60 },
  { x: "84%", y: "58%", s: 1.1, d: 0.7, t: 20, c: "terracotta", r: -10 },
  { x: "46%", y: "8%", s: 0.6, d: 1.6, t: 22, c: "lavender", r: 35 },
  { x: "70%", y: "84%", s: 0.8, d: 1.2, t: 17, c: "sage", r: -50 },
  { x: "28%", y: "90%", s: 0.9, d: 0.8, t: 19, c: "terracotta", r: 15 },
];

export default function Experience() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState("closed"); // closed | opening | open
  const lenis = useLenis();
  const coverRef = useRef(null);
  const albumRef = useRef(null);
  const barRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  /* música: começa no toque que abre o envelope (gesto do usuário libera o áudio) */
  function startMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    audio.play().then(() => {
      const t0 = performance.now();
      const ramp = (now) => {
        const k = Math.min(1, (now - t0) / 2500);
        audio.volume = 0.8 * k;
        if (k < 1) requestAnimationFrame(ramp);
      };
      requestAnimationFrame(ramp);
    }).catch(() => {});
  }

  function open() {
    startMusic();
    setState("opening");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setState("open"), reduce ? 50 : 1700);
  }

  function discover() {
    const target = albumRef.current;
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lenis) lenis.scrollTo(target, { immediate: reduce });
    else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  /* inclinação/parallax: só atualiza variáveis CSS, sem re-render */
  function onPointerMove(e) {
    const el = coverRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--px", (px * 2 - 1).toFixed(3));
    el.style.setProperty("--py", (py * 2 - 1).toFixed(3));
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
  }
  function onPointerLeave() {
    const el = coverRef.current;
    if (!el) return;
    ["--px", "--py"].forEach((k) => el.style.setProperty(k, "0"));
  }

  /* progresso de leitura */
  useEffect(() => {
    if (state !== "open") return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [state]);

  const phase = loading ? "loading" : state;

  return (
    <main className={styles.main}>
      <audio ref={audioRef} src={TRACK.src} preload="none" />
      <MusicPlayer audioRef={audioRef} visible={state !== "closed"} />
      {state === "open" && (
        <div className={styles.progress} aria-hidden="true">
          <span ref={barRef} />
        </div>
      )}
      <header
        ref={coverRef}
        className={styles.cover}
        data-state={phase}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div className={styles.table} aria-hidden="true" />
        <div className={styles.drift} aria-hidden="true">
          {PETALS.map((p, i) => (
            <span
              key={i}
              className={styles.petal}
              style={{ "--x": p.x, "--y": p.y, "--s": p.s, "--depth": p.d, "--t": `${p.t}s`, "--r": `${p.r}deg`, "--c": `var(--${p.c})`, "--i": i }}
            >
              <i />
            </span>
          ))}
        </div>

        <div className={styles.intro}>
          <h1 className={styles.title}>uma pequena surpresa</h1>
          <svg className={styles.scribble} viewBox="0 0 200 20" fill="none" aria-hidden="true">
            <path pathLength="1" d="M3 11 C 40 3, 70 15, 110 7 S 170 9, 197 5" />
          </svg>
        </div>

        <div className={styles.stage}>
          {loading ? (
            <div className={styles.loader} role="status" aria-label="Preparando o álbum">
              <span className={styles.spinner} aria-hidden="true">
                {Array.from({ length: 8 }, (_, i) => <span className={styles.dot} key={i} />)}
              </span>
              <span className={styles.loadingLabel} aria-hidden="true">carregando</span>
            </div>
          ) : (
            <div className={styles.tilt}>
              <Envelope state={state} onOpen={open} />
            </div>
          )}
        </div>

        <button
          type="button"
          className={styles.cue}
          data-visible={state === "open"}
          onClick={discover}
          tabIndex={state === "open" ? 0 : -1}
          aria-hidden={state !== "open"}
        >
          <span className={styles.cueText}>role para descobrir</span>
          <span className={styles.cueLine} aria-hidden="true" />
        </button>
      </header>
      {state === "open" && (
        <div ref={albumRef} className={styles.albumWrap}>
          <Album />
        </div>
      )}
    </main>
  );
}
