import ShortsCardContent from "@/constant/shorts-card-constant";
import { useState } from "react";

export default function useShorts() {
  const { cards } = ShortsCardContent;
  const [search, setSearch] = useState<string>("");
  const shortsFilter = cards?.filter(
    (item) =>
      item?.title.toLowerCase().includes(search.toLowerCase()) ||
      item?.desc.toLowerCase().includes(search.toLowerCase()) ||
      item?.date.toLowerCase().includes(search.toLowerCase())
  );
  return { shortsFilter, setSearch, search };
}
