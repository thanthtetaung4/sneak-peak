import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center w-screen p-5 shadow-md">
      <div>
        <h1 className="text-3xl font-bold text-red-500">Sneak Peak</h1>
      </div>
      <div className="w-1/6 flex flex-row">
        <ul className="w-full list-none flex flex-row justify-around text-xl">
          <li>Shop</li>
          <li>Cart</li>
          <li>Account</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
