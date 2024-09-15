import React from 'react';
import { Search } from '@mui/icons-material';
import { Restaurant, LocalDining } from '@mui/icons-material'; 
import './App.css';

// Este es el componente del menú, donde vamos a mostrar las categorías y los productos.
const Menu = () => {
  
  // Estas son las categorías del menú. Aquí estamos metiendo las categorías con su ícono, pana.
  const categories = [
    { name: 'Entrantes', icon: <Restaurant /> },
    { name: 'Ensalada', icon: <LocalDining /> },
    { name: 'Sushi Rolls', icon: <Restaurant /> },
    // categorías
  ];

  // Estos son los productos del menú, cada uno con su nombre, descripción, precio y foto. Pura vaina buena.
  const products = [
    { 
      name: 'Sushi California', 
      description: 'Salmón, aguacate, y queso crema', 
      price: '$8.800', 
      image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg' 
    },
    { 
      name: 'Sushi Dragon', 
      description: 'Langostino, aguacate y teriyaki', 
      price: '$13.800', 
      image: 'https://cocinista.b-cdn.net/download/bancorecursos/recetas/receta-receta-dragon-roll.jpg' 
    },
    { 
      name: 'Sushi Philadelphia', 
      description: 'Salmón, queso crema, y pepino', 
      price: '$9.500', 
      image: 'https://i.ytimg.com/vi/TpUr-BZafms/maxresdefault.jpg' 
    },
    { 
      name: 'Sushi Spicy Tuna', 
      description: 'Atún picante, mayonesa sriracha, cebolla crujiente', 
      price: '$11.300', 
      image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2023/01/Spicy-Tuna-Roll-15.jpg' 
    },
    { 
      name: 'Sushi Ebi Tempura', 
      description: 'Langostino tempura, aguacate, y sésamo', 
      price: '$12.600', 
      image: 'https://tofuu.getjusto.com/orioneat-local/resized2/CjRWF826wsWxq56b2-1200-1200.webp' 
    },
    { 
      name: 'Sushi Rainbow', 
      description: 'Roll variado con salmón, atún, aguacate y cangrejo', 
      price: '$14.200', 
      image: 'https://hungryhealthyhappy.com/wp-content/uploads/2023/05/rainbow-sushi-featured.jpg' 
    },
    { 
      name: 'Sushi Unagi Roll', 
      description: 'Anguila a la parrilla, salsa teriyaki, pepino', 
      price: '$15.000', 
      image: 'https://cdn3.didevelop.com/public/cdn/533_bb66e851493b2982ffe6beb68acb01d1.jpeg' 
    },
    { 
      name: 'Sushi Veggie Roll', 
      description: 'Aguacate, pepino, zanahoria, y espinaca', 
      price: '$7.500', 
      image: 'https://www.veggiesdontbite.com/wp-content/uploads/2020/05/vegan-veggie-sushi-rolls-FI.jpg' 
    },
    { 
      name: 'Sushi Volcano', 
      description: 'Roll de atún con topping de mariscos picantes', 
      price: '$16.500', 
      image: 'https://howdaily.com/wp-content/uploads/2019/05/volcano-sushi-roll-640x960.jpg?x67400' 
    }
  ];
  
  return (
    <div className="container mx-auto px-4">
      {/* Campo de búsqueda pa' los panas que quieren buscar su sushi fino. */}
      <div className="flex justify-center mt-10">
        <div className="relative w-full sm:w-3/4 lg:w-1/2">
          <input
            type="text"
            placeholder="Buscar productos por nombre"
            className="w-full p-2 border border-gray-300 rounded-full focus:outline-none"
          />
          {/* Icono de búsqueda estilo material, pa' que se vea pro. */}
          <Search className="absolute right-4 top-3 text-gray-500" />
        </div>
      </div>

      {/* Aquí mostramos las categorías, bien chévere pa' que los usuarios sepan qué pedir. */}
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

      {/* Grid de productos responsive, se adapta como un pana a todas las pantallas. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-lg">
            {/* Mostrando cada sushi con su foto, descripción y precio, no hay más na' */}
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
