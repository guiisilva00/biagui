import Reveal from "./Reveal";
import styles from "./Memory.module.css";

/*
  Memory — um "lugar" dentro de uma Section (célula da grade).
  Cada Memory define sua posição no mobile e no desktop:
    col / colD : grid-column (mobile / desktop)  ex.: "1 / span 8"
    row / rowD : grid-row opcional
    shift      : deslocamento manual no mobile (ex.: "0.5rem, 1rem")
  Dentro dele entra qualquer composição: Polaroid, Note, Paper, Flower...
*/
export default function Memory({
  col = "1 / -1",
  colD,
  row,
  rowD,
  z = 1,
  from = "up",
  delay = 0,
  shift,
  align,
  children,
  className = "",
}) {
  return (
    <div
      className={`${styles.memory} ${className}`}
      style={{
        "--c": col,
        "--cd": colD ?? col,
        "--r": row ?? "auto",
        "--rd": rowD ?? row ?? "auto",
        "--z": z,
        "--shift": shift ? `translate(${shift})` : "none",
        alignSelf: align,
      }}
    >
      <Reveal from={from} delay={delay}>
        {children}
      </Reveal>
    </div>
  );
}
