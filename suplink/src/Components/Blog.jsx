import React, { useState ,useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './Footer';
import Nav from './Nav';

import { Link, useNavigate } from "react-router-dom";

import me from './images/vid2.mp4'
import CardGrid from './CardGrid';

import p1 from './images/b1.jpg'
import p2 from './images/b2.jpg'
import p3 from './images/b3.jpg'
const Blog = () => {
 useEffect(()=>{
    Aos.init();
      },[])
  const cards = [
    {
      name: "Nov 1, 2024",
      image:p3,
      fullName: "Everyname Adds Support For Superlink Domains",
      link: "/blog1",
    },
    {
      name: "Sep 21, 2024",
      image:p1,
      fullName: "Superlink Enters the Hedera Ecosystem By Integrating with HashPack Wallet",
      link: "/blog2",
    },
    {
      name: "Feb 14, 2024",
      image:p2,
      fullName: "Announcing Superlink: Claim Your Name on the New Internet",
      link: "/blog3",
    },
  ];
  return (
    <div className='text-white bg_grad overflow-x-hidden carltine'>
      <Nav/>
      <div className="bg3 w-full md:h-80  mx-auto block shadow-2xl rounded-b-3xl">
<div className='w-full h-full mx-auto 'style={{  backgroundColor: "rgba(0, 0, 0, 0.25)",  justifyContent: "center",  alignItems: "center", }}  >
<div className="container text-center mx-auto w-full md:w-1/2 px-5 py-10" data-aos="fade-up" data-aos-duration="1000">
<h2 className='text-3xl md:text-5xl lg:text-9xl  font-extrabold '><span className='text-cyan-400'>The</span>  blog</h2>
<p className='mariposa text-lg font-light pt-5'>Keep up to date with everything Superlink</p>
</div>
</div>
     </div>
     <div className="container mx-auto mb-24">
  <section className="py-16 px-4 "   data-aos="fade-up" data-aos-duration="1000"  data-aos-delay='400'>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
      {cards.map((card, index) => (<Link to={card.link} 
            key={index}
            className="rounded-lg overflow-hidden "
          >
            <img
              src={card.image}
              alt={card.fullName}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xs font-light">{card.name}</h3>
              <p className="text-white font-bold text-2xl">{card.fullName}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </div>
      <div class="container px-5 pt-24 mx-auto ">
    <div class="flex flex-col text-center w-full mb-20"  data-aos="fade-up" data-aos-duration="1000">
      <h2 class="md:text-7xl text-3xl font-bold  mb-4 px-5 ">There is only <span className='text-cyan-400'>one you</span>. Don’t miss out on owning it.</h2>
      <p class="lg:w-2/3 mx-auto font-light py-4 leading-relaxed text-base">Up to 50,000 people share the same name. Be the first to claim yours.</p>
    </div>
   
  </div>
    <CardGrid />
      <Footer/>
    </div>
  );
};

export default Blog;