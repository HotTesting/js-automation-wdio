/// <reference types="webdriverio" />
declare namespace WebdriverIO {
  interface Client<T> {
    /**
     * Wait for element to contain text, wrapper around .waitUntil
     * Declared in webdriverio.conf.js with browser.addCommand
     */
    jsClick(selector: string): WebdriverIO.Client<T>;
  }
}
