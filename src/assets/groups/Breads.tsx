import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './recipes.json';

const BreadsPage: React.FC = () => {
    const breadRecipes = recipes.filter(recipe => recipe.type === "bread");
  return (
    <div>
      <h1>Breads</h1>
      <div className="recipe-list">
        {breadRecipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/breads/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadsPage;
