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