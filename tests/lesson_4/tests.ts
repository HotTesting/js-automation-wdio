import { expect } from "chai";
// "Registration" + "successful" + "should be successful";
describe("Registration @ALL", function() {
  this.retries(3); 

  it("should be successful", function() {
    this.timeout(340000);
    this.retries(3);
    this.slow(10000);
    console.log("DONE: should be successful");
  });

  it("can be done via Facebook", function() {
    console.log("DONE: can be done via Facebook");
  });

  it("should be failed for existing email C1232", function() {
    console.log("DONE: should be failed for existing email");
  });

  it("has email as required field", function() {
    console.log("DONE: has email as required field");
  });
});
