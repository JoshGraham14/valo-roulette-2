import './App.css'
import React, { useState, useEffect } from 'react'
import Strat from './components/Strat'

import axios from 'axios'
import _ from 'lodash'

const App = () => {
	const [strats, setStrats] = useState([])
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/strats/').then(response => {
			setStrats(response.data)
		})
	}, [])

	const allStrats = _.map(strats, (strat, index) => {
		return (
			<Strat
				title={strat.title}
				description={strat.description}
				key={index}
			/>
		)
	})

	return (
		<>
			<h1>Valorant Strat Roulette</h1>
			{allStrats}
		</>
	)
}

export default App
