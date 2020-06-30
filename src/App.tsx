import React from 'react';

import './App.scss';
import Winner from './components/winner/Winner';
import Player from './components/player/Player';

function App() {
	return (
		<div className="app-container">
			<div className="winner-announcer">
				<Winner winner={'Luke'} />
			</div>
			<div className="game-info-container">
				<div className="player-info-container">
					<Player name="Luke" ships={[]} />
				</div>
				<div className="button-container">
					<button className="new-game-button">New Game</button>
					<div>
						<button>Start</button>
						<button>Next Round</button>
					</div>
				</div>
				<div className="player-info-container">
					<Player name="Han" ships={[]} />
				</div>
			</div>
		</div>
	);
}

export default App;
