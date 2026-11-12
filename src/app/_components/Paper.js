import styles from "./Paper.module.css";

/*
  Paper — pedaço de papel recortado à mão.
  tone: cream | lilac | orange | violet | ink
  edge: 1..4 (variações de recorte irregular)
*/
export default function Paper({
  tone = "cream",
  edge = 1,
  rotate = 0,
  className = "",
  style,
  children,
}) {
  return (
    <div
      className={`${styles.shadow} ${className}`}
      style={{ "--rot": `${rotate}deg`, ...style }}
    >
      <div className={styles.paper} data-tone={tone} data-edge={edge}>
        {children}
      </div>
    </div>
  );
}
