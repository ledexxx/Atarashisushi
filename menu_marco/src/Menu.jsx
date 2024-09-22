import React, { useState, useEffect } from 'react';
import { Search } from '@mui/icons-material';
import { FaFacebookF, FaInstagram, FaTiktok, FaShoppingBasket } from 'react-icons/fa';
import './App.css';
import Logo from './logo';

const Menu = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isModalOpen]);

  const categories = [
    { name: 'Todo', image: '/icono.png' },
    { name: 'Promociones', image: '/promos.jpg' },
    { name: 'Sin Arroz', image: '/sin_arroz.png' },
    { name: 'Handrolls Clásicos', image: '/handrolls.png' },
    { name: 'Sushi Burgers', image: '/sushiburger.png' },
    { name: 'Gohan', image: '/GOHAN.png' },
    { name: 'Niños', image: '/NINOS.jpg' },
    { name: 'Bebidas', image: '/icono.png' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [searchTerm, setSearchTerm] = useState('');


  const products = [
 
    // Sushi Promociones
    { 
      name: "Sushi Promo 20 cortes", 
      description: "Incluye 1 roll frío, 2 calientes y 1 premium", 
      price: "$10.990", 
      image: "/icono.png",
      category: "Promociones"
  },
  { 
      name: "Sushi Promo 30 cortes", 
      description: "Incluye 1 roll frío, 3 calientes y 1 premium", 
      price: "$12.990", 
      image: "/icono.png",
      category: "Promociones"
  },
  { 
      name: "Sushi Promo 40 cortes", 
      description: "Incluye 2 rolls fríos, 3 calientes y 1 premium", 
      price: "$14.990", 
      image: "/icono.png",
      category: "Promociones"
  },
  { 
      name: "Sushi Promo 50 cortes", 
      description: "Incluye 2 rolls fríos, 4 calientes y 1 premium", 
      price: "$16.990", 
      image: "/icono.png",
      category: "Promociones"
  },
  { 
      name: "Sushi Promo 60 cortes", 
      description: "Incluye 2 rolls fríos, 4 calientes y 1 premium", 
      price: "$18.990", 
      image: "/icono.png",
      category: "Promociones"
  },
  { 
      name: "Sushi Promo 70 cortes", 
      description: "Incluye 2 rolls fríos, 5 calientes y 1 premium", 
      price: "$20.990", 
      image: "/icono.png",
      category: "Promociones"
  },
      // Sin Arroz
      {
        name: 'Promo Sin Arroz 16 cortes',
        description: '1 rolls caliente, 1 rolls premium',
        price: '$10.990',
        image: '/icono.png',
        category: 'Sin Arroz'
      },
      {
        name: 'Promo Sin Arroz 24 cortes',
        description: '2 rolls caliente, 1 rolls premium',
        price: '$13.990',
        image: '/icono.png',
        category: 'Sin Arroz'
      },
      {
        name: 'Promo Sin Arroz 32 cortes',
        description: '2 rolls caliente, 1 rolls premium, 1 rolls nori',
        price: '$16.990',
        image: '/icono.png',
        category: 'Sin Arroz'
      },
      {
        name: 'Promo Sin Arroz 40 cortes',
        description: '3 rolls caliente, 1 rolls premium, 1 rolls nori',
        price: '$19.990',
        image: '/icono.png',
        category: 'Sin Arroz'
      },
  // Sushi Rolls
  
  { 
    name: 'Sushi California', 
    description: 'Salmón, aguacate, y queso crema', 
    price: '$8.800', 
    image: '/icono.png',
    category: 'Sushi Rolls'
  },
  { 
    name: 'Sushi Dragon', 
    description: 'Langostino, aguacate y teriyaki', 
    price: '$13.800', 
    image: '/icono.png',
    category: 'Sushi Rolls'
  },
  { 
    name: 'Sushi Philadelphia', 
    description: 'Salmón, queso crema, y pepino', 
    price: '$9.500', 
    image: '/icono.png',
    category: 'Sushi Rolls'
  },
  { 
    name: 'Sushi Spicy Tuna', 
    description: 'Atún picante, mayonesa sriracha, cebolla crujiente', 
    price: '$11.300', 
    image: '/icono.png',
    category: 'Sushi Rolls'
  },
  { 
    name: 'Sushi Ebi Tempura', 
    description: 'Langostino tempura, aguacate, y sésamo', 
    price: '$12.600', 
    image: '/icono.png',
    category: 'Sushi Rolls'
  },
  { 
    name: 'Sushi Rainbow', 
    description: 'Roll variado con salmón, atún, aguacate y cangrejo', 
    price: '$14.200', 
    image: '/icono.png',
    category: 'Sushi Rolls'
  },
  { 
    name: 'Sushi Unagi Roll', 
    description: 'Anguila a la parrilla, salsa teriyaki, pepino', 
    price: '$15.000', 
    image: '/icono.png',
    category: 'Sushi Rolls' 
  },
  { 
    name: 'Sushi Veggie Roll', 
    description: 'Aguacate, pepino, zanahoria, y espinaca', 
    price: '$7.500', 
    image: '/icono.png',
    category: 'Sushi Rolls'
  },
  { 
    name: 'Sushi Volcano', 
    description: 'Roll de atún con topping de mariscos picantes', 
    price: '$16.500', 
    image: '/icono.png',
    category: 'Sushi Rolls'
  },
    // Menú de Niños
  { 
    name: "Nuggets con Papas", 
    description: "Nuggets de pollo acompañados con papas fritas", 
    price: "$4.990", 
    image: "/icono.png",
    category: "Niños"
},
{ 
    name: "Tiritas con Papas", 
    description: "Tiritas de pollo acompañadas con papas fritas", 
    price: "$5.990", 
    image: "/icono.png",
    category: "Niños"
},
 // Sushi Burgers
 { 
  name: "Sushi Burger Opción Pollo", 
  description: "Pollo apanado, lechuga, palta, cebollín, queso crema o queso amarillo", 
  price: "$5.990", 
  image: "/icono.png",
  category: "Sushi Burgers"
},
{ 
  name: "Sushi Burger Opción Carne", 
  description: "Carne de vacuno, lechuga, cebollín, pimentón, queso crema o queso amarillo", 
  price: "$6.590", 
  image: "/icono.png",
  category: "Sushi Burgers"
},
{ 
  name: "Sushi Burger Opción Camarón", 
  description: "Camarón apanado, lechuga, palta, cebollín, queso crema o queso amarillo", 
  price: "$7.490", 
  image: "/icono.png",
  category: "Sushi Burgers"
},
{ 
  name: "Sushi Burger Opción Veggie", 
  description: "Verduras seleccionadas, queso crema o queso amarillo", 
  price: "$5.990", 
  image: "/icono.png",
  category: "Sushi Burgers"
},
      // Handrolls Clásicos
    { 
      name: "Handroll Pollo Cebollín", 
      description: "Pollo con cebollín envuelto en panko o tempura", 
      price: "$3.990", 
      image: "/icono.png",
      category: "Handrolls Clásicos"
  },
  { 
      name: "Handroll Pollo Aceituna", 
      description: "Pollo con aceituna envuelto en panko o tempura", 
      price: "$3.990", 
      image: "/icono.png",
      category: "Handrolls Clásicos"
  },
  { 
      name: "Handroll Kanikama Cebollín", 
      description: "Kanikama con cebollín envuelto en panko o tempura", 
      price: "$3.990", 
      image: "/icono.png",
      category: "Handrolls Clásicos"
  },
  { 
      name: "Handroll Kanikama Aceituna", 
      description: "Kanikama con aceituna envuelto en panko o tempura", 
      price: "$3.990", 
      image: "/icono.png",
      category: "Handrolls Clásicos"
  },

  // Handrolls Premium
  { 
      name: "Handroll Pollo + Verdura a elección", 
      description: "Pollo y verdura a elección envuelto en panko o tempura", 
      price: "$4.490", 
      image: "/icono.png",
      category: "Handrolls Premium"
  },
  { 
      name: "Handroll Kanikama + Verdura a elección", 
      description: "Kanikama y verdura a elección envuelto en panko o tempura", 
      price: "$4.490", 
      image: "/icono.png",
      category: "Handrolls Premium"
  },

  // Handrolls VIP
  { 
      name: "Handroll Carne + Verdura a elección", 
      description: "Carne y verdura a elección envuelto en panko o tempura", 
      price: "$4.990", 
      image: "/icono.png",
      category: "Handrolls VIP"
  },
  { 
      name: "Handroll Cerdo + Verdura a elección", 
      description: "Cerdo y verdura a elección envuelto en panko o tempura", 
      price: "$4.990", 
      image: "/icono.png",
      category: "Handrolls VIP"
  },
  { 
      name: "Handroll Camarón + Verdura a elección", 
      description: "Camarón y verdura a elección envuelto en panko o tempura", 
      price: "$4.990", 
      image: "/icono.png",
      category: "Handrolls VIP"
  },
  { 
      name: "Handroll Salmón + Verdura a elección", 
      description: "Salmón y verdura a elección envuelto en panko o tempura", 
      price: "$4.990", 
      image: "/icono.png",
      category: "Handrolls VIP"
  },
      // Gohan
    { 
      name: "Gohan Opción 1", 
      description: "Pollo apanado, arroz, queso, cebollín, palta", 
      price: "$4.990", 
      image: "/icono.png",
      category: "Gohan"
  },
  { 
      name: "Gohan Opción 2", 
      description: "Camarón apanado, arroz, queso, lechuga, cebollín, palta", 
      price: "$5.490", 
      image: "/icono.png",
      category: "Gohan"
  },
  { 
      name: "Gohan Opción 3", 
      description: "Salmón, arroz, queso, lechuga, cebollín, palta", 
      price: "$5.990", 
      image: "/icono.png",
      category: "Gohan"
  },
  { 
      name: "Gohan Opción 4", 
      description: "Arroz, queso, palta, lechuga, pimentón, aceituna, choclo, cebollín", 
      price: "$4.990", 
      image: "/icono.png",
      category: "Gohan"
  },
  { 
      name: "Gohan Opción 5", 
      description: "Camarón, salmón, arroz, lechuga, palta, queso", 
      price: "$6.490", 
      image: "/icono.png",
      category: "Gohan"
  },
   
   
   
  // Bebidas
  { 
    name: 'Fanta', 
    description: 'Bebida de fantasía sabor naranja', 
    price: '$2.500', 
    image: '/icono.png',
    category: 'Bebidas'
  },
  { 
    name: 'Limonada de Coco', 
    description: 'Bebida refrescante a base de limón y leche de coco', 
    price: '$3.800', 
    image: '/icono.png',
    category: 'Bebidas'
  },
];
const filteredProducts = products.filter(product => {
  const matchesCategory = selectedCategory === 'Todo' || product.category === selectedCategory;
  const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesCategory && matchesSearchTerm;
});

const groupedProducts = products.reduce((groups, product) => {
  if (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
  }
  return groups;
}, {});

const renderProducts = () => {
  if (selectedCategory === 'Todo') {
    return Object.keys(groupedProducts).map((category, index) => (
      <div key={index} className="my-4">
        <h2 className="text-2xl font-bold mb-4 text-[#ffffff]">{category}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groupedProducts[category].map((product, idx) => (
            <ProductCard key={idx} product={product} openModal={openModal} />
          ))}
        </div>
      </div>
    ));
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} openModal={openModal} />
        ))}
      </div>
    );
  }
};

