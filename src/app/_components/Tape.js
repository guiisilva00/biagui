import styles from "./Tape.module.css";

/* Fita adesiva estilizada. Posicione com className/style no pai. */
export default function Tape({ tone = "lilac", rotate = -4, style, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`${styles.tape} ${className}`}
      data-tone={tone}
      style={{ "--rot": `${rotate}deg`, ...style }}
    />
  );
}
