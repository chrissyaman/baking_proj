// src/RecipeManager.tsx
import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import Template from "./recipeTemplate";

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

const initialRecipes: Recipe[] = [
  {
    title: "Chocolate Chip Cookies",
    description: "Delicious homemade chocolate chip cookies.",
    ingredients: [
      "1 cup butter",
      "1 cup sugar",
      "2 cups flour",
      "1 cup chocolate chips",
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Cream together the butter and sugar.",
      "Add the flour and mix well.",
      "Stir in the chocolate chips.",
      "Drop by spoonfuls onto a baking sheet.",
      "Bake for 10-12 minutes or until golden brown.",
    ],
  },
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "50g parmesan cheese",
      "2 cloves garlic",
      "Salt and pepper",
    ],
    steps: [
      "Cook the spaghetti according to package instructions.",
      "Fry the pancetta with the garlic.",
      "Beat the eggs and mix with the cheeses.",
      "Drain the spaghetti and mix with the pancetta and egg mixture.",
      "Season with salt and pepper and serve.",
    ],
  },
];

const RecipeManager: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

  const addRecipe = (recipe: Recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div>
      <RecipeForm onSubmit={addRecipe} />
      {recipes.map((recipe, index) => (
        <Template key={index} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeManager;
