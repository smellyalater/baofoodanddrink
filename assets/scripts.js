


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




var elementPosition = $('nav').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('.mainpage').addClass('pinned-nav');
        } else {
            $('.mainpage').removeClass('pinned-nav');
        }    
});



/*
on page load, find out how far nav is from top.

on scroll when nav is at top: 0

add class to fix it to top. 
*/


/*
 // fix nav to top on scroll
*/




    // ui.createComponent('product', {
    // 	id: 98350256,
    //     node: document.getElementById('test-product'),
    //     options: {
    //     	product: {
    //     		iframe: true,
    //     		buttonDesination: 'modal',
    //     		order: [
	   //      		'title',
	   //      		'img',
	   //      		'price',
	   //      		'button'
	   //      	], 
	   //      	isButton: true
    //     	},
    //     window: {
    //     	height: 900,
    //     	width: 1300
    //     }
    //     }
    // });






});
