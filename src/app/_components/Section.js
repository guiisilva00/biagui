import styles from "./Section.module.css";

/*
  Section — "página" do álbum. Não tem fundo próprio: a continuidade vem do
  fundo contínuo do álbum. É só uma grade (1 coluna no celular, 12 no desktop).
*/
export default function Section({ children, id, className = "", gap, label }) {
  return (
    <section id={id} aria-label={label} className={`${styles.section} ${className}`} style={gap ? { "--gap": gap } : undefined}>
      {children}
    </section>
  );
}
