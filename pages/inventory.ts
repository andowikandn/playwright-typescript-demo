import { Page, Locator, expect, test } from '@playwright/test';
import { CartLocators } from '../locators/cart';
import { LoginLocators } from '../locators/login';
import { InventoryLocators } from '../locators/inventory';
// import { allure } from 'allure-playwright';

export class InventoryPage {
    readonly page: Page;
    readonly textBackpack: Locator;
    readonly imageBackpack: Locator;
    readonly textJacket: Locator;
    readonly imageJacket: Locator;
    readonly backtoProducts: Locator;
    readonly addtoCartBackpack: Locator;
    readonly removeCartBackpack: Locator;
    readonly addtoCartJacket: Locator;
    readonly removeCartJacket: Locator;
    readonly verifyCartBadge: Locator;
    readonly sidebarMenu: Locator;
    readonly cartBadge: Locator;
    readonly dashboardPage: Locator;
    readonly viewDetailBackpack: Locator;
    readonly viewDetailJacket: Locator;
    readonly cartPage: Locator;
    readonly removeCartJacketinDetail: Locator;
    readonly continueShopBtn: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textBackpack = page.locator(InventoryLocators.textBackpack);
        this.imageBackpack = page.locator(InventoryLocators.imageBackpack);
        this.viewDetailBackpack = page.locator(InventoryLocators.viewDetailBackpack);
        this.textJacket = page.locator(InventoryLocators.textJacket);
        this.imageJacket = page.locator(InventoryLocators.imageJacket);
        this.viewDetailJacket = page.locator(InventoryLocators.viewDetailJacket);
        this.backtoProducts = page.locator(CartLocators.backtoProducts);
        this.addtoCartBackpack = page.locator(InventoryLocators.addtoCartBackpack);
        this.removeCartBackpack = page.locator(InventoryLocators.removeCartBackpack);
        this.addtoCartJacket = page.locator(InventoryLocators.addtoCartJacket);
        this.removeCartJacket = page.locator(InventoryLocators.removeCartJacket);
        this.verifyCartBadge = page.locator(InventoryLocators.verifyCartBadge);
        this.sidebarMenu = page.locator(InventoryLocators.sidebarMenu);
        this.cartBadge = page.locator(InventoryLocators.cartBadge);
        this.dashboardPage = page.locator(LoginLocators.dashboardPage);
        this.cartPage = page.locator(CartLocators.cartPage);
        this.removeCartJacketinDetail = page.locator(CartLocators.removeCartJacketinDetail);
        this.continueShopBtn = page.locator(CartLocators.continueShopBtn);
        this.checkoutButton = page.locator(CartLocators.checkoutButton);
    }

    async tapTextBackpack() {
        await test.step('Tap in text Backpack', async () => {
            await this.textBackpack.click();
        });
    }

    async tapImageBackpack() {
        await test.step('Tap in image Backpack', async () => {
            await this.imageBackpack.click();
        });
    }

    async viewBackpack() {
        await test.step('View detail backpack', async () => {
            await this.viewDetailBackpack.click();
        });
    }

    async tapTextJacket() {
        await test.step('Tap in text Jacket', async () => {
            await this.textJacket.click();
        });
    }

    async tapImageJacket() {
        await test.step('Tap in image Jacket', async () => {
            await this.imageJacket.click();
        });
    }

    async viewJacket() {
        await test.step('View detail backpack', async () => {
            await this.viewDetailJacket.click();
        });
    }

    async tapBacktoProducts() {
        await test.step('Tap Back to Products', async () => {
            await this.backtoProducts.click();
        });
    }

    async verifyBacktoProducts() {
        await test.step('Verify go Back to Products', async () => {
            await this.dashboardPage.waitFor({state: 'visible'});
            await expect(this.page.locator(LoginLocators.dashboardPage)).toHaveText('Products');
        });
    }

    async addCartBackpack() {
        await test.step('Add to cart backpack', async () => {
            await this.addtoCartBackpack.click();
        });
    }

    async removeBackpack() {
        await test.step('Remove cart backpack', async () => {
            await this.removeCartBackpack.click();
        });
    }

    async addCartJacket() {
        await test.step('Add to cart jacket', async () => {
            await this.addtoCartJacket.click();
        });
    }

    async removeJacket() {
        await test.step('Remove cart jacket', async () => {
            await this.removeCartJacket.click();
        });
    }

    async tapContinueShopping() {
        await test.step('COntinue shopping button', async () => {
            await this.continueShopBtn.click();
        })
    }

    async removeJacketinDetail() {
        await test.step('Remove jacket in detail page', async () => {
            await this.removeCartJacketinDetail.click();
        });
    }    

    async verifyViewCart(expectedCount: number) {
        await test.step('Verify cart badge', async () => {
            await this.verifyCartBadge.waitFor({state: 'visible'});
            await expect(this.verifyCartBadge).toHaveText(String(expectedCount));
        });
    }

    async tapCartBadge() {
        await test.step('Verify cart badge', async () => {
            await this.cartBadge.click();
        });
    }

    async verifyCartPage() {
        await test.step('Verify cart page', async () => {
            await this.cartPage.waitFor({state: 'visible'});
        });
    }

    async tapCheckoutButton() {
        await test.step('Tap checkout button', async () => {
            await this.checkoutButton.click();
        })
    }
}