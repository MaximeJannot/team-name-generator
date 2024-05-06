const generatorBtn = document.getElementById("generator");
const generatedName = document.getElementById("generated-name");
const playerA = document.getElementById("player1");
const playerB = document.getElementById("player2");
const playerC = document.getElementById("player3");
const playerD = document.getElementById("player4");

const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

function syllabify(words) {
    return words.match(syllableRegex);
} 

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function majFirstLetter(a) {
  return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
}

generatorBtn.addEventListener("click", () => {
	const valuePlayerA = playerA.value
	const valuePlayerB = playerB.value
	const valuePlayerC = playerC.value
	const valuePlayerD = playerD.value

	const arrayPlayers = [valuePlayerA, valuePlayerB, valuePlayerC, valuePlayerD].map(syllabify);

	shuffle(arrayPlayers);
	shuffle(arrayPlayers[0]);
	shuffle(arrayPlayers[1]);
	shuffle(arrayPlayers[2]);
	shuffle(arrayPlayers[3]);

	const SyllableA = arrayPlayers[0][0].toLowerCase();
	const SyllableB = arrayPlayers[1][0].toLowerCase();
	const SyllableC = arrayPlayers[2][0].toLowerCase();
	const SyllableD = arrayPlayers[3][0].toLowerCase();

	generatedName.innerHTML = "<p>" + majFirstLetter(SyllableA) + SyllableB + SyllableC + SyllableD + "</p>"
});