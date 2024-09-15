import React from 'react';
import { Search } from '@mui/icons-material';
import { Restaurant, LocalDining } from '@mui/icons-material'; // Puedes añadir otros iconos
import './App.css';

const Menu = () => {
  const categories = [
    { name: 'Entrantes', icon: <Restaurant /> },
    { name: 'Ensalada', icon: <LocalDining /> },
    { name: 'Sushi Rolls', icon: <Restaurant /> },
    // Añade más categorías según sea necesario
  ];

  const products = [
    { name: 'Sushi California', description: 'Salmón, aguacate, y queso crema', price: '$8.800', image: 'https://example.com/sushi1.jpg' },
    { name: 'Sushi Dragon', description: 'Langostino, aguacate y teriyaki', price: '$13.800', image: 'https://example.com/sushi2.jpg' },
    // Añade más productos
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mt-10">
        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Buscar productos por nombre"
            className="w-full p-2 border border-gray-300 rounded-full focus:outline-none"
          />
          <Search className="absolute right-4 top-3 text-gray-500" />
        </div>
      </div>

      <div className="flex justify-center my-6">
        {categories.map((category, index) => (
          <div key={index} className="mx-3 text-center">
            <div className="rounded-full bg-gray-200 p-4 mb-2">
              {category.icon}
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4 rounded-lg" />
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-orange-500 font-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
