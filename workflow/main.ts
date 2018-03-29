import { Pokemon } from "./pokemon";
import { System } from "./domwriter";

// Loader
window.addEventListener('load', function(){

	let pikachu: Pokemon;

	pikachu = new Pokemon("Pikachu", {
		"pv": 500,
		"attack": 50,
		"shielding": 50
	});

	System.println(pikachu.getName());

	pikachu.hurtsItSelf();


});