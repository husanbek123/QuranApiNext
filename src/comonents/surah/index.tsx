import React from "react";
import styles from "./index.module.scss";
import parse from "html-react-parser";
import Link from "next/link";

type Props = {};

export default function Surah({
  name_uz,
  video_uz,
  meaning_uz,
  numberOfAyahs,
}: Types.Data) {
  return (
    <div className={styles.surah}>
      <div className={styles.surah__video}>{parse(video_uz)}</div>
      <div className={styles.surah__text}>
        <Link href={`/surahs/${name_uz}`}>Go to surah</Link>
        <h4>
          {name_uz} ({meaning_uz.join(", ")})
        </h4>
        <p>{numberOfAyahs}</p>
      </div>
    </div>
  );
}
