


// var client = ShopifyBuy.buildClient({
//     apiKey: 'de64b8923163c5037c6ad39507715662',
//     domain: 'drinkbao.myshopify.com',
//     appId: '6'
// });

// var ui = ShopifyBuy.UI.init(client);

var aboutSectionChapterHeight;



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


//define height of cover

//get the height of the chapter contents.
var aboutSectionChapterHeight = $('.about-section .chapter-contents').height();
console.log('about section chapter height is ' + aboutSectionChapterHeight);

//fix cover to top of viewport

// keep 100vh and top 60px until height of contents is met.

// $(window).scroll(function() {
//     if ($(window).scrollTop > aboutSectionChapterHeight) {
//         console.log('winow scrolltop is greater than about section chapter height');
//     }

// });

// then keep 100vh but top becomes height of contents AND top of next cover becomes 60px.

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
