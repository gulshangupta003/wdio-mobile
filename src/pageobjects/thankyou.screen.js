const platform = process.env.PLATFORM;

class ThankyouScreen {
    static #__bodyComponent = {
        thankyouMessageText:
            platform === "ANDROID" ? "//*[@text='Thank you for your order']" : "~Thank you for your order",
    };

    static async getThankyouMessageText() {
        await $(ThankyouScreen.#__bodyComponent.thankyouMessageText).waitForDisplayed();
        return await $(ThankyouScreen.#__bodyComponent.thankyouMessageText).getText();
    }
}

exports.ThankyouScreen = ThankyouScreen;