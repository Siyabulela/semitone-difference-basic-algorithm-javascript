class JamBuddy {
  constructor(){
    this.noteCircle = `A A# B C C# D D# E F F# G G#`.split(` `),
    this.selectedSemi = [];
  }
  selectNotes() {
    for (let i = 0; i < 2; i++) {
      this.selectedSemi.push(
        this.noteCircle[Math.floor(Math.random() * this.noteCircle.length)]
      );
    }
    return this.selectedSemi;
  }

  checkAnswer(userInput) {
    let arr = [], returnedNum;
    for (let i = 0; i < this.noteCircle.length; i++) {
      for (let j = 0; j < this.selectedSemi.length; j++) {
        if (this.selectedSemi[j] == this.noteCircle[i]) {
          arr.push(this.noteCircle.indexOf(this.noteCircle[i]));
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