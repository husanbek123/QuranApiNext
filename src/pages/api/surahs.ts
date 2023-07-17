// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import surahsData from "@/data/surahs.json";

type Data = {
  name_uz: string;
  video_uz: string;
  meaning_uz: string[];
  numberOfAyahs: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | Data>
) {
  if (req.query.surah) {
    const requestedData = surahsData.find((surah) =>
      surah.name_uz.startsWith(req.query.surah as string)
    );
    res.status(200).json(requestedData as Data);
  }
  res.status(200).json(surahsData);
}
