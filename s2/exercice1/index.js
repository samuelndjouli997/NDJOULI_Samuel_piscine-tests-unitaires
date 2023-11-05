// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
    const dateActuelle = new Date();

    dateActuelle.setFullYear(dateActuelle.getFullYear() - 10);

    // Obtenez l'année, le mois et le jour de la date actuelle
    const annee = dateActuelle.getFullYear();
    const mois = (dateActuelle.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0, donc ajoutez 1
    const jour = dateActuelle.getDate().toString().padStart(2, '0');

    // Formatez la date au format "YYYY-MM-DD"
    const dateFormatee = `${annee}-${mois}-${jour}`;

    return dateFormatee;
}
