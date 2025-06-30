// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function EmployeeReview() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const reviewsPerPage = 3;

//   const employees = [
//     {
//       name: 'Aarav Mehta',
//       role: 'Product Manager',
//       review: 'Working at ChillFizz has been a fizzy adventure! The creativity and energy here are unmatched.',
//       emoji: '🧑‍💼',
//       bgColor: 'rgba(255, 165, 47, 0.1)',
//     },
//     {
//       name: 'Sara Kapoor',
//       role: 'Marketing Lead',
//       review: 'This place gives room to grow. The team is fun and the projects are exciting!',
//       emoji: '👩‍🎨',
//       bgColor: 'rgba(74, 144, 226, 0.1)',
//     },
//     {
//       name: 'Rohan Das',
//       role: 'Design Head',
//       review: 'Every pixel here fizzes with innovation. ChillFizz is where design meets delight!',
//       emoji: '🧑‍💻',
//       bgColor: 'rgba(106, 176, 76, 0.1)',
//     },
//     {
//       name: 'Simran Kaur',
//       role: 'Content Specialist',
//       review: 'Creating stories for ChillFizz is my favorite job ever! Everything just clicks.',
//       emoji: '✍️',
//       bgColor: 'rgba(156, 81, 161, 0.1)',
//     },
//     {
//       name: 'Rahul Sharma',
//       role: 'Sales Executive',
//       review: 'Customers love what we do—and I love being a part of it!',
//       emoji: '🤝',
//       bgColor: 'rgba(237, 85, 101, 0.1)',
//     },
//     {
//       name: 'Neha Joshi',
//       role: 'HR Manager',
//       review: 'The culture is refreshing, just like our drinks!',
//       emoji: '👩‍💼',
//       bgColor: 'rgba(255, 165, 47, 0.1)',
//     },
//     {
//       name: 'Kabir Singh',
//       role: 'Logistics Lead',
//       review: 'Ensuring timely delivery is a thrill. ChillFizz makes it fun!',
//       emoji: '🚚',
//       bgColor: 'rgba(74, 144, 226, 0.1)',
//     },
//     {
//       name: 'Priya Nair',
//       role: 'Finance Analyst',
//       review: 'A perfect blend of numbers and innovation at ChillFizz.',
//       emoji: '📊',
//       bgColor: 'rgba(106, 176, 76, 0.1)',
//     },
//   ];

//   const maxIndex = Math.ceil(employees.length / reviewsPerPage) - 1;

//   const visibleReviews = employees.slice(
//     currentIndex * reviewsPerPage,
//     currentIndex * reviewsPerPage + reviewsPerPage
//   );

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
//   };

//   // Dot indicators
//   const dots = Array.from({ length: maxIndex + 1 }, (_, i) => i);

//   return (
//     <>
//       <Navbar />
//       <section
//         style={{
//           padding: '6rem 2rem 4rem',
//           backgroundColor: '#f8f9fa',
//           fontFamily: "'Inter', sans-serif",
//           textAlign: 'center',
//           minHeight: '100vh',
//           overflow: 'hidden',
//           position: 'relative',
//         }}
//         id="employee-review"
//       >
//         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{ marginBottom: '4rem' }}
//           >
//             <h2
//               style={{
//                 fontSize: '2.75rem',
//                 fontWeight: '800',
//                 marginBottom: '1rem',
//                 color: '#061C2D',
//                 lineHeight: '1.2',
//               }}
//             >
//               Meet Our <span style={{ color: '#FFA52F' }}>Team</span>
//             </h2>
//             <p
//               style={{
//                 fontSize: '1.1rem',
//                 color: '#6c757d',
//                 maxWidth: '600px',
//                 margin: '0 auto',
//                 lineHeight: '1.6',
//               }}
//             >
//               Hear what our team members have to say about working at ChillFizz
//             </p>
//           </motion.div>

//           <div style={{ position: 'relative', minHeight: '500px' }}>
//             <motion.button
//               whileHover={{ scale: 1.1, backgroundColor: '#e69529' }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '0',
//                 transform: 'translateY(-50%)',
//                 backgroundColor: currentIndex === 0 ? '#FFD6A8' : '#FFA52F',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '50px',
//                 height: '50px',
//                 fontSize: '1.5rem',
//                 cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
//                 boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                 zIndex: 10,
//                 opacity: currentIndex === 0 ? 0.6 : 1,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//               aria-label="Previous reviews"
//             >
//               ‹
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, backgroundColor: '#e69529' }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleNext}
//               disabled={currentIndex === maxIndex}
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 right: '0',
//                 transform: 'translateY(-50%)',
//                 backgroundColor: currentIndex === maxIndex ? '#FFD6A8' : '#FFA52F',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '50px',
//                 height: '50px',
//                 fontSize: '1.5rem',
//                 cursor: currentIndex === maxIndex ? 'not-allowed' : 'pointer',
//                 boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                 zIndex: 10,
//                 opacity: currentIndex === maxIndex ? 0.6 : 1,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//               aria-label="Next reviews"
//             >
//               ›
//             </motion.button>

