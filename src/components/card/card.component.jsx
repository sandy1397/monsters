import React from 'react';
import './card.style.css';

export const Card = (props) => (
	<div className='card-container'>
		<img 
			alt='monster'
			//eslint-disable-next-line
			src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
		/>
		<h2> {props.monster.name} </h2>
		<p> {props.monster.email} </p>
	</div>
	)