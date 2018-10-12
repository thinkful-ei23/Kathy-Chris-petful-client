import React from 'react';

import Pet from './components/Pet';

export const Dashboard = (props) => {
	// console.log(props.cat.imageURL, 'Name in dashboard');

	console.log(props.cat)

	return (
		<div className="dashboard-wrapper">
			<Pet info={props.cat} />
			<Pet info={props.dog} />
		</div >
	);
}