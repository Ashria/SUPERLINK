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
import p4 from '../images/b5.jpg'
import p5 from '../images/b6.jpg'
import p6 from '../images/b8.jpg'
const Blog2 = () => {
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
    <img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center rounded" alt="hero" src={p1}  data-aos="fade-up" data-aos-duration="1000"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font lg:text-4xl md:text-4xl text-2xl mb-4 font-bold "  data-aos="fade-up" data-aos-duration="1000">Superlink Enters the Hedera Ecosystem By Integrating with HashPack Wallet</h1>
      <p class="text-sm mb-4 font-light text-gray-300"   data-aos="fade-up" data-aos-duration="1000">Sep 21, 2024

</p>
      <p class="mb-8 leading-relaxedtext-left  text-lg pt-5"  data-aos="fade-up" data-aos-duration="1000">It’s the dawn of a new era in identity. As we spend more and more of our lives online - now nearly half our waking hours - our digital selves matter more than ever.

<br /><br />
We started Superlink to ensure you get access to the best representation of yourself in the digital world - your name. Just your name. Nothing else. So whether you’re sophia.chen, martin.smith, or amelia.patel, you get the cleanest, most memorable domain possible.


<br /><br />
Superlink offers real name digital IDs in the form of blockchain domains, a new type of domain that at current growth rates will eclipse traditional domains by 2030. We hold over 1.2 million last names as top level domains, which means at launch we offer the world’s largest selection of domains.

<br /><br />
Your Superlink name is your digital ID - the gateway to everything that matters in your digital world. A way to send and receive money, to publicly or privately communicate, to verifiably showcase yourself, and login everywhere you’d like for an instantly personalized experience.

<br /><br />

That promise isn’t here today but it’s on the way. There’s much building to be done, and integrations to be worked out, but you can see the light. You can see where it’s headed. The time to jump in is now.


<br /><br />
Superlink is built on the most decentralized and expressive blockchain domain project, Handshake. Handshake has opened up naming to everyone and sold almost 10 million top level domains on a decentralized ledger, owned by no one and maintained in the same manner that Bitcoin itself is maintained - by nodes on a network. Handshake has been sponsored by a16z, Sequoia Capital, Pantera Capital, Founders Fund, Greylock Capital, Craft Ventures, SV Angel, and other top venture funds and individuals.

</p>  
<img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center rounded mx-auto" alt="hero" src={p4}  data-aos-delay='400'/>
<p class="mb-8 leading-relaxed text-lg  text-left pt-5"  data-aos="fade-up" data-aos-duration="1000">Superlink is focused exclusively on people’s real names. We have spent the last three years, from the outset of Handshake’s name auctions in February 2020, purchasing last name top level domains directly from the blockchain as well as on the secondary market in order to accumulate a large enough collection to revolutionize digital IDs. 

<br /><br /><span className='italic'>

Ok, but why care about digital IDs?

</span><br /><br />

The Internet’s early promise of a peer to peer network has come a long way. But on that journey something funny happened. It started to become less about the people and more about the companies. Even the address naming system mirrored this movement: .com for commerce, .org for organizations, .edu for schools. Domains and websites were for groups, not individuals.
<br /><br />


We sprouted blogs and bought our domains. But the inevitable ease of centralized publishing, where someone else handles the hard stuff, meant the vast majority opted for speaking under someone else’s banner. Social media accelerated the movement. More and more people have a voice. Fewer and fewer own that voice.
<br /><br />


Today, trust in these centralized publishers is at an all-time low. In early 2021, when Facebook announced a new privacy policy for Whatsapp that shared personal messaging data with broader Facebook systems, tens of millions of users opted out and joined rival apps. Elon Musk’s takeover of Twitter sparked a similar exodus.
<br /><br />


Decentralized solutions are still early in development but promising. A new movement is clearly afoot - digital identity. Ownership of your digital self. It’s time to take back the Internet.

<br /><br />

But what’s especially magical about this moment is that at the same time that folks are waking up to the dangers of ceding their self-expression ownership to companies, new technologies and platforms are emerging to enable self-ownership, data portability, and freedom of expression.

</p>
      <div class="flex justify-center"  data-aos="fade-up" data-aos-duration="1000">
     
    <img class="lg:w-4/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center " alt="hero" src={p5}/></div>
    <p class="mb-8 leading-relaxed text-lg  text-left pt-5" data-aos="fade-up" data-aos-duration="1000">
   <span className="italic"> Enter Superlink</span>

<br /><br />

We’re just getting started. Our mission is to make everyone’s digital identity easy to own and use online. That means expanding our offering considerably beyond the names themselves. 

<br /><br />

We’ll partner with Handshake top level domain owners to grow our coverage. We plan on decentralizing Superlink names so you can truly own your IDs. We’ll integrate with third parties to enable new functionality, and we’ll build our own functionality in-house.

<br /><br />

Expect continuous improvements and developments. Our team has led apps with millions of downloads. We’ve started 10+ companies and invested in hundreds more. We’re used to building month after month, year after year, to deliver value. We believe this mission is worth waking up to everyday.

<br /><br />

But we're just a small crew and we're counting on you, too. Buy your name, join the community, and play a role in helping everyone own and use their digital ID. 🤝
    </p>
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

export default Blog2;