var noteCircle = `A A# B C C# D D# E F F# G G#`.split(` `);
var arr = [],
  returnedNum,
  selectedSemi = [];

class JamBuddy {
  selectNotes() {
    for (var i = 0; i < 2; i++) {
      selectedSemi.push(
        noteCircle[Math.floor(Math.random() * noteCircle.length)]
      );
    }
    return selectedSemi;
  }

  checkAnswer(userInput) {
    for (var i = 0; i < noteCircle.length; i++) {
      for (var j = 0; j < selectedSemi.length; j++) {
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
console.log(notes);

let correct = buddy.checkAnswer(1);
console.log(correct);

correct = buddy.checkAnswer(2);
console.log(correct);

module.exports = { buddy };
