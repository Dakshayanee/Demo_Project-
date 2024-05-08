const{test,expect} =require('@playwright/test');

test('placeOrder', async ({page}) => {
   
    await page.goto('https://demoblaze.com/');

    await page.click('#cartur');

    await page.click("//button[normalize-space()='Place Order']");
    await page.fill("//input[@id='name']",'Pavanol');
    await page.fill("//input[@id='country']",'India');
    await page.fill("//input[@id='city']",'Pune')
    await page.fill("//input[@id='card']","12345")
    await page.fill("//input[@id='month']","May")
    await page.fill("//input[@id='year']","2024")

    await page.click("//button[normalize-space()='Purchase']")

    


    await page.waitForTimeout(3000);
})