return (
  <>
    <header className="flex justify-between items-center max-w-5xl mx-auto px-4 py-2 bg-transparent">
      <div className="text-white cursor-pointer">
        <Search className="text-[#ff5f24]" fontSize="large" />
      </div>
      <div className="mx-auto">
        <Logo />
      </div>
      <div className="text-white cursor-pointer">
        <FaShoppingBasket className="text-[#ff5f24]" fontSize="large" />
      </div>
    </header>

    <div className="container mx-auto px-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategorySelector categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      {renderProducts()}
    </div>

    {isModalOpen && <Modal product={selectedProduct} closeModal={closeModal} />}

    <footer className="bg-[#00000000] rounded-lg shadow-lg mt-8 p-8">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-center">
          <p className="text-center text-white text-xl font-bold">
            ¡NO TE ENROLLES, MEJOR PIDETE UN ROLLITO!
          </p>
        </div>
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://www.instagram.com/atarashisushii/" className="hover:text-[#ff5f24]">
            <FaInstagram size={32} className="text-[#ff5f24]" />
          </a>
          <a href="https://www.tiktok.com/@atarashisushi?lang=en" className="hover:text-[#ff5f24]">
            <FaTiktok size={32} className="text-[#ff5f24]" />
          </a>
          <a href="https://m.facebook.com/atarashiisushi/albums/509553727840026/" className="hover:text-[#ff5f24]">
            <FaFacebookF size={32} className="text-[#ff5f24]" />
          </a>
        </div>
        <hr className="my-6 border-[#ff5f24] lg:my-8" />
        <div className="text-center">
          <span className="block text-sm text-gray-400">© 2024 <a href="#" className="hover:underline">Atarashi Sushi</a>. Todos los Derechos Reservados.</span>
        </div>
      </div>
    </footer>
  </>
);
};

