import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export default function DirectorMessage() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #f8e2d6 100%)',
      minHeight: '100vh',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating bubble background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            style={{
              position: 'absolute',
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              borderRadius: '50%',
              background: `rgba(255,${Math.random() * 155 + 100},${Math.random() * 155 + 100},0.1)`,
              filter: 'blur(20px)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
        }}
      >
        <Navbar />
      </motion.div>

      {/* Main content container */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Director card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
            width: '100%',
            maxWidth: '800px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.3)'
          }}
        >
          {/* Decorative accent elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '150px',
            height: '150px',
            background: 'linear-gradient(45deg, #FF9A9E, #FAD0C4)',
            borderRadius: '0 24px 0 100px',
            opacity: 0.1
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg, #A1C4FD, #C2E9FB)',
            borderRadius: '0 100px 0 0',
            opacity: 0.1
          }}></div>

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {/* Avatar */}
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut"
              }}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                border: '3px solid white'
              }}
            >
              <span style={{
                fontSize: '40px',
                color: 'white'
              }}>👔</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '32px',
                fontWeight: 700,
                marginBottom: '20px',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                textAlign: 'center',
                lineHeight: 1.3
              }}
            >
              A Message From Our Director
            </motion.h2>

            {/* Quote marks */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '-20px'
            }}>
              <span style={{
                fontSize: '60px',
                color: 'rgba(102, 126, 234, 0.2)',
                lineHeight: 0,
                marginLeft: '-10px'
              }}>“</span>
              <span style={{
                fontSize: '60px',
                color: 'rgba(102, 126, 234, 0.2)',
                lineHeight: 0,
                marginRight: '-10px',
                alignSelf: 'flex-end'
              }}>”</span>
            </div>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#4a5568',
                marginBottom: '30px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2
              }}
            >
              At ChillFizz, we don't just create beverages—we craft experiences that spark joy in every sip. 
              Our passion for innovation and commitment to quality transforms ordinary moments into 
              extraordinary memories. I'm proud to lead a team that pours their heart into every bottle.
            </motion.p>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px'
              }}
            >
              <div style={{
                width: '150px',
                height: '2px',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                marginBottom: '15px'
              }}></div>
              <div style={{
                fontWeight: 700,
                fontSize: '18px',
                color: '#2d3748',
                marginBottom: '5px'
              }}>Aryan Vaidya</div>
              <div style={{
                fontWeight: 500,
                fontSize: '14px',
                color: '#718096',
                fontStyle: 'italic'
              }}>Director & Founder</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(255, 154, 158, 0.2)',
          filter: 'blur(5px)',
          zIndex: 0
        }}
      ></motion.div>

      <motion.div
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'rgba(161, 196, 253, 0.2)',
          filter: 'blur(5px)',
          zIndex: 0
        }}
      ></motion.div>
    </div>
  );
}