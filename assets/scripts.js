// var client = ShopifyBuy.buildClient({
//     apiKey: 'de64b8923163c5037c6ad39507715662',
//     domain: 'drinkbao.myshopify.com',
//     appId: '6'
// });

// var ui = ShopifyBuy.UI.init(client);


$(document).ready(function() {
    // var navOffsetTop;
    // var windowScrollY;

    // /*
    //  fix nav to top on scroll
    // */

    /* Initialize sticky outside the event listener as a cached selector.
     * Also, initialize any needed variables outside the listener for 
     * performance reasons - no variable instantiation is happening inside the listener.
     */

    $(document).ready(function() {
        $("nav").sticky({
            topSpacing: 0
        });
    });
    /* 
     // fix nav to top on scroll
    */










    // ui.createComponent('product', {
    //  id: 98350256,
    //     node: document.getElementById('test-product'),
    //     options: {
    //      product: {
    //          iframe: true,
    //          buttonDesination: 'modal',
    //          order: [
    //              'title',
    //              'img',
    //              'price',
    //              'button'
    //          ], 
    //          isButton: true
    //      },
    //     window: {
    //      height: 900,
    //      width: 1300
    //     }
    //     }
    // });




});