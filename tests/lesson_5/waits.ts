import { expect } from "chai";
import { waitUntilContainingText, textIsPresent } from "./conditions";


describe("Waits", function() {
  it("should be successful", function() {
    browser.url("/");
    browser.setTimeout({
      implicit: 2000
    });

    let res = $("nonexist").isDisplayed();
    expect(res).to.equal(true);
  });

  it("explicit testing non-existing elements", function() {
    browser.url("/");

    // $('div').waitForDisplayed(15000, false, 'Expected div to became visible')
    // $('div').waitForEnabled()
    // $('div').waitForExist()

    browser.waitUntil(
      function() {
        return !$(".loader").isDisplayed() && $("div").isDisplayed();
      },
      undefined,
      undefined,
      100
    );
  });

  it("explicit testing non-existing elements", function() {
    browser.url("/");
    waitUntilContainingText({ elem: "div", text: "some text" });

    let cond = textIsPresent('div', 'some text')
    browser.waitUntil(cond)
  });
});

