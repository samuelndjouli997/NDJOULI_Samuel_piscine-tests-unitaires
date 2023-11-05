// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(date) {
    const jour = date.getDate().toString().padStart(2, '0'); // Obtenez le jour (01-31)
    const mois = (date.getMonth() + 1).toString().padStart(2, '0'); // Obtenez le mois (01-12) (n'oubliez pas d'ajouter 1 car les mois commencent à 0)
    const annee = date.getFullYear(); // Obtenez l'année au format AAAA

    return `${jour}/${mois}/${annee}`;
}