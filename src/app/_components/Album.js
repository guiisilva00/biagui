import Section from "./Section";
import Memory from "./Memory";
import Polaroid from "./Polaroid";
import Note from "./Note";
import Paper from "./Paper";
import Flower from "./Flower";
import Doodle from "./Doodle";
import Tape from "./Tape";
import styles from "./Album.module.css";

/*
  Album — a grande composição vertical.
  Para personalizar: troque os placeholders por conteúdo real.
    <Polaroid src="/fotos/a.jpg" alt="..." caption="..." />
    <Note>seu texto aqui</Note>   (sem children, mostra as linhas reservadas)
*/
export default function Album() {
  return (
    <div className={styles.album}>
      {/* faixas de papel que atravessam as seções, dando continuidade */}
      <div className={styles.strip} style={{ top: "17%", left: "-4%", width: "62%", "--r": "-5deg" }} aria-hidden="true">
        <Paper tone="orange" edge={2} style={{ height: "2.6rem" }} />
      </div>
      <div className={styles.strip} style={{ top: "41%", right: "-6%", width: "58%", "--r": "4deg" }} aria-hidden="true">
        <Paper tone="lilac" edge={3} style={{ height: "2.2rem" }} />
      </div>
      <div className={styles.strip} style={{ top: "70%", left: "-6%", width: "66%", "--r": "-3deg" }} aria-hidden="true">
        <Paper tone="violet" edge={4} style={{ height: "2.4rem" }} />
      </div>

      {/* 1 — primeira composição */}
      <Section label="Primeira composição">
        <Memory col="2 / span 10" colD="2 / span 5" row="1" rowD="1 / span 2" from="left">
          <div className={styles.stage}>
            <Flower variant="bloom" size="7.5rem" rotate={-14} style={{ left: "-2.2rem", bottom: "-3.2rem", zIndex: 2 }} />
            <Polaroid rotate={-3} tape tapeTone="orange" ratio="4 / 5" style={{ zIndex: 3 }} />
          </div>
        </Memory>
        <Memory col="5 / span 8" colD="7 / span 4" row="2" rowD="2" shift="0, -2.4rem" delay={150} from="right">
          <Note tone="cream" edge={2} rotate={2.5} lines={3} hint="mensagem curta" />
        </Memory>
      </Section>

      {/* 2 — sequência de fotos */}
      <Section label="Fotos" gap="0.5rem">
        <Memory col="1 / span 7" colD="2 / span 3" row="1" rowD="1" align="start" from="left">
          <Polaroid rotate={4} tape tapeTone="lilac" />
        </Memory>
        <Memory col="6 / span 7" colD="5 / span 4" row="2" rowD="1" shift="0, -2.6rem" align="center" delay={120}>
          <Polaroid rotate={-3} ratio="4 / 5" />
        </Memory>
        <Memory col="2 / span 7" colD="9 / span 3" row="3" rowD="1" shift="0, -4.6rem" align="end" delay={240} from="right">
          <Polaroid rotate={2} tape tapeTone="orange" />
        </Memory>
      </Section>

      {/* 3 — uma mensagem maior */}
      <Section label="Mensagem">
        <Memory col="1 / -1" colD="3 / span 7">
          <div className={styles.stage}>
            <Flower variant="bud" size="5rem" rotate={12} style={{ right: "-0.6rem", top: "-4.4rem", zIndex: 1 }} />
            <Tape tone="lilac" rotate={-6} style={{ top: "-0.6rem", left: "1.6rem" }} />
            <Note tone="lilac" edge={1} rotate={-1} lines={6} title hint="um texto maior" />
          </div>
        </Memory>
      </Section>

      {/* 4 — uma foto grande */}
      <Section label="Foto grande">
        <Memory col="1 / -1" colD="1 / span 7" row="1" from="left">
          <div className={styles.stage}>
            <Flower variant="bloom" size="6rem" rotate={-22} style={{ left: "-1.6rem", top: "-3.6rem", zIndex: 1 }} />
            <Polaroid rotate={1.5} tape tapeTone="orange" ratio="4 / 5" caption={undefined} style={{ zIndex: 2 }} />
          </div>
        </Memory>
        <Memory col="4 / span 9" colD="8 / span 4" row="2" rowD="1" shift="0, -3rem" align="center" delay={160} from="right">
          <Note tone="orange" edge={4} rotate={-2.5} lines={2} hint="legenda" />
        </Memory>
      </Section>

      {/* 5 — uma frase */}
      <Section label="Frase">
        <Memory col="1 / -1" colD="2 / span 10">
          <div className={styles.stage}>
            <Doodle shape="stars" width="2.6rem" style={{ position: "absolute", top: "-1.6rem", right: "1.4rem", zIndex: 2 }} />
            <Note tone="cream" edge={3} rotate={1} align="center" lines={3} hint="uma frase" />
            <Doodle shape="underline" width="min(14rem, 60%)" className={styles.underline} />
          </div>
        </Memory>
      </Section>

      {/* 6 — uma lembrança */}
      <Section label="Lembrança">
        <Memory col="1 / span 8" colD="2 / span 4" row="1" align="start" from="left">
          <Note tone="cream" edge={4} rotate={-2} lines={4} title hint="uma lembrança" />
        </Memory>
        <Memory col="6 / span 7" colD="7 / span 4" row="1" shift="0, 5.2rem" delay={160} from="right">
          <div className={styles.stage}>
            <Polaroid rotate={5} tape tapeTone="lilac" />
            <Flower variant="bud" size="4.2rem" rotate={-8} flip style={{ right: "-1rem", bottom: "-2.6rem", zIndex: 1 }} />
          </div>
        </Memory>
        <Memory col="1 / span 6" colD="2 / span 3" row="2" rowD="2" z={0} shift="1rem, 3.4rem" delay={240}>
          <Doodle shape="loop" width="100%" />
        </Memory>
      </Section>

      {/* 7 — novas fotos */}
      <Section label="Mais fotos" gap="0.5rem">
        <Memory col="1 / span 6" colD="2 / span 3" row="1" rowD="1" align="start" from="left">
          <Polaroid rotate={-2.5} tape tapeTone="orange" />
        </Memory>
        <Memory col="7 / span 6" colD="6 / span 4" row="1" rowD="1" shift="0, 2.6rem" align="end" delay={120} from="right">
          <Polaroid rotate={3} ratio="4 / 5" />
        </Memory>
        <Memory col="3 / span 8" colD="10 / span 3" row="2" rowD="1" shift="0, 1.2rem" align="center" delay={200}>
          <Polaroid rotate={-1.2} ratio="4 / 3" tape tapeTone="lilac" />
        </Memory>
      </Section>

      {/* 8 — mensagem final */}
      <Section label="Mensagem final">
        <Memory col="1 / -1" colD="3 / span 8">
          <div className={styles.stage}>
            <Flower variant="bloom" size="7rem" rotate={10} flip style={{ right: "-1.6rem", bottom: "-4.4rem", zIndex: 3 }} />
            <Flower variant="bud" size="4.6rem" rotate={-12} style={{ left: "-0.4rem", bottom: "-3.2rem", zIndex: 3 }} />
            <Tape tone="orange" rotate={3} style={{ top: "-0.7rem", right: "2rem" }} />
            <Note tone="cream" edge={2} rotate={0.8} lines={5} title align="center" hint="mensagem final" />
            <span className={styles.seal} aria-hidden="true" />
          </div>
        </Memory>
      </Section>

      <div className={styles.end} aria-hidden="true" />
    </div>
  );
}
