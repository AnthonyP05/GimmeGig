import Image from 'next/image'
import { Russo_One } from 'next/font/google';

const russo = Russo_One({
  weight: ['400'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});

export default function ImagePanel() {
    
  const leftPaneStyle = {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      top: 0,
      left: 0,
      bottom: 0,
  }

  const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
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

  return (
    <div style={leftPaneStyle}>
      <div className={russo.className} style={brandStyle}>GimmeGig</div>
      <Image
        src="/stage.jpeg"
        alt="Musician on stage"
        style={imageStyle}
        priority
        fill
      />
      <div style={overlayStyle}></div>
    </div>
  )
}