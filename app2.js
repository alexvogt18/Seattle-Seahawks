function footBalldate(){

let now = new Date();

let start = new Date(now.getFullYear(), 0, 0);

let diff = now - start;

let oneDay = 1000 * 60 * 60 * 24;

let day = Math.floor(diff / oneDay);

let footballStart = (228 - day);

document.write(footballStart + ' Days until the first day of Seahawks Pre-Season!');

}

function fanname(){

    let fanname;
    
    let FanName = prompt('Welcome! What is your name?');
    
    document.write(FanName + ' is the biggest Seahawks fan on this site!');
    }

function securitycheck() {
    
    let securitycheck;
    
    let SeahawksAlert = prompt('Would you happen to be a Seahawks fan?');
 
    if (SeahawksAlert.toLowerCase() != 'yes') { 
        alert('Stay Away!')
    }
}

function userSeahawks() {
    
    let userAnswer = confirm('Do you want Superbowls?');

    let url = 'https://invention.si.edu/sites/default/files/lombardi-trophy-purple_0.jpg'

    if (userAnswer) {
        
        let userAnswerNumber = prompt ('How many Superbowls?');
        
        for(let i = 0; i < userAnswerNumber; i++) {
        
        document.write('<img src=' + url + ' id="trophy">');
        }
    }
} 

function  guessingGame(){
    
    let guessingGameYesOrNo = prompt ('Do you want to play a guessing game?');

    while (guessingGameYesOrNo.toLowerCase() == 'yes'){
        
        let correctAnswer = Math.floor(Math.random() * 500) + 1;
        
        let userGuess = prompt ('Please enter a number 1-500');
        
        let numberofGuesses = 11;

        for(let i = 0; i < numberofGuesses; i++){
            
            let guessLeft = numberofGuesses - i;
            
            if(userGuess < correctAnswer) {
            
                userGuess = prompt(guessLeft + ' Guesses left. To Low. Please enter a number 1-500')
                    } 
            else if (userGuess > correctAnswer) {
                userGuess = prompt(guessLeft + ' Guesses left. To High, Please enter a number 1-500');
                    }
            if (userGuess == correctAnswer){
                alert('You got it!');
                break;
            }
        }
        guessingGameYesOrNo = prompt('Do you want to play a number guessing game?')

    }
}