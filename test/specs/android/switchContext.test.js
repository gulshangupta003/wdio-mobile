// test/specs/android/switchContext.test.js
describe("Switching Between Native and Web Views", () => {
    it("should switch between native and web views successfully", async () => {
        // Your complete script for switching between Native and Web Views
        const burgerIconLocator = "~open menu";
        const webviewButtonLocator = "~menu item webview";
        const webUrlTextFieldLocator = "~URL input field";
        const goToSiteButtonLocator = "~Go To Site button";

        const burgerIcon = await $(burgerIconLocator);
        await burgerIcon.waitForDisplayed();
        await burgerIcon.click();

        const webviewButton = await $(webviewButtonLocator);
        await webviewButton.waitForDisplayed();
        await webviewButton.click();

        const webUrlTextField = await $(webUrlTextFieldLocator);
        await webUrlTextField.waitForDisplayed();
        await webUrlTextField.setValue("https://www.ultralesson.ai");

        const goToSiteButton = await $(goToSiteButtonLocator);
        await goToSiteButton.waitForDisplayed();
        await goToSiteButton.click();

        // Wait until we get webview context apart from native context
        await driver.waitUntil(
            async () => {
                return (await driver.getContexts()).length > 1;
            },
            {
                timeout: 50000,
            }
        );

        const contexts = await driver.getContexts(); // output -> [ 'NATIVE_APP', 'WEBVIEW_com.saucelabs.mydemoapp.rn' ]
        const webViewContext = contexts[1]; // Webview is at index 1 -> WEBVIEW_com.saucelabs.mydemoapp.rn

        // Switch to webview context
        await driver.switchContext(webViewContext);

        console.log(`The webview url - ${await browser.getUrl()}`);

        await driver.switchContext(contexts[0]);

        // We are navigating back from webview by using back button
        await driver.back();

        // If the side navigation is appeared by clicking on the burger icon
        // then it indicates that we have made the successful native context switch
        await burgerIcon.click();

        // Hard wait to observe the change
        await driver.pause(5000);
    });
});