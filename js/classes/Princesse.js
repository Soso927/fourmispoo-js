// Vous mettrez ici le code de la classe Princesse
class Princesse extends Femelle 
{
    _voler()
    {
        console.log("la princesse a voler la femelle");
    }
    _volNuptiale(male)
    {
        console.log(`la princesse a eu un vol nuptiale avec ${this.male}`);
    }

}
