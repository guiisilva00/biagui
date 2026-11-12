"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { LYRICS, TRACK } from "./trackData";
import styles from "./MusicPlayer.module.css";

function fmt(s) {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

function lineAt(time, lines) {
  let idx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].t <= time) idx = i;
    else break;
  }
  return idx;
}

/*
  MusicPlayer — botão flutuante (disco + letra) e a folha de letra sincronizada.
  O <audio> fica no Experience, para começar a tocar no toque que abre o envelope.
*/
export default function MusicPlayer({ audioRef, visible }) {
  const lenis = useLenis();
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [lines, setLines] = useState(LYRICS);
  const [syncMode, setSyncMode] = useState(false);
  const [marks, setMarks] = useState([]);
  const barRef = useRef(null);
  const listRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);
  const duration = TRACK.duration;

  useEffect(() => {
    setSyncMode(new URLSearchParams(window.location.search).has("sync"));
  }, []);

  /* estado do áudio + relógio suave */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let raf = 0;
    const tick = () => {
      setTime(audio.currentTime);
      if (barRef.current) barRef.current.style.transform = `scaleX(${Math.min(1, audio.currentTime / (audio.duration || duration))})`;
      raf = requestAnimationFrame(tick);
    };
    const onPlay = () => {
      setPlaying(true);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    const onPause = () => {
      setPlaying(false);
      cancelAnimationFrame(raf);
      setTime(audio.currentTime);
    };
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);
    audio.addEventListener("seeked", () => setTime(audio.currentTime));
    if (!audio.paused) onPlay();
    return () => {
      cancelAnimationFrame(raf);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
    };
  }, [audioRef, duration]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  }, [audioRef]);

  const seek = useCallback(
    (t, play = true) => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.currentTime = t;
      setTime(t);
      if (play && audio.paused) audio.play().catch(() => {});
    },
    [audioRef]
  );

  /* folha de letra: trava o scroll da página, Esc fecha, foco no botão */
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      openerRef.current?.focus();
    };
  }, [open, lenis]);

  const current = lineAt(time, lines);

  /* mantém a linha atual no centro da folha */
  useEffect(() => {
    if (!open || current < 0) return;
    const el = listRef.current?.querySelector(`[data-i="${current}"]`);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el?.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
  }, [current, open]);

  /* modo de sincronização */
  const syncDone = marks.length === LYRICS.length;
  function mark() {
    if (syncDone) return;
    const t = Math.round(time * 10) / 10;
    const next = [...marks, t];
    setMarks(next);
    if (next.length === LYRICS.length) {
      const out = LYRICS.map((l, i) => ({ t: next[i], text: l.text }));
      setLines(out);
      console.log(JSON.stringify(out.map((l) => l.t)));
    }
  }

  const label = current >= 0 ? lines[current].text : TRACK.title;

  return (
    <>
      <div className={styles.dock} data-visible={visible} aria-hidden={!visible} style={{ "--cover": `url("${TRACK.cover}")` }}>
        <button
          type="button"
          className={styles.disc}
          data-playing={playing}
          onClick={toggle}
          aria-label={playing ? "Pausar a música" : "Tocar a música"}
          tabIndex={visible ? 0 : -1}
        >
          <span className={styles.vinyl} aria-hidden="true" />
          <span className={styles.icon} aria-hidden="true">
            {playing ? (
              <svg viewBox="0 0 24 24"><path d="M8 5h3v14H8zM13 5h3v14h-3z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z" /></svg>
            )}
          </span>
        </button>
        <p className={styles.now} aria-live="off">{label}</p>
        <button
          ref={openerRef}
          type="button"
          className={styles.lyricsBtn}
          onClick={() => setOpen(true)}
          tabIndex={visible ? 0 : -1}
        >
          letra
        </button>
        <span className={styles.track} aria-hidden="true"><span ref={barRef} /></span>
      </div>

      {open && (
        <div className={styles.sheet} role="dialog" aria-modal="true" aria-label={`Letra de ${TRACK.title}`}>
          <header className={styles.head}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.cover} src={TRACK.cover} alt="Capa do álbum Red Hot + Rio" width="400" height="400" />
            <div className={styles.headText}>
              <p className={styles.title}>{TRACK.title}</p>
              <p className={styles.artist}>{TRACK.artist}</p>
            </div>
            <button ref={closeRef} type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Fechar a letra">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </header>

          <div ref={listRef} className={styles.lines} data-lenis-prevent>
            {lines.map((l, i) => (
              <button
                key={l.text + i}
                type="button"
                data-i={i}
                className={styles.line}
                data-state={i === current ? "now" : i < current ? "past" : "next"}
                onClick={() => seek(l.t)}
              >
                {l.text}
              </button>
            ))}
          </div>

          <footer className={styles.foot}>
            {syncMode && (
              <div className={styles.sync}>
                <button type="button" onClick={mark} disabled={syncDone}>
                  {syncDone ? "pronto" : `marcar linha ${marks.length + 1}/${LYRICS.length}`}
                </button>
                {!syncDone && marks.length < LYRICS.length && <span>{LYRICS[marks.length].text}</span>}
                {syncDone && <textarea readOnly rows={3} value={JSON.stringify(marks)} onFocus={(e) => e.target.select()} />}
              </div>
            )}
            <div className={styles.scrub}>
              <span>{fmt(time)}</span>
              <input
                type="range"
                min={0}
                max={duration}
                step={0.5}
                value={Math.min(time, duration)}
                onChange={(e) => seek(Number(e.target.value), false)}
                aria-label="Posição da música"
              />
              <span>{fmt(duration)}</span>
            </div>
            <button type="button" className={styles.bigPlay} onClick={toggle} aria-label={playing ? "Pausar" : "Tocar"}>
              {playing ? (
                <svg viewBox="0 0 24 24"><path d="M8 5h3v14H8zM13 5h3v14h-3z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z" /></svg>
              )}
            </button>
          </footer>
        </div>
      )}
    </>
  );
}
