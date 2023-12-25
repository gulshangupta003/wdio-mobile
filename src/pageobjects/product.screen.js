const platform = process.env.PLATFORM;

class ProductScreen {
    static #__footerComponent = {
        addToCartButton: "~Add To Cart button",
    };

    static #__headerComponent = {
        cartBadgeButton: platform === "ANDROID" ? "~cart badge" : "~tab bar option cart",
    };

    static async clickOnAddToCartButton() {
        await $(ProductScreen.#__footerComponent.addToCartButton).waitForDisplayed();
        await $(ProductScreen.#__footerComponent.addToCartButton).click();
    }

    static async clickOnCartBadge() {
        await $(ProductScreen.#__headerComponent.cartBadgeButton).waitForDisplayed();
        await $(ProductScreen.#__headerComponent.cartBadgeButton).click();
    }
}

exports.ProductScreen = ProductScreen;