import Paper from "./Paper";
import styles from "./Note.module.css";

/*
  Note — bilhete/mensagem com linhas de texto reservadas.
  hint: etiqueta manuscrita discreta (ex.: "mensagem curta").
  Para escrever de verdade, passe `children` e as linhas somem.
*/
const WIDTHS = [100, 94, 98, 88, 96, 72];

export default function Note({
  tone = "cream",
  edge = 1,
  rotate = 0,
  lines = 3,
  hint,
  title = false,
  align = "left",
  children,
  className = "",
  style,
}) {
  return (
    <Paper tone={tone} edge={edge} rotate={rotate} className={`${styles.pinned} ${className}`} style={style}>
      <div className={styles.note} data-align={align}>
        {hint && <span className={styles.hint}>{hint}</span>}
        {children ?? (
          <div className={styles.lines} aria-hidden="true">
            {title && <span className={styles.title} />}
            {Array.from({ length: lines }, (_, i) => (
              <span
                key={i}
                className={styles.bar}
                style={{ width: `${i === lines - 1 && lines > 1 ? 58 : WIDTHS[i % WIDTHS.length]}%` }}
              />
            ))}
          </div>
        )}
      </div>
    </Paper>
  );
}
