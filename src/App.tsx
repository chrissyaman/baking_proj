import React from 'react';
import Homepage from './Homepage';
import { useState } from 'react';
import CookiesPage from './assets/groups/Cookies';

const App = () => {
  const [currentPage, setCurrentPage] = useState('homepage');
  const navigateToHomepage = () => {
    setCurrentPage('homepage');
  return (
    
    <div>
      <Homepage />
    </div>
  );
};

export default App;