const ProductCard = ({ product, openModal }) => (
  <div onClick={() => openModal(product)} className="flex items-center bg-[#0a111f] border-2 border-[#591f2a] rounded-xl hover:bg-[#ff7b4b7e] shadow-md overflow-hidden w-full cursor-pointer">
    <div className="w-1/3 h-full">  {/* Asegura que el contenedor ocupe todo el alto */}
      <img src={product.image} alt={product.name} className="w-full h-full object-cover" /> {/* Imagen ajustada */}
    </div>
    <div className="w-2/3 p-6">
      <h2 className="text-xl text-left font-bold text-white">{product.name}</h2>
      <p className="text-white text-left">{product.description}</p>
      <div className="flex items-center mt-4">
        <FaShoppingBasket className="text-[#ff5e24fb] mr-2" />
        <span className="bg-[#ff5e24b0] text-[#ffffff] font-bold py-1 px-3 rounded-lg">
          {product.price}
        </span>
      </div>
    </div>
  </div>
);


const Modal = ({ product, closeModal }) => {
if (!product) return null;

return (
  <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div onClick={(e) => e.stopPropagation()} className="bg-white p-4 rounded-lg">
      <img src={product.image} alt={product.name} className="max-w-full max-h-screen object-cover" />
    </div>
  </div>
);
};

const SearchBar = ({ searchTerm, setSearchTerm }) => (
<div className="flex justify-center mt-10">
  <div className="relative w-full sm:w-3/4 lg:w-1/2">
    <input
      type="text"
      placeholder="Buscar productos por nombre o descripción"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 bg-transparent border border-[#ff3a3a] rounded-full focus:outline-none"
    />
    <Search className="absolute right-4 top-3 text-white" />
  </div>
</div>
);

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="overflow-x-auto px-4">
    <div className="flex space-x-6 my-6">
      {categories.map((category, index) => (
        <div key={index} className="text-center cursor-pointer" onClick={() => onSelectCategory(category.name)}>
          <div className={`rounded-full w-24 h-24 flex items-center justify-center mx-5 mb-2 border-4 ${selectedCategory === category.name ? 'border-[#ff5f24]' : 'border-[#ff3030]'}`}>
            <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="text-white">{category.name}</p>
        </div>
      ))}
    </div>
  </div>
);


export default Menu;