export const CheckoutLocators = {
    checkoutPage: '[data-test="title"]:has-text("Checkout: Your Information")',
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    zipCode: '[data-test="postalCode"]',
    continueBtn: '[data-test="continue"]',
    cancelBtn: '[data-test="cancel"]',
    closeErrorBtn: '[data-test="error-button"]',
    fieldErrorReq: '[data-test="error"]'
    // Error: First Name is required
    // Error: Last Name is required
    // Error: Postal Code is required
}