//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   gap: '2rem',
//                   flexWrap: 'wrap',
//                   position: 'relative',
//                   padding: '0 60px',
//                 }}
//                 custom={direction}
//                 initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
//                 transition={{ duration: 0.5, ease: 'easeInOut' }}
//               >
//                 {visibleReviews.map((emp, index) => (
//                   <motion.div
//                     key={`${currentIndex}-${index}`}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1, duration: 0.5 }}
//                     whileHover={{
//                       y: -10,
//                       boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
//                     }}
//                     style={{
//                       flex: '1 1 300px',
//                       maxWidth: '350px',
//                       backgroundColor: emp.bgColor,
//                       padding: '2.5rem 2rem',
//                       borderRadius: '20px',
//                       boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
//                       transition: 'all 0.3s ease',
//                       border: '1px solid rgba(255, 165, 47, 0.2)',
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <div 
//                       style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         height: '5px',
//                         background: 'linear-gradient(90deg, #FFA52F, #FFD6A8)',
//                       }}
//                     />
//                     <motion.div
//                       whileHover={{ rotate: [0, 10, -10, 0] }}
//                       transition={{ duration: 0.6 }}
//                       style={{
//                         width: '80px',
//                         height: '80px',
//                         borderRadius: '50%',
//                         backgroundColor: '#fff',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         fontSize: '40px',
//                         margin: '0 auto 1.5rem',
//                         color: '#FFA52F',
//                         boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
//                         border: '2px solid #FFA52F',
//                       }}
//                     >
//                       {emp.emoji}
//                     </motion.div>
//                     <h3
//                       style={{
//                         fontWeight: '700',
//                         fontSize: '1.3rem',
//                         color: '#061C2D',
//                         marginBottom: '0.5rem',
//                       }}
//                     >
//                       {emp.name}
//                     </h3>
//                     <p
//                       style={{
//                         fontSize: '0.9rem',
//                         color: '#6c757d',
//                         marginBottom: '1.5rem',
//                         fontWeight: '500',
//                       }}
//                     >
//                       {emp.role}
//                     </p>
//                     <motion.p
//                       whileHover={{ scale: 1.02 }}
//                       style={{
//                         fontSize: '1rem',
//                         lineHeight: '1.7',
//                         color: '#495057',
//                         position: 'relative',
//                         padding: '0 1rem',
//                       }}
//                     >
//                       <span 
//                         style={{
//                           position: 'absolute',
//                           left: 0,
//                           top: 0,
//                           fontSize: '3rem',
//                           lineHeight: '1',
//                           color: 'rgba(255, 165, 47, 0.2)',
//                         }}
//                       >
//                         "
//                       </span>
//                       {emp.review}
//                       <span 
//                         style={{
//                           position: 'absolute',
//                           right: 0,
//                           bottom: 0,
//                           fontSize: '3rem',
//                           lineHeight: '1',
//                           color: 'rgba(255, 165, 47, 0.2)',
//                         }}
//                       >
//                         "
//                       </span>
//                     </motion.p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Dot indicators */}
//           <div style={{ 
//             display: 'flex', 
//             justifyContent: 'center', 
//             marginTop: '3rem',
//             gap: '10px'
//           }}>
//             {dots.map((dot) => (
//               <button
//                 key={dot}
//                 onClick={() => {
//                   setDirection(dot > currentIndex ? 1 : -1);
//                   setCurrentIndex(dot);
//                 }}
//                 style={{
//                   width: '12px',
//                   height: '12px',
//                   borderRadius: '50%',
//                   border: 'none',
//                   backgroundColor: dot === currentIndex ? '#FFA52F' : '#ddd',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                 }}
//                 aria-label={`Go to slide ${dot + 1}`}
//               />
//             ))}
//           </div>
          
//         </div>
//       </section>
//     </>
//   );
// }

import React from 'react';

