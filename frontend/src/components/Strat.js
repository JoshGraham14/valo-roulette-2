import { useState } from 'react'

const Strat = props => {
	const { title, description } = props

	const [stratTitle, setStratTitle] = useState('')
	const [stratDescription, setStratDescription] = useState('')

	return (
		<div class='strat'>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	)
}

export default Strat
