const TeamSelectBtn = props => {
	const { team } = props
	return (
		<>
			<input
				type='radio'
				name='team-group'
				value={team === 'attackers' ? 'A' : 'D'}
				id={`team-${team}`}
			></input>
			<label className={`team-card ${team}`} htmlFor={`team-${team}`}>
				{/* capitalize the first letter of the team name */}
				{team[0].toUpperCase() + team.substring(1)}
			</label>
		</>
	)
}

export default TeamSelectBtn
