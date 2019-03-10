class ShoppingCart {
    get itemsInCart () {
        return $$('table.items tbody tr')
    }

    getQuantityFor(indx) {

    }
    setQuatityFor(indx) {

    }
    removeItemFor(indx) {
        this.itemsInCart[indx].$('button[name="remove_cart_item"]').click()
    }
}