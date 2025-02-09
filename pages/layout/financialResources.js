import React from 'react';
import Sidebar from '../../components/ExploreComponents/sidebar';

const FinancialResources = () => {
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

	const divider = {
		borderTop: '1px solid #e5e7eb',
		margin: '24px 0'
	};

	return (
		<div style={containerStyles}>
			<div style={sideBarStyles}>
				<Sidebar />
			</div>
			<div style={mainContentStyles}>
				<div style={content}>
					<div style={header}>
						<h1 style={{ fontSize: '24px', marginBottom: '8px', color: 'white' }}>
							Financial Resources
						</h1>
					</div>
					<div style={divider} />
					<div style={descriptionStyle}>
						<p>Here are some financial resources that support local music artists in Athens, GA:</p>
						<ul>
							<li><a href="https://www.grammy.com/musicares" target="_blank" rel="noopener noreferrer">MusiCares</a> - Provides a safety net of critical assistance for music people in times of need.</li>
							<li><a href="https://www.sweetrelief.org/" target="_blank" rel="noopener noreferrer">Sweet Relief Musicians Fund</a> - Provides financial assistance to all types of career musicians and music industry workers who are struggling to make ends meet.</li>
							<li><a href="https://www.artistrelief.org/" target="_blank" rel="noopener noreferrer">Artist Relief</a> - Provides financial grants to artists facing dire financial emergencies due to COVID-19.</li>
							<li><a href="https://www.musichealthalliance.com/" target="_blank" rel="noopener noreferrer">Music Health Alliance</a> - Provides healthcare advocacy and support services to music industry professionals.</li>
							<li><a href="https://www.athensculturalaffairs.org/" target="_blank" rel="noopener noreferrer">Athens Cultural Affairs Commission</a> - Provides grants and funding opportunities for local artists in Athens, GA.</li>
							<li><a href="https://www.athensareacf.org/" target="_blank" rel="noopener noreferrer">Athens Area Community Foundation</a> - Offers financial support and grants for local artists and community projects in Athens, GA.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FinancialResources;
