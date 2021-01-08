const { buddy } = require("../src/js/script");
const { JSDOM } = require("jsdom");

describe("Given two musical tones, user should guess how many semetones between those two notes", () => {
  it("should randomly print an array of two notes", () => {
    expect(buddy.selectNotes()).toBeDefined();
  });
});
describe(`index.html`, function () {
  let browser;

  beforeEach(function (done) {
    JSDOM.fromFile(`./src/index.html`).then(function (res) {
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
