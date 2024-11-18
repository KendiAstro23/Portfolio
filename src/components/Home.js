import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        <div className="hero-container">
        <motion.img 
     src={star1}
     animate={{ scale: 1.5 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
     className="star-1 star"
     alt="star 1"
   />
   <motion.img 
     src={star2}
     animate={{ scale: 1.5 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
     className="star-2 star"
     alt="star 2"
   />
   <motion.img 
     src={star3}
     animate={{ scale: 1.5 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
     className="star-3 star"
     alt="star 3"
   />
  <motion.img 
     src={star4}
     animate={{ scale: 1.5 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
     className="star-4 star"
     alt="star 4"
   />
 <motion.h1
   initial={{ opacity: 0}}
   animate={{ opacity: 1 }}
   transition={{ duration: 2, ease: "easeInOut" }}
 >
  <h2>Dorcas Kendi</h2>
   <br></br>
   Frontend Developer
   </motion.h1>
   <div className="button-container">
        <button className="cont-button">Contact Me</button>
        <button className="work-button">My Latest Work</button>
    </div>
    </div>
        <div className="home-image">
          <img src="kendi.jpg" alt="Your Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;