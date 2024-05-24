import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative">
            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded" onClick={() => setShowMenu(prev => !prev)}>
                <MenuIcon />
            </button>
            {showMenu && (
                <div id="menu__items" className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                    <a className="block p-4 font-normal hover:font-semibold">All Recipes</a>
                    <a className="block p-4 font-normal hover:font-semibold">Submit a Recipe</a>
                    <a className="block p-4 font-normal hover:font-semibold">Baking Tips</a>
                    <a className="block p-4 font-normal hover:font-semibold">About Us</a>
                </div>
            )}
        </div>
    );
}

export default Menu;
