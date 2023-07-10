// Variables
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choicesBtn = document.querySelectorAll('.choiceBtn');
const newItem = document.querySelector('.tableBody');
const resetBtn = document.getElementById('resetBtn');

let player;
let computer;
let result;


// Event listener will display the Player/Computer's choice, compare choices
// and then call a function displaying the winner;
choicesBtn.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `${player}`;
    computerText.textContent = `${computer}`;
    checkWinner();
}))


// Computer randomly choose between 1-3, and there's a Switch case to attach the
// to a string
function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissor'
            break;
    }
}


// function will display the winner and, based on the string, it will create row/cell
// in a table and display the points 
function checkWinner(){
    if(player == 'Rock'){
        if(computer == 'Paper'){
            resultText.textContent = 'Computer win!';
        } else if(computer == 'Scissor'){
            resultText.textContent = 'Player win!'
        } else {
            resultText.textContent = 'Draw!'
        }
    } else if(player == 'Paper'){
        if(computer == 'Rock'){
            resultText.textContent = 'Player win!';
        } else if(computer == 'Scissor'){
            resultText.textContent = 'Computer win!'
        } else {
            resultText.textContent = 'Draw!'
        }
    } else if(player == 'Scissor'){
        if(computer == 'Rock'){
            resultText.textContent = 'Computer win!';
        } else if(computer == 'Paper'){
            resultText.textContent = 'Player win!'
        } else {
            resultText.textContent = 'Draw!'
        }
    }

    if(resultText.textContent == 'Computer win!'){
        let row = newItem.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = '0';
        cell2.innerHTML = '1';
    } else if(resultText.textContent == 'Player win!'){
        let row = newItem.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = '1';
        cell2.innerHTML = '0';
    } else {
        let row = newItem.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = '0';
        cell2.innerHTML = '0';
    }
}

// Add Event listener to reset the game, clearing all the variables
resetBtn.addEventListener('click', () => {
    playerText.textContent = '';
    computerText.textContent = '';
    resultText.textContent = '';
    newItem.textContent = '';
})