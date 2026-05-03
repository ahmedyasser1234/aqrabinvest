import React from 'react'

export const SectionDivider = ({ type = 'dark-to-white' }) => {
  const isDarkToWhite = type === 'dark-to-white'
  const isHeroToWhite = type === 'hero-to-white'
  const isWhiteToDark = type === 'white-to-dark'
  
  // High overlap for hero section
  const height = isHeroToWhite ? '180px' : '60px'
  const top = isHeroToWhite ? '-179px' : '-59px'

  return (
    <div style={{ 
      height: '0', 
      backgroundColor: 'transparent', 
      position: 'relative', 
      overflow: 'visible',
      zIndex: 10
    }}>
      {/* The main slanted cut */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ 
        width: '100%', 
        height: height, 
        position: 'absolute', 
        top: top, 
        left: 0,
        zIndex: 5
      }}>
        {isHeroToWhite ? (
          // Custom slant for hero: Lower on the left, Higher on the right (matching other sections)
          <polygon points="0,100 100,0 100,100" fill="var(--white)" />
        ) : (
          <polygon 
            points={isDarkToWhite ? "0,100 100,0 100,100" : "0,100 100,100 0,0"} 
            fill={isWhiteToDark ? "var(--bg-dark)" : "var(--white)"} 
          />
        )}
      </svg>

      {/* Architectural Geometric Patterns (Diamonds) */}
      <div style={{
        position: 'absolute',
        top: isHeroToWhite ? '-140px' : '-40px',
        left: (isDarkToWhite || isHeroToWhite) ? '10%' : 'auto',
        right: (isDarkToWhite || isHeroToWhite) ? 'auto' : '10%',
        width: '40px',
        height: '40px',
        background: 'rgba(162, 221, 0, 0.15)',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        zIndex: 6,
        transform: 'rotate(15deg)'
      }}></div>

      <div style={{
        position: 'absolute',
        top: isHeroToWhite ? '-160px' : '-60px',
        left: (isDarkToWhite || isHeroToWhite) ? '15%' : 'auto',
        right: (isDarkToWhite || isHeroToWhite) ? 'auto' : '15%',
        width: '20px',
        height: '20px',
        background: 'rgba(162, 221, 0, 0.1)',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        zIndex: 4
      }}></div>
    </div>
  )
}
