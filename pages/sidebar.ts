import { Page, Locator, expect, test } from '@playwright/test';
import { SiderbarLocators } from '../locators/sidebar';
// import { allure } from 'allure-playwright';
import { LoginLocators } from '../locators/login';
import { InventoryLocators } from '../locators/inventory';

export class SidebarPage {
    readonly page: Page;
    readonly sidebarMenu: Locator;
    readonly closeBtn: Locator;
    readonly allItemBtn: Locator;
    readonly logoutBtn: Locator;
    readonly swagLabHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sidebarMenu = page.locator(InventoryLocators.sidebarMenu);
        this.closeBtn = page.locator(SiderbarLocators.closeBtn);
        this.allItemBtn = page.locator(SiderbarLocators.allItemBtn);
        this.logoutBtn = page.locator(SiderbarLocators.logoutBtn);
        this.swagLabHeader = page.locator(LoginLocators.swagLabHeader);
    }

    async tapSidebarMenu() {
        await test.step('Tap sidebar menu', async () => {
            await this.sidebarMenu.click();
        });
    }

    async viewSidebarMenu() {
        await test.step('Verify view sidebar menu', async () => {
            await this.allItemBtn.waitFor({state: 'visible'});
            await expect(this.page.locator(SiderbarLocators.allItemBtn)).toHaveText('All Items');
        });
    }

    async closeSidebar() {
        await test.step('Tap close sidebar menu', async () => {
            await this.closeBtn.click();
        });
    }

    async tapLogoutMenu() {
        await test.step('Tap logout menu', async () => {
            await this.logoutBtn.click();
        });
    }

    async verifyLogoutMenu() {
        await test.step('Verify tap logout', async () => {
            await this.swagLabHeader.waitFor({state: 'visible'});
            await expect(this.page.locator(LoginLocators.swagLabHeader)).toHaveText('Swag Labs');
            await expect(this.page).toHaveURL('https://www.saucedemo.com/');
        });
    }
}