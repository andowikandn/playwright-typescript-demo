import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
// import { allure } from 'allure-playwright';
import { USERNAME_STANDARD, PASSWORD } from '../utils/env';
import { SidebarPage } from '../pages/sidebar';

test.describe('Sidebar Menu', () => {
    test('Sidebar menu action then logout', async ({page}, testInfo) => {
        const loginPage = new LoginPage(page);
        const sidebarPage = new SidebarPage(page);

        await loginPage.goto();
        await loginPage.login(USERNAME_STANDARD, PASSWORD);
        await loginPage.verifyLoginSuccess();
        await sidebarPage.tapSidebarMenu();
        await sidebarPage.viewSidebarMenu();
        await sidebarPage.closeSidebar();
        await sidebarPage.tapSidebarMenu();
        await sidebarPage.tapLogoutMenu();
        await sidebarPage.verifyLogoutMenu();

        // const screenshot = await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
        // await allure.attachment('Verify logout user', screenshot, 'image/png');
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Verify logout user', {body: screenshot, contentType: 'image/png',});
    });
});