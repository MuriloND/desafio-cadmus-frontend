import { logoutAction } from "@/features/auth/actions";
import { FruitTable } from "@/features/fruits/components/FruitTable";
import { SalesMap } from "@/features/map/components/SalesMap";

export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-background-light pb-20">
      <header className="bg-background-dark text-white p-6 shadow-md mb-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Dashboard de <span className="text-primary">Frutas</span>
          </h1>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 opacity-90">
              <span className="material-symbols-outlined text-xl">account_circle</span>
              <span className="text-sm font-medium">Admin</span>
            </div>

            <form action={logoutAction}>
              <button 
                type="submit" 
                className="flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors border border-red-900/30 bg-red-900/10 px-3 py-1.5 rounded-lg hover:bg-red-900/30"
              >
                <span className="material-symbols-outlined text-lg">logout</span>
                Sair
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 space-y-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              Tabela de Fruitas
            </h2>
          </div>
          
          <FruitTable />
        </section>
        <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              Mapa de Vendas
            </h2>
            
            <div className="relative z-0"> 
               <SalesMap />
            </div>
        </section>
      </main>
    </div>
  );
}