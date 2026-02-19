import React from 'react';

const ProductCard = ({ product, isInCart, onAddToCart, onRemoveFromCart }) => {
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <span className="product-category">{product.category}</span>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            {isInCart ? (
                <button onClick={() => onRemoveFromCart(product.id)} className="remove-button">Remove from Cart</button>
            ) : (
                <button onClick={() => onAddToCart(product)} className="add-button">Add to Cart</button>
            )}
        </div>
    );
};

export default ProductCard;
