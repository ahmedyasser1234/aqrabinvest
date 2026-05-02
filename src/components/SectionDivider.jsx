import React from 'react'

export const SectionDivider = ({ type = 'dark-to-white' }) => {
  const isDarkToWhite = type === 'dark-to-white'
  
  return (
    <div style={{ 
      height: '0', 
      backgroundColor: isDarkToWhite ? 'var(--white)' : 'var(--bg-dark)', 
      position: 'relative', 
      overflow: 'visible',
      zIndex: 10
    }}>
      {/* The main slanted cut */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ 
        width: '100%', 
        height: '60px', 
        position: 'absolute', 
        top: '-59px', 
        left: 0,
        zIndex: 5
      }}>
        <polygon 
          points={isDarkToWhite ? "0,100 100,0 100,100" : "0,100 100,100 0,0"} 
          fill={isDarkToWhite ? "var(--white)" : "var(--bg-dark)"} 
        />
      </svg>

      {/* Architectural Geometric Patterns (Diamonds) */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        left: isDarkToWhite ? '10%' : 'auto',
        right: isDarkToWhite ? 'auto' : '10%',
        width: '40px',
        height: '40px',
        background: 'rgba(162, 221, 0, 0.15)',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        zIndex: 6,
        transform: 'rotate(15deg)'
      }}></div>

      <div style={{
        position: 'absolute',
        top: '-60px',
        left: isDarkToWhite ? '15%' : 'auto',
        right: isDarkToWhite ? 'auto' : '15%',
        width: '20px',
        height: '20px',
        background: 'rgba(162, 221, 0, 0.1)',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        zIndex: 4
      }}></div>
    </div>
  )
}
