import React, { useState, useEffect, useMemo } from 'react'
import ProductCard from './ProductCard';
import Filters from './Filters';
import Navbar from './Navbar';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectCategory, setSelectCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchProducts = async  () => {
      try {
        const response = await  fetch('https://fakestoreapi.com/products');
        if(!response.ok) {
          throw new Error('Error to charge products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    return ['all', ...new Set(products.map(product => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectCategory !== 'all') {
      result = result.filter(product => product.category === selectCategory);
    }
    result.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    return result;
  }, [products, selectCategory, sortOrder]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Filters
        categories={categories}
        selectCategory={selectCategory}
        sortOrder={sortOrder}
        onSortChange={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
        onCategoryChange={setSelectCategory}
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            isInCart={cart.some(item => item.id === product.id)} 
            onAddToCart={addToCart} 
            onRemoveFromCart={removeFromCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default App
