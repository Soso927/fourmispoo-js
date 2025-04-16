// Vous mettrez ici le code de la classe Eclaireuse
class Eclaireuse extends Femelle 
{
    #rayonAction

    constructor(rayonAction){
        super();
        this.rayonAction = rayonAction
    }

    get rayonAction(){
        return this.#rayonAction
    }

    set rayonAction(rayonAction){
        if(typeof rayonAction !== 'number' && isNaN(this.#rayonAction)){
            throw new Error ("le rayonAction doit être un nombre")
        }
        this.#rayonAction = rayonAction
    }

    _explorer(){
        console.log(`la femelle explore`);
    }

}
