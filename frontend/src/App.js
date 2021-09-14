import './App.css'
import React, { useState, useEffect } from 'react'
import Strat from './components/Strat'
import Nav from './components/Nav'
import SelectionForm from './components/SelectionForm'

import axios from 'axios'

const App = () => {
	const [allStrats, setAllStrats] = useState([])
	const [currentStrats, setCurrentStrats] = useState([])
	const [mapName, setMapName] = useState('BI')
	const [team, setTeam] = useState('A')

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/strats/').then(response => {
			setAllStrats(response.data)
			setCurrentStrats(response.data)
		})
	}, [])

	useEffect(() => {
		setCurrentStrats(filterStrats)
		console.log(currentStrats)
	}, [mapName, team])

	const filterStrats = () => {
		let strats = currentStrats
		strats.filter(strat => {
			return (
				(strat.map_name === mapName && strat.team === team) ||
				(strat.map_name === 'AL' && strat.team === team) ||
				(strat.map_name === mapName && strat.team === 'B') ||
				(strat.map_name === 'AL' && strat.team === 'B')
			)
		})
		return strats
	}

	/**
	 * Sets the state for the current selected map. This function will be called from
	 * the SelectionForm component when a change is detected.
	 * @param {string} newMap - Abbreviation of the new map.
	 */
	const handleMapChange = newMap => {
		setMapName(newMap)
		setCurrentStrats(allStrats)
	}

	/**
	 * Sets the state for the current selected team. This function will be called from
	 * the SelectionForm component when a change is detected.
	 * @param {string} newTeam - Abbreviation of the new team.
	 */
	const handleTeamChange = newTeam => {
		setTeam(newTeam)
		setCurrentStrats(allStrats)
	}

	return (
		<>
			<Nav />
			<SelectionForm
				onMapChange={handleMapChange}
				onTeamChange={handleTeamChange}
			/>
		</>
	)
}

export default App
