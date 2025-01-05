import React, { useState ,useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Nav from './Nav';
import c3 from './images/t1.jpg'
import c2 from './images/t2.jpg'
import c1 from './images/t3.jpg'
import c4 from './images/t4.jpg'
import c5 from './images/t5.jpg'
import c6 from './images/t6.jpg'


const Contact = () => {
    useEffect(()=>{
      Aos.init();
        },[])
  const team = [
    { id: 3, name: "James Miller",twitter:"Co-Founder & CEO", text: "We're dedicated to making digital identities a fundamental part of the internet. With years of experience in launching and backing ventures, we’re here to build something transformative with your help.",image:c6 },
    { id: 2, name: "Sophia Turnerr",twitter:"Co-Founder & Advisor", text: "Your digital ID is more than a name—it's your gateway to an evolving online identity. Join us and be part of a movement to redefine how people connect, starting with owning your name.", image:c1},
    { id: 1, name: "Lia Carter",twitter:"Co-Founder", text: "From building startups to scaling services, our focus is on innovation. Together, we can make digital IDs practical, accessible, and empowering for everyone.", image:c2},
    { id: 4, name: "Emma Brooks",twitter:"Head of Engineering", text: "Our collective experience in founding and supporting ventures has prepared us for this journey. By owning your name and embracing this community, you're investing in the future of digital identities.",image:c3},
    { id: 5, name: "Daniel Lee",twitter:"Blockchain Engineer", text: "This is more than a business—it's a movement to help everyone take ownership of their digital footprint. With your support, we’ll create services that unlock the full potential of digital IDs", image:c4 },
    
    { id: 6, name: "Benjamin Scott",twitter:"Customer Service and Data Management Specialist", text: "Superlink thrives on collaboration. Buy your name, join a growing community, and shape the way people claim and utilize their digital identities.", image:c5}
  ];
  const FAQ = [
    { id: 3,
       name: "James Miller",
       question:"What does Superlink do?", 
       ans: "Superlink offers real name digital IDs as blockchain domains. We believe firstname.lastname (e.g., sarah.chen) is the cleanest, simplest address possible. It’s one address for everything in your digital world.."},
    { id: 2, 
      name: "Sophia Turnerr",
      question:"How is this different from a normal domain?",
       ans: "Superlink names are blockchain domains. That means they have incredible new potential such as being one address for your digital wallet, website, email, and username. It will take time for that functionality to emerge. Today, we're offering the ability to claim your name and join the community.",},
    { id: 1, 
      name: "Lia Carter",
      question:"I’ve bought my name. What do I do now?", 
      ans: "Join the community! Our Discord community is members-only for Superlink name holders.", },
    { id: 4, 
      name: "Emma Brooks",
      question:"How do I gift a Superlink name?", 
      ans: "We see gifting as a critical component of our culture, and the best way to ensure that everyone secures their digital identity. Stay tuned for this feature in the coming weeks."},
    { id: 5, 
      name: "Daniel Lee",
      question:"My name is unavailable. What should I do?", 
      ans: "We hold 1.2 million top level domains representing ~ half the world's population. If your name is unavailable or reserved, there are still several ways to claim your identity. If there is no name suitable for you on the site, drop us a line at support@superlink.me.",  },
    
    { id: 6,
       name: "Benjamin Scott",
       question:"Are these domains really one payment, own forever?",
        ans: "Yes! Traditional domains are an ongoing subscription. We believe digital identities should be a one-time payment. Buy for yourself, buy for a friend or family member.", }
  ];
  return (
    <div className='text-white bg_grad overflow-x-hidden carltine h-screen overflow-hidden'>
      <Nav/>


  <section className="body-font relative">
      <div className="absolute inset-0 bg-transparent">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.5) opacity(0.5)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex  shadow-2xl">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"  data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font">Contact Us</h2>
          <p className="leading-relaxed mb-5 text-black">
          We would love to hear from you!
          </p>
          <div className="relative mb-4">
            
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:cyan-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-sky-700 placeholder:opacity-30"
              placeholder='johndoe@gmail.com'
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 border-b-8 border-black rounded-full text-lg">
           Send!
          </button>
        
        </div>
      </div>
    </section>
     
    </div>
  );
};

export default Contact;