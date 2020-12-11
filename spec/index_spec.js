const { buddy } = require("../src/index");

describe("Given two musical tones, user should guess how many semetones between those two notes", () => {
  it("should randomly print an array of two notes", () => {
    expect(buddy.selectNotes()).toBeDefined();
  });
  it("should compare user input to semitones returned and return true if they match, or false if they don't match", () => {
    expect(buddy.checkAnswer(1)).toMatch(/true|false/);
  });
});
