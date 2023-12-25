const { expect } = require('chai');

describe("Chai Assertions in Mobile Automation", () => {
    it("should assert the visibility of the burger icon", async () => {
        // Windows users, keep the iOS locator part as empty string
        const burgerIconLocator = process.env.PLATFORM === "ANDROID" ? "~open menu" : "~tab bar option menu";
        const isBurgerIconDisplayed = await $(burgerIconLocator).isDisplayed();

        expect(isBurgerIconDisplayed).to.be.true;
    });
});