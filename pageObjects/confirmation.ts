import { BasePO } from "./base";
export class ConfirmationPO extends BasePO {
  private titleText: string = "h1.title";

  isLoaded() {
    try {
      $(this.titleText).waitForDisplayed();
      return true;
    } catch (err) {
      return false;
    }
  }
  confirmationTitle(): string {
    $(this.titleText).waitForDisplayed(5000);
    return $(this.titleText).getText();
  }
}

export const Confirmation = new ConfirmationPO();
