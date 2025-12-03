import { Skeleton } from "@/components/ui/Skeleton";

export const FruitTableSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">
      
      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 p-4">
        <div className="font-semibold text-gray-700 text-sm">Fruta</div>
        <div className="font-semibold text-gray-700 text-sm">Cor</div>
        <div className="font-semibold text-gray-700 text-sm">Preço</div>
      </div>

      <div className="flex-1 p-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-b border-gray-100 p-4 items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" /> 
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>

            <Skeleton className="h-4 w-20" />

            <Skeleton className="h-6 w-6 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};