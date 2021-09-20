const TeamSelectBtn = props => {
	const { team, checked, onChange } = props

	/**
	 * When a new team is selected, the handleTeamChange function from the
	 * SelectionForm component is called.
	 * @param {*} e - event object.
	 */
	const handleTeamChange = e => {
		onChange(e)
	}

	return (
		<>
			<input
				type='radio'
				name='team-group'
				value={team === 'attackers' ? 'A' : 'D'}
				id={`team-${team}`}
				checked={checked}
				onChange={handleTeamChange}
			></input>
			<label className={`team-card ${team}`} htmlFor={`team-${team}`}>
				{/* capitalize the first letter of the team name */}
				{team[0].toUpperCase() + team.substring(1)}
			</label>
		</>
	)
}

export default TeamSelectBtn
