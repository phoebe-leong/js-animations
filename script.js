window.onload = () => {
	document.body.style.backgroundColor = colourGen()

	setInterval(() => {
		animate()
	}, 5000)
}