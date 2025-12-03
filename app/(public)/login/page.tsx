import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 bg-background-light p-4 relative overflow-hidden">      
      <div className="absolute top-0 left-0 w-full h-96 bg-background-dark skew-y-3 origin-top-left -translate-y-20 z-0 shadow-xl"></div>
      <div className="z-10 w-full flex flex-col items-center">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg tracking-tight">
            Cadmus<span className="text-primary">Fruits</span>
          </h2>
          <p className="text-green-100/80 text-sm mt-2 font-medium">
            Painel Administrativo
          </p>
        </div>
        
        <LoginForm />
        
        <p className="mt-8 text-xs text-gray-400">
          &copy; 2024 Cadmus Soluções. Versão 1.0.0
        </p>
      </div>
    </main>
  );
}