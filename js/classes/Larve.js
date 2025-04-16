// Vous mettrez ici le code de la classe Larve
class Larve extends Fourmi 
{
    #type;

    constructor(type)
    {
        super();
        this.#type = type;
    }

    get type() {
        return this.#type;
    }

    set type(type){
        this.#type = type;
    }

    _metamorphose()
    {
        console.log("la larve a metamorphoser");
    }
}