import React from 'react';
import "./Winner.scss"

interface WinnerProps {
	winner: string
}
export default function Winner(props: WinnerProps) {
	return(
		<div className="winner-text">
			WINNER<br/>{props.winner}
		</div>
	)
}