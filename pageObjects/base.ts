export class BasePO {
  isLoaded() {
    throw new Error("isLoaded method is not implemented");
  }

  open(url: string) {
    console.log("Navigating to: ", url);
    browser.url(url);
  }
}
