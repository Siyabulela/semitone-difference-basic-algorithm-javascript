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
      (this.selectedSemi = []),
      (this.answer = 0),
      (this.streak = 0);
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
    this.answer = returnedNum;
    if (userInput == returnedNum) {
      return true;
    }
    return false;
  }
  difference() {
    this.checkAnswer();
    return this.answer;
  }
}
let buddy = new JamBuddy();

function submitAnswer() {
  let x = document.getElementById("num").value;
  let correct = buddy.checkAnswer(x);
  document.getElementById(`streakDefault`).style.visibility = `hidden`;

  if (correct == true) {
    buddy.streak++;
    document.getElementById("explanation").innerHTML = revealAnswer();
    alert("You got it right. Well Done!");
  } else {
    alert("Wrong answer! Try again");
    buddy.streak = 0;
  }
  document.getElementById("streak").innerHTML = `Steak: ` + buddy.streak;
}
function showNotes() {
  document.getElementById("demo").innerHTML = buddy.selectNotes();
  document.getElementById("diff").innerHTML = ``;
  document.getElementById("explanation").innerHTML = ``;
}
function revealAnswer() {
  let notes = [
    `A`,
    `A#/Bb`,
    `B`,
    `C`,
    `C#/Db`,
    `D`,
    `D#/Eb`,
    `E`,
    `F`,
    `F#/Gb`,
    `G`,
    `G#/Ab`,
  ];
  let x = document.getElementById("demo").innerHTML.split(`,`);
  let str = "";

  for (let i = 0; i < 2; i++) {
    if (x[i] == "Ab" || x[i] == "G#") {
      x[i] = "G#/Ab";
    } else if (x[i] == "Bb" || x[i] == "A#") {
      x[i] = "A#/Bb";
    } else if (x[i] == "Db" || x[i] == "C#") {
      x[i] = "C#/Db";
    } else if (x[i] == "Eb" || x[i] == "D#") {
      x[i] = "D#/Eb";
    } else if (x[i] == "Gb" || x[i] == "F#") {
      x[i] = "F#/Gb";
    }
  }

  for (let i = 0; i < notes.length; i++) {
    if (x[0] === notes[i]) {
      str = str + notes[i].fontcolor(`red`) + ` | `;
    } else if (x[1] === notes[i]) {
      str = str + notes[i].fontcolor(`red`) + ` | `;
    } else {
      str = str + notes[i] + ` | `;
    }
  }
  document.getElementById("explanation").innerHTML = str;
  document.getElementById("diff").innerHTML =
    `Final Answer: ` + buddy.difference();
  return str;
}
module.exports = { buddy, submitAnswer, showNotes, revealAnswer };

  if (correct == true) {
    alert("You got it right. Well Done!");
    location.reload();
  } else alert("Wrong answer! Try again");
}

function showNotes() {
  document.getElementById("demo").innerHTML = buddy.selectNotes();
}
module.exports = { buddy };
