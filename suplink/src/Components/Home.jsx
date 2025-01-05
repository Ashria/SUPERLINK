import React, { useState ,useEffect } from 'react';
import "./App.css"

import Aos from 'aos'
import 'aos/dist/aos.css'
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import CardGrid from './CardGrid';
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'
import p3 from './images/p3.jpg'
import c3 from './images/car3.jpg'
import c2 from './images/car2.jpg'
import c1 from './images/car1.jpg'
import c4 from './images/car4.jpg'
import c5 from './images/car5.jpg'
import me from './images/vid1.mp4'
import { useNavigate } from "react-router-dom";
import Nav from './Nav';
  
const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
  
    if (trimmedFirstName && trimmedLastName) {
      const url = new URL("https://superlink.me/results");
      url.searchParams.append("firstName", trimmedFirstName);
      url.searchParams.append("lastName", trimmedLastName);
  
      window.location.href = url.toString(); // Redirect to the external URL with query parameters
    } else {
      alert("Please fill out both fields.");
    }
  };
  

  useEffect(()=>{
    Aos.init();
      },[])
  const data = [
    { id: 3, name: "James Miller",twitter:"@axlbts1984", text: "I can’t believe I’ve been struggling with workarounds for this long when this new tool exists. The ease and simplicity it offers is a complete game-changer. Honestly, why didn’t anyone come up with this sooner? This has already saved me so much time and effort. #TechInnovation #Efficiency#GameChanger" },
    { id: 2, name: "Sophia Turnerr",twitter:"@bhilabu3449", text: "Just discovered this new feature, and I’m seriously shocked it wasn’t available earlier. It’s exactly what I needed to make my workflow smoother and more efficient. Honestly, this is one of those things that you wonder why it didn’t exist before. So simple, yet so powerful! #TechSolutions #Productivity ", background:c1},
    { id: 1, name: "Liam Carter",twitter:"@tomiko346", text: "I just can’t believe that a tool this helpful wasn’t around before. It took me forever to find a solution that actually works, and now that I have it, everything is so much easier. I really think this should have been a standard tool in the industry a long time ago. #TechRelief #Innovation", background:c2},
    { id: 4, name: "Emma Brooks",twitter:"@ntkkomkoropio23", text: "After searching for so long for a solution that fits my needs, I finally found it! And it’s honestly so much simpler than I ever imagined. It’s incredible to think how something this easy to use didn’t exist before. This is definitely going to streamline my workflow moving forward. #EfficiencyBoos ",},
    { id: 5, name: "Daniel Lee",twitter:"@minacartun23", text: "I can’t believe how much time I wasted before discovering this new tool. It’s exactly what I needed and it’s so much easier than what I’ve been using. How was this not available earlier? Can’t wait to see what other innovations come out of this. #TechWin #Productivity", background:c4 },
  ];
  const data2 = [
    { id: 3, name: "Olivia Clark",twitter:"@atmkamibalo1984", text: "Just tried this new tool and I’m honestly blown away by how simple and effective it is. I’ve spent years searching for something like this, and now that I’ve found it, I can’t believe it wasn’t a thing sooner. This is definitely a major step forward in the industry. #InnovationAtItsBest" },
    { id: 2,name: "Ethan Walker",twitter:"@ritujxm34", text: "I was skeptical at first, but after using this new feature, I’m convinced it’s the future of the industry. It’s so intuitive and works seamlessly with everything I need. It’s hard to believe this wasn’t available before, but I’m glad it’s here now. #TechRevolution #Efficiency", background:c3},
    { id: 1,name: "Ava Thompson",twitter:"@tomatoqueen78", text: "The new feature I just found is exactly what I’ve been needing. The ease of use and the time it’s going to save me is incredible. It’s a shame it didn’t exist sooner, but I’m so thankful I can finally stop struggling with outdated methods. #TechUpgrade #WorkflowSolutions "},
    { id: 4, name: "Benjamin Scott",twitter:"@omghunny6878", text: "Just got my hands on this new tool and I can’t stop thinking about how much simpler things could have been if it existed earlier. The time-saving potential is unreal. It’s amazing how something so simple can make such a big difference. #TechBreakthrough #ProductivityHack", background:c5},
    { id: 5, name: "Mia Garcia",twitter:"@wef2356", text: "I’ve been wishing for something like this for years, and now that it’s finally here, I’m amazed by how easy it is to use. This tool is a total game changer. Honestly, I don’t know how I managed without it before. It’s the perfect solution to everything I’ve been trying to do. #TechSolution #Innovation ", },
  ];
    const cards = [
        {
          name: "sarah.chen",
          avatar: "https://via.placeholder.com/50",
          image:p3,
          fullName: "Sarah Chen",
        },
        {
          name: "nora.miller",
          iavatar: "https://via.placeholder.com/50",
          image:p1,
          fullName: "Nora Miller",
        },
        {
          name: "e.murphy",
          avatar: "https://via.placeholder.com/50",
          image:p2,
          fullName: "Eugene Murphy",
        },
      ];
      const features = [
        {
          subtitle: "Roadmap Feature",
          suptitle: "Wallet",
          description: "Transact using your name",
          content: (
            <div className="bg-cyan-400 text-white rounded-lg p-4 h-44">
              <p className="font-bold text-lg">nora.miller</p>
              <div className="flex justify-between mt-4">
                <button className="bg-cyan-800 px-4 py-2 rounded cursor-not-allowed">Send $</button>
                <button className="bg-cyan-800 px-4 py-2 rounded cursor-not-allowed">Receive $</button>
              </div>
              <div className="mt-4">
                <p>ETH: 2.2385 <span className="text-green-400">▲ 34.03%</span></p>
                <p>BTC: .40349 <span className="text-red-400">▼ 18.97%</span></p>
              </div>
            </div>
          ),
        },
        {
          subtitle: "Roadmap Feature",
          suptitle: "Website",
          description: "Your own personal address",
          content: (
            <div className="bg-cyan-400 text-white rounded-lg p-4  h-44">
              <p className="text-lg">nora.miller</p>
              <p className=" mt-2">A domain that's truly yours</p>
              <br />
              <div className="mt-4 text-cyan-400 cursor-not-allowed">
                <p>ETH: 2.2385 <span className="">▲ 34.03%</span></p>
                <p>BTC: .40349 <span className="">▼ 18.97%</span></p>
              </div>
            </div>
          ),
        },
        {
          subtitle: "Roadmap Feature",
          suptitle: "Username",
          description: "Login everywhere with your name",
          content: (
            <div className="gap-4  h-44 overflow-hidden ">
              <img
                src="https://plus.unsplash.com/premium_photo-1725708358944-844db020a73a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className=" w-auto  object-left-top object-cover rounded-xl "
              />
            </div>
          ),
        },
        {
          subtitle: "Roadmap Feature",
          suptitle: "Email",
          description: "The cleanest email",
          content: (
            <div className="bg-cyan-400 text-white rounded-lg p-4  h-44">
              <p className="text-lg font-bold">New Message</p>
              <p className="mt-2">To: <span className="text-cyan-600 pr-7">hi@nora.miller</span></p>
              <p>Subject: Let's have coffee!</p>
            </div>
          ),
        },
      ];
   
    return (
        <div className='text-white bg_grad overflow-x-hidden carltine'>
         <Nav/>
<div className='bg1 lg:h-screen rounded-b-3xl text-white' >
<section
      id="top"
      className="text-center md:h-96 md:my-5 py-20 px-4 mx-auto justify-center align-middle"
      data-aos="fade-up" data-aos-duration="1000"
    >
      <h1 className="text-3xl md:text-8xl font-bold text-white">
        Own the <span className="text-cyan-200">real</span> you
      </h1>
      <p className="text-white mt-4 text-sm sm:text-base">
        A domain that's just your name, nothing else, not even .com.
      </p>
      <div className="mt-6">
        <form
          onSubmit={handleSubmit} 
          className="flex flex-wrap justify-center items-center gap-2"
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
            className="px-4 py-2 bg-gray-100 text-cyan-900 rounded w-full sm:w-auto"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="px-4 py-2 bg-gray-100 text-cyan-900 rounded w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded text-white w-full sm:w-auto button type1"
          >
            <span className="btn-txt caviar">SIGN UP</span>
          </button>
        </form>
      </div>
    </section>
  <div className="container mx-auto mb-24"  data-aos="fade-up" data-aos-duration="1000">
  <section className="py-16 px-4 " >
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
      {cards.map((card, index) => (<div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-gray-900"
          >
            <img
              src={card.image}
              alt={card.fullName}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{card.name}</h3>
              <p className="text-gray-400">{card.fullName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
</div>
<section className="py-16 lg:py-24 px-4 mx-auto"  data-aos="fade-up" data-aos-duration="1000">
<h2 class=" w-2/3 mx-auto text-center md:text-7xl text-3xl font-bold  my-10 px-5 ">One address for everything in your digital world</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-28">
         {features.map((feature, index) => (
          <div
            key={index}
            className="bg-indigo-950 shadow-2xl shadow-purple-900 rounded-lg pt-5  pl-5"
            data-aos="fade-up"
          >
            <div className="flex justify-left px-5">
            <p className="text-lg font-bold  text-white ">{feature.suptitle}</p>
            <p className="text-sm font-light text-cyan-500 ml-4 pt-1 rounded-2xl bg-cyan-100 text-center px-2 border-2 border-cyan-500  ">{feature.subtitle}</p></div>
            <p className="text-white pt-4  px-5">{feature.description}</p>
            <div className="mt-5 pl-5">{feature.content}</div>
          </div>
        ))}
      </div>
    </section>


    <section className="relative text-white h-screen my-5 flex flex-col lg:flex-row items-center justify-center px-8">
      
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"  data-aos="fade-up" data-aos-duration="1000">
        <p className="text-green-400 text-sm font-bold">Over 1,000,000 names available</p>
        <h1 className="text-4xl lg:text-6xl font-bold mt-4">Just you, nothing else.</h1>
        <p className="text-lg lg:text-xl text-gray-400 mt-4">
          The cleanest, simplest domain possible. Your name, no one else's.
        </p>
        <button className="mt-6 px-4 mx-auto py-3  button type1 carltine">
        <a href="#top" class="btn-txt">  Get your name <FontAwesomeIcon icon={faArrowRight} className="font-bold mx-3" /></a>
        </button>
      </div>

      <div className="lg:w-1/2 flex justify-center relative"  data-aos="fade-up" data-aos-duration="1000">
       
        <div className="relative flex justify-center items-center h-full w-full">

  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-900 rounded-lg -z-10" />

  <div className="text-6xl lg:text-8xl font-bold text-cyan-300 z-10 hidden md:block">
    nora.miller
  </div>

  <div className="absolute  hidden lg:block md:top-28 right-20 text-right tracking-widest leading-relaxed  text-5xl lg:text-7xl text-cyan-100 opacity-50 z-0">
    .com <br /> <br /> .net
  </div>
<br />
  <div className="absolute hidden lg:block md:bottom-28 tracking-widest leading-relaxed right-20 text-right text-5xl lg:text-7xl text-cyan-100 opacity-50 z-0">
    .eth <br /> <br /> .io
  </div>
</div>
</div>
    </section>

    <div className=" my-10 lg:my-24" >
      <Marquee behavior="scroll" speed={10}  data-aos="fade-up" data-aos-duration="1000" >
        <div className="flex space-x-5">
          {data.map((person) => (
           <div
           key={person.id}
           className="flex-shrink-0 w-80 h-72 rounded-lg p-4 mx-3 text-center"
           style={{
             backgroundImage: `url(${person.background})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
             position: "relative", 
           }}
         >
           <div
             className="w-full rounded-lg p-3"
             style={{
               backgroundColor: "rgba(0, 0, 0, 0.5)", 
               position: "absolute", 
               top: 0, left: 0, right: 0, bottom: 0,
               display: "flex", 
               justifyContent: "center",  
               alignItems: "center",  
             }}
           >
             <div>
             <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-xs font-semibold py-3 ">{person.twitter}</p>
                <p className="text-sm font-light">{person.text}</p>
                 </div>
           </div>
         </div>
         
          ))}
        </div>
      </Marquee>
      <Marquee behavior="scroll" speed={10} direction='right'  data-aos="fade-up" data-aos-duration="1000">
        <div className="flex space-x-5 my-10">
          {data2.map((person) => (
            <div
            key={person.id}
            className="flex-shrink-0 w-80 h-72 rounded-lg p-4 mx-3 text-center"
            style={{
              backgroundImage: `url(${person.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative", 
            }}
          >
            <div
              className="w-full rounded-lg p-3"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                position: "absolute", 
                top: 0, left: 0, right: 0, bottom: 0,
                display: "flex", 
                justifyContent: "center",  
                alignItems: "center",  
              }}
            >
              <div>
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-xs font-semibold py-3 ">{person.twitter}</p>
                <p className="text-sm font-light">{person.text}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </Marquee>
   </div>

   <section class=" body-font">
  <div class="container px-5 md:py-24 mx-auto flex flex-col" >
    <div class="lg:w-5/6 mx-auto">
      <div class="rounded-lg  overflow-hidden"  data-aos="fade-up" data-aos-duration="1000">
      <video className='w-full ' loop muted autoPlay>
          <source src={me} type="video/mp4" />
            </video> </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"  data-aos="fade-right" data-aos-duration="1000">
          <div class="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 ">
           <img src={c2} className='rounded-full h-full w-full object-cover object-center' alt="" />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-bold title-font mt-4  text-3xl md:text-5xl">The story of a million names</h2>
            <div class="w-12 h-1 bg-cyan-200 rounded mt-2 mb-4"></div>
            <p class="text-sm">A glimpse into the three year journey to a million names. The backstory to revolutionizing digital identity.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-100 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"  data-aos="fade-left" data-aos-duration="1000">
          <p class="leading-relaxed text-lg font-light mb-4">Over the course of three transformative years, we embarked on a journey to redefine what digital identity means in an increasingly connected world. What started as a small experiment has grown into a platform that empowers individuals to claim and own a piece of their digital space—simple, personal, and uniquely theirs.
 <br /> <br />
We reimagined how names could become more than just identifiers—they could become digital homes, representing a blend of individuality, community, and connection. By putting users at the center of the process and fostering trust through transparency, we built more than just a platform. We built a movement.
<br /><br />
Now, with over a million names claimed and countless more to come, we reflect on this incredible journey and look ahead to the future. It’s a testament to what’s possible when technology, vision, and people come together to create something truly groundbreaking.

</p>
         
        </div>
      </div>
    </div>
  </div>
</section> 
   
  <div class="container px-5 pt-24 mx-auto">
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

export default Home;