import { useState } from 'react'

const Strat = props => {
	const { title, description } = props

	return (
		<div>
			<h2>{title}</h2>
			<h4>{description}</h4>
		</div>
	)
}

export default Strat
