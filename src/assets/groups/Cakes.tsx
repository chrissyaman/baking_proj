import React from "react";
import { Link } from "react-router-dom";
import recipes from "./recipes.json";

const CakesPage: React.FC = () => {
  const CakesRecipes = recipes.filter((recipe) => recipe.type === "cake");

  return (
    <div>
      <header className="bg-pink-300 py-4 px-3 flex justify-between items-center">
        <div
          className="text-white text-5xl font-pacifico"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Epic Baking Website
        </div>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h1
          className="text-5xl font-bold mb-10 text-pink-300 font-pacifico"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Cakes
        </h1>
        <div className="flex flex-wrap justify-center gap-8 px-4 lg:px-0">
          {CakesRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col items-center bg-pink-300 border-2 border-pink-300 bg-white p-4 rounded-md shadow-lg"
              style={{ minWidth: "300px", margin: "10px" }}
            >
              <Link
                to={`/cakes/${recipe.id}`}
                className="flex flex-col items-center"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-48 h-48 object-cover rounded-md transition-transform transform hover:scale-105"
                />
                <p className="mt-2 text-lg font-medium text-gray-700">
                  {recipe.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CakesPage;
