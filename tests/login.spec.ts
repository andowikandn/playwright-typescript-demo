import { test } from 'playwright/test';
import { LoginPage } from '../pages/login';
import dotenv from 'dotenv';
// import { allure } from 'allure-playwright';
import { USERNAME_STANDARD, USERNAME_LOCKOUT, PASSWORD } from '../utils/env';

dotenv.config();

test.describe('Login Test Saucedemo', () => {
    test('Login with valid credentials', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Login Success Screenshot', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Login Success Screenshot', {body: screenshot, contentType: 'image/png',});
    });

    test('Login with lockout user', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_LOCKOUT, PASSWORD);
        await loginPage.verifyLockoutErrorMsg();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Login Lockout User Screenshot', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Login Lockout User Screenshot', {body: screenshot, contentType: 'image/png',});

        await loginPage.closeError();
    });

    test('Login with invalid credentials', async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('USERNAMEWRONG', 'PASSWORDWRONG');
        await loginPage.verifyErrorMessage();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Login Error Message Screenshot', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Login Error Message Screenshot', {body: screenshot, contentType: 'image/png',});

        await loginPage.closeError();
    });
});