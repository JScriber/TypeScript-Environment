export { System };

class System {

	static println(message: string): void {
		let door = document.getElementById('output');
		door.innerHTML += message+"<br>";
	}

	static clear(): void {
		let door = document.getElementById('output');
		door.innerHTML = "";
	}
}

