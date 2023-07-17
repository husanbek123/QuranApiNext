import React from "react";
import styles from "./index.module.scss";
import Surah from "../surah";

type Props = {
  data: Types.Data[];
};

export default function Surahs({ data }: Props) {
  return (
    <div className={styles.surahs}>
      {data.map((surah) => (
        <Surah {...surah} />
      ))}
    </div>
  );
}
