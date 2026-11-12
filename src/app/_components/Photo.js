import styles from "./Photo.module.css";

/*
  Photo — foto ou placeholder.
  Sem `src`, mostra um espaço reservado. Para colocar a foto real:
  <Photo src="/fotos/nome.jpg" alt="descrição" />
*/
export default function Photo({ src, alt = "", ratio = "1 / 1", label = "sua foto aqui", className = "" }) {
  return (
    <div className={`${styles.photo} ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className={styles.placeholder} role="img" aria-label="Espaço reservado para uma foto">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <path
              d="M6 15h8l3-4h14l3 4h8v22H6z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="26" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
