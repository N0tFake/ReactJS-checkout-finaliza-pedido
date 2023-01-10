export default class Order {
    constructor(products=[], endPrice=0, status="open"){
        this.products = products;
        this.endPrice = endPrice;
        this.status = status;
    }

    addProduct(product){
        this.products.push(product);
        this.#setEndPrice(product.price, product.quant)
    }

    putProduct(id){
        const product = this.products.find(item => item.id == id)
        console.log(product)
        product.quant += 1
        this.#setEndPrice(product.price, product.quant)
        console.log(this.products, this.endPrice)
    }

    #setEndPrice(price, quantity){
        let total = 0
        for(let i of this.products){
            total += i.price * i.quant
        }
        this.endPrice = total    
    }


}