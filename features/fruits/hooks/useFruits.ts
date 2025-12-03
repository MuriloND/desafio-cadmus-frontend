import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { FruitResponse, FruitFilters } from "../types";

const fetchFruits = async ({ pageParam = 1, filters }: { pageParam: number, filters: FruitFilters }) => {
  const { data } = await api.get<FruitResponse>("/fruits", {
    params: {
      page: pageParam,
      ...filters,
    },
  });
  return data;
};

export const useFruits = (filters: FruitFilters) => {
  return useInfiniteQuery({
    queryKey: ["fruits", filters],
    queryFn: ({ pageParam }) => fetchFruits({ pageParam, filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};