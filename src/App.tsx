import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import CookiesPage from './assets/groups/Cookies';
import BrowniesPage from './assets/groups/Brownies';
import BreadsPage from './assets/groups/Breads';
import CakesPage from './assets/groups/Cakes';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/brownies" element={<BrowniesPage />} />
        <Route path="/breads" element={<BreadsPage />} />
        <Route path="/cakes" element={<CakesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



// const App = () => {
//   return (
//     <Homepage></Homepage>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/Homepage" element={<Homepage/>} />
        // {/* <Route path="/cookies" element={<CookiesPage />} />
        // <Route path="/brownies" element={<BrowniesPage />} />
        // <Route path="/breads" element={<BreadsPage />} />
        // <Route path="/cakes" element={<CakesPage />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

