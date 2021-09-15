import { useState } from 'react'

import MapRadioBtn from './MapRadioBtn'
import TeamSelectBtn from './TeamSelectBtn'

const SelectionForm = props => {
	const { onMapChange, onTeamChange } = props
	const [currentMap, setCurrentMap] = useState('BI')
	const [currentTeam, setCurrentTeam] = useState('A')

	const handleRadioChange = e => {
		setCurrentMap(e.target.value)
		onMapChange(e.target.value)
	}

	const handleTeamChange = e => {
		setCurrentTeam(e.target.value)
		onTeamChange(e.target.value)
	}

	const handleClick = e => {
		e.preventDefault()
		console.log('button clicked')
	}

	return (
		<>
			<div className='map-cards'>
				<MapRadioBtn
					mapName='bind'
					mapAbbr='BI'
					checked={currentMap === 'BI'}
					onChange={handleRadioChange}
				/>
				<MapRadioBtn
					mapName='haven'
					mapAbbr='HA'
					checked={currentMap === 'HA'}
					onChange={handleRadioChange}
				/>
				<MapRadioBtn
					mapName='split'
					mapAbbr='SP'
					checked={currentMap === 'SP'}
					onChange={handleRadioChange}
				/>
				<MapRadioBtn
					mapName='ascent'
					mapAbbr='AS'
					checked={currentMap === 'AS'}
					onChange={handleRadioChange}
				/>
				<MapRadioBtn
					mapName='icebox'
					mapAbbr='IC'
					checked={currentMap === 'IC'}
					onChange={handleRadioChange}
				/>
				<MapRadioBtn
					mapName='breeze'
					mapAbbr='BR'
					checked={currentMap === 'BR'}
					onChange={handleRadioChange}
				/>
			</div>

			<div className='team-selection'>
				<TeamSelectBtn
					team='attackers'
					checked={currentTeam === 'A'}
					onChange={handleTeamChange}
				/>
				<TeamSelectBtn
					team='defenders'
					checked={currentTeam === 'D'}
					onChange={handleTeamChange}
				/>
			</div>

			<button className='strat-btn' onClick={handleClick}>
				Generate Strat
			</button>
		</>
	)
}

export default SelectionForm
