import Homepage from '../layout/HomePage';
import styles from '../styles/Home.module.css';
import MyProfile from '../layout/MyProfile';
import ProfilePage from '../layout/ProfilePage';

export default function Home() {
  return (
    <div className={styles.container}>
      <MyProfile />
      <ProfilePage />
    </div>
  );
}