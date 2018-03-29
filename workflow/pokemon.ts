export { Pokemon };

class Pokemon {
	private name: string;

	private totalHP: number;
	private actualHP: number;

	private attack: number;
	private shielding: number;

	constructor(name: string, stats){
		this.name = name;

		// Setting up the PV
		this.totalHP = stats.pv;
		this.actualHP = stats.pv;

		// Setting up the other stats
		this.attack = stats.attack;
		this.shielding = stats.shielding;
	}

	public getName(): string {
		return this.name;
	}
	public isStillAlive(): boolean {
		if(this.actualHP == 0){
			return false;
		}else{
			return true;
		}
	}

	// Inside functions
	private getDamages(damages: number): void{
		this.actualHP -= damages;
		if(this.actualHP < 0){
			this.actualHP = 0;
		}
	}

	public hurtsItSelf(){
		this.getDamages(50);
		if(this.isStillAlive()){
			console.log(this.name+" is still alive");
		}else{
			console.log(this.name+" is dead");
		}
	}

	// Class method
	static fighting(attacker, victime){

	}
}
