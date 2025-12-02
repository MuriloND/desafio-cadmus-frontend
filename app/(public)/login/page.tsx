import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background-light p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-background-dark skew-y-3 origin-top-left -translate-y-20 z-0"></div>
      
      <div className="z-10 w-full flex flex-col items-center">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-white drop-shadow-md tracking-tight">
            Cadmus<span className="text-primary">Fruits</span>
          </h2>
        </div>
        
        <LoginForm />
      </div>
    </main>
  );
}