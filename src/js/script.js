class JamBuddy {
  constructor() {
    (this.noteCircle = [
      `A`,
      [`A#`, `Bb`],
      `B`,
      `C`,
      [`C#`, `Db`],
      `D`,
      [`D#`, `Eb`],
      `E`,
      `F`,
      [`F#`, `Gb`],
      `G`,
      [`G#`, `Ab`],
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
    let newNotes = this.shuffle(),
      index = 0;
    newNotes = newNotes.sort((a, b) => a - b);

    if (newNotes[0][1] != undefined) {
      index = this.noteCircle.indexOf(newNotes[0]);
      newNotes[0] = newNotes[0][Math.floor(Math.random() * 2)];
      this.noteCircle[index] = newNotes[0];
    }
    if (newNotes[1][1] != undefined) {
      index = this.noteCircle.indexOf(newNotes[1]);
      newNotes[1] = newNotes[1][Math.floor(Math.random() * 2)];
      this.noteCircle[index] = newNotes[1];
    }

    this.selectedSemi.push(newNotes[0], newNotes[1]);
    return newNotes.slice(0, 2);
  }
  checkAnswer(userInput) {
    let returnedNum,
      newData = document.getElementById("demo").innerHTML;

    returnedNum = Math.abs(
      this.noteCircle.indexOf(newData[0]) - this.noteCircle.indexOf(newData[1])
    );
    if (userInput == returnedNum) {
      return true;
    }
    return false;
  }
}
let buddy = new JamBuddy();

function myFunction() {
  let x = document.getElementById("num").value;
  correct = buddy.checkAnswer(x);

  if (correct == true) {
    alert("You got it right. Well Done!");
    location.reload();
  } else alert("Wrong answer! Try again");
}

function showNotes() {
  document.getElementById("demo").innerHTML = buddy.selectNotes();
}
module.exports = { buddy };
