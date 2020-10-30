let products = [
	{"id": 1, "name": "Laptop Acer", "description": "Descripción del producto", "price": 4500, "selected": false},	
	{"id": 2, "name": "Memoria USB 8GB", "description": "Memoria USB, marca kingston, capacidad 8GB, color azul", "price": 70, "selected": false},
	{"id": 3, "name": "Memoria USB 16GB", "description": "Memoria USB, marca Kingston, capacidad 16GB, color rojo", "price": 100, "selected": false},
	{"id": 4, "name": "Memoria USB 32GB", "description": "Memoria USB, marca Kingston, capacidad 32GB, color verde", "price": 130, "selected": false},
	{"id": 5, "name": "Memoria USB 64GB", "description": "Memoria USB, marca Kingston, capacidad 64GB, color negro", "price": 230, "selected": false},
]
console.log(products);

if(!localStorage.getItem("Products")){
	localStorage.setItem("Products", JSON.stringify(products));
}

const formulario = document.querySelector("#form-product");

if(formulario){
	formulario.addEventListener('submit', function(e){
		e.preventDefault();
		products.push({
			id: products.length+1,
			name: e.target.name.value,
			description: e.target.description.value,
			price: e.target.price.value,
			selected: false
		});
		console.log(products);
		localStorage.setItem("Products", JSON.stringify(products));
		alert('A creado un nuevo producto');
	});
}

const liProducts = JSON.parse(localStorage.getItem("Products")).map(product => {
	return `<li class="item-product p-1">
			<header class="header-product"><h4>${product.name}</h4></header>
			<p>${product.description}</p>
			<footer class="footer-product">
				<p>$ ${new Intl.NumberFormat('en-IN').format(product.price)}</p>
				<div class="">
					<label for="product-${product.id}">Comprar</label>
					<input type="checkbox" id="product-${product.id}" ${(product.selected)?'checked':''}>
				</div>
			</footer>
		</li>`;
}).join('\n');

const containerProducts = document.querySelector('#products-list');
if(containerProducts) containerProducts.innerHTML = liProducts;

