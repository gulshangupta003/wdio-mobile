const { input } = require("../../utilities/input");

const platform = process.env.PLATFORM;

class CheckoutScreen {
    static #__footerComponent = {
        proceedToCheckoutButton: "~Proceed To Checkout button",
        paymentButton: "~To Payment button",
    };

    static #__detailsComponent = {
        fullNameTextField: "~Full Name* input field",
        address1TextField: "~Address Line 1* input field",
        address2TextField: "~Address Line 2 input field",
        cityTextField: "~City* input field",
        stateTextField: "~State/Region input field",
        zipCodeTextField: "~Zip Code* input field",
        countryTextField: "~Country* input field",
    };

    static async clickOnProceedToCheckoutButton() {
        await $(CheckoutScreen.#__footerComponent.proceedToCheckoutButton).waitForDisplayed();
        await $(CheckoutScreen.#__footerComponent.proceedToCheckoutButton).click();
    }

    static async enterShippingDetails({ fullName, address1, address2, city, zipCode, country }) {
        await $(CheckoutScreen.#__detailsComponent.fullNameTextField).waitForDisplayed();

        await input(CheckoutScreen.#__detailsComponent.fullNameTextField, fullName);
        await input(CheckoutScreen.#__detailsComponent.address1TextField, address1);
        await input(CheckoutScreen.#__detailsComponent.address2TextField, address2);
        await input(CheckoutScreen.#__detailsComponent.cityTextField, city);
        await input(CheckoutScreen.#__detailsComponent.zipCodeTextField, zipCode);
        await input(CheckoutScreen.#__detailsComponent.countryTextField, country);
    }

    static async clickOnPaymentButton() {
        await $(CheckoutScreen.#__footerComponent.paymentButton).waitForDisplayed()
        await $(CheckoutScreen.#__footerComponent.paymentButton).click();
    }
}

exports.CheckoutScreen = CheckoutScreen;