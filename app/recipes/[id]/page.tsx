'use client'

import { recipes } from "../page";

export default function Page({ params }: { params: { id: string } }) {
  const receita = recipes.find(recipe => recipe.id === params.id);

  if (!receita) {
    return <div>Receita não encontrada!</div>;
  }

  return (
    <div className="relative max-w-2xl mx-auto p-4">
      <img src={receita.image} alt={`Imagem de ${receita.name}`} className="absolute top-0 right-0 w-20 rounded" />
      
      <h1 className="text-3xl font-bold mb-4">Receita: {receita.name}</h1>

      <h2 className="text-xl font-semibold mb-2">Ingredientes:</h2>
      <ul className="list-disc pl-4 mb-4">
        {receita.ingredients.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instruções:</h2>
      <ol className="list-decimal pl-4">
        {receita.instructions.map((instrucao, index) => (
          <li key={index} className="mb-2">
            <p><strong>Passo {index + 1}:</strong> {instrucao}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
