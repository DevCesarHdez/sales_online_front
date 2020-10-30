let products;
function dataProducts(){
	fetch("../data/data.json").then(res => res.json()).then(data => {
		/*products.map(product => {
		});*/
		products = data;
		return products;
	});
}

console.log(dataProducts());
