"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export type SignIdData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    authError: string | null;
    isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authError, setAuthError] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const router = useRouter();

    function login({ username, password }: SignIdData) {
        try {
            if (username != "" && password != "") {
                setIsAuthenticated(true)
                return router.push('/');
            }

            setIsAuthenticated(false)
            setAuthError('Autenticação falhou. Por favor, verifique suas credenciais.');
        } catch (error) {
            setAuthError('Ocorreu um erro ao tentar fazer login.');
        }
    }

    return (
        <AuthContext.Provider value={{ login, authError, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}
