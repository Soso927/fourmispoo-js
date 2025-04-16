// Vous mettrez ici le code de la classe Soldat
class Soldat extends Femelle 
{
    #endurance
    constructor(endurance) {
        super();
        this.endurance = endurance
    }

    get endurance(){
        return this.#endurance
    }

    set endurance(endurance){
        if(typeof endurance !== 'number' && isNaN(this.#endurance)){
            throw new Error ("l'endurance doit être un nombre")
        }
        this.#endurance = endurance
    }

    _attaquer(){
        console.log("la fourmi attaque")
    }
}