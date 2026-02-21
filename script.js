async function getInfo() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const productsDiv = document.querySelector('.wrapper');

        data.products.map(product => {
            productsDiv.innerHTML += `
                <div class="card" style="border:1px solid black; margin:10px; padding:10px;">
                <img src="${product.images[0]}" alt="${product.title}" style="width:100px; height:100px;">
                    <h3>${product.title}</h3>
                    <p>Narxi: $${product.price}</p>
                    <p>${product.description}</p>
                </div>
            `;
        });

    } catch (error) {
        console.log(error);
    } finally {
        console.log('loading finished');
    }
}

getInfo();