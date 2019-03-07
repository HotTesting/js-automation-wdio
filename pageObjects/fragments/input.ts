import { BaseFragment } from "./baseFragment";
export class Input extends BaseFragment {
  type(value: string) {
    this.container.waitForDisplayed();
    this.container.click();
    this.container.clearValue();
    browser.pause(50);
    console.log("Typing into", this.container["selector"], '=>', value);
    this.container.setValue(value);
  }
}
