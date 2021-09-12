const mapRadioBtn = props => {
	const { mapName, mapAbbr } = props
	return (
		<>
			<input
				type='radio'
				name='map-group'
				value={mapAbbr}
				id={`map-${mapName}`}
			></input>
			<label className='map-card' htmlFor={`map-${mapName}`}>
				{/* capitalize the first letter of the map name */}
				<h1>{mapName[0].toUpperCase() + mapName.substring(1)}</h1>
			</label>
		</>
	)
}

export default mapRadioBtn
