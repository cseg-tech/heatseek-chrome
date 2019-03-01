function openConsole() {
	document.getElementById('sideConsoleID').style.width = "33%";
}

function closeConsole() {
	document.getElementById('sideConsoleID').style.width = "0%";
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('consoleIcon').addEventListener('click', openConsole);
	document.getElementById('consoleClose').addEventListener('click', closeConsole);
})