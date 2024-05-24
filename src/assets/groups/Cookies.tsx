import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './recipes.json';

const CookiesPage: React.FC = () => {
  return (
    <div>
      <h1>Cookies</h1>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/cookies/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookiesPage;