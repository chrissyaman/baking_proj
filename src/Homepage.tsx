import React from 'react';
import './style.css';
import Menu from './Menubar'; // Import the Menu component

const Homepage: React.FC = () => {
  return (
    <div>
      <header className="bg-pink-300 py-4 px-3 flex justify-between items-center">
        <div className="text-white text-5xl" style={{ fontFamily: 'Pacifico, cursive' }}>Epic Baking Website</div>
        <Menu />
      </header>

      <main className="flex justify-center mt-10">
        <div className="flex justify-center space-x-8 text-center">
          <a href="/cookies" className="flex flex-col items-center">
            <img src="https://lh3.googleusercontent.com/proxy/0Ke-So2XTtezVf7Hy_NDP8QjPaJdTjQg1JNQ2tX2VuG2ruf3vp1ByE-Y5xlrvjsw9BjmlwLgtm0u6AOKwobSEW2tDZkLOVI03OieT8a9XGNKkfSX3mlplHLTdZB9lYCL0O7x9I4" alt="Cookies" className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" />
            <p className="mt-2 text-lg font-medium text-gray-700">Cookies</p>
          </a>
          <a href="/brownies" className="flex flex-col items-center">
            <img src="https://cakesbymk.com/wp-content/uploads/2023/01/Template-Size-for-Blog-Photos-15-802x1024.jpg" alt="Brownies" className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" />
            <p className="mt-2 text-lg font-medium text-gray-700">Brownies</p>
          </a>
          <a href="/breads" className="flex flex-col items-center">
            <img src="https://pastryandbeyond.com/wp-content/uploads/2023/05/Lemon-Loaf-featured.jpg" alt="Breads/Loaves" className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" />
            <p className="mt-2 text-lg font-medium text-gray-700">Breads/Loaves</p>
          </a>
          <a href="/cakes" className="flex flex-col items-center">
            <img src="https://www.foodandwine.com/thmb/HXQZrJNlb-fIOwJfhhQupjvEuBw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chantilly-Cream-Cake-FT-RECIPE0423-b012a9c7b8ed419f83a219f8ef9201e8.jpg" alt="Cakes" className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105" />
            <p className="mt-2 text-lg font-medium text-gray-700">Cakes</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
