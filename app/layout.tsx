import AuthProvider from "../context/AuthContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dositio",
  description: "My Task Manager",
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <html lang="pt_br">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
      </head>

        <body className={"bg-slate-100"}>
        <AuthProvider>
          <header className="bg-gray-800 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">João Lucas Oliveira</h1>
                <ul className="flex space-x-4">
                    <li><a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Login</a></li>
                </ul>
            </nav>
          </header>
          
            {children}
          </AuthProvider>
        </body>
        
    </html>
  );
};

export default RootLayout;