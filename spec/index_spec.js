const {buddy} = require("../src/index")

describe("Given two musical tones, user should guess how many semetones between those two notes", ()=> {
    it("should randomly print an array of two notes", ()=>{
            expect(buddy.selectNotes()).toBeDefined();
        })
    it("should calculate semitones and return a value", ()=>{
        expect(buddy.checkAnswer(1)).toMatch(/true|false/);
    })
})