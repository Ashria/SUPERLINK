import React, { useState ,useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Footer';
import Nav from '../Nav';

import { Link, useNavigate } from "react-router-dom";

import me from '../images/vid2.mp4'
import CardGrid from '../CardGrid';

import p1 from '../images/b1.jpg'
import p2 from '../images/b2.jpg'
import p3 from '../images/b3.jpg'
import p4 from '../images/b4.jpg'
import p5 from '../images/b8.jpg'
const Blog1 = () => {
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
      <section class=" body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center rounded" alt="hero" src={p3} data-aos="fade-up" data-aos-duration="1000"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font lg:text-4xl md:text-4xl text-2xl mb-4 font-bold " data-aos="fade-up" data-aos-duration="1000">Everyname Adds Support For Superlink Domains</h1>
      <p class="text-sm mb-4 font-light text-gray-300" data-aos="fade-up" data-aos-duration="1000">Nov 1, 2023</p>
      <p class="mb-8 leading-relaxedtext-left  text-lg pt-5" data-aos="fade-up" data-aos-duration="1000">Superlink is on a mission to bring censorship-resistant digital identity mainstream. To start, we’re bringing human-friendly addresses to payments in order to simplify transfers and digital asset ownership.


<br /><br />
To make it happen, namespace providers like Superlink are working with wallets to enable interoperability. And wallets are working with namespace providers individually to resolve names.

<br /><br />

Today, we’re proud to announce a key partnership with Everyname, a “universal resolver” that works with 100+ namespaces, resolving them all in a single query. Whether you have an ENS, Unstoppable, Farcaster, Bonfida, or Superlink name, Everyname enables a single integration point for wallets and apps to resolve domains across web3.</p>  
<img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center rounded mx-auto" alt="hero" src={p4} data-aos="fade-up" data-aos-duration="1000"/>
<p class="mb-8 leading-relaxed text-lg  text-left pt-5"  data-aos="fade-up" data-aos-duration="1000"><span className='italic'>“Everyname is dedicated to enhancing the web3 experience for developers and end-users. Our solution simplifies the use of human-readable names for wallet addresses. We're excited to announce our partnership with Superlink and look forward to supporting their mission to simplify payments and transfers,” </span>said Vinay Vasanji, Co-Founder & CEO of Everyname.


<br /><br /> <span className="italic">
“Wallets can now integrate all the most important namespaces at once in order to support their users and enable human-friendly, interoperable payments,” </span>
shared Matt Winn, Co-Founder & CEO of Superlink. <span className="italic">“Everyname is the solution, and we’re proud to be a part of it.”
</span>
<br />
<br />
If you’re looking to integrate blockchain domains, email partners@superlink.me and we’ll get you sorted with Everyname.
<br />


And to all of you, consider grabbing a Superlink name. Use discount code EVERYNAME20 for 20% off your purchase - anytime over the next week.

<br /><br />

Stay tuned for more updates on this integration and others coming soon!</p>
      <div class="flex justify-center" data-aos="fade-up" data-aos-duration="1000">
     
    <img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center " alt="hero" src={p5} data-aos="fade-up" data-aos-duration="1000"/></div>
    </div>
  </div>
</section>
     <div className="container mx-auto mb-24">
  <section className="py-16 px-4 " data-aos="fade-up">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-duration="1000">
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
    <div class="flex flex-col text-center w-full mb-20" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="md:text-7xl text-3xl font-bold  mb-4 px-5 ">There is only <span className='text-cyan-400'>one you</span>. Don’t miss out on owning it.</h2>
      <p class="lg:w-2/3 mx-auto font-light py-4 leading-relaxed text-base">Up to 50,000 people share the same name. Be the first to claim yours.</p>
    </div>
   
  </div>
    <CardGrid />
      <Footer/>
    </div>
  );
};

export default Blog1;