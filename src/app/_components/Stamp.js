import styles from "./Stamp.module.css";

/* Stamp — selo postal com borda serrilhada e carimbo ondulado. */
export default function Stamp({ rotate = 4, className = "", style }) {
  return (
    <div aria-hidden="true" className={`${styles.stamp} ${className}`} style={{ "--rot": `${rotate}deg`, ...style }}>
      <div className={styles.face}>
        <svg viewBox="0 0 60 80">
          <path d="M30 14 C 22 24, 22 40, 30 52 C 38 40, 38 24, 30 14 Z" fill="#c98260" />
          <path d="M30 14 C 27 28, 27 40, 30 52 C 33 40, 33 28, 30 14 Z" fill="#d7a16b" />
          <path d="M30 52 C 29 62, 31 68, 30 74" stroke="#68745c" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <svg className={styles.mark} viewBox="0 0 120 50" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="30" cy="25" r="18" />
        <circle cx="30" cy="25" r="12" />
        <path d="M52 14 C 66 8, 76 20, 90 14 S 112 18, 118 12 M52 25 C 66 19, 76 31, 90 25 S 112 29, 118 23 M52 36 C 66 30, 76 42, 90 36 S 112 40, 118 34" />
      </svg>
    </div>
  );
}
