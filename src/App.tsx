// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CakeRecipes from "./categories/cakeRecipes";
import CookiesRecipes from "./categories/cookieRecipes";
import BrownieRecipes from "./categories/brownieRecipes";
import PieRecipes from "./categories/pieRecipes";
import QuickbreadRecipes from "./categories/quickbreadRecipes";
// Import other category components

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cakes">Cakes</Link>
            </li>
            <li>
              <Link to="/cookies">Cookies</Link>
            </li>
            <li>
              <Link to="/brownies">Brownies</Link>
            </li>
            <li>
              <Link to="/pies">Pies</Link>
            </li>
            <li>
              <Link to="/quickbreads">Quick Breads</Link>
            </li>
            {/* Add links for other categories */}
          </ul>
        </nav>
        <Routes>
          <Route path="/cakes" element={<CakeRecipes />} />
          <Route path="/cookies" element={<CookiesRecipes />} />
          <Route path="/brownies" element={<BrownieRecipes />} />
          <Route path="/pies" element={<PieRecipes />} />
          <Route path="/quickbreads" element={<QuickbreadRecipes />} />
          {/* Add routes for other categories */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
