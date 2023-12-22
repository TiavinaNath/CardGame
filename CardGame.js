const prompt = require("prompt-sync")();

let listOfCard = ["feu", "eau", "plante"]
let greatGrades = ["T'es sans pitié en dirai", "Bien joué! ", "Gg !", "Coup de chance? Je crois pas", "Niceeee dude"];
let wrongGrades = ["Tu ne fais pas le poids" /*Math Random n'est pas de ton côté mdrr*/, "Je lis en toi comme dans un livre ouvert XD", "Tu vas perdre lol", "J'abandonnerais à ta place"]

function mainMenu() {

    console.log("");
    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║                                                        ║');
    console.log('║           BIENVENUE SUR POKEMON BATTLE CARD!           ║');
    console.log('║                JE TE SOUHAITE GOOD GAME!               ║');
    console.log('║                                                        ║');
    console.log('╚════════════════════════════════════════════════════════╝');
    console.log("");

    let userName = prompt("Commences par donner ton pseudo : ");
    console.log("");
    return userName;
}

function promptCard() {
    let choiceOfCard = prompt("A toi de jouer : ");
    return choiceOfCard;
}

function randomNumber(array) {
    let i = Math.floor(Math.random() * (array.length));
    return (array[i]);
}

function versus(myCard, IACard) {
    if (myCard == "eau" && IACard == "feu") {
        return true;
    }
    if (myCard == "feu" && IACard == "plante") {
        return true;
    }
    if (myCard == "plante" && IACard == "eau") {
        return true;
    }
    if (myCard == IACard) {
        return "draw";
    }
    return false;
}


function cardGame() {
    let userName = mainMenu();
    let round = 0;
    let won = 0;
    let lost = 0;
    let draw = 0;
    for (let i = round; i < 3; i++) {
        round++;
        console.log(`Round ${round}`);
        let choiceOfCard = promptCard();

        while (choiceOfCard !== "feu" && choiceOfCard !== "eau" && choiceOfCard !== "plante") {
            console.log(`Carte inexistante. Choisis entre feu, eau ou plante. Again!`);
            choiceOfCard = promptCard()
        }

        let IACard = randomNumber(listOfCard);
        let wonOrLost = versus(choiceOfCard, IACard);
        console.log(`l'adversaire a joué ${IACard}.`);

        if (wonOrLost == true) {
            won++;
            console.log(randomNumber(greatGrades));
            console.log(`${userName} : ${won}   /   IA : ${lost} \n `);
        }

        if (wonOrLost == false) {
            lost++;
            console.log(randomNumber(wrongGrades));
            console.log(`${userName} : ${won}   /   IA : ${lost} \n `);
        }

        if (wonOrLost == "draw") {
            draw++;
            console.log("Egalité");
            console.log(`${userName} : ${won}   /   IA : ${lost} \n `);
        }
    }

    console.log(`${round} rounds / ${won} Victoire(s) / ${lost} Défaite(s) / ${draw} Egalité(s). \n `);

    if (won > lost) {
        return ("Tu as gagné! \n ");
    }

    if (lost > won) {
        return ("Tu as perdu! \n ");
    }

    if (won == lost) {
        let userAnswer = prompt("Try again? o/n : ");

        if (userAnswer == "o") {
            console.log(cardGame());
        }

        if (userAnswer == "n") {
            return ("A plus tard alors! Quelque chose me dit qu'on vas se réaffronter très bientôt. \n ")
        }

    }
    
}

console.log(cardGame());