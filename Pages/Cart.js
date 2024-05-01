exports.Cart=class Cart{

    constructor(page){
        this.page=page
        this.noOfProducts='//tbody[@id="tbodyid"]/tr/td[2]'
     }

     async checkProductsInCart(productName){
        const ProductsInCart=await this.page.$$(this.noOfProducts)
        for(const product of ProductsInCart){
            console.log(await product.textContent())
            if(productName === await product.textContent()){
                return true;
                break;
            }
            
        }
     }

}