import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { Restaurant, LocalDining, ShoppingBasket, LunchDining , Cake, Liquor} from '@mui/icons-material'; 
import './App.css';
import Logo from './logo';
import Slider from "react-slick";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { BiSushi } from "react-icons/bi";
import { TbMoodKid } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { GiSushis } from "react-icons/gi";


const Menu = () => {
  const iconSize = 24; 

  const categories = [
    { name: 'Todo', icon: <ShoppingBasket size={iconSize} /> },
    { name: 'Promociones', icon: <RiDiscountPercentLine  size={iconSize} /> },
    { name: 'Sushi Rolls', icon: <GiSushis  size={iconSize} /> },
    { name: 'Handrolls Clásicos', icon: <BiSushi size={iconSize} /> },
    { name: 'Sushi Burgers', icon: <LunchDining size={iconSize} /> },
    { name: 'Niños', icon: <TbMoodKid size={iconSize} /> },
    { name: 'Bebidas', icon: <Liquor size={iconSize} /> },
  
  ];


  // Estado para la categoría seleccionada y el término de búsqueda
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [searchTerm, setSearchTerm] = useState('');
  

  const products = [
      // Menú de Niños
    { 
      name: "Nuggets con Papas", 
      description: "Nuggets de pollo acompañados con papas fritas", 
      price: "$4.990", 
      image: "/niños.jpeg",
      category: "Niños"
  },
  { 
      name: "Tiritas con Papas", 
      description: "Tiritas de pollo acompañadas con papas fritas", 
      price: "$5.990", 
      image: "/niños.jpeg",
      category: "Niños"
  },
        // Handrolls Clásicos
      { 
        name: "Handroll Pollo Cebollín", 
        description: "Pollo con cebollín envuelto en panko o tempura", 
        price: "$3.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls Clásicos"
    },
    { 
        name: "Handroll Pollo Aceituna", 
        description: "Pollo con aceituna envuelto en panko o tempura", 
        price: "$3.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls Clásicos"
    },
    { 
        name: "Handroll Kanikama Cebollín", 
        description: "Kanikama con cebollín envuelto en panko o tempura", 
        price: "$3.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls Clásicos"
    },
    { 
        name: "Handroll Kanikama Aceituna", 
        description: "Kanikama con aceituna envuelto en panko o tempura", 
        price: "$3.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls Clásicos"
    },

    // Handrolls Premium
    { 
        name: "Handroll Pollo + Verdura a elección", 
        description: "Pollo y verdura a elección envuelto en panko o tempura", 
        price: "$4.490", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls Premium"
    },
    { 
        name: "Handroll Kanikama + Verdura a elección", 
        description: "Kanikama y verdura a elección envuelto en panko o tempura", 
        price: "$4.490", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls Premium"
    },

    // Handrolls VIP
    { 
        name: "Handroll Carne + Verdura a elección", 
        description: "Carne y verdura a elección envuelto en panko o tempura", 
        price: "$4.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls VIP"
    },
    { 
        name: "Handroll Cerdo + Verdura a elección", 
        description: "Cerdo y verdura a elección envuelto en panko o tempura", 
        price: "$4.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls VIP"
    },
    { 
        name: "Handroll Camarón + Verdura a elección", 
        description: "Camarón y verdura a elección envuelto en panko o tempura", 
        price: "$4.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls VIP"
    },
    { 
        name: "Handroll Salmón + Verdura a elección", 
        description: "Salmón y verdura a elección envuelto en panko o tempura", 
        price: "$4.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Handrolls VIP"
    },
        // Gohan
      { 
        name: "Gohan Opción 1", 
        description: "Pollo apanado, arroz, queso, cebollín, palta", 
        price: "$4.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Gohan"
    },
    { 
        name: "Gohan Opción 2", 
        description: "Camarón apanado, arroz, queso, lechuga, cebollín, palta", 
        price: "$5.490", 
        image: "URL_DE_LA_IMAGEN",
        category: "Gohan"
    },
    { 
        name: "Gohan Opción 3", 
        description: "Salmón, arroz, queso, lechuga, cebollín, palta", 
        price: "$5.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Gohan"
    },
    { 
        name: "Gohan Opción 4", 
        description: "Arroz, queso, palta, lechuga, pimentón, aceituna, choclo, cebollín", 
        price: "$4.990", 
        image: "URL_DE_LA_IMAGEN",
        category: "Gohan"
    },
    { 
        name: "Gohan Opción 5", 
        description: "Camarón, salmón, arroz, lechuga, palta, queso", 
        price: "$6.490", 
        image: "URL_DE_LA_IMAGEN",
        category: "Gohan"
    },
   
        // Sushi Promociones
      { 
        name: "Sushi Promo 20 cortes", 
        description: "Incluye 1 roll frío, 2 calientes y 1 premium", 
        price: "$10.990", 
        image: "/combo20.jpeg",
        category: "Promociones"
    },
    { 
        name: "Sushi Promo 30 cortes", 
        description: "Incluye 1 roll frío, 3 calientes y 1 premium", 
        price: "$12.990", 
        image: "/combo30.jpeg",
        category: "Promociones"
    },
    { 
        name: "Sushi Promo 40 cortes", 
        description: "Incluye 2 rolls fríos, 3 calientes y 1 premium", 
        price: "$14.990", 
        image: "/combo40.jpeg",
        category: "Promociones"
    },
    { 
        name: "Sushi Promo 50 cortes", 
        description: "Incluye 2 rolls fríos, 4 calientes y 1 premium", 
        price: "$16.990", 
        image: "/combo40.jpeg",
        category: "Promociones"
    },
    { 
        name: "Sushi Promo 60 cortes", 
        description: "Incluye 2 rolls fríos, 4 calientes y 1 premium", 
        price: "$18.990", 
        image: "/combo40.jpeg",
        category: "Promociones"
    },
    { 
        name: "Sushi Promo 70 cortes", 
        description: "Incluye 2 rolls fríos, 5 calientes y 1 premium", 
        price: "$20.990", 
        image: "/combo40.jpeg",
        category: "Promociones"
    },
   
    // Sushi Rolls
    
    { 
      name: 'Sushi California', 
      description: 'Salmón, aguacate, y queso crema', 
      price: '$8.800', 
      image: '/California_roll.jpeg',
      category: 'Sushi Rolls'
    },
    { 
      name: 'Sushi Dragon', 
      description: 'Langostino, aguacate y teriyaki', 
      price: '$13.800', 
      image: 'https://cocinista.b-cdn.net/download/bancorecursos/recetas/receta-receta-dragon-roll.jpg' ,
      category: 'Sushi Rolls'
    },
    { 
      name: 'Sushi Philadelphia', 
      description: 'Salmón, queso crema, y pepino', 
      price: '$9.500', 
      image: 'https://i.ytimg.com/vi/TpUr-BZafms/maxresdefault.jpg' ,
      category: 'Sushi Rolls'
    },
    { 
      name: 'Sushi Spicy Tuna', 
      description: 'Atún picante, mayonesa sriracha, cebolla crujiente', 
      price: '$11.300', 
      image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2023/01/Spicy-Tuna-Roll-15.jpg' ,
      category: 'Sushi Rolls'
    },
    { 
      name: 'Sushi Ebi Tempura', 
      description: 'Langostino tempura, aguacate, y sésamo', 
      price: '$12.600', 
      image: 'https://tofuu.getjusto.com/orioneat-local/resized2/CjRWF826wsWxq56b2-1200-1200.webp' ,
      category: 'Sushi Rolls'
    },
    { 
      name: 'Sushi Rainbow', 
      description: 'Roll variado con salmón, atún, aguacate y cangrejo', 
      price: '$14.200', 
      image: 'https://hungryhealthyhappy.com/wp-content/uploads/2023/05/rainbow-sushi-featured.jpg' ,
      category: 'Sushi Rolls'
    },
    { 
      name: 'Sushi Unagi Roll', 
      description: 'Anguila a la parrilla, salsa teriyaki, pepino', 
      price: '$15.000', 
      image: 'https://cdn3.didevelop.com/public/cdn/533_bb66e851493b2982ffe6beb68acb01d1.jpeg',
      category: 'Sushi Rolls' 
    },
    { 
      name: 'Sushi Veggie Roll', 
      description: 'Aguacate, pepino, zanahoria, y espinaca', 
      price: '$7.500', 
      image: 'https://www.veggiesdontbite.com/wp-content/uploads/2020/05/vegan-veggie-sushi-rolls-FI.jpg' ,
      category: 'Sushi Rolls'
    },
    { 
      name: 'Sushi Volcano', 
      description: 'Roll de atún con topping de mariscos picantes', 
      price: '$16.500', 
      image: 'https://howdaily.com/wp-content/uploads/2019/05/volcano-sushi-roll-640x960.jpg?x67400' ,
      category: 'Sushi Rolls'
    },
   
    // Bebidas
    { 
      name: 'Té Matcha', 
      description: 'Té verde en polvo tradicional japonés', 
      price: '$4.500', 
      image: 'https://media.vogue.mx/photos/5c06fe336d624e5173a1a972/1:1/w_1800,h_1800,c_limit/beneficios_del_te_matcha_1185.jpg',
      category: 'Bebidas'
    },
    { 
      name: 'Limonada de Coco', 
      description: 'Bebida refrescante a base de limón y leche de coco', 
      price: '$3.800', 
      image: 'https://mejorconsalud.as.com/wp-content/uploads/2020/12/limonada-coco.jpg',
      category: 'Bebidas'
    },
   
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todo' || product.category === selectedCategory;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const groupedProducts = products.reduce((groups, product) => {
    if (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
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
          <h2 className="text-2xl font-bold mb-4 text-[#ff5f24]">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedProducts[category].map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      ));
    } else {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      );
    }
  };

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
          <ShoppingBasket className="text-[#ff5f24]" fontSize="large" />
        </div>
      </header>

      <div className="container mx-auto px-4">
        <Slider {...settings}>
          <div className="max-w-[70%] h-[250px] mx-auto rounded-lg overflow-hidden">
            <img src="/slider1.jpeg" alt="slide1" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[70%] h-[200px] mx-auto rounded-lg overflow-hidden">
            <img src="/slider2.jpeg" alt="slide2" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[70%] h-[200px] mx-auto rounded-lg overflow-hidden">
            <img src="/slider3.jpeg" alt="slide3" className="w-full h-full object-cover" />
          </div>
        </Slider>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategorySelector categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        {renderProducts()}
      </div>

      <footer className="bg-gray-900 rounded-lg shadow dark:bg-gray-900 m-8">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <img src="/logosushi.svg" className="h-28" alt="sushi Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#591f2a] sm:mb-0">
              <li className="mr-4 md:mr-6">
                <a href="https://www.tiktok.com/@atarashisushi?lang=en" className="hover:text-[#ff5f24]">
                  <FaTiktok size={24} />
                </a>
              </li>
              <li className="mr-4 md:mr-6">
                <a href="https://m.facebook.com/atarashiisushi/albums/509553727840026/" className="hover:text-[#ff5f24]">
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li className="mr-4 md:mr-6">
                <a href="https://www.instagram.com/atarashisushii/" className="hover:text-[#ff5f24]">
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-400 sm:text-center">© 2024 <a href="#" className="hover:underline">Atarashi Sushi</a>. Todos los derechos reservados.</span>
        </div>
      </footer>
    </>
  );
};

