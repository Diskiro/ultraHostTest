import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';

const ProductCard = ({ product, isInCart, onAddToCart, onRemoveFromCart }) => {
    return (
        <div className="group flex flex-col gap-3 cursor-pointer">
            <div className="aspect-square bg-[#f4f4f4] rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-1/2 h-1/2 object-contain mix-blend-multiply"
                />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        isInCart ? onRemoveFromCart(product.id) : onAddToCart(product);
                    }}
                    className={`absolute bottom-4 right-4 p-3 rounded-full shadow-sm transition-all duration-200 ${isInCart
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-[#86bb9f] text-white hover:bg-[#70a48d]'
                        }`}
                    title={isInCart ? "Remove from Cart" : "Add to Cart"}
                >
                    {isInCart ? <Trash2 size={18} /> : <ShoppingCart size={18} />}
                </button>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {product.category}
                </span>
                <h2 className="font-serif text-base font-bold text-gray-900 leading-tight line-clamp-2 min-h-[2.5rem]" title={product.title}>
                    {product.title}
                </h2>
                <p className="text-lg font-bold text-gray-900">
                    ${product.price}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
