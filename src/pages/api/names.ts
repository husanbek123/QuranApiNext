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
  res: NextApiResponse<string[]>
) {
  const requestedData = surahsData.map((i) => i.name_uz);
  res.status(200).json(requestedData);
}
