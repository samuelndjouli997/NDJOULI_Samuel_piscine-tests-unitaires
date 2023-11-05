// Exercice 5: Créer une fonction pour vérifier si une année est bissextile
module.exports = function estAnneeBissextile(annee) {
   // Une année bissextile est soit divisible par 4 mais pas par 100, soit divisible par 400.
   if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return true;
    } else {
        return false;
    }
}
