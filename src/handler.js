console.log("handler.js loaded.")

function kill(arg1) {
	killMessage = arg1;
	respondWith(`You died due to ${killMessage}!`);
}

function respondWith(arg1) {
	var localArg = arg1;
	console.log(localArg)
	document.getElementById("talk").innerHTML = localArg;
}

function ping() {
	console.log("Everything is working fine.")
}