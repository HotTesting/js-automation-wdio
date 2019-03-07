import { BaseFragment } from "./baseFragment";
export class Dropdown extends BaseFragment {
  selectByValueAttribute(value: string) {
    this.container.waitForDisplayed();
    console.log(
      "Selecting dropdown option",
      this.container["selector"],
      "by value",
      value
    );
    this.container.selectByAttribute("value", value);
  }
}
