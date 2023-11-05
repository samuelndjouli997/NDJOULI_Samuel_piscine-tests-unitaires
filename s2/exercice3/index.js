// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
    // Convertir les dates en objets Date
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);

    // Calculer la différence en millisecondes
    const differenceEnMilliseconds = dateObj2 - dateObj1;

    // Convertir la différence en jours (1 jour = 24 heures * 60 minutes * 60 secondes * 1000 millisecondes)
    const differenceEnJours = differenceEnMilliseconds / (24 * 60 * 60 * 1000);

    return differenceEnJours;
}