import React from "react";
import { ArrowUpDown } from "lucide-react";

const Filters = ({ categories, selectCategory, sortOrder, onSortChange, onCategoryChange }) => {
    return (
        <section className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="font-semibold text-gray-700">Category:</span>
                <select
                    value={selectCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
                    ))}
                </select>
            </div>
            <button
                onClick={onSortChange}
                className="flex items-center space-x-2 bg-[#86bb9f] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 hover:bg-[#70a48d]"
            >
                <ArrowUpDown size={16} />
                <span>Sort by Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}</span>
            </button>
        </section>
    );
};

export default Filters;