const { input } = require("../../utilities/input");

const platform = process.env.PLATFORM;

class PaymentScreen {
    static #__headerComponent = {
        checkoutHeader: platform === "ANDROID" ? "" : "~Checkout",
    };

    static #__detailsComponent = {
        fullName: "~Full Name* input field",
        cardNumber: "~Card Number* input field",
        expiryDate: "~Expiration Date* input field",
        securityCode: "~Security Code* input field",
    };

    static #__footerComponent = {
        reviewButton: "~Review Order button",
        placeOrderButton: "~Place Order button",
    };

    static async enterPaymentDetails({ fullName, cardNumber, expiryDate, securityCode }) {
        await $(PaymentScreen.#__detailsComponent.fullName).waitForDisplayed();

        await input(PaymentScreen.#__detailsComponent.fullName, fullName);

        // In iOS to hide the keyboard we can click on the static element
        // As we don's have Return keyword on number keypad
        await input(
            PaymentScreen.#__detailsComponent.cardNumber,
            cardNumber,
            PaymentScreen.#__headerComponent.checkoutHeader
        );
        await input(
            PaymentScreen.#__detailsComponent.expiryDate,
            expiryDate,
            PaymentScreen.#__headerComponent.checkoutHeader
        );
        await input(
            PaymentScreen.#__detailsComponent.securityCode,
            securityCode,
            PaymentScreen.#__headerComponent.checkoutHeader
        );
    }

    static async clickOnReviewButton() {
        await $(PaymentScreen.#__footerComponent.reviewButton).waitForDisplayed();
        await $(PaymentScreen.#__footerComponent.reviewButton).click();
    }

    static async clickOnPaymentButton() {
        await $(PaymentScreen.#__footerComponent.placeOrderButton).waitForDisplayed();
        await $(PaymentScreen.#__footerComponent.placeOrderButton).click();
    }
}

exports.PaymentScreen = PaymentScreen;