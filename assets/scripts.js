// var client = ShopifyBuy.buildClient({
//     apiKey: 'de64b8923163c5037c6ad39507715662',
//     domain: 'drinkbao.myshopify.com',
//     appId: '6'
// });

// var ui = ShopifyBuy.UI.init(client);



$('document').ready(function() {

    /*
     fix nav to top on scroll
    */
    function fixNavToTopOfViewport() {
        // Check the initial Poistion of the Sticky Header
        var pinnedNav = $('nav').offset().top;


        $(window).scroll(function() {
            if ($(window).scrollTop() > pinnedNav) {
                $('body').addClass('pinned-nav');
                // $('#stickyalias').css('display', 'block');
            } else {
                $('body').removeClass('pinned-nav');
                // $('#stickyalias').css('display', 'none');
            }
        // console.log(pinnedNav)
        });
    }

    fixNavToTopOfViewport();









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




    $(window).resize(function() {
        fixNavToTopOfViewport();
    });

});
