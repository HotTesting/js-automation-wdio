export class BaseFragment {
  protected _container: () => WebdriverIO.Element;

  get container(): WebdriverIO.Element {
    return this._container();
  }

  /**
   * @param _container function that should return element on the page
   */
  constructor(_container: () => WebdriverIO.Element) {
    this._container = _container;
  }
}
