//Create two variables, one for the computers choice and one for the humans choice 
let humanChoice = prompt('Do you choose rock, paper or scicors? ');
//Since the computer can't choose one it's own, the program will generate a random choice
let computerChoice = random_choice()
function random_choice(){
    options = ['rock', 'paper', 'scisors']
    choiceIndex = Math.floor((Math.random() * 3) + 0)
    return options[choiceIndex]
}

//Create a function that takes the two choices and compares them
//Then the winner will be printed to the console 