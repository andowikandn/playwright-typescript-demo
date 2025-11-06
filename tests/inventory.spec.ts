import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { InventoryPage } from '../pages/inventory';
// import { allure } from 'allure-playwright';
import { USERNAME_STANDARD, PASSWORD } from '../utils/env';

test.describe('Inventory Products', () => {
    test('Tap in text backpack', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.tapTextBackpack();
        await inventoryPage.viewBackpack();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('View detail backpack product', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('View detail backpack product', {body: screenshot, contentType: 'image/png',});
    });

    test('Tap in image backpack', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.tapImageBackpack();
        await inventoryPage.viewBackpack();
    });

    test('Tap in image jacket', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.tapImageJacket();
        await inventoryPage.viewJacket();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('View detail jacket product', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('View detail jacket product', {body: screenshot, contentType: 'image/png',});
    });

    test('Tap in text jacket', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.tapTextJacket();
        await inventoryPage.viewJacket();
    });

    test('Tap in text jacket then back to products', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.tapTextJacket();
        await inventoryPage.viewJacket();
        await inventoryPage.tapBacktoProducts();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('After view jacket then back to products', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('After view jacket then back to products', {body: screenshot, contentType: 'image/png',});
    });

    test('Add to cart backpack and jacket', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.verifyViewCart(2);

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Verify cart badge is value 2', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Verify cart badge is value 2', {body: screenshot, contentType: 'image/png',});
    });

    test('Add to cart then continue shopping', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.verifyViewCart(2);
        await inventoryPage.tapCartBadge();
        await inventoryPage.tapContinueShopping();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Verify back to dashboard products', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Verify back to dashboard products', {body: screenshot, contentType: 'image/png',});
    });

    test('Add to cart then remove one cart jacket', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.removeJacket();
        await inventoryPage.verifyViewCart(1);

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Verify cart badge is value 1', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Verify cart badge is value 1', {body: screenshot, contentType: 'image/png',});
    });

    test('Add to cart then remove cart', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.removeBackpack();
        await inventoryPage.tapCartBadge();
        await inventoryPage.removeJacketinDetail();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Verify cart badge is value empty', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Verify cart badge is value empty', {body: screenshot, contentType: 'image/png',});
    });

    test('Add to cart then tap cart badge', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.removeJacket();
        await inventoryPage.tapCartBadge();
        await inventoryPage.verifyCartPage();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Verify direct to cart page', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Verify direct to cart page', {body: screenshot, contentType: 'image/png',});
    });
});