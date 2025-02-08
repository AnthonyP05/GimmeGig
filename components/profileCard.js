import React from 'react';

const textBox = ({ label }) => {
	const containerStyles = {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '20px',
	};

	const labelStyles = {
		marginBottom: '5px',
		fontSize: '16px',
		fontWeight: 'bold',
	};

	const inputStyles = {
		padding: '10px',
		fontSize: '14px',
		borderRadius: '5px',
		border: '1px solid #ccc',
	};

	return (
		<div style={containerStyles}>
			<label style={labelStyles}>{label}</label>
			<input type="text" style={inputStyles} />
		</div>
	);
};

const cardStyles = {
	backgroundColor: 'white',
	padding: '20px',
	borderRadius: '10px',
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	maxWidth: '400px',
	width: '100%',
	textAlign: 'center',
	margin: '20px auto',
};

const containerStyles = {
	display: 'flex',
	flexDirection: 'column',
	marginBottom: '20px',
};

const labelStyles = {
	marginBottom: '5px',
	fontSize: '16px',
	fontWeight: 'bold',
};

const inputStyles = {
	padding: '10px',
	fontSize: '14px',
	borderRadius: '5px',
	border: '1px solid #ccc',
	marginBottom: '10px',
};



const TextBox = ({ label }) => (
    <div style={containerStyles}>
        <label style={labelStyles}>{label}</label>
        <input type="text" style={inputStyles} />
    </div>
);

const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    marginTop: '20px',
};

const ProfileCard = () => {
    const handleButtonClick = () => {
        window.location.href = '/another-page'; // Replace with your target page URL
    };

    return (
        <div style={cardStyles}>
            <h1>Profile Info</h1>
            <TextBox label="Name:" />
            <TextBox label="Genre:" />
            <TextBox label="Link to spotify(Optional):" />
            <TextBox label="Description:" />
            <TextBox label="Past Performances(Optional):" />
            <button style={buttonStyles} onClick={handleButtonClick}>Let's Go</button>
        </div>
    );
};

export default ProfileCard;