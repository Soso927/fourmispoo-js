// Vous mettrez ici le code de la classe Fourmi
class Fourmi 
{
    #age;
    #number;

    constructor(age,number)
    {
        this.#age = age;
        this.#number = number;
    }

    get age() 
    {
        return this.#age;
    }

    set age(age)
    {
        try {
            this._testNumber(age); // Vérifie que c’est un nombre
        } catch(error) {
            throw new Error(`Age : ${error.message}`); // Si échec, message d'erreur personnalisé
        }

        if(age < 0) {
            throw new Error('Age : ne peut être inférieur à 0'); // Interdit les âges négatifs
        }

        this.#age = age; // Affecte la valeur
    }

    get number ()
    {
        return this.#number;
    }

    set number(number)
    {
        try {
            this._testNumber(number);
        } catch (error){
            throw new Error (`Nombre : ${error.message}`);
        }

        if(number < -15) {
            throw new Error(`nombre : ne peut pas être inférieur à -15 `);
        }


        this.#number = number;
    }


    _testnumber(){
        console.log("Vous avez pas l'âge compris")
    }
}
