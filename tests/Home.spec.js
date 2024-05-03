const{test,expect}=require('@playwright/test')

test.only('home page', async ({page}) => {
     
    await page.goto('https://demoblaze.com/');

    const pageTitle=await page.title();
    console.log('page title is',pageTitle)

    await expect(page).toHaveTitle('STORE');

    const pageUrl=await page.url();
    console.log('page url is',pageUrl);

   //to validate url
   await expect(page).toHaveURL('https://demoblaze.com/');

   //Verify if all the elements like header, footer, and main content are displayed correctly
   await expect(page.locator("//li[@class='nav-item active']//a[@class='nav-link']")).toBeVisible();
   await expect(page.locator("//a[normalize-space()='Contact']")).toBeVisible();
   await expect(page.locator("//a[@id='cartur']")).toBeVisible();
   await expect(page.locator("//div[@id='footc']")).toBeVisible();
   await  page.close();
})

test('logo',async({page}) => {

    await page.goto('https://demoblaze.com/');

    const logo=await page.locator("//a[@id='nava']");
     await expect(logo).toBeVisible(); 
     await expect(logo).toHaveText('PRODUCT STORE')
     
})


test('category',async ({page}) => {
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