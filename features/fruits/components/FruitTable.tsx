"use client";

import { useRef, useState, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useFruits } from "../hooks/useFruits";
import { FruitFilters } from "../types";
import { FruitTableSkeleton } from "./FruitTableSkeleton";

export const FruitTable = () => {
  const [filters, setFilters] = useState<FruitFilters>({
    orderBy: "id",
    order: "asc",
  });

  // Referência do Container (onde o scroll acontece)
  const parentRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useFruits(filters);

  const allFruits = data ? data.pages.flatMap((page) => page.data) : [];

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allFruits.length + 1 : allFruits.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50, 
    overscan: 5,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    if (!lastItem) return;

    if (
      lastItem.index >= allFruits.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allFruits.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);

  const handleSort = (field: FruitFilters["orderBy"]) => {
    setFilters((prev) => ({
      orderBy: field,
      order: prev.orderBy === field && prev.order === "asc" ? "desc" : "asc",
    }));
  };

  const getSortIcon = (field: string) => {
    if (filters.orderBy !== field) return "unfold_more"; // Neutro
    return filters.order === "asc" ? "arrow_upward" : "arrow_downward";
  };

  if (isLoading) {
    return <FruitTableSkeleton />;
  }
  if (isError) return <div className="p-10 text-center text-red-500">Erro ao carregar dados.</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">
      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700 text-sm">
        <button 
          onClick={() => handleSort("name")}
          className="p-4 text-left flex items-center gap-1 hover:bg-gray-100 transition-colors"
        >
          Fruta
          <span className="material-symbols-outlined text-xs text-gray-400">
            {getSortIcon("name")}
          </span>
        </button>

        <button 
          onClick={() => handleSort("color")}
          className="p-4 text-left flex items-center gap-1 hover:bg-gray-100 transition-colors"
        >
          Cor
          <span className="material-symbols-outlined text-xs text-gray-400">
            {getSortIcon("color")}
          </span>
        </button>

        <button 
          onClick={() => handleSort("price")}
          className="p-4 text-left flex items-center gap-1 hover:bg-gray-100 transition-colors"
        >
          Preço
          <span className="material-symbols-outlined text-xs text-gray-400">
            {getSortIcon("price")}
          </span>
        </button>
      </div>

      <div 
        ref={parentRef} 
        className="flex-1 overflow-auto" 
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const isLoaderRow = virtualRow.index > allFruits.length - 1;
            const fruit = allFruits[virtualRow.index];

            return (
              <div
                key={virtualRow.index}
                className="absolute top-0 left-0 w-full grid grid-cols-3 border-b border-gray-100 hover:bg-background-light transition-colors text-sm"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {isLoaderRow ? (
                  <div className="col-span-3 flex items-center justify-center text-gray-400 h-full">
                    <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                    Carregando mais...
                  </div>
                ) : (
                  <>
                    <div className="p-3 flex items-center gap-3 font-medium text-gray-800">
                      {fruit.name}
                    </div>

                    <div className="p-3 flex items-center gap-2 text-gray-600">
                      {fruit.color}
                    </div>

                    <div className="p-3 flex items-center font-mono text-gray-700">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(fruit.price)}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};