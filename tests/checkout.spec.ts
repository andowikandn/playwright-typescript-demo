import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { CheckoutPage, OverviewPage, CompletedPage } from '../pages/checkout';
import { InventoryPage } from '../pages/inventory';
// import { allure } from 'allure-playwright';
import { USERNAME_STANDARD, PASSWORD } from '../utils/env';

test.describe('Checkout Cart Items', () => {
    test('Checkout End to end testing', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const checkoutPage = new CheckoutPage(page);
        const overviewPage = new OverviewPage(page);
        const completedPage = new CompletedPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.tapCartBadge();
        await inventoryPage.tapCheckoutButton();
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutField('Budi', 'Pekerti', '12345');
        await checkoutPage.tapContinueButton();
        await overviewPage.verifyOverviewPage();
        await overviewPage.tapFinishButton();
        await completedPage.verifyCompletedPage();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Completed the order', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Completed the order', {body: screenshot, contentType: 'image/png',});

        await completedPage.tapBacktoHome();
        await inventoryPage.verifyBacktoProducts();
    });

    test('Filling checkout field requirement', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.tapCartBadge();
        await inventoryPage.tapCheckoutButton();
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutField('Budi', 'Pekerti', '12345');

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Checkout filling out requirement field', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Checkout filling out requirement field', {body: screenshot, contentType: 'image/png',});

        await checkoutPage.tapContinueButton();
    });

    test('Error message checkout field requirement then cancel button', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.tapCartBadge();
        await inventoryPage.tapCheckoutButton();
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutField('', '', '');
        await checkoutPage.tapContinueButton();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Error message checkout requirement field', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Error message checkout requirement field', {body: screenshot, contentType: 'image/png',});

        await checkoutPage.tapCloseErrorButton();
        await checkoutPage.tapCancelButton();
        await inventoryPage.verifyCartPage();
    });

    test('Verify overview page then tap cancel', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const checkoutPage = new CheckoutPage(page);
        const overviewPage = new OverviewPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await inventoryPage.addCartBackpack();
        await inventoryPage.addCartJacket();
        await inventoryPage.tapCartBadge();
        await inventoryPage.tapCheckoutButton();
        await checkoutPage.verifyCheckoutPage();
        await checkoutPage.fillCheckoutField('Abdul', 'Malik', '12345');
        await checkoutPage.tapContinueButton();
        await overviewPage.verifyOverviewPage();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Verify overview page', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Verify overview page', {body: screenshot, contentType: 'image/png',});

        await overviewPage.tapCancelBtnOverview();
        await inventoryPage.verifyBacktoProducts();
    });
});