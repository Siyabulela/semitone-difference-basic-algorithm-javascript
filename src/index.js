class JamBuddy {
  constructor() {
    this.noteCircle = [
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
    ],
      this.selectedSemi = []
  }
  selectNotes() {
    let index = 0;
    for (let i = 0; i < 2; i++) {
      this.selectedSemi.push(this.noteCircle[Math.floor(Math.random() * this.noteCircle.length)]);
    }
    if (this.selectedSemi[0][1] != undefined) {
      index = this.noteCircle.indexOf(this.selectedSemi[0])
      this.selectedSemi[0] = this.selectedSemi[0][Math.floor(Math.random() * 2)];
      this.noteCircle[index] = this.selectedSemi[0]
    }
    if (this.selectedSemi[1][1] != undefined) {
      index = this.noteCircle.indexOf(this.selectedSemi[1])
      this.selectedSemi[1] = this.selectedSemi[1][Math.floor(Math.random() * 2)];
      this.noteCircle[index] = this.selectedSemi[1]
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
module.exports = { JamBuddy };