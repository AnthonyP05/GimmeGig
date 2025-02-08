// pages/index.js
import ImagePanel from '../components/LoginComponents/ImagePanel'
import RightPanel from '../components/LoginComponents/RightPanel'

export default function HomePage() {
  // Inline style objects
  const containerStyle = {
    display: 'flex',
    flex: 1,
    height: '100%',
    margin: 0,
    top: 0,
    left: 0,
    bottom: 0,
    padding: 0,
    width: '100%',
    overflow: 'hidden', // Prevent horizontal scrolling

  }

  return (
    <div style={containerStyle}>
      <ImagePanel />
      <RightPanel />
    </div>
  )
}