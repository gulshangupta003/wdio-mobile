const platform = process.env.PLATFORM;

class LoginScreen {
    static #__bodyComponent = {
        usernameTextField: "~Username input field",
        passwordTextField: "~Password input field",
        loginButton: "~Login button",
    };

    static async enterUsername(username) {
        await $(LoginScreen.#__bodyComponent.usernameTextField).waitForDisplayed();
        if (platform === "ANDROID") {
            await $(LoginScreen.#__bodyComponent.usernameTextField).setValue(username);
            await driver.hideKeyboard();
        } else {
            // Some times in iOS value entering is flaky hence we add it by character
            for (let character of username) {
                await $(LoginScreen.#__bodyComponent.usernameTextField).addValue(character);
                // driver.hideKeyboard does not work in iOS we can any of the hiding methods which we learned earlier or
                // If iOS keyboard provides the "return" key then clicking on it on also hides the keyboard
            }
            await $("~Return").click();
        }
    }

    static async enterPassword(password) {
        await $(LoginScreen.#__bodyComponent.passwordTextField).waitForDisplayed();
        if (platform === "ANDROID") {
            await $(LoginScreen.#__bodyComponent.passwordTextField).setValue(password);
            await driver.hideKeyboard();
        } else {
            // Some times in iOS value entering is flaky hence we add it by character
            for (let character of password) {
                await $(LoginScreen.#__bodyComponent.passwordTextField).addValue(character);
            }
            await $("~Return").click();
        }
    }

    static async clickOnLoginButton() {
        await $(LoginScreen.#__bodyComponent.loginButton).click();
    }
}

exports.LoginScreen = LoginScreen;