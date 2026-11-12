import styles from "./Flower.module.css";

/*
  Flower — lírio em camadas de papel recortado.
  variant: bloom (aberto) | bud (botão)
  Posicione com className/style no pai (position absolute, etc.).
*/
const PETALS = [
  { a: -78, c: "#b85c45", s: 0.92 },
  { a: 78, c: "#b85c45", s: 0.92 },
  { a: -44, c: "#c98260", s: 1 },
  { a: 44, c: "#c98260", s: 1 },
  { a: 0, c: "#d7a16b", s: 1.08 },
];
const PETAL = "M100 112 C 74 84, 74 30, 100 4 C 126 30, 126 84, 100 112 Z";

export default function Flower({
  variant = "bloom",
  size = "9rem",
  rotate = 0,
  flip = false,
  sway = true,
  className = "",
  style,
}) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.flower} ${sway ? styles.sway : ""} ${className}`}
      style={{ width: size, "--rot": `${rotate}deg`, "--flip": flip ? -1 : 1, ...style }}
    >
      <svg viewBox="0 0 200 320" fill="none">
        {/* haste e folhas — roxo profundo, como papel recortado */}
        <path d="M100 112 C 96 190, 108 250, 98 318" stroke="#68745c" strokeWidth="6" strokeLinecap="round" />
        <path d="M99 232 C 62 222, 38 190, 30 150 C 66 160, 92 190, 99 232 Z" fill="#68745c" />
        <path d="M101 262 C 138 258, 164 230, 176 190 C 138 192, 108 222, 101 262 Z" fill="#879078" />

        {variant === "bud" ? (
          <>
            <path d="M100 118 C 78 92, 80 40, 100 14 C 120 40, 122 92, 100 118 Z" fill="#c98260" />
            <path d="M100 118 C 92 88, 94 50, 100 14 C 106 50, 108 88, 100 118 Z" fill="#d7a16b" />
          </>
        ) : (
          <>
            {PETALS.map((p, i) => (
              <g key={i} transform={`rotate(${p.a} 100 112) translate(${100 - 100 * p.s} ${112 - 112 * p.s}) scale(${p.s})`}>
                <path d={PETAL} fill={p.c} />
                <path d="M100 108 C 98 80, 99 44, 100 14" stroke="#f1e5cc" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
              </g>
            ))}
            {/* pintinhas */}
            {[
              [93, 82], [107, 78], [99, 66], [92, 52], [108, 56], [100, 40],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.1" fill="#240046" opacity="0.8" />
            ))}
            {/* estames */}
            <g stroke="#68745c" strokeWidth="2.2" strokeLinecap="round">
              <path d="M100 112 C 90 96, 84 84, 80 74" />
              <path d="M100 112 C 100 94, 100 82, 100 70" />
              <path d="M100 112 C 110 96, 116 84, 120 74" />
            </g>
            <g fill="#5b315f">
              <ellipse cx="80" cy="73" rx="3.2" ry="5.2" transform="rotate(-24 80 73)" />
              <ellipse cx="100" cy="69" rx="3.2" ry="5.2" />
              <ellipse cx="120" cy="73" rx="3.2" ry="5.2" transform="rotate(24 120 73)" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
