import React from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPathsResult,
} from "next";

type Props = {
  data: Types.Data;
};

export default function SurahDetailed({ data }: Props) {
  const router = useRouter();

  return (
    <div className={styles.surah}>
      <span>{router.asPath}</span>
      <div className={styles.surah__video}>
        {data?.video_uz && parse(data?.video_uz as string)}
      </div>
      <div className={styles.surah__text}>
        <h2>
          {data?.name_uz} ({data?.meaning_uz?.join(", ")})
        </h2>
        <p>{data?.numberOfAyahs}</p>
      </div>
    </div>
  );
}

// Remember: use types with ending ..Context for only parameters in functions.
// Remember: use types with ending ..Result for return types of functions.

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  console.log(params, "JJJJJJJJJJJJJJJJJJJJJj");

  let res = await fetch(
    `http://localhost:3000/api/surahs?surah=${params?.surah}`
  );
  let data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths({}: GetStaticPathsContext): Promise<GetStaticPathsResult> {
  let res = await fetch("http://localhost:3000/api/names");
  let data = await res.json();

  const paths = data.map((i: string) => "/surahs/" + i);

  return {
    fallback: true,
    paths: paths,
  };
}
// Good Coding. Created with love by Husan Sobirboyev
