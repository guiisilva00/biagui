import Photo from "./Photo";
import Tape from "./Tape";
import styles from "./Polaroid.module.css";

/*
  Polaroid — foto instantânea levemente inclinada.
  caption: texto manuscrito opcional. Sem caption, mostra uma linha discreta.
*/
export default function Polaroid({
  src,
  alt,
  rotate = 0,
  ratio = "1 / 1",
  tape,
  tapeTone = "lilac",
  caption,
  width = "100%",
  className = "",
  style,
}) {
  return (
    <figure
      className={`${styles.polaroid} ${className}`}
      style={{ "--rot": `${rotate}deg`, width, ...style }}
    >
      {tape && <Tape tone={tapeTone} rotate={tape === true ? -4 : tape} style={{ top: "-0.7rem", left: "calc(50% - 2.6rem)" }} />}
      <Photo src={src} alt={alt} ratio={ratio} />
      <figcaption className={styles.caption}>
        {caption ? caption : <span className={styles.line} aria-hidden="true" />}
      </figcaption>
    </figure>
  );
}
