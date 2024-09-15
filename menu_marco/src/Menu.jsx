import React from 'react';
import { Search } from '@mui/icons-material';
import { Restaurant, LocalDining, ShoppingBasket, LunchDining, EmojiFoodBeverage, Cake, Liquor } from '@mui/icons-material'; 
import './App.css';

const Menu = () => {
  const categories = [
    { name: 'Ensaladas', icon: <LocalDining /> },
    { name: 'Sushi Rolls', icon: <Restaurant /> },
    { name: 'Sushiburguers', icon: <LunchDining /> },
    { name: 'Postres', icon: <Cake /> },
    { name: 'Bebidas', icon: <EmojiFoodBeverage /> },
    { name: 'Licores', icon: <Liquor /> },
  ];

  const products = [

    { 
      "name": "Ensalada César", 
      "description": "Lechuga romana, pollo a la parrilla, crotones y aderezo César", 
      "price": "$8.500", 
      "image": "https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web.jpg" 
  },
  { 
      "name": "Ensalada Caprese", 
      "description": "Tomate, mozzarella fresca, albahaca y aceite de oliva", 
      "price": "$9.200", 
      "image": "https://i.blogs.es/2d572b/caprese/1366_2000.jpg" 
  },
  { 
      "name": "Ensalada Griega", 
      "description": "Pepino, tomate, aceitunas, cebolla roja y queso feta", 
      "price": "$7.900", 
      "image": "https://images.getrecipekit.com/20211227205902-ensalada-20griega.jpg?width=650&quality=90&" 
  },
  { 
      "name": "Ensalada de Quinoa", 
      "description": "Quinoa, aguacate, espinacas, y nueces", 
      "price": "$10.000", 
      "image": "https://danzadefogones.com/wp-content/uploads/2024/08/ensalada-de-quinoa-facil.jpg" 
  },
  { 
      "name": "Ensalada Waldorf", 
      "description": "Manzana, apio, nueces y mayonesa ligera", 
      "price": "$11.300", 
      "image": "https://www.gourmet.cl/wp-content/uploads/2023/11/WALDORF.jpg" 
  },
  { 
      "name": "Ensalada de Atún", 
      "description": "Atún, huevo duro, tomate cherry y lechuga", 
      "price": "$9.800", 
      "image": "https://www.gourmet.cl/wp-content/uploads/2021/10/ensalada-de-at%C3%BAn-internet-1.jpg" 
  },
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
     // Postres
    ,{ 
      name: 'Tiramisú', 
      description: 'Postre italiano con mascarpone, café y cacao', 
      price: '$6.500', 
      image: 'https://www.flavoursholidays.co.uk/wp-content/uploads/2020/07/Tiramisu.jpg' 
    },
    { 
      name: 'Cheesecake de Frutos Rojos', 
      description: 'Pastel de queso con una base de galleta y cobertura de frutos rojos', 
      price: '$7.200', 
      image: 'https://mandolina.co/wp-content/uploads/2024/04/Cheesecake-de-Frutos-Rojos-1080x550-1.jpg' 
    },
    // Bebidas
    { 
      name: 'Té Matcha', 
      description: 'Té verde en polvo tradicional japonés', 
      price: '$4.500', 
      image: 'https://media.vogue.mx/photos/5c06fe336d624e5173a1a972/1:1/w_1800,h_1800,c_limit/beneficios_del_te_matcha_1185.jpg' 
    },
    { 
      name: 'Limonada de Coco', 
      description: 'Bebida refrescante a base de limón y leche de coco', 
      price: '$3.800', 
      image: 'https://mejorconsalud.as.com/wp-content/uploads/2020/12/limonada-coco.jpg' 
    },
    // Licores
    { 
      name: 'Sake', 
      description: 'Bebida alcohólica japonesa elaborada a partir de arroz fermentado', 
      price: '$12.000', 
      image: 'https://www.justonecookbook.com/wp-content/uploads/2019/09/Sake-II.jpg' 
    },
    { 
      name: 'Mojito', 
      description: 'Cóctel cubano con ron, menta y lima', 
      price: '$9.500', 
      image: 'https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg' 
    }
  
  ];
  
  return (
    
    <div className="container mx-auto px-4">
      <div className="flex justify-center mt-10">
        <div className="relative w-full sm:w-3/4 lg:w-1/2">
          <input
            type="text"
            placeholder="Buscar productos por nombre"
            className="w-full p-2 border border-gray-300 rounded-full focus:outline-none"
          />
          <Search className="absolute right-4 top-3 text-gray-500" />
        </div>
      </div>
      {/* Aquí mostramos las categorías*/}
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
        {/* Grid de productos responsive*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4 rounded-lg" />
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>
                
                {/* Contenedor para el precio */}
                <div className="flex items-center mt-2">
                  <ShoppingBasket className="text-orange-500 mr-2" />
                  <span className="bg-orange-100 text-orange-500 font-bold py-1 px-3 rounded-lg">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
