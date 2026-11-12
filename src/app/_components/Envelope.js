"use client";

import styles from "./Envelope.module.css";

/*
  Envelope — objeto físico prestes a ser aberto.
  state: closed | opening | open
*/
export default function Envelope({ state = "closed", onOpen }) {
  const interactive = state === "closed";
  return (
    <button
      type="button"
      className={styles.envelope}
      data-state={state}
      onClick={interactive ? onOpen : undefined}
      aria-label="Abrir o convite de Gui para Bia"
      aria-disabled={!interactive}
      tabIndex={interactive ? 0 : -1}
    >
      <span className={styles.back} />
      <span className={styles.flap} />
      <span className={styles.letter}>
        <span className={styles.letterLines} aria-hidden="true">
          <i style={{ width: "46%" }} />
          <i />
          <i style={{ width: "82%" }} />
        </span>
      </span>
      <span className={styles.pocket} />
      <span className={styles.pocketBottom} />
      <span className={styles.salutation} aria-hidden="true">
        oi cabeçuda
      </span>
      <span className={styles.sender} aria-hidden="true">
        de: gui&nbsp;&nbsp;para: bia
      </span>
      <span className={styles.seal} aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <path d="M20 8 C 14 15, 14 24, 20 32 C 26 24, 26 15, 20 8 Z" fill="none" stroke="#240046" strokeWidth="1.6" opacity="0.55" />
          <path d="M20 14 C 14 18, 12 22, 11 26 M20 14 C 26 18, 28 22, 29 26" fill="none" stroke="#240046" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
        </svg>
      </span>
      <span className={styles.hint} aria-hidden="true">
        toque para abrir
      </span>
    </button>
  );
}
