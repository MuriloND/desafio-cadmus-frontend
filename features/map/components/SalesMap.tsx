"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";

const MapContent = dynamic(() => import("./MapContent"), {
  ssr: false, 
  loading: () => (
    <div className="w-full h-[500px] rounded-xl bg-gray-100 flex items-center justify-center">
      <Skeleton className="w-full h-full" />
    </div>
  ),
});

export const SalesMap = () => {
  return <MapContent />;
};