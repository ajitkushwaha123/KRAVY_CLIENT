import React from "react";
import Header from "../component/main/Header";
import { Slider, StickyBottomNotification } from "../component/popular";
import CategoryBar from "./Home/CategoryBar";
import {
  all,
  banner1,
  bear,
  burger,
  meat,
  noodles,
  pizza,
  vegetable,
} from "../assets";
import ValuePackItems from "./Home/ValuePackItems";
import { ProductList } from "./Home/ProductCard";

const DummyCard = ({ title, img }) => (
  <div
    className="
    min-w-[200px] 
    h-[220px] md:h-[500px] 
    bg-zinc-200 dark:bg-zinc-800 
    rounded-xl 
    overflow-hidden 
    shadow-md dark:shadow-lg 
    flex items-end 
    cursor-pointer
    transition-transform duration-300 ease-in-out
    hover:scale-[1.03]
  "
  >
    <img
      className="w-full h-full object-cover"
      src={img}
      alt={title}
      loading="lazy"
    />
    {/* <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
      <h3 className="text-white text-lg font-semibold truncate">{title}</h3>
    </div> */}
  </div>
);

const Home = () => {
  const foodCategories = [
    { name: "All", image: all },
    {
      name: "Pizza",
      image: pizza,
    },
    {
      name: "Burger",
      image: burger,
    },
    {
      name: "Bear",
      image: bear,
    },
    {
      name: "Meat",
      image: meat,
    },
    {
      name: "Noodles",
      image: noodles,
    },
    {
      name: "Vegetable",
      image: vegetable,
    },
    {
      name: "Pizza",
      image: pizza,
    },
    {
      name: "Burger",
      image: burger,
    },
    {
      name: "Bear",
      image: bear,
    },
    {
      name: "Meat",
      image: meat,
    },
    {
      name: "Noodles",
      image: noodles,
    },
    {
      name: "Vegetable",
      image: vegetable,
    },
    {
      name: "Pizza",
      image: pizza,
    },
    {
      name: "Burger",
      image: burger,
    },
    {
      name: "Bear",
      image: bear,
    },
    {
      name: "Meat",
      image: meat,
    },
    {
      name: "Noodles",
      image: noodles,
    },
    {
      name: "Vegetable",
      image: vegetable,
    },
  ];

  const DummyValuePacks = [
    {
      id: "1",
      ad: true,
      imageSrc:
        "https://tse3.mm.bing.net/th?id=OIP.DIFPCr1lrCeRF96gAcedzgHaEK&pid=Api&P=0&h=180",
      title: "2 x Onion + Capsicum",
      restaurantName: "Pizza Galleria",
      originalPrice: 199,
      discountedPrice: 79,
      deliveryTime: 53,
      onClick: () => console.log("View Pizza Pack"),
    },
    {
      id: "2",
      imageSrc:
        "https://tse3.mm.bing.net/th?id=OIP.ri3F6ApnBXIPILX-mwDXbwHaD4&pid=Api&P=0&h=180",
      title: "Pack Of Two Choco Lava Cakes",
      restaurantName: "The Dessert Heaven",
      originalPrice: 209,
      discountedPrice: 189,
      deliveryTime: 50,
      onClick: () => console.log("View Cake Pack"),
    },
    {
      id: "3",
      imageSrc:
        "https://khanchacha.com/wp-content/uploads/2021/12/4.-Chicken-Spicy-tikka-rol-close-up-1536x1024.jpg",
      title: "Paneer Tikka Roll Combo",
      restaurantName: "Wrap It Up",
      originalPrice: 249,
      discountedPrice: 129,
      deliveryTime: 40,
      onClick: () => console.log("View Roll Combo"),
    },
    {
      id: "4",
      imageSrc:
        "https://i.pinimg.com/originals/00/ab/6f/00ab6f669ddb5bc7ae3216b928cd31d8.png",
      title: "Veg Burger + Fries",
      restaurantName: "Burger Bros",
      originalPrice: 159,
      discountedPrice: 89,
      deliveryTime: 35,
      onClick: () => console.log("View Burger Pack"),
    },
    {
      id: "5",
      imageSrc:
        "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg",
      title: "Chicken Biryani Duo",
      restaurantName: "Biryani Kingdom",
      originalPrice: 399,
      discountedPrice: 299,
      deliveryTime: 60,
      onClick: () => console.log("View Biryani Duo"),
    },
    {
      id: "6",
      imageSrc:
        "https://tse3.mm.bing.net/th?id=OIP.oNoJSn1NlJcXHlg5i7qjLgHaFv&pid=Api&P=0&h=180",
      title: "Sushi Platter (8 Pcs)",
      restaurantName: "Tokyo Sushi House",
      originalPrice: 499,
      discountedPrice: 349,
      deliveryTime: 70,
      onClick: () => console.log("View Sushi Pack"),
    },
    {
      id: "1",
      ad: true,
      imageSrc:
        "https://tse3.mm.bing.net/th?id=OIP.DIFPCr1lrCeRF96gAcedzgHaEK&pid=Api&P=0&h=180",
      title: "2 x Onion + Capsicum",
      restaurantName: "Pizza Galleria",
      originalPrice: 199,
      discountedPrice: 79,
      deliveryTime: 53,
      onClick: () => console.log("View Pizza Pack"),
    },
    {
      id: "2",
      imageSrc:
        "https://tse3.mm.bing.net/th?id=OIP.ri3F6ApnBXIPILX-mwDXbwHaD4&pid=Api&P=0&h=180",
      title: "Pack Of Two Choco Lava Cakes",
      restaurantName: "The Dessert Heaven",
      originalPrice: 209,
      discountedPrice: 189,
      deliveryTime: 50,
      onClick: () => console.log("View Cake Pack"),
    },
    {
      id: "3",
      imageSrc:
        "https://khanchacha.com/wp-content/uploads/2021/12/4.-Chicken-Spicy-tikka-rol-close-up-1536x1024.jpg",
      title: "Paneer Tikka Roll Combo",
      restaurantName: "Wrap It Up",
      originalPrice: 249,
      discountedPrice: 129,
      deliveryTime: 40,
      onClick: () => console.log("View Roll Combo"),
    },
  ];

  const productData = [
    {
      name: "Chicken Burger",
      description: "Cookie Heaven",
      rating: 4.5,
      deliveryTime: 50,
      calories: 500,
      originalPrice: 60,
      discountedPrice: 40,
      imageUrl:
        "https://kidoneo.com/wp-content/uploads/2023/07/Pizza_1688814259.jpg",
    },
    {
      name: "BBQ Burger",
      description: "Cookie Heaven",
      rating: 4.5,
      deliveryTime: 50,
      calories: 500,
      originalPrice: 60,
      discountedPrice: 40,
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.cDvnUwJJ8VWCoZ1GxL9AGgHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "Veggie Delight Pizza",
      description: "Pizza Palace",
      rating: 4.8,
      deliveryTime: 40,
      calories: 700,
      originalPrice: 350,
      discountedPrice: 299,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    },
    {
      name: "Paneer Tikka",
      description: "Spice Hub",
      rating: 4.7,
      deliveryTime: 30,
      calories: 400,
      originalPrice: 150,
      discountedPrice: 120,
      imageUrl:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mutton Biryani",
      description: "Royal Feast",
      rating: 4.9,
      deliveryTime: 60,
      calories: 900,
      originalPrice: 250,
      discountedPrice: 220,
      imageUrl:
        "https://static.wixstatic.com/media/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg/v1/fill/w_864,h_576,al_c,lg_1,q_85/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg",
    },
    {
      name: "Masala Dosa",
      description: "South Spice",
      rating: 4.6,
      deliveryTime: 35,
      calories: 350,
      originalPrice: 90,
      discountedPrice: 75,
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.XSCo5S6kP3o-7-jVqH4vGgHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "Chocolate Milkshake",
      description: "Cool Drinks",
      rating: 4.3,
      deliveryTime: 20,
      calories: 450,
      originalPrice: 80,
      discountedPrice: 65,
      imageUrl:
        "https://www.mashed.com/img/gallery/chocolate-drizzle-strawberry-milkshake-recipe/l-intro-1682005343.jpg",
    },
    {
      name: "Pasta Alfredo",
      description: "Italiano",
      rating: 4.4,
      deliveryTime: 40,
      calories: 600,
      originalPrice: 200,
      discountedPrice: 180,
      imageUrl:
        "https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/tulcxcntmwnys5ndgqvk/pasta-alfredo",
    },
    {
      name: "Caesar Salad",
      description: "Green Bowl",
      rating: 4.2,
      deliveryTime: 25,
      calories: 300,
      originalPrice: 130,
      discountedPrice: 110,
      imageUrl:
        "https://img.taste.com.au/zjjLh7F2/taste/2022/10/mexican-taco-chopped-salad-181812-1.jpg",
    },
    {
      name: "Chicken Shawarma",
      description: "Middle East Flavors",
      rating: 4.7,
      deliveryTime: 45,
      calories: 650,
      originalPrice: 180,
      discountedPrice: 160,
      imageUrl:
        "https://lh3.googleusercontent.com/-KMreWFpEnsE/XzocD52YYuI/AAAAAAAAE2Y/2n1Q5h3mzHYp018OpqpEzF_fDQbPoH3fwCLcBGAsYHQ/d/1597643785431800-0.png",
    },
  ];

  const handleAddToCart = () => {
    alert("item added to cart.. !");
  };

  return (
    <div>
      <Header />
      <div className="mx-auto my-1">
        <Slider>
          {[...Array(10)].map((_, i) => (
            <DummyCard
              key={i}
              title={`Card ${i + 1}`}
              img={
                "https://tse3.mm.bing.net/th?id=OIP.sfeWbB7veqzH_ggd3h7HPgHaEL&pid=Api&P=0&h=180"
              }
            />
          ))}
        </Slider>
      </div>

      <div>
        <CategoryBar categories={foodCategories} />
      </div>

      <div className="p-4">
        <ValuePackItems valuePacks={DummyValuePacks} />
      </div>

      <div className="md:px-5">
        <h2 className="text-2xl font-semibold ">Your Trusted Picks</h2>
        <ProductList products={productData} handleAddToCart={handleAddToCart} />
      </div>
      <StickyBottomNotification />
    </div>
  );
};

export default Home;
