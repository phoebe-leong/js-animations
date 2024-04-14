function colourGen() {
	const base16 = "0123456789abcdef"
	let hexCode = "#"

	for (let i = 0; i < 6; i++) {
		hexCode += base16[Math.floor(Math.random() * base16.length)]
	}

	return hexCode
}

function animate() {
	document.body.style.backgroundColor = colourGen()
	document.body.id = "transition"
}