import React from 'react';

export default function Navbar() {
  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: '#FDF1EC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem 1.5rem',
      height: '60px', // reduced height
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.05)',
      fontFamily: "'Segoe UI', sans-serif",
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: '#FFA52F',
    },
    nav: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },
    navLink: {
      textDecoration: 'none',
      color: '#061C2D',
      fontWeight: 500,
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
    },
    contactBtn: {
      backgroundColor: '#FFA52F',
      color: '#fff',
      border: 'none',
      padding: '8px 18px',
      borderRadius: '999px',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
  };

  const handleHover = (e, hoverColor, originalColor) => {
    e.target.style.color = hoverColor;
    e.target.onmouseleave = () => (e.target.style.color = originalColor);
  };

  const handleBtnHover = (e, hoverColor, originalColor) => {
    e.target.style.backgroundColor = hoverColor;
    e.target.onmouseleave = () => (e.target.style.backgroundColor = originalColor);
  };

  return (
  <header style={styles.navbar}>
    <div style={styles.logo}>🍹 <span>ChillFizz</span></div>
    <nav style={styles.nav}>
      {[
        'Home',
        'Menu',
        'Clients',
        'Presentation',
        'Employee Review',
        'Director Message'
      ].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
          style={styles.navLink}
          onMouseEnter={(e) => handleHover(e, '#FFA52F', '#061C2D')}
        >
          {item}
        </a>
      ))}
      <button
        style={styles.contactBtn}
        onMouseEnter={(e) => handleBtnHover(e, '#e6931a', '#FFA52F')}
        onMouseLeave={(e) => handleBtnHover(e, '#FFA52F', '#061C2D')}
        onClick={() => window.location.href = '#contact'}
      >
        Contact
      </button>
    </nav>
  </header>
);


}
