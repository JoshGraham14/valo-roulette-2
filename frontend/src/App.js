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

	/**
	 * Make a get request to retrieve all strategies from the database on mount.
	 */
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/strats/').then(response => {
			setAllStrats(response.data)
			setCurrentStrats(response.data)
		})
	}, [])

	/**
	 * Refilter the current strats whenever the map or team changes.
	 */
	useEffect(() => {
		setCurrentStrats(filterStrats())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mapName, team])

	/**
	 * Filter the array of allStrats based on the map and team chosen
	 * @returns a filtered array of strats.
	 */
	const filterStrats = () => {
		let strats = allStrats
		let selectedStrats = strats.filter(strat => {
			return (
				(strat.map_name === mapName && strat.team === team) ||
				(strat.map_name === 'AL' && strat.team === team) ||
				(strat.map_name === mapName && strat.team === 'B') ||
				(strat.map_name === 'AL' && strat.team === 'B')
			)
		})
		setCurrentStrats(selectedStrats)
		return selectedStrats
	}

	/**
	 * Sets the state for the current selected map. This function will be called from
	 * the SelectionForm component when a change is detected.
	 * @param {string} newMap - Abbreviation of the new map.
	 */
	const handleMapChange = newMap => {
		setMapName(newMap)
	}

	/**
	 * Sets the state for the current selected team. This function will be called from
	 * the SelectionForm component when a change is detected.
	 * @param {string} newTeam - Abbreviation of the new team.
	 */
	const handleTeamChange = newTeam => {
		setTeam(newTeam)
	}

	return (
		<>
			<Nav />
			<SelectionForm
				onMapChange={handleMapChange}
				onTeamChange={handleTeamChange}
			/>
			{currentStrats.map((strat, index) => {
				return (
					<Strat
						title={strat.title}
						description={strat.description}
						key={index}
					/>
				)
			})}
		</>
	)
}

export default App
