describe("WDIO", function() {
  it.skip("Searching elements", function() {
    browser.url("/about-us-i-1");
    try {
        let body = $("body");
    } catch (err) {
        
    }

    // console.log(body.getText());

    let paragraphs = $$("p");
    paragraphs.forEach(function(p) {
      console.log(p.getText());
    });


    let ducks = $('#box-recently-viewed-products .products').$$('div.col-xs-3')

    ducks.filter(duck=> {
        return duck.$('a').getAttribute('title') == 'Yellow Duck'
    })


    $('#box-recently-viewed-products').$('.products').$$('div.col-xs-3')

    let container = $('block')
    let title = container.$('.title')
    let body = container.$('.body')


    // Search results

    let products = $$('.product')
    let name = '.name'
    let price = '.regular-price'
    let yellowDuck = products.filter(product=> product.$('.name').getText() == 'Yellow Duck')[0]

    console.log('Duck has name:', yellowDuck.$(name).getText(), ' and price', yellowDuck.$(price).getText())

  });
});


// class SearchResult {
//     private name
//     private price
//     constructor(container) {
//         this.name = container.$('.name')
//         this.price = container.$('.regular-price')
//     }

//     getPrice() {
//         return this.price.getText()
//     }
//     getName() {
//         return this.name.getText()
//     }
// }


// let products = $$('.product')

// let firstSearchResult = new SearchResult(products[0])

// firstSearchResult.getName()
// firstSearchResult.getPrice()