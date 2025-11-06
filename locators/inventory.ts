export const InventoryLocators = {
    addtoCartBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
    addtoCartJacket: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    removeCartBackpack: '[data-test="remove-sauce-labs-backpack"]',
    removeCartJacket: '[data-test="remove-sauce-labs-fleece-jacket"]',
    textBackpack: '[data-test="inventory-item-name"]:has-text("Sauce Labs Backpack")',
    imageBackpack: '[data-test="inventory-item-sauce-labs-backpack-img"]',
    viewDetailBackpack: '[data-test="inventory-item-price"]:has-text("29.99")',
    textJacket: '[data-test="inventory-item-name"]:has-text("Sauce Labs Fleece Jacket")',
    imageJacket: '[data-test="inventory-item-sauce-labs-fleece-jacket-img"]',
    viewDetailJacket: '[data-test="inventory-item-price"]:has-text("49.99")',
    verifyCartBadge: '[data-test="shopping-cart-badge"]',
    cartBadge: '[data-test="shopping-cart-link"]',
    sidebarMenu: '[id="react-burger-menu-btn"]'
}