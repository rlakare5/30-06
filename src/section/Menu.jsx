// import React, { useState } from 'react';
// import Navbar from './Navbar'; // Adjust path if needed
// import tea from '../assets/tea.jpg';
// import coffee from '../assets/coffee.jpg';
// import water from '../assets/water.jpg';

// export default function Menu() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const styles = {
//     navbarWrapper: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 999,
//       background: '#fff',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
//     },
//     section: {
//       padding: '120px 2rem 4rem', // ⬅️ Added top padding for fixed navbar
//       backgroundColor: '#fff',
//       fontFamily: "'Segoe UI', sans-serif",
//       textAlign: 'center',
//     },
//     title: {
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       fontFamily: 'Georgia, serif',
//       marginBottom: '3rem',
//       color: '#061C2D',
//     },
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       gap: '2rem',
//       maxWidth: '1200px',
//       margin: '0 auto',
//     },
//     card: {
//       flex: '1 1 300px',
//       borderRadius: '12px',
//       backgroundColor: '#fdf1ec',
//       padding: '1.5rem',
//       boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
//       transition: 'all 0.4s ease',
//       transform: 'translateY(0)',
//       overflow: 'hidden',
//       position: 'relative',
//     },
//     imageContainer: {
//       borderRadius: '10px',
//       marginBottom: '1rem',
//       overflow: 'hidden',
//       position: 'relative',
//     },
//     image: {
//       width: '100%',
//       height: 'auto',
//       transition: 'transform 0.5s ease',
//       transform: hoveredCard ? 'scale(1.05)' : 'scale(1)',
//     },
//     tag: {
//       backgroundColor: '#FFA52F',
//       color: '#fff',
//       padding: '6px 12px',
//       borderRadius: '999px',
//       fontSize: '0.8rem',
//       fontWeight: '600',
//       marginBottom: '1rem',
//       display: 'inline-block',
//     },
//     heading: {
//       fontSize: '1.3rem',
//       fontWeight: 'bold',
//       fontStyle: 'italic',
//       marginBottom: '0.5rem',
//       color: '#061C2D',
//     },
//     text: {
//       fontSize: '0.95rem',
//       color: '#333',
//       lineHeight: '1.5',
//     },
//     cardOverlay: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'linear-gradient(to bottom, rgba(255,165,47,0.1), rgba(255,165,47,0.3))',
//       opacity: 0,
//       transition: 'opacity 0.3s ease',
//     }
//   };

//   return (
//     <>
//       {/* ✅ Fixed Navbar */}
//       <div style={styles.navbarWrapper}>
//         <Navbar />
//       </div>

//       {/* Menu Section */}
//       <section style={styles.section} id="menu">
//         <h2 style={styles.title}>Enjoy the Fizzy</h2>
//         <div style={styles.container}>

//           {/* Iced Tea */}
//           <div
//             style={{
//               ...styles.card,
//               ...(hoveredCard === 'tea' && {
//                 transform: 'translateY(-10px)',
//                 boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
//               })
//             }}
//             onMouseEnter={() => setHoveredCard('tea')}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             <div style={styles.imageContainer}>
//               <img src={tea} alt="Iced Tea" style={styles.image} />
//             </div>
//             <span style={styles.tag}>Sip into Refreshment</span>
//             <h3 style={styles.heading}>Iced Tea, Perfectly Chilled</h3>
//             <p style={styles.text}>
//               Indulge in the refreshing blend of our Iced Tea, infused with the perfect balance of citrus
//               and herbal notes to quench your thirst and revive your spirit.
//             </p>
//             <div style={styles.cardOverlay}></div>
//           </div>

//           {/* Iced Coffee */}
//           <div
//             style={{
//               ...styles.card,
//               ...(hoveredCard === 'coffee' && {
//                 transform: 'translateY(-10px)',
//                 boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
//               })
//             }}
//             onMouseEnter={() => setHoveredCard('coffee')}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             <div style={styles.imageContainer}>
//               <img src={coffee} alt="Iced Coffee" style={styles.image} />
//             </div>
//             <span style={styles.tag}>Energize with Iced Coffee</span>
//             <h3 style={styles.heading}>Iced Coffee, Smooth and Bold</h3>
//             <p style={styles.text}>
//               Experience the rich, bold flavor of our Iced Coffee, crafted with premium beans and served
//               over ice for a refreshing pick-me-up any time of day.
//             </p>
//             <div style={styles.cardOverlay}></div>
//           </div>

//           {/* Iced Water */}
//           <div
//             style={{
//               ...styles.card,
//               ...(hoveredCard === 'water' && {
//                 transform: 'translateY(-10px)',
//                 boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
//               })
//             }}
//             onMouseEnter={() => setHoveredCard('water')}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             <div style={styles.imageContainer}>
//               <img src={water} alt="Iced Water" style={styles.image} />
//             </div>
//             <span style={styles.tag}>Chill with Iced Water</span>
//             <h3 style={styles.heading}>Iced Water, Crisp and Pure</h3>
//             <p style={styles.text}>
//               Refresh your palate with our chilled, crystal-clear Iced Water, the perfect accompaniment to
//               any of our delightful cold drink offerings.
//             </p>
//             <div style={styles.cardOverlay}></div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }import React from 'react';
import Navbar from './Navbar';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const products = [
  { id: 1, name: 'Lemon juice', price: '₹75.00', image: img1 },
  { id: 2, name: 'Orange juice', price: '₹75.00', image: img2 },
  { id: 3, name: 'Peach juice', price: '₹85.00', image: img3 },
  { id: 4, name: 'Grapes juice', price: '₹80.00', image: img4 },
  { id: 5, name: 'Strawberry juice', price: '₹85.00', image: img5 },
];

export default function Menu() {
  return (
    <div
      className="menu-page"
      style={{
        backgroundColor: '#ffefe1',
        color: 'black',
        minHeight: '100vh',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: 'bold',
      }}
    >
      <Navbar />

      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '900',
            marginBottom: '3rem',
          }}
        >
          Explore Our favorites
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '4rem',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) rotate(1deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  height: '300px',
                  marginBottom: '1.2rem',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03) rotate(-2deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              />
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginBottom: '0.2rem',
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  marginBottom: '1rem',
                }}
              >
                {product.price}
              </p>
              <button
                style={{
                  color: 'black',
                  padding: '12px 32px',
                  borderRadius: '9999px',
                  backgroundColor: '#fff5ec',
                  border: '2px solid black',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'black';
                  e.target.style.color = '#fff5ec';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#fff5ec';
                  e.target.style.color = 'black';
                }}
              >
                Shop now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
