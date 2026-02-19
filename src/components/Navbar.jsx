import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartCount }) => {
    return (
        <header className="flex justify-between items-center px-8 py-6 bg-white border-b border-gray-100">
            <div className="w-6"></div> {/* Spacer to center title */}
            <h1 className="text-3xl font-serif tracking-widest text-gray-900 uppercase">FAKE STORE</h1>
            <div className="relative cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-gray-800" />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                        {cartCount}
                    </span>
                )}
            </div>
        </header>
    );
};

export default Navbar;