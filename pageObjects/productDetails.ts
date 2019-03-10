import { BasePO } from "./base";
export class ProductDetailsPO extends BasePO {
  addToCart(): void {
    $("button.btn-success").click();
    browser.pause(1000); // yes, i know
  }

  getRegularPrice(): number {
    const strPrice = $('del.regular-price').getText()
    const without$ = strPrice.replace('$', '')
    return Number(without$)
  }
}

export const ProductDetails = new ProductDetailsPO();
