import { useState, useEffect } from 'react'

const Strat = props => {
	const { title, description } = props

	const [stratTitle, setStratTitle] = useState('')
	const [stratDescription, setStratDescription] = useState('')

	useEffect(() => {
		setStratTitle(title)
		setStratDescription(description)
	}, [])

	return (
		<div className='strat'>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	)
}

export default Strat
