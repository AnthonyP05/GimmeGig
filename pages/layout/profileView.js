import React, { useState } from 'react';
import Sidebar from '../../components/ExploreComponents/sidebar';
import axios from 'axios';

const ProfileView = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState('Your Band Name');
	const [profileDescription, setProfileDescription] = useState('Professional musician with over 10 years of experience. Specializing in classical piano and contemporary compositions.');
	const [spotifyLink, setSpotifyLink] = useState('');
	const [topTracks, setTopTracks] = useState([]);

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

	const containerStyles = {
		display: 'flex'
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
		overflowY: 'auto'
	};

	const profileSection = {
		flex: 1,
		display: 'flex',
		gap: '24px'
	};

	const profilePic = {
		width: '128px',
		height: '128px',
		borderRadius: '50%',
		overflow: 'hidden',
		flexShrink: 0
	};

	const content = {
		flex: 1
	};

	const header = {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '16px'
	};

	const descriptionStyle = {
		color: 'white'
	};

	const button = {
		backgroundColor: '#2563eb',
		color: 'white',
		padding: '8px 16px',
		borderRadius: '4px',
		border: 'none',
		cursor: 'pointer'
	};

	const ButtonContainer = {
		display: 'flex',
		gap: '8px',
		margin: '8px'
	};

	const divider = {
		borderTop: '1px solid #e5e7eb',
		margin: '24px 0'
	};

	const tabs = {
		display: 'flex',
		gap: '24px'
	};

	const tab = {
		color: 'white',
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		padding: 0
	};

	return (
		<div style={containerStyles}>
			<div style={sideBarStyles}>
				<Sidebar />
			</div>
			<div style={mainContentStyles}>
				<div style={content}>
					<div style={profileSection}>
						<div style={profilePic}>
							<img 
								src="/api/placeholder/128/128" 
								alt="Profile picture"
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							/>
						</div>
						<div style={content}>
							<div style={header}>
								<div>
									<h1 style={{ fontSize: '24px', marginBottom: '8px', color: 'white' }}>
										{isEditing ? (
											<input 
												type="text" 
												value={name} 
												onChange={(e) => handleNameChange(e.target.value)} 
												style={{ 
													background: 'transparent', 
													border: 'none', 
													color: 'white', 
													fontSize: '24px', 
													marginBottom: '8px' 
												}} 
											/>
										) : (
											<>
												{name}
											</>
										)}
									</h1>
									{isEditing ? (
										<textarea 
											value={profileDescription} 
											onChange={(e) => handleDescriptionChange(e.target.value)} 
											style={{ 
												background: 'transparent', 
												border: 'none', 
												color: 'white', 
												width: '100%', 
												height: '100px' 
											}} 
										/>
									) : (
										<p style={descriptionStyle}>{profileDescription}</p>
									)}
								</div>
								<div style={ButtonContainer}>
									<button style={button} onClick={() => setIsEditing(!isEditing)}>
										{isEditing ? '✔️' : '✏️'}
									</button>
								</div>
								<div>
									<p style={descriptionStyle}>Check out my music:</p>
								</div>
								<div style={{ marginLeft: 'auto' }}>
									<button style={button} onClick={() => alert('Booking functionality not implemented yet')}>
										Book Now
									</button>
								</div>
							</div>
						</div>
					</div>
					<div style={divider} />
					<div style={tabs}>
						<button style={tab}>Top Songs</button>
						<button style={tab}>Reviews</button>
					</div>
					<div>
						<h1>Top Songs</h1>
						<input
							type="text"
							value={spotifyLink}
							onChange={(e) => setSpotifyLink(e.target.value)}
							placeholder="Enter Spotify artist link"
						/>
						<button onClick={fetchTopTracks}>Get Top Songs</button>
						<div>
							{topTracks.length > 0 ? (
								topTracks.map((track) => (
									<div key={track.id}>
										<img src={track.album.images[0].url} alt={track.name} width="100" />
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