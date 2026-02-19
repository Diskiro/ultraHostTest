
import React from "react";

const Navbar = ({ cartCount }) => {
    return (
        <header className="navbar">
            <h1 className="navbar-title">Fake Store</h1>
            <div className="shopping-cart-icon"></div>
            <span>{cartCount}</span>
        </header>
    );
};

export default Navbar;