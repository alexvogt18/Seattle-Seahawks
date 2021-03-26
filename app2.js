let now = new Date();

let start = new Date(now.getFullYear(), 0, 0);

let diff = now - start;

let oneDay = 1000 * 60 * 60 * 24;

let day = Math.floor(diff / oneDay);

let footballStart = (228 - day);

document.write(footballStart + ' Days until the first day of Seahawks Pre-Season!');