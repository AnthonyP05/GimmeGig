import LoginButtons from './LoginButtons';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});

export default function RightPanel() {

  const headlineStyle = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    textAlign: 'center', // Center the text
  };

  const highlightStyle = {
    color: '#9f7aea', // nice purple
  };

  const rightPaneStyle = {
    width: '100%',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center the content horizontally
    padding: 0,
    margin: 0, // Remove margin
    boxSizing: 'border-box', // Include padding and border in the element's total width and height
  };

  return (
    <div style={rightPaneStyle}>
      <h1 className={roboto.className} style={headlineStyle}>
        Book a gig in a <span style={highlightStyle}>click</span>.
      </h1>
      <LoginButtons />
    </div>
  );
}