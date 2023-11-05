// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
    const newDate = new Date(date);

    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    const formattedDate = new Date(year, month + 1, 0);

    const day = formattedDate.getDay();

    const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    
    return dayNames[day];
}
