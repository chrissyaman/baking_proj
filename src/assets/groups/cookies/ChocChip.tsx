
import React from 'react';
import recipes from '../recipes.json';

const ChocolateChipCookiesPage: React.FC = () => {
  const recipe = recipes.find(recipe => recipe.id === 1); // Assuming Chocolate Chip Cookies have id 1

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
      {/* Comment section */}
    </div>
  );
};

export default ChocolateChipCookiesPage;
