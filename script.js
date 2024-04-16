window.onload = () => {
	chooseAndSetColour()
	document.body.id = "transition"

	setInterval(() => {
		chooseAndSetColour()
	}, 5000)
}