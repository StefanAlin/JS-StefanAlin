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
