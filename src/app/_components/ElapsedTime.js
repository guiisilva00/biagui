"use client";

import { useEffect, useState } from "react";
import Note from "./Note";
import styles from "./ElapsedTime.module.css";

const SINCE = new Date(2026, 3, 11);
const UNITS = [
  ["months", "meses"],
  ["weeks", "semanas"],
  ["days", "dias"],
  ["minutes", "minutos"],
  ["seconds", "segundos"],
];

function elapsedTime(now) {
  if (now < SINCE) return { months: 0, weeks: 0, days: 0, minutes: 0, seconds: 0 };

  let months = (now.getFullYear() - SINCE.getFullYear()) * 12 + now.getMonth() - SINCE.getMonth();
  if (now.getDate() < SINCE.getDate()) months -= 1;

  const seconds = Math.floor((now - SINCE) / 1000);
  const days = Math.floor(seconds / 86400);
  const weeks = Math.floor(days / 7);
  const minutes = Math.floor(seconds / 60);

  return { months, weeks, days, minutes, seconds: seconds % 60 };
}

export default function ElapsedTime() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const update = () => setTime(elapsedTime(new Date()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <Note tone="cream" edge={2} rotate={-0.6}>
      <div className={styles.counter}>
        <p className={styles.heading}>Desde 11 de abril de 2026</p>
        <div className={styles.units}>
          {UNITS.map(([key, label]) => (
            <div className={styles.unit} key={key}>
              <span className={styles.value}>
                {time ? (key === "seconds" ? String(time[key]).padStart(2, "0") : time[key].toLocaleString("pt-BR")) : "—"}
              </span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
        <p className={styles.message}>
          É bizarro pensar que já se fazem {time?.months ?? 7} meses desde o dia 11. E a cada segundo que passa, o mundo parece que fica com mais cor, com mais sentido, como se tudo no final valesse a pena. Cada suor e cada dia cansativo, com uma palavra sua sequer, tudo se transforma! Com você, nesses {time?.days ?? 0} dias eu aprendi que amar de verdade é ficar e estar presente principalmente nos piores momentos.
        </p>
      </div>
    </Note>
  );
}
