const { expect } = require("chai");
const { HomeScreen } = require("../../../src/pageobjects/home.screen");
const { LoginScreen } = require("../../../src/pageobjects/login.screen");
const { ProductScreen } = require("../../../src/pageobjects/product.screen");
const { CheckoutScreen } = require("../../../src/pageobjects/checkout.screen");
const { PaymentScreen } = require("../../../src/pageobjects/payment.screen");
const { ThankyouScreen } = require("../../../src/pageobjects/thankyou.screen");

describe("Complete Shopping Workflow", () => {
    it("User completes a shopping workflow", async () => {
        await HomeScreen.clickOnBurgerIconOrMenuButton();
        await HomeScreen.clickOnLoginButton();
        await LoginScreen.enterUsername("bob@example.com");
        await LoginScreen.enterPassword("10203040");
        await LoginScreen.clickOnLoginButton();

        await HomeScreen.clickOnFirstProduct();
        await ProductScreen.clickOnAddToCartButton();
        await ProductScreen.clickOnCartBadge();
        await CheckoutScreen.clickOnProceedToCheckoutButton();
        await CheckoutScreen.enterShippingDetails({
            fullName: "John Kennedy",
            address1: "#123 street",
            address2: "1st cross",
            city: "Bangalore",
            zipCode: "560031",
            country: "India",
        });
        await CheckoutScreen.clickOnPaymentButton();

        await PaymentScreen.enterPaymentDetails({
            fullName: "John Kennedy",
            cardNumber: "4242 4242 4242 4242",
            expiryDate: "01/30",
            securityCode: "123",
        });
        await PaymentScreen.clickOnReviewButton();
        await PaymentScreen.clickOnPaymentButton();
        const thankyouMessage = await ThankyouScreen.getThankyouMessageText();
        expect(thankyouMessage).to.be.eq("Thank you for your order");

        // Logout
        await HomeScreen.clickOnBurgerIconOrMenuButton();
        await HomeScreen.clickOnLogoutButton();
        await HomeScreen.clickOnLogoutOptionOnAlertBox();

        // Adding the hard wait to observe the change
        await driver.pause(5000);
    }).timeout(360000);
});