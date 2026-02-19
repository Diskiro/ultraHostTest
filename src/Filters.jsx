import React from "react";

const Filters = ({ categories, selectCategory, sortOrder, onSortChange, onCategoryChange }) => {
    return (
        <section>
            <div>
                <select value={selectCategory} onChange={(e) => onCategoryChange(e.target.value)}>
                    {categories.map(category => (
                        <option key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
                    ))}
                </select>
                <button onClick={onSortChange} className="sort-button">Sort by Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}</button>
            </div>
        </section>
    );
};

export default Filters;