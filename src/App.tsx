import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import CookiesPage from './assets/groups/Cookies';
import BrowniesPage from './assets/groups/Brownies';
import BreadsPage from './assets/groups/Breads';
import CakesPage from './assets/groups/Cakes';
import RecipeDetail from './assets/groups/Recipe';
import recipes from './recipes.json';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const goBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cookies" element={<CookiesPage selectRecipe={selectRecipe} />} />
        <Route path="/brownies" element={<BrowniesPage selectRecipe={selectRecipe} />} />
        <Route path="/breads" element={<BreadsPage selectRecipe={selectRecipe} />} />
        <Route path="/cakes" element={<CakesPage selectRecipe={selectRecipe} />} />
        <Route path="/recipe/:id" element={selectedRecipe ? <RecipeDetail recipe={selectedRecipe} goBack={goBack} /> : <div>Recipe not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


