
let display;

function init() {
	display = document.getElementById("display");
}

//Media queries
let mobileScreen = window.matchMedia("(max-width: 480px)");

//This will append the numbers the user clicks into the display
function appendToDisplay(character) {
	display.value += character;
}

function clearDisplay() {
	display.value = "";
	if(mobileScreen.matches) {
		display.style.fontSize = "3rem";
		display.style.padding = "18px";
	} else {
		display.style.fontSize = "5rem";
		display.style.padding = "25px";
	}
}

//Delete the last number in the display
function deleteLast() {
	display.value = display.value.slice(0, -1);
}

function calculate() {
	try {
		display.value = eval(display.value);
		
		//Send this to the webserver
		fetch("/api", {
			method: "POST",
			body: JSON.stringify({
				data: display.value
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		});
		
		//If the user tries to devide by 0, then show them the message
		if(display.value == "Infinity") {
			if(mobileScreen.matches) {
				display.style.fontSize = "1rem";
				display.style.padding = "40px";
				display.value = "Can't devide by 0, you stupid!"; //Message
			} else {
				display.style.fontSize = "2rem";
				display.style.padding = "50px";
				display.value = "Can't devide by 0, you stupid!"; //Message
			}
		}
	} catch(e) {
		display.value = "Errrrrror!";
	}
}

window.onload = () => {
	init();
}