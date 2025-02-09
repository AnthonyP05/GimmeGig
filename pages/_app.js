import '../styles/global.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { CategoryProvider } from '../context/CategoryContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <CategoryProvider>
        <Component {...pageProps} />
      </CategoryProvider>
    </UserProvider>
  );
}

export default MyApp;