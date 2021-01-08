class JamBuddy {
  constructor() {
    (this.noteCircle = `A A# B C C# D D# E F F# G G#`.split(` `)),
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
    newNotes = newNotes.sort((a, b) => a - b);
    this.selectedSemi.push(newNotes[0], newNotes[1]);
    return newNotes.slice(0, 2);
  }

  checkAnswer(userInput) {
    let arr = [],
      returnedNum;
    let newData = document.getElementById("demo").innerHTML;
    newData = newData.split(",");

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
