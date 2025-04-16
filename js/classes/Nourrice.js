// Vous mettrez ici le code de la classe Nourrice
class Nourrice extends Ouvrière
{
    #listelarves

    constructor(listelarves,larve){
        super();
        this.#listelarves = []
    }

    get listelarves(){
        return this.#listelarves
    }

    set listelarves(listelarves){
        this.#listelarves = listelarves
    }




    _nourris(larve){
        console.log("les larves ont été nourris")
    }
}