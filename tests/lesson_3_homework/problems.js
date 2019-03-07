// ************************************************************************************
// won't work in case empty array -

let allDuckItems = [];
let res = allDuckItems.every(duck => duck);
console.log(res); // true
expect(allDuckItems.length).not.to.equal(0)

it("should show results in case multiple items matches", function() {
  searchWord("duck");
  expect(browser.getUrl()).to.contain("query=duck");
  expect($$(allDuckItems).every(duck => duck.isDisplayed())).to.equal(true);
});
// ************************************************************************************
const duckPriceArr = $$(allDucks).map(duck =>
  parseInt(duck.getAttribute("data-price"))
);
const duckPriceNewArr = duckPriceArr.slice(0); // copy array
duckPriceNewArr.sort((a, b) => a - b); // price sorting

// ************************************************************************************
it("should show results in case multiple items matches", function() {
  $('input[type="search"]').setValue("duck");
  browser.pause(1000);
  $('input[type="search"]').addValue("Enter");
  browser.pause(1000);
  // same locator on home and search results page. false positive test
  expect($('main [class="col-xs-6 col-sm-4 col-md-3"]').isDisplayed()).to.equal(
    true
  );
  // throw new Error("NOT IMPLEMENTED");
});
