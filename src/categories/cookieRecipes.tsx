// src/categories/cookieRecipes.tsx
// src/categories/cakeRecipes.tsx
import React, { useState } from "react";
import RecipeForm from "../recipeForm";
import Template from "../recipeTemplate";

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

const initialRecipes: Recipe[] = [
  {
    title: "Chocolate cookies",
    description: "A delicious chocolate cookies.",
    ingredients: [
      "1 cup flour",
      "1 cup sugar",
      "1 cup cocoa powder",
      "2 eggs",
      "1 cup milk",
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix all ingredients together.",
      "Pour batter into a greased cake pan.",
      "Bake for 30-35 minutes or until a toothpick comes out clean.",
    ],
    image:
      "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg",
  },
];

const CookieRecipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [showForm, setShowForm] = useState(false);

  const addRecipe = (recipe: Recipe) => {
    setRecipes([...recipes, recipe]);
    setShowForm(false); // Hide the form after adding a recipe
  };

  return (
    <div>
      <h1>Cookie Recipes</h1>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-4 mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {showForm ? "Cancel" : "Add New Recipe"}
      </button>
      {showForm && <RecipeForm onSubmit={addRecipe} />}
      {recipes.map((recipe, index) => (
        <Template key={index} {...recipe} />
      ))}
    </div>
  );
};

export default CookieRecipes;
