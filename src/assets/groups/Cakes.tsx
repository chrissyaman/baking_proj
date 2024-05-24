import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './recipes.json';

const CakesPage: React.FC = () => {
    const cakesRecipes = recipes.filter(recipe => recipe.type === "cake");
  return (
    <div>
      <h1>Cakes</h1>
      <div className="recipe-list">
        {cakesRecipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/cakes/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakesPage;
