describe("_", function() {
    it("low level actions - key press", function() {
      browser.url("http://the-internet.herokuapp.com/key_presses");
  
      browser.pause(1000);
      browser.keys(["Shift"]);
      browser.keys(["Tab", "a"]);
      browser.pause(5000);
    });
  });