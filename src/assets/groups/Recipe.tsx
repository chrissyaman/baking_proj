import React from 'react';

const RecipeDetail = ({ recipe, goBack }) => {
  return (
    <div className="p-4">
      <button onClick={goBack} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
        Back
      </button>
      <h1 className="text-3xl font-bold">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-auto mt-4 mb-4" />
      <h2 className="text-2xl font-semibold">Ingredients</h2>
      <ul className="list-disc ml-8 mt-2 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold">Instructions</h2>
      <ol className="list-decimal ml-8 mt-2">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
