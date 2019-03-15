import * as faker from "faker";

declare const user1;
declare const user2;

describe("_", function() {
  it.skip("low level actions - key press", function() {
    // https://w3c.github.io/webdriver/#keyboard-actions

    browser.url("http://the-internet.herokuapp.com/key_presses");

    browser.pause(1000);
    browser.keys(["Shift"]);
    browser.pause(5000);
    browser.keys(["Tab", "a"]);
    browser.pause(5000);
  });
  it.skip("execute js on page", function() {
    browser.url("/create_account");
    browser.pause(1000);

    const email = faker.internet.email(
      undefined,
      undefined,
      "ip-5236.sunline.net.ua"
    );

    let myjson = JSON.stringify({ firstname: "", lastname: "", email: "" });
    let result = browser.execute(
      function(_email, string) {
        let obj = JSON.parse(string);

        // @ts-ignore
        document.querySelector('input[name="firstname"]').value =
          "TestFirstName";
        // @ts-ignore
        document.querySelector('input[name="lastname"]').value = "TestLastName";
        // @ts-ignore
        document.querySelector('select[name="country_code"]').value = "UA";
        // @ts-ignore
        document
          .querySelector('[name="customer_form"] input[name="email"]')
          .click();
        // @ts-ignore
        document.querySelector(
          '[name="customer_form"] input[name="email"]'
        ).value = _email;
        // @ts-ignore
        document.querySelector('input[name="phone"]').value = "+380441112233";
        // @ts-ignore
        document.querySelector(
          '[name="customer_form"] input[name="password"]'
        ).value = "123456";
        // @ts-ignore
        document.querySelector('input[name="confirmed_password"]').value =
          "123456";
        // @ts-ignore
        document.querySelector('button[name="create_account"]').click();

        // return {'return value'}
      },
      email,
      myjson
    );

    browser.pause(20000);
  });

  it.skip("async execute", function() {
    browser.url("/create_account");
    const result = browser.executeAsync(function(done) {
      // @ts-ignore
      setTimeout(() => {
        // @ts-ignore
        done("ALL DONE!");
        // @ts-ignore
      }, 3000);
    });

    console.log("GOT RESPONSE", result);
  });
  it.skip("js click command", function() {
    browser.addCommand("jsClick", function(selector) {
      browser.execute(function(_selector) {
        // @ts-ignore
        document.querySelector(_selector).click();
      }, selector);
    });

    browser["jsClick"]("div.button");
  });

  it.skip("Multiremote", function() {
    // executed in all multiremote browsers
    browser.url("https://socketio-chat-example.now.sh/");
    user1.pause(1000);
    user2.pause(1000);
    user1.$("input#m").setValue("Hello world!");
    user1.$("button=Send").click();
    user2.$("input#m").setValue("Hello world! 2");
    user2.$("button=Send").click();
    browser.pause(10000); 
    console.log("Messages", $("ul#messages").getText());
  });
});
