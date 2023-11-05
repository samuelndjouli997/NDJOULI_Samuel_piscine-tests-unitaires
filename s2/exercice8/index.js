// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(hours, minutes) {
    const newDate = new Date(date);

    const timestamp = newDate.getTime();

    hours = timestamp / (1000*60*60)

    minutes = hours * 60;

    const result = "La date " + date + " équivaut à " + hours + " heures, c'est à dire " + minutes + " minutes.";

    return result;
}