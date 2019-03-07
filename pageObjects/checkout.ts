import { BasePO } from "./base";
import { CustomerDetails } from "./fragments/customerDetails";

export class CheckoutPO extends BasePO {
  public customerDetails: CustomerDetails;

  constructor() {
    super();
    this.customerDetails = new CustomerDetails(
      "#box-checkout-customer .billing-address"
    );
  }

  open() {
    super.open("/checkout");
  }

  saveChanges(): any {
    const saveCustomerBtn = $('button[name="save_customer_details"]');
    browser.waitUntil(
      function() {
        return saveCustomerBtn.getAttribute("disabled") == null;
      },
      undefined,
      "Save changes button expected to become enabled to click"
    );

    saveCustomerBtn.click();
  }

  confirmOrder(): any {
    const confirmBtn = $('button[name="confirm_order"]');

    browser.waitUntil(
      function() {
        return confirmBtn.getAttribute("disabled") == null;
      },
      undefined,
      "Confirm order button expected to become enabled to click"
    );
    confirmBtn.click();
  }
}

export const Checkout = new CheckoutPO();
