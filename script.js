
// https://awik.io/determine-color-bright-dark-using-javascript/
function lightOrDark() {
	colour = document.body.style.backgroundColor

	colour = +("0x" + colour.slice(1).replace( 
        colour.length < 5 && /./g, '$&$&'))

    r = colour >> 16
    g = colour >> 8 & 255
    b = colour & 255

    hsp = Math.sqrt(
    	0.299 * (r * r) +
    	0.587 * (g * g) +
    	0.114 * (b * b)
    )

    if (hsp > 127.5) { return "light" }
    else { return "dark" }
}

window.onload = () => {
	document.body.style.backgroundColor = colourGen()

	setInterval(() => {
		animate()
	}, 5000)
}