export default function EmployeeReview() {
  return (
    <div style={styles.container}>
      <section style={styles.testimonialsSection}>
        <h1 style={styles.title}>What Our Legends Say</h1>
        <p style={styles.subtitle}>Hear from our satisfied customers</p>
        
        <div style={styles.testimonialsSlider}>
          <div style={styles.testimonialsGrid}>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{ ...styles.testimonialCard, ...card.cardStyle }}
                className={`testimonial-card ${card.className}`}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.customerInfo}>
                    <img
                      src={card.image}
                      alt={card.name}
                      style={styles.customerPhoto}
                      className="customer-photo"
                    />
                    <div>
                      <h3 style={styles.customerName}>{card.name}</h3>
                      <div style={styles.starRating}>
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="fas fa-star"
                            style={styles.starIcon}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={styles.cardContent}>
                  <p style={styles.testimonialText}>{card.text}</p>
                </div>
                <div style={styles.quoteIcon} className="quote-icon">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
        
        .testimonial-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .testimonial-card:hover {
          transform: ${(card) => card.cardStyle.transform.replace('deg', '') * 1.5}deg !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          scale: 1.03;
        }
        
        .customer-photo {
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover .customer-photo {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .quote-icon {
          transition: all 0.3s ease;
          opacity: 0;
        }
        
        .testimonial-card:hover .quote-icon {
          opacity: 1;
          transform: scale(1.5);
        }
        
        .card-green:hover {
          background: linear-gradient(135deg, #b8e8c4 0%, #a8e0b8 100%) !important;
        }
        
        .card-blue:hover {
          background: linear-gradient(135deg, #a8d4ed 0%, #98cbe8 100%) !important;
        }
        
        .card-yellow:hover {
          background: linear-gradient(135deg, #ffe880 0%, #ffd933 100%) !important;
        }
        
        .card-purple:hover {
          background: linear-gradient(135deg, #e8a8e8 0%, #d893d8 100%) !important;
        }
      `}</style>
    </div>
  );
}

const cards = [
  {
    name: 'Alice Smith',
    image: 'https://pixabay.com/get/g9c39c128ff0b626118f0187275c810ccca3c0ac9b2abbb77c2384a7e19cb8825232ef63dbdeb13f6ec20e7d960c76d16e0c3168321750e309c2b55ecbd252d44_1280.jpg',
    text: 'The juices taste incredibly fresh and vibrant. A daily treat that keeps me energized and satisfied. Highly recommended',
    className: 'card-green',
    cardStyle: {
      background: 'linear-gradient(135deg, #d4f4dd 0%, #c8f0d2 100%)',
      transform: 'rotate(-5deg)',
    },
  },
  {
    name: 'Michael Taylor',
    image: 'https://pixabay.com/get/g62d21de850460266eb3e279964c10ba8f5851aa631f8b90f5d5f8acb89f2f4eb4eb13e5bcbc33ad01dcb16d6840146156ffd6d5e407f50448cb593a77de64314_1280.jpg',
    text: "The flavors are amazing, and I feel great knowing they're made with wholesome ingredients. Highly recommend trying them",
    className: 'card-blue',
    cardStyle: {
      background: 'linear-gradient(135deg, #c3e4f7 0%, #b3dbf2 100%)',
      transform: 'rotate(3deg)',
    },
  },
  {
    name: 'Alexa Snow',
    image: 'https://pixabay.com/get/g04a3ec3448f08bb1876a3eb41036e162be30ffad058e387d0a455c44dc05dabc6aa3864fd07d8146d96d80fe95f60c963b0c078ac896dc702f26258932cbc71b_1280.jpg',
    text: "I feel rejuvenated after sip. The juices are delicious, and I love knowing they're made with natural ingredients",
    className: 'card-yellow',
    cardStyle: {
      background: 'linear-gradient(135deg, #fff3a0 0%, #ffe066 100%)',
      transform: 'rotate(-3deg)',
    },
  },
  
];

const styles = {
  container: {
    fontFamily: '"Quicksand", sans-serif',
    backgroundColor: 'white',
    minHeight: '100vh',
    padding: '2rem 0',
    lineHeight: 1.6,
    overflowX: 'hidden',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    color: '#2d3748',
    textAlign: 'center',
    marginBottom: '0.5rem',
    fontFamily: '"Quicksand", sans-serif',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 400,
    color: '#718096',
    textAlign: 'center',
    marginBottom: '3rem',
    fontFamily: '"Quicksand", sans-serif',
  },
  testimonialsSection: {
    width: '100%',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  testimonialsSlider: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testimonialsGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    padding: '0 2rem',
    flexWrap: 'wrap',
    maxWidth: '1200px',
  },
  testimonialCard: {
    borderRadius: '20px',
    padding: '1.5rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    minHeight: '250px',
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    minWidth: '280px',
    maxWidth: '320px',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    marginBottom: '1rem',
    zIndex: 2,
  },
  customerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  customerPhoto: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  customerName: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2d3748',
    marginBottom: '0.25rem',
    letterSpacing: '-0.01em',
    fontFamily: '"Quicksand", sans-serif',
  },
  starRating: {
    display: 'flex',
    gap: '2px',
    marginBottom: '0.5rem',
  },
  starIcon: {
    color: '#fbbf24',
    fontSize: '0.875rem',
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,
  },
  testimonialText: {
    fontSize: '0.9rem',
    color: '#4a5568',
    lineHeight: 1.6,
    fontWeight: 500,
    textAlign: 'left',
    fontFamily: '"Quicksand", sans-serif',
  },
  quoteIcon: {
    position: 'absolute',
    right: '1.5rem',
    bottom: '1rem',
    fontSize: '5rem',
    color: 'rgba(255, 255, 255, 0.3)',
    fontFamily: 'serif',
    fontWeight: 'bold',
    lineHeight: 1,
    zIndex: 1,
  },
};