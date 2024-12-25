// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};
 
function filterAndSortProducts(products: Product[]): Product[] {
    products.sort((a, b) => a.price - b.price)

    const uniqueProducts: Product[] = [];
    const seenProduct: Set<string> = new Set(); 

    for (const product of products) {
        if (!seenProduct.has(product.name)) {
            uniqueProducts.push(product);
            seenProduct.add(product.name); 
        }
    }

    return uniqueProducts;
}

module.exports = { filterAndSortProducts }