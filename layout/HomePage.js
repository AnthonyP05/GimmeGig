// pages/index.js
import Image from 'next/image'

export default function HomePage() {
  // Inline style objects
  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  }

  const leftPaneStyle = {
    position: 'relative',
    width: '50%',
    height: '100vh',
    overflow: 'hidden',
  }

  const imageStyle = {
    // next/image handles most sizing, but we still do absolute fill:
    objectFit: 'cover',
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.3,
  }

  const brandStyle = {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    zIndex: 2, // ensure it stays above the overlay
  }

  const rightPaneStyle = {
    width: '50%',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '2rem',
  }

  const headlineStyle = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  }

  const highlightStyle = {
    color: '#9f7aea', // nice purple
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
  }

  const musicianButtonStyle = {
    backgroundColor: '#9f7aea',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.25rem',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  }

  const eventButtonStyle = {
    backgroundColor: '#e2e8f0',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.25rem',
    color: '#1a1a1a',
    cursor: 'pointer',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyle}>
      {/* LEFT SIDE: Image + Overlay + Branding */}
      <div style={leftPaneStyle}>
        <div style={brandStyle}>GimmeGig</div>
        <Image
          src="/stage.jpeg"
          alt="Musician on stage"
          fill    // fill the container
          style={imageStyle}
          priority
        />
        <div style={overlayStyle}></div>
      </div>

      {/* RIGHT SIDE: Headline & Buttons */}
      <div style={rightPaneStyle}>
        <h1 style={headlineStyle}>
          Book a gig in a <span style={highlightStyle}>click</span>.
        </h1>
        <div style={buttonContainerStyle}>
          <button style={musicianButtonStyle}>Musician</button>
          <button style={eventButtonStyle}>Event Holder</button>
        </div>
      </div>
    </div>
  )
}