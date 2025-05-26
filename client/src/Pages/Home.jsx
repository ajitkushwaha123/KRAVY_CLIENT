import React from "react";
import Header from "../component/main/Header";
import { Slider } from "../component/popular";
import CategoryBar from "./Home/CategoryBar";
import { all, bear, burger, meat, noodles, pizza, vegetable } from "../assets";
import ValuePackItems from "./Home/ValuePackItems";

const DummyCard = ({ title }) => (
  <div className="min-w-[200px] h-[220px] md:h-[500px] bg-zinc-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-lg font-semibold text-zinc-800 dark:text-white shadow">
    {title}
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
  

  return (
    <div>
      <Header />
      <div className="mx-auto my-1">
        <Slider>
          {[...Array(10)].map((_, i) => (
            <DummyCard key={i} title={`Card ${i + 1}`} />
          ))}
        </Slider>
      </div>

      <div>
        <CategoryBar categories={foodCategories} />
      </div>

      <div className="p-4">
        <ValuePackItems valuePacks={DummyValuePacks} />
      </div>
    </div>
  );
};

export default Home;
