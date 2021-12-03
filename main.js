//Create two variables, one for the computers choice and one for the humans choice 
let humanChoice = prompt('Do you choose rock, paper or scicors? ');
//Since the computer can't choose one it's own, the program will generate a random choice
let computerChoice = random_choice()
//Calling the function that compares the two choices, and prints the winner
compareChoices(humanChoice, computerChoice)

function random_choice(){
    options = ['rock', 'paper', 'scisors']
    choiceIndex = Math.floor((Math.random() * 3) + 0)
    return options[choiceIndex]
}

//Create a function that takes the two choices and compares them
//Then the winner will be printed to the console 
function compareChoices(human, computer) {
    let winner; 
    if (human === computer) {
        winner = 'nobody, its a draw'
    }
    else if (human === 'scisors') {
        if (computer === 'rock') {
            winner = 'computer'
        } else {
            winner = 'human'
        }
    } else if (human === 'rock') {
        if (computer === 'paper') {
            winner = 'computer'
        } else {
            winner = 'human'
        }
    } else if (human == 'paper') {
        if (computer === 'scisors') {
            winner = 'computer'
        } else {
            winner = 'human'
        }
    } else {
        console.log('Not a valid choice!')
    }
    if (winner != undefined) {
        show_winner(winner)
    }
         
}   

function show_winner (winner) {
    console.log('Human chose', humanChoice)
    console.log('Computer chose', computerChoice)
    console.log('The winner is:', winner)
}