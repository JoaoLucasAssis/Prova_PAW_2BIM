"use client";

import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bem vindo ao Portal de Receitas</h1>
        {isAuthenticated 
        ? <Link href="/recipes" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Ver Receitas</Link> 
        : <div></div>}
    </div>
  );
}
