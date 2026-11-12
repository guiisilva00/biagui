import Section from "./Section";
import Memory from "./Memory";
import Polaroid from "./Polaroid";
import Note from "./Note";
import Paper from "./Paper";
import Flower from "./Flower";
import Doodle from "./Doodle";
import Tape from "./Tape";
import ElapsedTime from "./ElapsedTime";
import Lyrics from "./Lyrics";
import Stamp from "./Stamp";
import styles from "./Album.module.css";

// Em cada foto, edite src (arquivo), alt (descrição acessível) e caption (legenda).
// A lista segue exatamente a ordem em que as fotos aparecem na página.
const image = (filename) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${filename}`;

const photos = [
  // 1. Primeira composição — edite src, alt e caption desta foto.
  { src: image("WhatsApp Image 2026-11-11 at 19.44.42.jpeg"), alt: "Foto do casal", caption: "Nosso primeiro dia juntos." },
  // 2. Primeira foto da sequência.
  { src: image("WhatsApp Image 2026-11-11 at 19.52.37.jpeg"), alt: "Foto do casal", caption: "Terceiro dia juntos e primeiro beijo." },
  // 3. Segunda foto da sequência.
  { src: image("WhatsApp Image 2026-11-11 at 19.59.17.jpeg"), alt: "Foto do casal", caption: "Meu aniversário" },
  // 4. Última foto da sequência.
  { src: image("WhatsApp Image 2026-11-11 at 20.16.21.jpeg"), alt: "Foto do casal", caption: "Casais legais mantém o cinema vivo!" },
  // 5. Seção Foto grande.
  { src: image("iluminada.jpeg"), alt: "Foto do casal", caption: "O cabelo mais lindo do MUNDO!" },
  // 6. Seção Lembrança.
  { src: image("WhatsApp Image 2026-11-11 at 20.18.36.jpeg"), alt: "Foto do casal", caption: "O méqui sempre vai ser nosso" },
  // 7. Primeira foto de Mais fotos.
  { src: image("WhatsApp Image 2026-11-11 at 20.19.03.jpeg"), alt: "Foto do casal", caption: "Nessa foto falavam que a gente era igual" },
  // 8. Segunda foto de Mais fotos.
  { src: image("WhatsApp Image 2026-11-11 at 20.21.45.jpeg"), alt: "Foto do casal", caption: "12/06/2026" },
  // 9. Terceira foto de Mais fotos.
  { src: image("WhatsApp Image 2026-11-11 at 20.22.22.jpeg"), alt: "Foto do casal", caption: "Penso em você toda noite, quero você todo dia" },
];

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
            <Polaroid {...photos[0]} rotate={-3} tape tapeTone="orange" ratio="16 / 9" style={{ zIndex: 3 }} />
          </div>
        </Memory>
        <Memory col="2 / span 11" colD="7 / span 4" row="2" rowD="2" shift="0, -2.4rem" delay={150} from="right">
          <Note tone="cream" edge={2} rotate={2.5}>
            <div className={styles.letter}>
              <p>Oi, meu amor! Hoje é um dia especial pra nós, e com certeza vai ser eternizado pro resto das nossas vidas...</p>
              <p>Muito tempo se passou desde que nos conhecemos, e desde então diversos momentos incríveis foram construídos no nosso mundinho. Foram dias de felicidade, semanas em que nos víamos três vezes, outras duas, mas também houve semanas em que mal nos víamos. Altos e baixos, né, minha princesa? Passamos por situações complicadas juntos, mas, independente de tudo isso, nos mantivemos fortes e firmes até o dia de hoje.</p>
              <p>E, cara, se tu tá vendo esse site, provavelmente tá usando um acessório maneiro aí nesse dedo KAKAKAKAKAKAKAKA. Brincadeiras à parte, não é sempre que você tá usando uma bela de uma aliança, né?</p>
            </div>
          </Note>
        </Memory>
      </Section>

      <Section label="Tempo desde o primeiro encontro">
        <Memory col="2 / span 10" colD="2 / span 10" from="up">
          <ElapsedTime />
        </Memory>
      </Section>

      {/* 2 — sequência de fotos */}
      <Section label="Fotos" gap="0.5rem">
        <Memory col="1 / span 7" colD="2 / span 3" row="1" rowD="1" align="start" from="left">
          <Polaroid {...photos[1]} rotate={4} tape tapeTone="lilac" />
        </Memory>
        <Memory col="6 / span 7" colD="5 / span 4" row="2" rowD="1" shift="0, -2.6rem" align="center" delay={120}>
          <Polaroid {...photos[2]} rotate={-3} ratio="4 / 5" />
        </Memory>
        <Memory col="2 / span 7" colD="9 / span 3" row="3" rowD="1" shift="0, -2.2rem" shiftD="0, -4.6rem" align="end" delay={240} from="right">
          <Polaroid {...photos[3]} rotate={2} tape tapeTone="orange" />
        </Memory>
      </Section>

      {/* 3 — uma mensagem maior */}
      <Section label="Mensagem">
        <Memory col="1 / -1" colD="3 / span 7">
          <div className={styles.stage}>
            <Flower variant="bud" size="5rem" rotate={12} style={{ right: "-0.6rem", top: "-4.4rem", zIndex: 1 }} />
            <Tape tone="lilac" rotate={-6} style={{ top: "-0.6rem", left: "1.6rem" }} />
            <Note tone="lilac" edge={1} rotate={-1}>
              <div className={styles.letter}>
                <p>Mas enfim, amor, o que eu quero te mostrar aqui nesse pequeno espacinho é o tempo que passou desde que estamos juntos... A primeira vez que eu te vi na minha vida foi no dia 11 de abril de 2026, e eu jamais pensaria que um número poderia significar tanto pra mim. O número 11 é mais que qualquer outro número: ele é diferente do 10 e não chega a ser 12... KAKAKAKAKAKAKAKAK</p>
                <p>No dia 11 de abril de 2026, eu era uma pessoa com diversas dúvidas no coração. Eu não sabia de fato o que queria pra minha vida, e me considerava um tanto pessimista por tudo o que tinha passado até então. Porém, no dia 11 de abril de 2026, eu conheci uma pessoa que me devolveu a vontade de sorrir pro mundo, de agradecer a Deus por acordar a cada dia e de manter uma motivação que às vezes eu nem sei de onde vem.</p>
                <p>Cara, estar com você é algo que eu queria um dia conseguir explicar com palavras, pra você ter noção de que tudo o que eu estou falando não é da boca pra fora. Eu já tentei te dar um buquê de flores, escrevi uma carta à mão, te falo todos os dias que te amo, mas sinto que, no fundo, isso ainda não é 1% do que você me faz sentir todos os dias. De verdade.</p>
              </div>
            </Note>
          </div>
        </Memory>
      </Section>

      {/* 4 — uma foto grande */}
      <Section label="Foto grande">
        <Memory col="1 / -1" colD="1 / span 7" row="1" from="left">
          <div className={styles.stage}>
            <Flower variant="bloom" size="6rem" rotate={-22} style={{ left: "-1.6rem", top: "-3.6rem", zIndex: 1 }} />
            <Polaroid {...photos[4]} rotate={1.5} tape tapeTone="orange" ratio="4 / 5" style={{ zIndex: 2 }} />
          </div>
        </Memory>
        <Memory col="2 / span 11" colD="8 / span 4" row="2" rowD="1" shift="0, -3rem" align="center" delay={160} from="right">
          <Note tone="orange" edge={4} rotate={-2.5}>
            <div className={styles.letter}>
              <p>Você é iluminada, meu amor, iluminada de corpo e alma. Tudo o que vem de você me deixa admirado e impressionado. Eu amo de verdade o jeito que você trata as coisas, o jeito que lida com as pessoas, o jeito que lida comigo. É coisa de outro mundo, meu bem, e eu quero te ter pro resto da minha vida. Você coloriu minha vida de roxo e laranja, e a cada dia me traz mais um motivo pra acordar. Independente do cansaço ou da preguiça, eu acordo com um sorriso no rosto por saber que vou ter a minha companheira ali comigo, sempre pronta pra me apoiar.</p>
              <p>Meu bem, é surreal a conexão que temos. Todos os nossos momentos, todas as nossas noites, nossos momentos de conselho um pro outro, momentos em que choramos, rimos, dançamos e até mesmo “””””brigando”””””, eu sinto que estou conectado com você.</p>
              <p>Somos diferentes, meu amor, e isso não é novidade pra você. Sei que parece chover no molhado eu aqui te contando tudo o que você já ouve de mim todos os dias, mas é aquilo, né? Nunca é demais demonstrar meu amor por você. Não me canso nunca de escrever pra você, seja à mão ou pelo teclado. Isso não muda nada do que eu sinto por ti, minha gata.</p>
            </div>
          </Note>
        </Memory>
      </Section>

      {/* 5 — uma frase */}
      <Section label="Frase">
        <Memory col="1 / -1" colD="2 / span 10">
          <div className={styles.stage}>
            <Doodle shape="stars" width="2.6rem" style={{ position: "absolute", top: "-1.6rem", right: "1.4rem", zIndex: 2 }} />
            <Note tone="cream" edge={3} rotate={1}>
              <div className={styles.letter}>
                <p>Hoje eu tenho a felicidade de dizer que SIM, eu tô te namorando! E não tem mais ninguém que possa te encher o saco com “nossa, mas ele te pediu em namoro sem te dar a aliança? Que situação, hein, amiga” ou qualquer coisa do tipo. Nunca tive pressa pra isso, e acredito que seja recíproco.</p>
                <p>Meu bem, eu passei por diversas situações, e sei que você também, que nos fizeram desistir do amor por algum momento. Mas, no fundo, eu sentia que um dia iria encontrar a mulher que me faria feliz e me transformaria como homem. E, pra ser bem sincero, a cada dia que passa eu tenho mais certeza de que encontrei, e estou escrevendo isso aqui pra ela agora.</p>
                <p>Você tá presente nos meus pensamentos antes de dormir, é o meu primeiro pensamento quando eu acordo, e quando eu almoço lembro que já almocei diversas vezes com você, meu amor. Eu amo comer com você! E amo dividir meu tempo nas situações comuns do dia a dia com a tua companhia, porque sei que, independente do lugar, você vai estar lá comigo. E sei que não vou precisar comprar uma pizza cheia de cebola, como o teu pai falou, pra você provar que vai estar comigo.</p>
              </div>
            </Note>
            <Doodle shape="underline" width="min(14rem, 60%)" className={styles.underline} />
          </div>
        </Memory>
      </Section>

      {/* 6 — uma lembrança */}
      <Section label="Lembrança">
        <Memory col="1 / span 11" colD="2 / span 4" row="1" align="start" from="left">
          <Note tone="cream" edge={4} rotate={-2}>
            <div className={styles.letter}>
              <p>Cara, é surreal o nível de intimidade que a gente chegou. Hoje eu penso em como sou próximo de você e, sinceramente, me assusto. Porque se tu acha normal eu me dar bem com a tua mãe, ter a confiança do teu pai e ter conhecido praticamente tua família inteira, tu tá bem mal acostumada, papo reto KKKKKKKKKKKKKKKKKK</p>
              <p>Eu amo correr com você, meu amor, porque você me motiva a cuidar cada vez mais do meu corpo e prova que namorar não é só comer besteira e assistir filme. Na verdade, você é tão foda que consegue fazer eu comer besteira e assistir filme, mas, se eu tiver na disposição, a gente corre não sei quantos km juntos...</p>
              <p>Quando eu sonhava em ter um relacionamento, jamais imaginaria algo parecido com o que temos hoje, porque, de verdade, amor, o que temos é inimaginável. Se eu contasse pro eu do passado tudo o que a gente viveria, acho que ele não acreditaria e diria que eu estava mentindo. Mas não: eu tô aqui pra viver tudo isso e provar que é verdade. E a cada dia que passa, sinto no fundo do meu coração que estamos cada vez mais longe do fim.</p>
            </div>
          </Note>
        </Memory>
        <Memory col="6 / span 7" colD="7 / span 4" row="1" shift="0, 5.2rem" delay={160} from="right">
          <div className={styles.stage}>
            <Polaroid {...photos[5]} rotate={5} tape tapeTone="lilac" />
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
          <Polaroid {...photos[6]} rotate={-2.5} tape tapeTone="orange" />
        </Memory>
        <Memory col="7 / span 6" colD="6 / span 4" row="1" rowD="1" shift="0, 2.6rem" align="end" delay={120} from="right">
          <Polaroid {...photos[7]} rotate={3} ratio="4 / 5" />
        </Memory>
        <Memory col="3 / span 8" colD="10 / span 3" row="2" rowD="1" shift="0, 1.2rem" align="center" delay={200}>
          <Polaroid {...photos[8]} rotate={-1.2} ratio="4 / 3" tape tapeTone="lilac" />
        </Memory>
      </Section>

      {/* músicas dedicadas — texto normal + letras gordinhas */}
      <Section label="Músicas" gap="1.5rem">
        <Memory col="1 / -1" colD="2 / span 7" row="1" rowD="1">
          <Note tone="cream" edge={3} rotate={-1}>
            <div className={styles.letter}>
              <p>Amor, tu sabe que eu nunca fui de escutar muito os artistas que você gosta, os mesmos que tu até foi ao show. Inclusive, tem até caneca e pôster deles no teu quarto... Engraçado que pôster com a minha cara não tem, né? CABEÇUDA.</p>
              <p>Mas eu queria te dedicar duas músicas que você provavelmente conhece dos seus artistas e, se não conhece, vale a pena ouvir e prestar atenção na letra.</p>
            </div>
          </Note>
        </Memory>

        <Memory col="2 / span 8" colD="2 / span 4" row="2" rowD="2 / span 2" shift="0, 1rem" from="left" delay={100}>
          <div className={styles.stage}>
            <Flower variant="bud" size="4.2rem" rotate={-14} style={{ left: "-1.2rem", bottom: "-2.6rem", zIndex: 1 }} />
            <Polaroid src={image("adore-you.jpg")} alt="Foto do artista da música Adore You" caption="Harry Styles" ratio="3 / 4" rotate={-3} tape tapeTone="orange" style={{ zIndex: 2 }} />
          </div>
        </Memory>
        <Memory col="1 / -1" colD="6 / span 6" row="3" rowD="2" shift="0, 1.2rem" shiftD="0, 0">
          <Note tone="cream" edge={1} rotate={1}>
            <div className={`${styles.letter} ${styles.short}`}>
              <p>A primeira música é do Harry Styles, “Adore You”, e eu achei muito lindas as partes:</p>
            </div>
          </Note>
        </Memory>
        <Memory col="1 / -1" colD="5 / span 8" row="4" rowD="3" shift="0, -0.4rem" shiftD="0, -1.5rem" delay={100}>
          <Lyrics
            tone="violet"
            edge={2}
            rotate={-0.8}
            lines={["I get so lost inside your eyes", "Would you believe it?"]}
            credit={<a href="https://open.spotify.com/track/3jjujdWJ72nww5eGnfs2E7" target="_blank" rel="noopener noreferrer">Adore You · Harry Styles</a>}
          />
        </Memory>

        <Memory col="4 / span 9" colD="9 / span 4" row="5" rowD="4 / span 2" shift="0, 1.5rem" from="right" delay={100}>
          <div className={styles.stage}>
            <Flower variant="bloom" size="5.4rem" rotate={16} flip style={{ right: "-1.2rem", bottom: "-3.4rem", zIndex: 1 }} />
            <Polaroid src={image("silver-tongues.jpg")} alt="Foto do artista da música Silver Tongues" caption="Louis Tomlinson" ratio="4 / 3" rotate={3} tape tapeTone="lilac" style={{ zIndex: 2 }} />
          </div>
        </Memory>
        <Memory col="1 / -1" colD="2 / span 6" row="6" rowD="4" shift="0, 2rem" shiftD="0, 0">
          <Note tone="orange" edge={4} rotate={-1.5}>
            <div className={`${styles.letter} ${styles.short}`}>
              <p>A outra é do seu artista favorito (POSSO ESTAR ERRADO, OK?), o Louis Tomlinson, e a música é “Silver Tongues”. Ela me lembra muito os nossos momentos únicos juntos, de quando a gente conversa sobre as outras pessoas e se diverte com isso:</p>
            </div>
          </Note>
        </Memory>
        <Memory col="1 / -1" colD="1 / span 8" row="7" rowD="5" shift="0, 0.8rem" shiftD="0, -1.5rem" delay={100}>
          <Lyrics
            tone="sage"
            edge={3}
            rotate={0.8}
            lines={["Those stupid jokes", "Only we know", "Those songs we wrote", "Only we know"]}
            credit={<a href="https://open.spotify.com/track/29z96EFvG0L1wcj5kkIHzk" target="_blank" rel="noopener noreferrer">Silver Tongues · Louis Tomlinson</a>}
          />
        </Memory>

        <Memory col="2 / span 11" colD="4 / span 6" row="8" rowD="6" shift="0, 1.4rem" shiftD="0, 0.5rem" delay={100}>
          <Note tone="cream" edge={2} rotate={1.2}>
            <div className={`${styles.letter} ${styles.short}`}>
              <p>Acredito que a melhor forma de te conhecer é saber das coisas de que tu gosta, e eu estou disposto a sempre fazer isso.</p>
            </div>
          </Note>
        </Memory>
      </Section>

      {/* 8 — mensagem final */}
      <Section label="Mensagem final">
        <Memory col="1 / -1" colD="3 / span 8">
          <div className={styles.stage}>
            <Flower variant="bloom" size="7rem" rotate={10} flip style={{ right: "-1rem", bottom: "-8.2rem", zIndex: 3 }} />
            <Flower variant="bud" size="4.6rem" rotate={-12} style={{ left: "0.2rem", bottom: "-5.2rem", zIndex: 3 }} />
            <Tape tone="orange" rotate={3} style={{ top: "-0.7rem", right: "2rem" }} />
            <Stamp rotate={-6} style={{ right: "1.2rem", top: "-3.4rem", zIndex: 4 }} />
            <Note tone="cream" edge={2} rotate={0.8}>
              <div className={styles.letter}>
                <p>De todas as pessoas, de todos os momentos, de todos os sentimentos, de todas as emoções, é você, Beatriz de Moraes Bertoldo, que eu escolho. É você que eu escolho pra minha vida, é ao seu lado que eu quero acordar todos os dias, e é em você que eu quero depositar toda a minha confiança e o meu amor. Porque você é a mulher que, independente de tudo o que passou, quis apostar todas as suas fichas em mim. Sério, de onde tu tirou que ir fazer um simulado com um estranho seria uma ótima ideia? KKKKKKKKKKKKKKKKKKKK Isso me impressiona demais e me mostra quem tu é de verdade, meu amor!</p>
                <p>Espero que você tenha gostado de tudo o que eu já fiz por você até hoje. Sei que ainda não tenho condições de te proporcionar momentos tão grandes quanto vou poder no futuro, mas valorizo muito a tua humildade de sempre estar comigo e me apoiar pra vencermos juntos nessa vida complicada. E é por isso que eu te amo, meu amor. Eu te amo intensamente.</p>
                <p className={styles.signature}>com todo amor e carinho<br />~ gui</p>
              </div>
            </Note>
            <span className={styles.seal} aria-hidden="true" />
          </div>
        </Memory>
      </Section>

      <div className={styles.end} aria-hidden="true" />
    </div>
  );
}
