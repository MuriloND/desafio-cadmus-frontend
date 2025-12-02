"use client";

import { useActionState } from "react";
import { loginAction } from "../actions";

export const LoginForm = () => {
  const [state, action, isPending] = useActionState(loginAction, { error: "" });

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6 text-background-dark">
        Acesse sua conta
      </h1>
      
      {state.error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">error</span>
          {state.error}
        </div>
      )}

      <form action={action} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="admin@admin.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <input
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="••••••"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Entrando...
            </>
          ) : (
            "Entrar"
          )}
        </button>
      </form>
    </div>
  );
};