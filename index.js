const swiss_progress_bar = document.getElementById("Swiss-Votes");
const vote_swiss_button = document.getElementById("vote-swiss");
const vote_swiss_num = document.getElementById("Swiss-Votes-Label");
var swiss_votes = 0;
var chadar_votes = 1;

vote_swiss_button.addEventListener('click', () => {
 swiss_votes++;
 swiss_progress_bar.setAttribute("value", `${swiss_votes / chadar_votes}`);
 vote_swiss_num.innerText = `Votes ${swiss_votes / chadar_votes}%`;
 console.log(swiss_votes);
}, {once : true});