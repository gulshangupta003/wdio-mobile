describe("Failing Test Case", () => {
    it("should fail to match the product title header", async () => {
        const productTitleHeaderLocator =
            process.env.PLATFORM === "ANDROID"
                ? '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView'
                : '-ios class chain:**/XCUIElementTypeStaticText[`label == "Products"`]';
        const productTitleHeader = await $(productTitleHeaderLocator);
        await productTitleHeader.waitForDisplayed();
        const headerValue = await productTitleHeader.getText();

        // Assertion fails as the product text value is not matching displayed on the screen
        expect(headerValue).to.be.equal("products");
    });
});