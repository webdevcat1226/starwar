import React from 'react';

import './Player.scss';
import spaceship from '../../assets/images/ship.png'


interface Ship {
	roundNo: number;
	name: string;
	speed: number;
}

interface PlayerProps {
	name: string;
	ships: Ship[];
}

export default function Player(props: PlayerProps) {
	return (
		<div className="player-container">
			<div className="round-info">
				{
					props.ships.map(ship => (<div className="ship-info">
						Round {ship.roundNo}: {ship.name} - {ship.speed}
					</div>))
				}
			</div>
			<img className="spaceship-image" src={spaceship} alt="space ship"/>
			<span className="player-name">{props.name}</span>
		</div>
	);
}