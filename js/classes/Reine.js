// Vous mettrez ici le code de la classe Reine
 class Reine extends Fourmi 
{
    #nbOeufsPondus;

    constructor(nbOeufsPondus)
    {
        super();
        this.#nbOeufsPondus = nbOeufsPondus;
    }

    get nbOeufsPondus()
    {
        return this.#nbOeufsPondus
    }

    set nbOeufsPondus(nbOeufsPondus)
    {
        this.#nbOeufsPondus = nbOeufsPondus;
    }

    _pondre(){
        console.log(`la reine a pondu plusieurs fourmis ${this.#nbOeufsPondus} oeufs`);
    }

}

// export default Reine;