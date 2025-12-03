import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { CordResponse } from "../types";

export const useSales = () => {
  return useQuery({
    queryKey: ["sales-map"],
    queryFn: async () => {
      const { data } = await api.get<CordResponse>("/cords", {
        params: { page: 1, limit: 1000 },
      });
      return data;
    },
  });
};