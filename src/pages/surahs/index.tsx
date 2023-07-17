import React from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import Surahs from "@/comonents/surahs";

type Props = {
  data: Data[];
};

type Data = {
  name_uz: string;
  video_uz: string;
  meaning_uz: string[];
  numberOfAyahs: number;
};

export default function Page({ data }: Props) {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <span>{router.asPath}</span>
      <Surahs data={data} />
    </div>
  );
}

export async function getStaticProps({}: GetStaticPropsContext): Promise<
  GetStaticPropsResult<Props>
> {
  let res = await fetch("http://localhost:3000/api/surahs");
  let data = await res.json();
  return {
    props: {
      data: data,
    },
    revalidate: 60,
  };
}