const ProductCard = ({ product }) => (
  <div className="flex items-center bg-[#0000] border-2 border-[#591f2a] rounded-xl hover:bg-[#ff7b4b7e] shadow-md overflow-hidden w-full">
    <div className="w-1/3">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
    </div>
    <div className="w-2/3 p-6">
      <h2 className="text-xl text-left font-bold text-white">{product.name}</h2>
      <p className="text-white text-left">{product.description}</p>
      <div className="flex items-center mt-4">
        <ShoppingBasket className="text-[#591f1f] mr-2" />
        <span className="bg-[#591f2a] text-[#fadada] font-bold py-1 px-3 rounded-lg">
          {product.price}
        </span>
      </div>
    </div>
  </div>
);

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="flex justify-center mt-10">
    <div className="relative w-full sm:w-3/4 lg:w-1/2">
      <input
        type="text"
        placeholder="Buscar productos por nombre o descripción"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 bg-transparent border border-[#591f2a] rounded-full focus:outline-none"
      />
      <Search className="absolute right-4 top-3 text-white" />
    </div>
  </div>
);

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="overflow-x-auto px-4">
    <div className="flex justify-center space-x-4 my-6">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="text-center cursor-pointer" 
          onClick={() => onSelectCategory(category.name)}
        >
          <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-5 mb-2 ${selectedCategory === category.name ? 'bg-[#ff5f24]' : 'bg-[#421820]'}`}>
            {category.icon}
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Menu;