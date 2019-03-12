import { expect } from "chai";
import * as faker from "faker";

describe("Guest", function() {

  it("should be able to buy item", function() {
    browser.url("/rubber-ducks-c-1/red-duck-p-3");
    $("button.btn-success").click();
    browser.pause(1000); // yes i know
    browser.url("/checkout");
    // Filling checkout page
    $('input[name="firstname"]').waitForDisplayed();
    $('input[name="firstname"]').setValue("TestFirstName");
    $('input[name="lastname"]').setValue("TestLastName");
    $('input[name="address1"]').setValue("address line 1");
    $('input[name="address2"]').setValue("address line 2");
    $('input[name="postcode"]').setValue(faker.address.zipCode());
    $('input[name="city"]').setValue("CityName");
    $('input[name="email"]').setValue(faker.internet.email());
    $('input[name="phone"]').setValue(faker.phone.phoneNumber());
    $('button[name="save_customer_details"]').waitForDisplayed();
    $('button[name="save_customer_details"]').click();

    browser.waitUntil(
      () => $('button[name="confirm_order"]').getAttribute("disabled") == null,
      undefined,
      "Confirm order button should become enabled to click"
    );
    $('button[name="confirm_order"]').click();
    // Verifying that we are on confirmation page
    $("h1.title").waitForDisplayed();
    const confirmationText = $("h1.title").getText();

    expect(confirmationText).to.match(
      /Your order #.* is successfully completed!/
    );
    // Thank you for your purchase. An order confirmation email has been sent. We will process your order shortly.
  });
});
