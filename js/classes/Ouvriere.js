// Vous mettrez ici le code de la classe Ouvrière
class Ouvrière extends Femelle 
{
    #post

    constructor(post){
        super();
        this.post = post;  
    }

    get post (){
        return this.#post
    }

    set post(post){
        this.#post = post
    }

    _creusergalerie(){
        console.log("elle a creuser la galerie")
    }

    _nettoyergalerie(){
        console.log("elle nettoie la galerie")
    }

    _chercherNourriture(){
        console.log("elle cherche la nourriture")
    }
}