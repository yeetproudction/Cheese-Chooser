const swiss_progress_bar = document.getElementById("Swiss-Votes");
const vote_swiss_button = document.getElementById("vote-swiss");
const vote_swiss_num = document.getElementById("Swiss-Votes-Label");
const chader_progress_bar = document.getElementById("Cheader-Votes");
const vote_chader_button = document.getElementById("vote-Cheader");
const chader_swiss_num = document.getElementById("Cheader-Votes-Label");
var hasVoted = false;
var swiss_votes = 0;
var chadar_votes = 1;

vote_swiss_button.addEventListener('click', () => {
 if(hasVoted == false) {
  swiss_votes++;
  swiss_progress_bar.setAttribute("value", `${swiss_votes / chadar_votes}`);
  vote_swiss_num.innerText = `Votes ${swiss_votes / chadar_votes}%`;
  console.log(swiss_votes);
  hasVoted = true;
 }
});

vote_chader_button.addEventListener('click', () => {
 if(hasVoted == false) {
  swiss_votes++;
  chader_progress_bar.setAttribute("value", `${chadar_votes / swiss_votes}`);
  chader_swiss_num.innerText = `Votes ${chadar_votes / swiss_votes}%`;
  console.log(chadar_votes);
  hasVoted = true;
 }
});