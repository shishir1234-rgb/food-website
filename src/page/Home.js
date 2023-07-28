import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import heroBg from '../assest/heroBg.png'


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 6);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "Ice Creams",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Fast Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fasted Delivery in{" "}
            <span className="text-red-600 text-">Your Home</span>
          </h2>
          <p className="py-3 text-base ">
            Nirula's is the heart of Delhiites since 1934. Indulge in the world of food.
            A journey through flavours and cultures! Discover Recipes, Stories, and more.
            Explore the diversity and richness of taste.
            <br></br>
            <br></br>
            <b>HCF: </b>
            Hand crafted Hot Chocolate Fudge sauce finds its soulmate in classic Vanilla Ice Cream.
            <br></br>
            <br></br>
            <b>EPIC BURGERS: </b>
            Our epic Big Boy and Mahaburgers are what LEGENDS are made of!
            <br></br>
            <br></br>

            <b>PIZZAS: </b>
            We introduced a whole generation of Dilliwalas to pizzas
            <br></br>
            <br></br>
            <b>PURE INGREDIENTS: </b>
            All our products are made from 💯% pure natural ingredients be it our ice creams, burgers or all time favourite sundaes.  
            <br></br>

           </p>
          <button  className="font-bold bg-red-600 text-slate-200 px-4 py-2 rounded-md">
            <a href="#your_producty">
            Order Now

            </a>
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center relative">
          <div
            className="absolute top-0 left-[50%] right-[50%] h-full w-[80%] opacity-[0.7] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${heroBg})`}}
          ></div>
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
              return (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              );
            })
            : loadingArray.map((el, index) => {
              return <HomeCard key={index + "loading"} loading={"Loading..."} />;
            })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Bestseller 
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
              return (
                <CardFeature
                  key={el._id + "vegetable"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })
            : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "cartLoading"} />
            ))}
        </div>
      </div>

      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
