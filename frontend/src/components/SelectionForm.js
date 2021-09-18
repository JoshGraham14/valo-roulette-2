import { useState } from 'react'

import MapRadioBtn from './MapRadioBtn'
import TeamSelectBtn from './TeamSelectBtn'

import bindImg from '../img/bind-map.png'
import havenImg from '../img/haven-map.png'
import splitImg from '../img/split-map.png'
import ascentImg from '../img/ascent-map.png'
import iceboxImg from '../img/icebox-map.png'
import breezeImg from '../img/breeze-map.png'

const SelectionForm = props => {
	const { onMapChange, onTeamChange, onBtnClick } = props
	const [currentMap, setCurrentMap] = useState('BI')
	const [currentTeam, setCurrentTeam] = useState('A')

	/**
	 * Handles when a new map has been selected by setting the state of this
	 * component as well as the parent component (App.js).
	 * @param {*} e - event object.
	 */
	const handleRadioChange = e => {
		setCurrentMap(e.target.value)
		onMapChange(e.target.value)
	}

	/**
	 * Handles when a new team has been selected by setting the state of this
	 * component as well as the parent component (App.js).
	 * @param {*} e - event object.
	 */
	const handleTeamChange = e => {
		setCurrentTeam(e.target.value)
		onTeamChange(e.target.value)
	}

	/**
	 * Handles when the 'Generate Strat' button has been clicked. This function calls
	 * onBtnClick() which is a prop sent from App.js which will call handleClick in
	 * App.js.
	 * @param {*} e - event object.
	 */
	const handleClick = e => {
		e.preventDefault()
		onBtnClick()
	}

	return (
		<>
			<div className='map-cards'>
				<MapRadioBtn
					mapName='bind'
					mapAbbr='BI'
					checked={currentMap === 'BI'}
					onChange={handleRadioChange}
					imgSrc={bindImg}
				/>
				<MapRadioBtn
					mapName='haven'
					mapAbbr='HA'
					checked={currentMap === 'HA'}
					onChange={handleRadioChange}
					imgSrc={havenImg}
				/>
				<MapRadioBtn
					mapName='split'
					mapAbbr='SP'
					checked={currentMap === 'SP'}
					onChange={handleRadioChange}
					imgSrc={splitImg}
				/>
				<MapRadioBtn
					mapName='ascent'
					mapAbbr='AS'
					checked={currentMap === 'AS'}
					onChange={handleRadioChange}
					imgSrc={ascentImg}
				/>
				<MapRadioBtn
					mapName='icebox'
					mapAbbr='IC'
					checked={currentMap === 'IC'}
					onChange={handleRadioChange}
					imgSrc={iceboxImg}
				/>
				<MapRadioBtn
					mapName='breeze'
					mapAbbr='BR'
					checked={currentMap === 'BR'}
					onChange={handleRadioChange}
					imgSrc={breezeImg}
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
