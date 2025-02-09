import '../styles/global.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { MyProvider } from '../TextContext/MyContext';

function MyApp({ Component, pageProps }) {
  return (
    <MyProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </MyProvider>
  );
}

export default MyApp;