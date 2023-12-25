const { swipe } = require('../../../utilities/swipe');
const { swipeByPercentage } = require('../../../utilities/swipe');

// specs/swipeGestures.js
describe("Swipe Gestures", () => {
  it.skip("should perform a vertical swipe (scroll down) on a mobile app", async () => {
    await driver.pause(2000); // Wait for the app to load

    // Define swipe start and end coordinates
    const startX = 500;
    const startY = 800;
    const endY = 200;

    // Perform the vertical swipe (scroll down)
    await driver.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "wait", ms: 2000 }, // Optional wait
      { action: "moveTo", x: startX, y: endY },
      { action: "release" },
    ]);

    // Terminate and Launch the driver again
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
  });

  it.skip("should scroll until an element is visible on a mobile app", async () => {
    // For Windows users, you can use the Android-specific locator
    const firstProductImageLocator =
      process.env.PLATFORM === "ANDROID"
        ? `(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView`
        : `//XCUIElementTypeOther[@name="Sauce Labs Backpack"]`;

    // Wait for the home screen to load completely
    await $(firstProductImageLocator).waitForDisplayed();

    // Define the element you want to scroll to
    // For Windows users, you can use the Android-specific locator
    const copyrightTextAtFooterLocator =
      process.env.PLATFORM === "ANDROID"
        ? "//*[@text='© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy.']"
        : '//XCUIElementTypeStaticText[@name="© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy."]';

    const copyrightTextAtFooterElement = await $(copyrightTextAtFooterLocator);

    // Use the swipe utility function to perform the swipe
    await swipe(copyrightTextAtFooterElement);

    await driver.pause(5000); // Wait to observe the result

    // Terminate and Launch the driver again
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
  });

  it("Should scroll until an element is visible on a mobile app (Swipe Gestures Based on Screen Percentages)", async () => {
    // [Your existing setup code]
    // For Windows users, you can use the Android-specific locator
    const firstProductImageLocator =
      process.env.PLATFORM === "ANDROID"
        ? `(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView`
        : `//XCUIElementTypeOther[@name="Sauce Labs Backpack"]`;

    // Wait for the home screen to load completely
    await $(firstProductImageLocator).waitForDisplayed();

    // Define the element you want to scroll to
    // For Windows users, you can use the Android-specific locator
    const copyrightTextAtFooterLocator =
      process.env.PLATFORM === "ANDROID"
        ? "//*[@text='© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy.']"
        : '//XCUIElementTypeStaticText[@name="© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy."]';

    const copyrightTextAtFooterElement = await $(copyrightTextAtFooterLocator);

    // Use the new swipeByPercentage function
    await swipeByPercentage(copyrightTextAtFooterElement, 30, 70);

    await driver.pause(5000); // Wait to observe the result
  });
});