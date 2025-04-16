// Vous mettrez ici le code permettant de tester vos classes

// const mini = new Fourmi (15,41)
// console.log(mini.age);
// console.log(mini.number);

const king = new Reine(8)
console.log(king)
console.log(king.nbOeufsPondus)

const male = new Male(15)
console.log(male);
male._feconder()
male._voler()

const femelle = new Femelle(45, 36)
console.log(femelle)
femelle.chercherNourriture()

const larve = new Larve()
console.log(larve)
console.log(larve.type)
larve._metamorphose()

const princesse = new Princesse()
console.log(princesse)
princesse._voler()
princesse._volNuptiale()

const eclaireuse = new Eclaireuse(45)
console.log(eclaireuse)
console.log(eclaireuse.rayonAction)
eclaireuse._explorer()

const soldat = new Soldat(111, 145, 13)
console.log(soldat)
console.log(soldat._attaquer())

const ouvriere = new Ouvrière(42, 15, 33)
console.log(ouvriere)
ouvriere._creusergalerie()
ouvriere._nettoyergalerie()
ouvriere._chercherNourriture()


const nourrice = new Nourrice();
const unelarve = new larve();
nourrice._nourris((unelarve));
// console.log(unelarve);
// console.log(nourrice);
 