import React from 'react';

export default class Pet extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		const props = this.props;

		const onAdoptPet = () => {
			console.log(onAdoptPet, "Clicked and adopted")
		}
		return (
			<section className="petToAdopt">
				<header>
					<h1>	{props.info.name}
						<img
							src={props.info.imageURL}
							alt={props.info.imageDescription}></img>

					</h1>
				</header>
				<div className="maininfo">
					<dl>
						<dt>Name:</dt>
						<dd>{props.info.name}</dd>
						<dt>Sex:</dt>
						<dd>{props.info.sex}</dd>
						<dt>Age:</dt>
						<dd>{props.info.age}</dd>
						<dt>Breed:</dt>
						<dd>{props.info.breed}</dd>
						<dt>Story:</dt>
						<dd>{props.info.story}</dd>
					</dl>
					<button
						className="btn btn-adopt btn-adopt-pet"
						// onClick={() => this.delete(true)}
						onClick={onAdoptPet}

					>Adopt me!!</button>
				</div>
			</section>
		);
	}
}
