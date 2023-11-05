// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    // Convertissez la chaîne de caractères en objet Date
    const dateObj = new Date(date);

    // Utilisez la méthode setDate pour ajouter le nombre de jours
    dateObj.setDate(dateObj.getDate() + jours);

    // Formatez la nouvelle date en chaîne de caractères au format "jj/mm/aaaa"
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Notez que les mois commencent à 0
    const year = dateObj.getFullYear();

    // Retournez la date formatée
    return `${day}/${month}/${year}`;
}

