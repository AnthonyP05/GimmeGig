import React, { useState } from 'react';
import Sidebar from '../../components/ExploreComponents/sidebar';
import axios from 'axios';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['400', '700'], // Specify the weights you need
	subsets: ['latin'], // Specify the subsets you need
});

const ProfileView = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Your Band Name');
    const [profileDescription, setProfileDescription] = useState('Professional musician with over 10 years of experience. Specializing in classical piano and contemporary compositions. I have done many successful performances in the past and am looking forward to working with you.');
    const [spotifyLink, setSpotifyLink] = useState('https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02?si=5_ixXf_wSlKbimUfNP61Sg');
    const [topTracks, setTopTracks] = useState([]);
    const [personalUrl, setPersonalUrl] = useState('https://spotify.com/example');

    const fetchTopTracks = async () => {
        try {
            const response = await axios.post('/api/getTopTracks', { spotifyLink });
            setTopTracks(response.data.tracks);
        } catch (error) {
            console.error('Error fetching top tracks:', error);
        }
    };

    const handleNameChange = (newName) => {
        setName(newName);
    };

    const handleDescriptionChange = (newDescription) => {
        setProfileDescription(newDescription);
    };

    const handleUrlChange = (newUrl) => {
        setPersonalUrl(newUrl);
    };

    // Styles with fixed heights to prevent layout shifts
    const containerStyles = {
        display: 'flex',
        minHeight: '100vh'
    };

    const sideBarStyles = {
        display: 'block',
    };

    const mainContentStyles = {
        display: 'flex',
        gap: '24px',
        flex: 1,
        marginLeft: '50px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        padding: '20px',
        paddingTop: '3vh',
        paddingLeft: '8vh',
        backgroundColor: '#333333',
        height: '100vh',
        overflowY: 'auto',
    };

    const profileSection = {
        flex: 1,
        display: 'flex',
        gap: '24px',
        minHeight: '200px' // Fixed minimum height to prevent layout shifts
    };

    const content = {
        flex: 1,
		fontFamily: roboto
    };

    const header = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '16px',
        padding: '16px',
        border: isEditing ? '2px solid black' : 'none',
        borderRadius: '8px',
        minHeight: '150px'
    };

    const inputStyles = {
        background: 'transparent',
        border: 'gray 1px solid',
        color: 'white',
        width: '100%',
        padding: '4px',
        fontSize: 'inherit',
        fontFamily: 'inherit'
    };

    const textareaStyles = {
        ...inputStyles,
        height: '100px',
        resize: 'vertical',
        border: isEditing ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
    };

    const button = {
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
    };

    const divider = {
        borderTop: '1px solid #e5e7eb',
        margin: '24px 0'
    };

	return (
		<div className={roboto.className} style={containerStyles}>
			<div style={sideBarStyles}>
				<Sidebar />
			</div>
			<div style={mainContentStyles}>
				<div style={content}>
					<div style={profileSection}>
						<div style={content}>
							<div style={header}>
								<div style={{ flex: 1 }}>
									<h1 style={{ fontSize: '24px', marginBottom: '8px', color: 'white' }}>
										{isEditing ? (
											<input
												type="text"
												value={name}
												onChange={(e) => handleNameChange(e.target.value)}
												style={inputStyles}
											/>
										) : (
											name
										)}
									</h1>
									<div style={{ marginBottom: '16px' }}>
										{isEditing ? (
											<textarea
												value={profileDescription}
												onChange={(e) => handleDescriptionChange(e.target.value)}
												style={textareaStyles}
											/>
										) : (
											<p style={{ color: 'white' }}>{profileDescription}</p>
										)}
									</div>
									<div style={{ color: 'white', marginTop: '16px' }}>
										<p>Check me out:</p>
										{isEditing ? (
											<input
												type="url"
												value={spotifyLink}
												onChange={(e) => setSpotifyLink(e.target.value)}
												style={{
													...inputStyles,
													border: '1px solid rgba(255, 255, 255, 0.2)',
													borderRadius: '4px',
													padding: '4px 8px'
												}}
											/>
										) : (
											<a
												href={spotifyLink}
												target="_blank"
												rel="noopener noreferrer"
												style={{ display: 'block', width: '50px', height: '0px' }}
											>
												<img
													src="/pngegg.png"
													alt="Spotify Link"
													style={{ width: '90px', height: '60px', marginTop: '12px', marginLeft: '4px' }}
												/>
											</a>
										)}
									</div>
								</div>
								<div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
									<button style={{ ...button, marginRight: '8px' }} onClick={() => setIsEditing(!isEditing)}>
										{isEditing ? '✔️' : '✏️'}
									</button>
									<button style={button} onClick={() => alert('Booking functionality not implemented yet')}>
										Book Now
									</button>
								</div>
							</div>
						</div>
					</div>
					<div style={divider} />
					<div>
						<h1 style={{ color: 'white', marginBottom: '20px' }}>Top Songs</h1>
						<button onClick={fetchTopTracks} style={{ ...button, marginBottom: '16px' }}>Get Top Songs</button>
						<div style={{ marginTop: '16px', color: 'white' }}>
							{topTracks.length > 0 ? (
								topTracks.map((track) => (
									<div key={track.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
										<a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
											<img src={track.album.images[0].url} alt={track.name} width="100" />
										</a>
										<p>{track.name}</p>
									</div>
								))
							) : (
								<p>No Music Yet</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileView;