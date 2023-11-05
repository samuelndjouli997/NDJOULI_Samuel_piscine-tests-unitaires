const express = require('express');
const app = express();
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});

app.post('/s1/exercice1', (req, res) => {

    if(req.body?.n1 == undefined || req.body?.n2 == undefined) {
        return res.status(409).json([{
            error: true,
            response: "Le nombre introuvable"
        }]);
    }

    const n1 = req.body.n1
    const n2 = req.body.n2
    
    if (!n1) {
        return res.status(409).json([{
            error: true,
            response: "Le nombre est pas valide"
        }]);
    }

    if (!n2) {
        return res.status(409).json([{
            error: true,
            response: "Le nombre est pas valide"
        }]);
    }


    let a = addition(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice2', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    let a = soustraction(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice3', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    let a = multiplication(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice4', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    let a = division(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice5', (req, res) => {
    const n1 = req.body.n1
    let a = factorielle(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice6', (req, res) => {
    const n1 = req.body.n1
    let a = estPairOuImpair(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice7', (req, res) => {
    const n1 = req.body.n1
    let a = celsiusEnFahrenheit(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice8', (req, res) => {
    const n1 = req.body.n1
    let a = aireCercle(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice9', (req, res) => {
    const n1 = req.body.n1
    let a = estPalindrome(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice10', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    let a = pgcd(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice1', (req, res) => {
    const date = dateIlYADixAns();
    return res.json([{ reponse: date }]);
});

app.post('/s2/exercice2', (req, res) => {
    const date = new Date(); // Date actuelle
    const dateFormatee = formaterDate(date); // Utilisez la fonction pour formater la date
    return res.json([{ reponse: dateFormatee }]);
});

app.post('/s2/exercice3', (req, res) => {
    const date1 = req.body.date1; 
    const date2 = req.body.date2; 
    
    const difference = differenceEnJours(date1, date2);

    return res.json([{ reponse: difference }]);
});

app.post('/s2/exercice4', (req, res) => {
    const { date, jours } = req.body;
    const nouvelleDate = ajouterJours(date, jours);
    return res.json([{ reponse: nouvelleDate }]);
});

app.post('/s2/exercice5', (req, res) => {
    const annee = req.body.annee; // Assurez-vous que req.body.annee contient l'année que vous souhaitez vérifier.
    const estBissextile = estAnneeBissextile(annee);

    return res.json([{ reponse: estBissextile }]);
});

app.post('/s2/exercice6', (req, res) => {
    const n1 = req.body.n1

    if (n1 == null || !n1) {
        return res.json([{ reponse: "Veuillez entrer une date." }]);
    }

    if(isNaN(new Date(n1))){
        return res.json([{ reponse: "Veuillez entrer une date valide." }]);
    }

    let a = premierJourDuMois(n1);

    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice7', (req, res) => {
    const n1 = req.body.n1

    if (n1 == null || !n1) {
        return res.json([{ reponse: "Veuillez entrer une date." }]);
    }

    if(isNaN(new Date(n1))){
        return res.json([{ reponse: "Veuillez entrer une date valide." }]);
    }

    let a = dernierJourDuMois(n1);

    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice8', (req, res) => {
    const n1 = req.body.n1

    if (n1 == null || !n1) {
        return res.json([{ reponse: "Veuillez entrer une date." }]);
    }

    if(isNaN(new Date(n1))){
        return res.json([{ reponse: "Veuillez entrer une date valide." }]);
    }

    if(new Date(n1).getTime() < 0){
        return res.json([{ reponse: "Veuillez entrer une date avant le 1er janvier 1970." }]);
    }

    let a = formaterDuree(n1);

    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice9', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice10', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app