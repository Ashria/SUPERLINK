import React, { useState ,useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Footer';
import Nav from '../Nav';

import { Link, useNavigate } from "react-router-dom";

import CardGrid from '../CardGrid';

import p1 from '../images/b1.jpg'
import p2 from '../images/b2.jpg'
import p3 from '../images/b3.jpg'
import p4 from '../images/b7.jpg'
import p5 from '../images/b9.jpg'
import p6 from '../images/b8.jpg'
const Blog3 = () => {
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
    <img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center rounded" alt="hero" src={p2} data-aos="fade-up" data-aos-duration="1000"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font lg:text-4xl md:text-4xl text-2xl mb-4 font-bold " data-aos="fade-up" data-aos-duration="1000">Announcing Superlink: Claim Your Name on the New Internet</h1>
      <p class="text-sm mb-4 font-light text-gray-300" data-aos="fade-up" data-aos-duration="1000">Feb 14, 2024

</p>
      <p class="mb-8 leading-relaxedtext-left  text-lg pt-5" data-aos="fade-up" data-aos-duration="1000">Superlink is on a mission to make digital identity universally accessible. To start, we’re bringing human-friendly addresses to payments in order to simplify transfers and digital asset ownership.



<br /><br />Today, we’re excited to announce one of our first integrations. Superlink is entering the Hedera ecosystem, a top ten chain, by collaborating with HashPack, the largest wallet serving that community.

<br /><br />

HashPack represents over 95% of users in the Hedera ecosystem and is the leading wallet on the platform with integrations across the DeFi space as well as collaborations with Hedera governing council members such as LG and ServiceNow.

<br /><br />

Superlink and HashPack share the goal of simplifying payments. Today’s integration ensures all HashPack users can utilize Superlink names for transfers.

<br /><br />

Instead of copy/pasting a seven digit Hedera address, enter any Superlink name that’s mapped to a HashPack wallet address.</p>  
<img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center rounded mx-auto" alt="hero" src={p4} data-aos="fade-up" data-aos-duration="1000"/>
<p class="mb-8 leading-relaxed text-lg  text-left pt-5" data-aos="fade-up" data-aos-duration="1000"><span className='italic'>"Reducing friction for Web3 technologies is our north star at HashPack. We are constantly building ways to make it easier for users and developers alike to succeed and flourish in this exciting new technology space. Superlink's technology is right in line with our values, bringing personalization and accessibility to our users and enhancing their web3 experience." </span>says May Chan, HashPack Co-Founder and CEO.

<br /><br />

Superlink names are your simplest representation online. A link that’s just you, nothing else. </p>
      <div class="flex justify-center" data-aos="fade-up" data-aos-duration="1000">
     
    <img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center " alt="hero" src={p5} data-aos="fade-up" data-aos-duration="1000"/></div>
    <p class="mb-8 leading-relaxed text-lg  text-left pt-5" data-aos="fade-up" data-aos-duration="1000">
   <span className="italic"> “We’re working with industry leaders like HashPack to ensure Superlink names work everywhere you want to be,”</span> said Matt Winn, CEO of Superlink. <span className="italic">“HashPack and Superlink have a shared mission to reduce complexity in this space, and we’re excited to make payments even easier for everyone in the HashPack network.” </span>
<br />
<br />

If you’re an existing Superlink user, download the HashPack wallet and get started today. And to all the HashPack users, consider grabbing a Superlink name. Use discount code <span className="font-extrabold">HASHPACK20 for 20%</span> off your purchase - anytime over the next week.

<br /><br />

Stay tuned for more updates on this integration and others coming soon!
    </p>
      <div class="flex justify-center" data-aos="fade-up" data-aos-duration="1000">
     
    <img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center " alt="hero" src={p6}/></div>
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

export default Blog3;