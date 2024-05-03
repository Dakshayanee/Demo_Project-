import{test,expect} from '@playwright/test';
import exp from 'constants';

test('product verify',async ({page}) => {
    await page.goto('https://demoblaze.com/');

    // Click on the first product from the homepage
    await page.locator('#tbodyid > div:nth-child(1)').click();
    // Verify if the product details page is loaded correctly
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=1');
    // Check if the product name, image, and description match the selected product
    await expect(page.locator('#tbodyid > h2')).toHaveText('Samsung galaxy s6');
    await expect(page.locator("//div[@class='item active']//img")).toHaveAttribute('src','imgs/galaxy_s6.jpg');
    await expect(page.locator("div[id='more-information'] p")).toHaveText('The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.');

    await page.waitForTimeout(3000);

})