import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Card = ({ name, fullname, avatar, background, placeholder }) => (
  <div
    className={`relative w-52 md:w-96 h-44 md:h-72 rounded-2xl shadow-md md:overflow-hidden flex  justify-end ${
      placeholder ? "border-dashed border-2 border-gray-300" : ""
    }`}
    style={{
      backgroundImage: placeholder ? "none" : `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {placeholder && (
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <p className="text-gray-400 text-xl">{name}</p>
        <button className="mt-4 px-6 py-2 bg-cyan-600 text-white text-sm font-semibold rounded-full shadow-md">
         <Link to="/"> <a href="#top">Get your name</a></Link> 
        </button>
      </div>
    )}

    {!placeholder && (
      <>
        <div className="absolute top-4 left-4 flex items-center">
          <img
            src={avatar}
            alt={fullname}
            className="w-12 h-12 rounded-full border-2 object-cover border-white"
          />
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-sm">{fullname}</p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-cyan-300 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
        </div>
      </>
    )}
  </div>
);
const CardGrid = () => {
  const cards = [
    {
      name: "Ava",
      fullname: "Ava Patel",
      avatar: "https://via.placeholder.com/50",
      background:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      placeholder: false,
    },
    {
      name: "Ava",
      fullname: "Ava Patel",
      avatar: "https://plus.unsplash.com/premium_photo-1731950912460-428336c82fe0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      background:
        "https://images.unsplash.com/photo-1735257676933-828bfbdc03a2?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      placeholder: false,
    },
    {
      name: "firstname.lastname",
      fullname: "",
      avatar: "",
      background: "",
      placeholder: true,
    },
    {
      name: "Beckett",
      fullname: "Beckett Jones",
      avatar: "https://images.unsplash.com/photo-1735504646886-46782f6f81be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      background:
        "https://plus.unsplash.com/premium_photo-1734514490566-b84341774897?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      placeholder: false,
    },
    {
      name: "Beckett",
      fullname: "Beckett Jones",
      avatar: "https://images.unsplash.com/photo-1734969011777-7ef8e4d54b0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      background:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      placeholder: false,
    },
  ];

  return (
    <div className="flex   justify-center gap-2 md:gap-8  pb-24 "  >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${
            index === 1 ? "block" : "block"
          } transition-transform transform hover:scale-105`}
        >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};


export default CardGrid;
