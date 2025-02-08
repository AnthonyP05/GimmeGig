import ImagePanel from '../components/LoginComponents/ImagePanel';
import RightPanel from '../components/LoginComponents/RightPanel';
import { useUser } from '@auth0/nextjs-auth0/client';
import ProfileView from '../pages/layout/profileView';

const Homepage = () => {
  const { user, error, isLoading } = useUser();

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div style={containerStyle}>
      {user ? <ProfileView /> : <>
        <ImagePanel />
        <RightPanel />
      </>}
    </div>
  );
};

export default Homepage;