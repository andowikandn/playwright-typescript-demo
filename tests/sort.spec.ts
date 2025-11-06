import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { SortPage } from '../pages/sort';
// import { allure } from 'allure-playwright';
import { USERNAME_STANDARD, PASSWORD } from '../utils/env';

test.describe('Sorting Product', () => {
    test('Tap sort By Name ZA', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const sortPage = new SortPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await sortPage.sortBy.waitFor({ state: 'visible' });
        await sortPage.tapSortNameZA();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Sort By Name ZA', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true});
        await testInfo.attach('Sort By Name ZA', {body: screenshot, contentType: 'image/png',});

    });

    test('Tap sort By Name AZ', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const sortPage = new SortPage(page);
        
        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await sortPage.sortBy.waitFor({ state: 'visible' });
        await sortPage.tapSortNameZA();
        await sortPage.tapSortNameAZ();
        
        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Sort By Name AZ', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true});
        await testInfo.attach('Sort By Name AZ', {body: screenshot, contentType: 'image/png',});
    });

    test('Tap sort By Price High Low', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const sortPage = new SortPage(page);
        
        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await sortPage.sortBy.waitFor({ state: 'visible' });
        await sortPage.tapSortPriceHilo();
        
        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Sort By Price High Low', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true});
        await testInfo.attach('Sort By Price High Low', {body: screenshot, contentType: 'image/png',});
    });

    test('Tap sort By Price Low High', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);
        const sortPage = new SortPage(page);
        
        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await sortPage.sortBy.waitFor({ state: 'visible' });
        await sortPage.tapSortPriceLohi();
        
        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Sort By Price Low High', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true});
        await testInfo.attach('Sort By Price Low High', {body: screenshot, contentType: 'image/png',});
    });
});