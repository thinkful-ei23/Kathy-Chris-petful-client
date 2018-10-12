import React from 'react';

export const Dashboard = (props) => {
	// console.log(props.cat.imageURL, 'Name in dashboard');
	return (
		< div className="dashboard-wrapper" >

			<section className="catToAdopt">
				<header>
					<h1>	{props.cat.name}
						<img
							src={props.cat.imageURL}
							alt={props.cat.imageDescription}></img>

					</h1>
				</header>
				<div className="mainCat">
					<dl>
						<dt>Name:</dt>
						<dd>{props.cat.name}</dd>
						<dt>Sex:</dt>
						<dd>{props.cat.sex}</dd>
						<dt>Age:</dt>
						<dd>{props.cat.age}</dd>
						<dt>Breed:</dt>
						<dd>{props.cat.breed}</dd>
						<dt>Story:</dt>
						<dd>{props.cat.story}</dd>
					</dl>
					<button className="btn btn-adopt btn-adopt-cat">Adopt me!!</button>
				</div>
			</section>

			<section className="dogToAdopt">
				<header>
					<h1>	{props.dog.name}
						<img
							src={props.dog.imageURL}
							alt={props.dog.imageDescription}
						></img>
					</h1>

				</header>
				<div className="mainDog">
					<dl>
						<dt>Name:</dt>
						<dd>{props.dog.name}</dd>
						<dt>Sex:</dt>
						<dd>{props.dog.sex}</dd>
						<dt>Age:</dt>
						<dd>{props.dog.age}</dd>
						<dt>Breed:</dt>
						<dd>{props.dog.breed}</dd>
						<dt>Story:</dt>
						<dd>{props.dog.story}</dd>
					</dl>
					<button className="btn btn-adopt btn-adopt-dog">Adopt me!!</button>
				</div>
			</section>


		</div >
	);


}
