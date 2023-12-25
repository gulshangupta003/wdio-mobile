const platform = process.env.PLATFORM;

class HomeScreen {
    static #__headerComponent = {
        burgerIcon:
            platform === "ANDROID"
                ? `//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView`
                : "",
    };

    static #__footerComponent = {
        menuButton: platform === "ANDROID" ? "" : "~tab bar option menu",
    };

    static #__navigationSideBarComponent = {
        loginButton: "~menu item log in",
        logoutButton: "~menu item log out",
    };

    static #__productListingsComponent = {
        firstProduct:
            platform === "ANDROID"
                ? '(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView'
                : "",
    };

    static #__logoutAlertBoxComponent = {
        logoutOption: "//android.widget.TextView[@text='Are you sure you sure you want to logout?']",
    }

    static async clickOnFirstProduct() {
        await $(HomeScreen.#__productListingsComponent.firstProduct).waitForDisplayed();
        await $(HomeScreen.#__productListingsComponent.firstProduct).click();
    }

    static async clickOnBurgerIconOrMenuButton() {
        if (platform === "ANDROID") {
            await $(HomeScreen.#__headerComponent.burgerIcon).waitForDisplayed();
            await $(HomeScreen.#__headerComponent.burgerIcon).click();
        } else {
            await $(HomeScreen.#__footerComponent.menuButton).waitForDisplayed();
            await $(HomeScreen.#__footerComponent.menuButton).click();
        }
    }

    static async clickOnLoginButton() {
        await $(HomeScreen.#__navigationSideBarComponent.loginButton).waitForDisplayed();
        await $(HomeScreen.#__navigationSideBarComponent.loginButton).click();
    }

    static async clickOnFirstProduct() {
        await $(HomeScreen.#__productListingsComponent.firstProduct).waitForDisplayed();
        await $(HomeScreen.#__productListingsComponent.firstProduct).click();
    }

    static async clickOnLogoutButton() {
        await $(HomeScreen.#__navigationSideBarComponent.logoutButton).waitForDisplayed();
        await $(HomeScreen.#__navigationSideBarComponent.logoutButton).click();
    }

    static async clickOnLogoutOptionOnAlertBox() {
        await $(HomeScreen.#__logoutAlertBoxComponent.logoutOption).waitForDisplayed();
        await $(HomeScreen.#__logoutAlertBoxComponent.logoutOption).click();
    }
}

exports.HomeScreen = HomeScreen;