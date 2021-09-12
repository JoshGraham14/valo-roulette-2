import { useState } from 'react'

import MapRadioBtn from './MapRadioBtn'
import TeamSelectBtn from './TeamSelectBtn'

const SelectionForm = props => {
	const handleRadioChange = e => {
		e.preventDefault()
		const map = e.target.value
		console.log(`Selected map is: ${map}`)
	}

	const handleTeamChange = e => {
		e.preventDefault()
		const team = e.target.value
		console.log(`Selected team is: ${team}`)
	}

	const handleClick = e => {
		e.preventDefault()
		console.log('button clicked')
	}

	return (
		<>
			<div className='map-cards' onChange={handleRadioChange}>
				<MapRadioBtn mapName='bind' mapAbbr='BI' />
				<MapRadioBtn mapName='haven' mapAbbr='HA' />
				<MapRadioBtn mapName='split' mapAbbr='SP' />
				<MapRadioBtn mapName='ascent' mapAbbr='AS' />
				<MapRadioBtn mapName='icebox' mapAbbr='IC' />
				<MapRadioBtn mapName='breeze' mapAbbr='BR' />
			</div>

			<div className='team-selection' onChange={handleTeamChange}>
				<TeamSelectBtn team='attackers' />
				<TeamSelectBtn team='defenders' />
			</div>

			<button className='strat-btn' onClick={handleClick}>
				Generate Strat
			</button>
		</>
	)
}

export default SelectionForm
