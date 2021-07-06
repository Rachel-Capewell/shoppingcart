//customer clicks a button to add an item
let cart = document.querySelectorAll('.addtocart');

//in the absence of storing values this will keep the total in the current pageload
let runningTotal = 0;

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
		addToBasket(products[i]);
	});
}

//if the values were saved to local storage, they could be extracted and added here
document.querySelector('.calculate').addEventListener('click', () => {
	document.querySelector('.total span').textContent =  "£" + (runningTotal/100).toFixed(2);
});

function addToBasket(product){
	//increase incart amount
	product.incart += 1;
	
	// - is this a multibuy?
	if (product.multibuy === 0){
		cost = product.price;
	}else{
		cost = calculatePrice(product);
	}
	
	return calculate(cost);
}

//	if multibuy and multibuy amount achieved, calculate the cost and calculate the previously added cost, work out the difference and add amount
function calculatePrice(product){
	if (product.incart === product.multibuy){
		return product.multiprice - (product.price * (product.multibuy-1));
	}
	return product.price;
}

function calculate(amount) {
	runningTotal = runningTotal + amount;
	document.querySelector('.runningtotal span').textContent = "£" + (runningTotal / 100).toFixed(2);
}





