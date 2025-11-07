import { Page, Locator, expect, test } from '@playwright/test';
import { CheckoutLocators } from '../locators/checkout';
import { OverviewLocators} from '../locators/overview';
import { CompletedLocators} from '../locators/complete';
// import { allure } from 'allure-playwright';

export class CheckoutPage {
    readonly page: Page;
    readonly checkoutPage: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly continueBtn: Locator;
    readonly cancelBtn: Locator;
    readonly closeErrorBtn: Locator;
    readonly fieldErrorReq: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutPage = page.locator(CheckoutLocators.checkoutPage);
        this.firstName = page.locator(CheckoutLocators.firstName);
        this.lastName = page.locator(CheckoutLocators.lastName);
        this.zipCode = page.locator(CheckoutLocators.zipCode);
        this.continueBtn = page.locator(CheckoutLocators.continueBtn);
        this.cancelBtn = page.locator(CheckoutLocators.cancelBtn);
        this.closeErrorBtn = page.locator(CheckoutLocators.closeErrorBtn);
        this.fieldErrorReq = page.locator(CheckoutLocators.fieldErrorReq);
    }

    async verifyCheckoutPage() {
        await test.step('Verify checkout page', async () => {
            await this.checkoutPage.waitFor({state: 'visible'});
        });
    }

    async fillCheckoutField(firstName: string, lastName: string, zipCode: string) {
        await test.step('User fill checkout field requirement', async () => {
            await this.firstName.fill(firstName);
            await this.lastName.fill(lastName);
            await this.zipCode.fill(zipCode);
        });
    }

    async tapContinueButton() {
        await test.step('User tap continue buttton', async () => {
            await this.continueBtn.click();
        });
    }

    async tapCloseErrorButton() {
        await test.step('User tap error message buttton', async () => {
            await this.closeErrorBtn.click();
        });
    }

    async tapCancelButton() {
        await test.step('Tap cancel button', async () =>{
            await this.cancelBtn.click();
        });
    }
}

export class OverviewPage {
    readonly page: Page;
    readonly overviewPage: Locator;
    readonly shippingInfo: Locator;
    readonly totalInfo: Locator;
    readonly overviewCancelBtn: Locator;
    readonly finishBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.overviewPage = page.locator(OverviewLocators.overviewPage);
        this.shippingInfo = page.locator(OverviewLocators.shippingInfo);
        this.totalInfo = page.locator(OverviewLocators.totalInfo);
        this.overviewCancelBtn = page.locator(OverviewLocators.overviewCancelBtn);
        this.finishBtn = page.locator(OverviewLocators.finishBtn);
    }

    async verifyOverviewPage() {
        await test.step('Verify overview page', async () => {
            await this.overviewPage.waitFor({state: 'visible'});
            await expect(this.page.locator(OverviewLocators.shippingInfo)).toHaveText('Shipping Information:');
            await expect(this.page.locator(OverviewLocators.totalInfo)).toHaveText('Price Total');
        });
    }

    async tapCancelBtnOverview() {
        await test.step('Tap cancel button in overview page', async () => {
            await this.overviewCancelBtn.click();
        });
    }

    async tapFinishButton() {
        await test.step('Tap finish button', async () => {
            await this.finishBtn.click();
        });
    }
}

export class CompletedPage {
    readonly page: Page;
    readonly completedPage: Locator;
    readonly thankYouOrder: Locator;
    readonly backHomeBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.completedPage = page.locator(CompletedLocators.completedPage);
        this.thankYouOrder = page.locator(CompletedLocators.thankYouOrder);
        this.backHomeBtn = page.locator(CompletedLocators.backHomeBtn);
    }

    async verifyCompletedPage() {
        await test.step('Verify completed order page', async () => {
            await this.completedPage.waitFor({state: 'visible'});
            await expect(this.page.locator(CompletedLocators.thankYouOrder)).toHaveText('Thank you for your order!');
        });
    }

    async tapBacktoHome() {
        await test.step('Tap Back to Home button', async () => {
            await this.backHomeBtn.click();
        });
    }
}
