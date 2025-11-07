import { Page, Locator, expect, test } from '@playwright/test';
import { SortLocators } from '../locators/sort';
// import { allure } from 'allure-playwright';
import { LoginLocators } from '../locators/login';
// import test from 'node:test';

export class SortPage { 
    readonly page: Page;
    readonly dashboardPage: Locator;
    readonly sortBy: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardPage = page.locator(LoginLocators.dashboardPage);
        this.sortBy = page.locator(SortLocators.sortBy);
    }

    async tapSortNameZA() {
        await test.step('Tap sort By Name ZA', async () => {
            await this.sortBy.waitFor({ state: 'visible' });
            await this.sortBy.selectOption('za');
            await expect(this.sortBy).toHaveValue('za');
        });
    }

    async tapSortNameAZ() {
        await test.step('Tap sort By Name AZ', async () => {
            await this.sortBy.waitFor({ state: 'visible'});
            await this.sortBy.selectOption('az');
            await expect(this.sortBy).toHaveValue('az');
        });
    }

    async tapSortPriceHilo() {
        await test.step('Tap sort By Price Hilo', async () => {
            await this.sortBy.waitFor({ state: 'visible'});
            await this.sortBy.selectOption('hilo');
            await expect(this.sortBy).toHaveValue('hilo');
        });
    }

    async tapSortPriceLohi() {
        await test.step('Tap sort By Price Lohi', async () => {
            await this.sortBy.waitFor({ state: 'visible'});
            await this.sortBy.selectOption('lohi');
            await expect(this.sortBy).toHaveValue('lohi');
        });
    }
}
