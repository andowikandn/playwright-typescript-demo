import { Page, Locator, expect, test } from '@playwright/test';
import { LoginLocators } from '../locators/login';
import { BASE_URL } from '../utils/env';
// import { allure } from 'allure-playwright';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly closeErrorMsg: Locator;
    readonly dashboardPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator(LoginLocators.usernameInput);
        this.passwordInput = page.locator(LoginLocators.passwordInput);
        this.loginButton = page.locator(LoginLocators.loginButton);
        this.errorMessage = page.locator(LoginLocators.errorMessage);
        this.closeErrorMsg = page.locator(LoginLocators.closeErrorMsg);
        this.dashboardPage = page.locator(LoginLocators.dashboardPage);
    }

    async goto() {
        // await allure.step('Navigate to login page saucedemo', async () => {
        await test.step('Navigate to login page saucedemo', async () => {
            await this.page.goto(BASE_URL);
        });
    }

    async login(username: string, password: string) {
        // await allure.step('User input username and password', async () => {
        await test.step('User input username and password', async () => {
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
        });  
    }

    async verifyLoginSuccess() {
        // await allure.step('Verify login success', async () => {
        //     await this.dashboardPage.waitFor({state: 'visible'});
        //     await expect(this.page.locator(LoginLocators.dashboardPage)).toHaveText('Products');
        await test.step('Verify login success', async () => {
            await this.dashboardPage.waitFor({state: 'visible'});
            await expect(this.page.locator(LoginLocators.dashboardPage)).toHaveText('Products');
        });
    }

    async verifyLockoutErrorMsg() {
        // await allure.step('Verify lockout user error message', async () => {
        await test.step('Verify lockout user error message', async () => {
            await this.errorMessage.waitFor({state: 'visible'});
            await expect(this.page.locator(LoginLocators.errorMessage)).toContainText('Epic sadface: Sorry, this user has been locked out.');
        });
    }

    async verifyErrorMessage() {
        // await allure.step('Verify failed login error message', async () => {
        await test.step('Verify failed login error message', async () => {
            await this.errorMessage.waitFor({state: 'visible'});
            await expect(this.page.locator(LoginLocators.errorMessage)).toContainText('Epic sadface: Username and password do not match any user in this service');
        });   
    }

    async closeError() {
        // await allure.step('Close error message', async () => {
        await test.step('Close error message', async () => {
            await this.closeErrorMsg.click();
        });
    }
}