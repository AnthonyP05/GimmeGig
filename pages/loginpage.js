import ImagePanel from '../components/LoginComponents/ImagePanel';
import RightPanel from '../components/LoginComponents/RightPanel';
import { useUser } from '@auth0/nextjs-auth0/client';
import ProfileView from './profilepage';
import { useEffect } from 'react';
import { useContext } from 'react';
import textContext from '../TextContext/MyContext';


const Homepage = () => {
  const { user, error, isLoading } = useUser();
  const { sharedState, setSharedState } = useContext(textContext);

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
  };

  useEffect(() => {
    if (user && !isLoading && sharedState !== 'none') {
      // Ensure category is not 'none' before making the API request
      fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID: user.sub, category: sharedState }),
      }).then(() => console.log("User created/updated with category:", sharedState));
    }
  }, [user, isLoading, sharedState]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div style={containerStyle}>
      {user ? <ProfileView /> : <>
        <ImagePanel />
        <RightPanel /> {/* Pass setCategory as a prop */}
      </>}
    </div>
  );
};

export default Homepage;