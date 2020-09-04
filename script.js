const hex = document.querySelector(".hex");
const hexBtn = document.querySelector(".hexBtn");
const BackgroundBody = document.querySelector("body");


const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// hexBtn.addEventListener("click", changexHexColor);
hexBtn.addEventListener('click', changexHexColor)

function changexHexColor() {
	let hexColor = "#";


	for (let i = 0; i < 6; i++) {
		let randomColor = Math.floor(Math.random() * hexNumber.length)
		hexColor += hexNumber[randomColor];
		
	}
	console.log(hexColor)
	BackgroundBody.style.backgroundColor = hexColor;
	hex.innerHTML = hexColor;
}
