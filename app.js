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
	for (let i = from; i <= to; i++) {
		return i;
	}
}
function oneSecond() {
	return setInterval(printNumbers(1, 10), 1000);
}
oneSecond();
