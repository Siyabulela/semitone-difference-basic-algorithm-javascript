class JamBuddy {
  constructor() {
    (this.noteCircle = [
      `A`,
      `A#`,
      `B`,
      `C`,
      `C#`,
      `D`,
      `D#`,
      `E`,
      `F`,
      `F#`,
      `G`,
      `G#`,
      `Bb`,
      `Db`,
      `Eb`,
      `Gb`,
      `Ab`,
    ]),
      (this.selectedSemi = []);
  }
  shuffle() {
    let newNotes = [...this.noteCircle];
    for (var i = 0; i < newNotes.length; i++) {
      var j = Math.floor(Math.random() * i);
      let temp = newNotes[i];
      newNotes[i] = newNotes[j];
      newNotes[j] = temp;
    }
    return newNotes;
  }
  selectNotes() {
    let newNotes = this.shuffle();
    this.selectedSemi = [];
    this.selectedSemi.push(newNotes[0], newNotes[1]);
    return newNotes.slice(0, 2);
  }
  checkAnswer(userInput) {
    for (var i = 0; i < 2; i++) {
      if (this.selectedSemi[i] == "Ab") {
        this.selectedSemi[i] = "G#";
      } else if (this.selectedSemi[i] == "Bb") {
        this.selectedSemi[i] = "A#";
      } else if (this.selectedSemi[i] == "Db") {
        this.selectedSemi[i] = "C#";
      } else if (this.selectedSemi[i] == "Eb") {
        this.selectedSemi[i] = "D#";
      } else if (this.selectedSemi[i] == "Gb") {
        this.selectedSemi[i] = "F#";
      }
    }
    let returnedNum = Math.abs(
      this.noteCircle.indexOf(this.selectedSemi[0]) -
        this.noteCircle.indexOf(this.selectedSemi[1])
    );
    if (userInput == returnedNum) {
      return true;
    }
    return false;
  }
}
let buddy = new JamBuddy();

function submitAnswer() {
  let x = document.getElementById("num").value;
  let correct = buddy.checkAnswer(x);

  if (correct == true) {
    alert("You got it right. Well Done!");
    location.reload();
  } else alert("Wrong answer! Try again");
}

function showNotes() {
  document.getElementById("demo").innerHTML = buddy.selectNotes();
}
module.exports = { buddy };
