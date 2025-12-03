"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface LoginState {
  error?: string;
}

export async function loginAction(prevState: LoginState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || "Erro ao realizar login" };
    }

    const cookieStore = await cookies();
    
    cookieStore.set("cadmus.token", data.token, {
      httpOnly: false, 
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: "/", 
    });

  } catch (err) {
    console.error(err);
    return { error: "Falha na comunicação com o servidor." };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  
  cookieStore.delete("cadmus.token");
  
  redirect("/login");
}