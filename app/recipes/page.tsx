"use client";

import Link from 'next/link';
import json from '../../recipes.json'

export const recipes = json

const Recipes = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
            {recipes.map(({ id, name, image }) => (
                <div key={id} className="bg-white border border-gray-300 rounded p-4 shadow-md">
                    <Link href={`recipes/${id}`}><img src={image} alt={name} className="w-full h-auto" /></Link>
                    <p className="text-xl font-semibold mb-2">{name}</p>
                </div>
            ))};
        </div>
    );
}

export default Recipes;