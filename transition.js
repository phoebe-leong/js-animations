function chooseAndSetColour() {
	const colours = [
		"#f09ea8",
		"#f09ea8",
		"#fafabe",
		"#c1edc0",
		"#c7cafc",
		"#cdabeb",
		"#f2c2f2"
	]

	document.body.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)]
}

function animate() {
	chooseAndSetColour()
}