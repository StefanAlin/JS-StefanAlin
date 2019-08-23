// is-loading

const button = document.getElementById("button");

function loadingButton() {
	button.classList.add("is-loading");
}
let buttonTimmer = () => {
	setTimeout(function() {
		button.classList.remove("is-loading");
	}, 5000);
};
button.addEventListener("click", loadingButton);
button.addEventListener("click", buttonTimmer);

function printNumbers(from, to) {
	var counter = 0;
	let interval = setInterval(function() {
		counter += 1;
		console.log(counter);
	}, 1000);
	if (counter === to) {
		clearInterval();
	}
}
printNumbers(1, 10);
