/* Doodle — pequenos rabiscos desenhados à mão (traço fino, laranja). */
const PATHS = {
  loop: "M4 40 C 30 4, 60 6, 54 30 C 48 52, 24 40, 44 22 C 70 0, 110 36, 150 14 C 170 4, 190 14, 196 24",
  underline: "M3 10 C 40 2, 70 14, 110 6 S 170 8, 197 4",
  arrow: "M4 30 C 30 30, 60 10, 96 22 C 110 27, 112 36, 100 38 M88 28 L100 38 L90 48",
  stars: "M20 4 V28 M8 16 H32 M11 7 L29 25 M29 7 L11 25",
};

export default function Doodle({ shape = "loop", width = "8rem", color = "var(--amber-glow)", className = "", style }) {
  const box = { loop: "0 0 200 60", underline: "0 0 200 20", arrow: "0 0 120 56", stars: "0 0 40 32" }[shape];
  return (
    <svg
      aria-hidden="true"
      viewBox={box}
      className={className}
      style={{ width, height: "auto", overflow: "visible", ...style }}
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[shape]} />
    </svg>
  );
}
