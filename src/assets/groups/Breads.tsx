import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './recipes.json';

const BreadsPage: React.FC = () => {
  return (
    <div>
      <h1>Breads</h1>
      <div className="recipe-list">
        {recipes.map(recipe => (
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
