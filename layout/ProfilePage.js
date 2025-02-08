import React, { useEffect, useState } from 'react';
import styles from '../styles/ProfilePage.module.css'; // Ensure the path is correct

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch profile data from the database
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <img src={profile.picture} alt={`${profile.name}'s profile picture`} className={styles.profilePicture} />
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
      </div>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
      </div>
      <div className={styles.eventListings}>
        <h2>Upcoming Events</h2>
        <ul>
          {profile.upcomingEvents.map(event => (
            <li key={event.id}>{event.name} - {event.date}</li>
          ))}
        </ul>
      </div>
      <div className={styles.reviews}>
        <h2>Reviews</h2>
        <ul>
          {profile.reviews.map(review => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.gallery}>
        <h2>Gallery</h2>
        <div className={styles.galleryImages}>
          {profile.gallery.map(image => (
            <img key={image.id} src={image.url} alt="Gallery image" />
          ))}
        </div>
      </div>
      <div className={styles.contactForm}>
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
