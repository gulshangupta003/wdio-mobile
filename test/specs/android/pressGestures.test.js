describe("Press and Hold Gestures", () => {
  it("should perform a press and hold gesture on a mobile element", async () => {
    // Locate the first product image
    const firstProductImageLocator =
      process.env.PLATFORM === "ANDROID"
        ? `(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView`
        : `//XCUIElementTypeOther[@name="Sauce Labs Backpack"]`;

    // For Windows users, you can use the Android-specific locator
    // const firstProductImageLocator = `(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView`;

    const firstProductImage = await $(firstProductImageLocator);
    await firstProductImage.waitForDisplayed();

    // Perform a press and hold gesture
    const pressDuration = 5000; // 5 seconds
    await driver.touchAction([
      { action: "press", element: firstProductImage },
      { action: "wait", ms: pressDuration },
      { action: "release" },
    ]);

    await driver.pause(5000);

    // Terminate and Launch the driver again
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
  });

  it("should perform a press and hold gesture on a mobile element using coordinates", async () => {
    // Locate the first product image
    const firstProductImageLocator =
      process.env.PLATFORM === "ANDROID"
        ? `(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView`
        : `//XCUIElementTypeOther[@name="Sauce Labs Backpack"]`;

    // For Windows users, you can use the Android-specific locator
    // const firstProductImageLocator = `(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView`;

    const firstProductImage = await $(firstProductImageLocator);
    await firstProductImage.waitForDisplayed();

    // Get the X and Y coordinates of the element
    const location = await firstProductImage.getLocation();
    const xCoordinate = location.x;
    const yCoordinate = location.y;

    // Perform a press and hold gesture using coordinates
    const pressDuration = 5000; // 5 seconds
    await driver.touchAction([
      { action: "press", x: xCoordinate + 100, y: yCoordinate + 100 },
      { action: "wait", ms: pressDuration },
      { action: "release" },
    ]);

    await driver.pause(5000);

    // Terminate and Launch the driver again
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
  });
});