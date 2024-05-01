const{test,expect}=require('@playwright/test')

test('home page', async ({page}) => {
     
    await page.goto('https://demoblaze.com/');

    const pageTitle=await page.title();
    console.log('page title is',pageTitle)

    await expect(page).toHaveTitle('STORE');

    const pageUrl=await page.url();
    console.log('page url is',pageUrl);

   //to validate url
   await expect(page).toHaveURL('https://demoblaze.com/');

   await  page.close();
})

test('logo',async({page}) => {

    await page.goto('https://demoblaze.com/');

    const logo=await page.locator("//a[@id='nava']");
     await expect(logo).toBeVisible(); 
     await expect(logo).toHaveText('PRODUCT STORE')
     
})

test.only('category',async ({page}) => {
    await page.goto('https://demoblaze.com/');

    const cat=await page.$$("(//div[@class='list-group'])[1]")
    for(const category of cat){
        console.log(await category.textContent());
        await category.click()
        const products=await page.$$("(//div[@id='tbodyid'])[1]")
        for(const product of products){
            console.log(product.textContent())
        }
    }



//     await page.locator("//div[@id='contcont']//a[2]").click();
//     const products=await page.$$("//div[@id='tbodyid']");
//     for(const product of products){
//         console.log("no of phones are = " , await product.textContent());
//     }

//    await page.waitForTimeout(3000)  
})