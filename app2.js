let now = new Date();

let start = new Date(now.getFullYear(), 0, 0);

let diff = now - start;

let oneDay = 1000 * 60 * 60 * 24;

let day = Math.floor(diff / oneDay);

let footballStart = (228 - day);

document.write(footballStart + ' Days until the first day of Seahawks Pre-Season!');

function fanname(){

    let FanName = prompt('Welcome! What is your name?');
    
    document.write(FanName + ' is the biggest Seahawks fan on this site!');
    }

    function securitycheck() {
    
    let SeahawksAlert = prompt('Would you happen to be a Seahawks fan?');
 
    if (SeahawksAlert.toLowerCase() != 'yes') { 
        alert('Stay Away!')
    }
}