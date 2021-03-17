const submitBtn = document.querySelector('.submit-btn');
const playAgainBtn = document.querySelector('.again-btn');
const again = document.querySelector('.again');
const formDiv = document.querySelector('.form');
const previous_guess = document.querySelector('.previous');
const result_status = document.querySelector('.result-status');
const comment = document.querySelector('.comment');

submitBtn.addEventListener('click', result);
let previousGuesses = [];
let guessedNumber = Math.floor(Math.random() * 100) + 1;

function result() {
    let inputEl = document.querySelector('#number');
    let number = inputEl.value;
    previousGuesses.push(number)
    if (previousGuesses.length < 10) {
        if (number == guessedNumber) {
            previous_guess.textContent = ` Previous guesses: ${previousGuesses}`;
            result_status.textContent = "Congratulations! You've guessed correctly";
            result_status.classList.remove('wrong');
            result_status.classList.add('success');
            formDiv.classList.add('vanish')
            inputEl.value = '';
            comment.textContent = `Win! Correct guess is ${number}`;
            playAgain();

        } else {
            previous_guess.textContent = ` Previous guesses: ${previousGuesses}`;
            result_status.textContent = "Wrong! guess again";
            result_status.classList.remove('success');
            result_status.classList.add('wrong');
            inputEl.value = '';
            if (number > guessedNumber) {
                comment.textContent = "Guess is too high";
            } else {
                comment.textContent = "Guess is too low";
            }
        }
    } else {
        inputEl.value = '';
        result_status.textContent = '';
        formDiv.classList.add('vanish')
        result_status.classList.remove('wrong');
        comment.textContent = "Game Over!";
        playAgain();
    }

}

function playAgain() {
    previous_guess.textContent = '';
    previousGuesses = [];
    again.classList.remove('again');
    playAgainBtn.addEventListener('click', play);
}

function play() {
    result_status.textContent = '';
    formDiv.classList.remove('vanish')
    result_status.classList.remove('wrong');
    result_status.classList.remove('success');
    again.classList.add('again');
    comment.textContent = "";
    guessedNumber = Math.floor(Math.random() * 100) + 1;
    submitBtn.addEventListener('click', result);
}