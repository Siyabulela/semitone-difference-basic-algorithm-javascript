const { buddy , submitAnswer, showNotes, revealAnswer } = require("../src/script");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf-8");
global.document = new JSDOM(html).window.document;
let notes = buddy.selectNotes();

describe("Given two musical tones, user should guess how many semetones between those two notes", () => {
  it("should check if checkAnswer function exist", () => {
    expect(buddy.checkAnswer).toBeDefined();
  });
  it("should check if checkAnswer function exist", () => {
    expect(buddy.selectNotes).toBeDefined();
  });
  it("should check if shuffle function exist", () => {
    expect(buddy.selectNotes).toBeDefined();
  });
  it("should check if submitAnswer function exist", () => {
    expect(submitAnswer).toBeDefined();
  });
  it("should check if showNotes function exist", () => {
    expect(showNotes).toBeDefined();
  });
  it("should check if reveal function exist", () => {
    expect(revealAnswer).toBeDefined();
  });
  it("should compare user input to semitones returned and return true if they match, or false if they don't match", () => {
    expect(buddy.checkAnswer(1)).toMatch(/true|false/);
    expect(typeof buddy.checkAnswer(1)).toBe("boolean");
  });
  it("Should expect output of the selected notes to an array that contains 2 notes", () => {
    expect(Array.isArray(notes)).toBeTruthy();
    expect(notes.length).toBe(2);
  });
  it("should handle normal notes and output either true or false", () => {
    buddy.selectedSemi = ["A", "G"];
    expect(buddy.checkAnswer(10)).toBeTruthy();
    expect(buddy.checkAnswer(8)).toBeFalsy();
  });
  it("should handle flats and sharps notes and output either true or false", () => {
    buddy.selectedSemi = ["A#", "Db"];
    expect(buddy.checkAnswer(3)).toBeTruthy();
    expect(buddy.checkAnswer(6)).toBeFalsy();
  });
});

describe(`index.html`, function () {
  let browser;

  beforeEach(function (done) {
    JSDOM.fromFile(`index.html`).then(function (res) {
      browser = res;
      done();
    });
  });

  afterEach(function () {
    browser.window.close();
  });

  it(`should have </div> element`, function () {
    let div = browser.window.document.querySelector(`div`);
    expect(div).not.toBe(null);
  });
  it(`should have </script> element`, function () {
    let script = browser.window.document.querySelector(`script`);
    expect(script).not.toBe(null);
  });
});
