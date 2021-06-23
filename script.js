// Array of possible responses for Computer decision
var gameMoves = [
    "r",
    "p",
    "s"
];



// Array for Score with placeholder traits
var score = {
    
    computerWins: 0,
    
    youWins: 0,
    
    tieWins: 0 
}



// Function for catagorizing user input
function playGame() {
    // Asks for user input
    var userMove = window.prompt("What is your move? r, p or s?")
        
    // Generates computer choice per use
    var computerChoice = gameMoves[Math.floor(Math.random()* gameMoves.length)];
        
        // Begins input comparison to determine score
        if (userMove === "r" || userMove === "p" || userMove === "s") {
        
            // Computer picks r... 
            if (computerChoice == "r" && userMove == "s") {
                score.computerWins++;
            }
                if (computerChoice == "r" && userMove == "p") {
                score.youWins++;
                }
            
            // Computer picks p...
            if (computerChoice == "p" && userMove == "r") {
                score.computerWins++;
            }
            
            if (computerChoice == "p" && userMove == "s") {
                score.youWins++;
            }
            
            // Computer picks s...
            if (computerChoice == "s" && userMove == "p") {
                score.computerWins++;
            }
            
            if (computerChoice == "s" && userMove == "r") {
                score.youWins++;
            }
            
            
            // Computer and User choose the same...
            if (computerChoice == userMove) {
                score.tieWins++;
            }
            
    
        } else {
            playGame();
        }
    
        // Displays the score in an alert, \n for new lines within the box
        window.alert("SCORE: \nComputer: " + score.computerWins + "\nYou: " + score.youWins + "\nTies: " + score.tieWins);

    // Repeat everything!
        if (window.confirm("Would you like to play again?")) {
            playGame();
        } else {window.alert("Thanks for playing!")};
}


// Actually runs the game! Will trigger from scratch on refresh
playGame();
