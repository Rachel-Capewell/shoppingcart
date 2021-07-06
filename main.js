//customer clicks a button to add an item
let cart = document.querySelectorAll('.addtocart');


//add the product values these would normally come from a db. Values can be changed more easily here rather than hard coding into the functions
let products = [
	{
		name: 'A',
		price: 50,
		multibuy: 3,
		multiprice: 130,
		incart: 0
	},
	{
		name: 'B',
		price: 30,
		multibuy: 2,
		multiprice: 45,
		incart: 0
	},
	{
		name: 'C',
		price: 20,
		multibuy: 0,
		multiprice: null,
		incart: 0
	},
	{
		name: 'D',
		price: 15,
		multibuy: 0,
		multiprice: null,
		incart: 0
	},
];


for (let i=0; i < cart.length; i++){
	cart[i].addEventListener('click', () => {
		console.log('added to cart');
	});
}


//retrieve the value of the item 
// - is this a multibuy?
// - yes - are their multiple and do they qualify?
//		- yes calculate the cost and calculate the previously added cost, work out the difference and add amount
//		- no add amount
// - no add amount