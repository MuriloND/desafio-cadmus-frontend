"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background-light p-4 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 max-w-md">
        <span className="material-symbols-outlined text-6xl text-red-500 mb-4">
          sentiment_broken
        </span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Ops! Algo deu errado.
        </h2>
        <p className="text-gray-600 mb-6">
          Não conseguimos carregar os dados necessários. Tente recarregar a página.
        </p>
        <button
          onClick={
            () => reset()
          }
          className="bg-primary hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-green-500/20"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}