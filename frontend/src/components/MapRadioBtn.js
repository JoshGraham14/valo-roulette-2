const MapRadioBtn = props => {
	const { mapName, mapAbbr, checked, onChange, imgSrc } = props
	const handleMapChange = e => {
		onChange(e)
	}

	return (
		<>
			<input
				type='radio'
				name='map-group'
				value={mapAbbr}
				id={`map-${mapName}`}
				checked={checked}
				onChange={handleMapChange}
			></input>
			<label className='map-card' htmlFor={`map-${mapName}`}>
				<img className='map-image' src={imgSrc} alt={mapName}></img>
				{/* capitalize the first letter of the map name */}
				<h1>{mapName[0].toUpperCase() + mapName.substring(1)}</h1>
			</label>
		</>
	)
}

export default MapRadioBtn
