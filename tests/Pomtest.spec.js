import{test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { Cart } from '../Pages/Cart';

test('test' , async ({page}) => {

    //login
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123')
    await page.waitForTimeout(3000)

    //home
    const home=new HomePage(page);
    await home.addProductToCart('Nexus 6')
    await page.waitForTimeout(3000)
    await home.gotoCart();
        
    //cart
    const cart=new Cart(page);
    await page.waitForTimeout(3000)
    const status=await cart.checkProductsInCart('Nexus 6');
    expect(await status).toBe(true);

    
    
})