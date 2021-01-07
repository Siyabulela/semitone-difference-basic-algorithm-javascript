let noteCircle = `A A# B C C# D D# E F F# G G#`.split(` `),
  arr = [],
  returnedNum,
  selectedSemi = [];

class JamBuddy {
  selectNotes() {
    for (let i = 0; i < 2; i++) {
      selectedSemi.push(
        noteCircle[Math.floor(Math.random() * noteCircle.length)]
      );
    }
    return selectedSemi;
  }

  checkAnswer(userInput) {
    for (let i = 0; i < noteCircle.length; i++) {
      for (let j = 0; j < selectedSemi.length; j++) {
        if (selectedSemi[j] == noteCircle[i]) {
          arr.push(noteCircle.indexOf(noteCircle[i]));
        }
      }
    }
    returnedNum = Math.abs(arr[0] - arr[1]);

    if (userInput == returnedNum) {
      return true;
    }
    return false;
  }
}
let buddy = new JamBuddy();
let notes = buddy.selectNotes();

function myFunction() {
  let x = document.getElementById("num").value;
  correct = buddy.checkAnswer(x);

  if (correct == true) {
    alert("You got it right. Well Done!");
    location.reload();
  } else alert("Wrong answer! Try again");
}
module.exports = { buddy };