import * as faker from "faker";
import { expect } from "chai";

describe("Registration", function() {
  it("should be successful", function() {
    browser.url("/create_account");
    $('input[name="firstname"]').setValue("TestFirstName");
    $('input[name="lastname"]').setValue("TestLastName");
    $('select[name="country_code"]').selectByAttribute("value", "UA");
    const email = faker.internet.email(
      undefined,
      undefined,
      "ip-5236.sunline.net.ua"
    );
    console.log("Email will be used", email);
    $('[name="customer_form"] input[name="email"]').click();
    browser.pause(200);
    $('[name="customer_form"] input[name="email"]').setValue(email);
    $('input[name="phone"]').setValue("+380441112233");
    $('[name="customer_form"] input[name="password"]').setValue("123456");
    $('input[name="confirmed_password"]').setValue("123456");
    $('button[name="create_account"]').click();
    browser.pause(1500);
    browser.waitUntil(function () {
      // @ts-ignore
      return !browser.getUrl().includes("create_account");
    })
    // expect(browser.getUrl()).not.to.contain("create_account");
    expect($(".alert.alert-success").isDisplayed()).to.equal(
      true,
      "Expected Alert to be visible, but it doesnt"
    );
    const text = $(".alert.alert-success").getText();
    expect(text).to.contain("Your customer account has been created.");
  });
});
