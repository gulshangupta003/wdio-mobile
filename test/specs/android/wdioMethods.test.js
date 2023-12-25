describe("Tap Gestures in Mobile Automation", () => {
  it.skip("should perform a tap gesture on a mobile element", async () => {
    // Choose the locator based on the platform
    // For Windows users, the iOS locator is left empty as iOS testing is not applicable
    const firstProductImageLocator = process.env.PLATFORM === "ANDROID"
      ? `(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView`
      : ""; // Leave empty for Windows users focusing solely on Android

    // Locate and wait for the element to be displayed
    const firstProductImage = await $(firstProductImageLocator);
    await firstProductImage.waitForDisplayed();

    // Perform the tap action
    await driver.touchAction([
      {
        action: "tap",
        element: firstProductImage,
      },
    ]);

    // Pause to observe the action
    await driver.pause(5000);
  });

  it("should perform a tap gesture using element coordinates", async () => {
    // Locate the element you want to tap
    // For Windows users, the iOS locator is left empty as iOS testing is not applicable
    const firstProductImageLocator = process.env.PLATFORM === "ANDROID"
      ? `(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView`
      : ""; // Leave empty for Windows users focusing solely on Android

    const firstProductImage = await $(firstProductImageLocator);
    await firstProductImage.waitForDisplayed();

    // Get the X and Y coordinates of the element
    const location = await firstProductImage.getLocation();
    const xCoordinate = location.x;
    const yCoordinate = location.y;

    // Perform a tap gesture at the element's coordinates
    await driver.touchAction([
      {
        action: "tap",
        x: xCoordinate + 100,
        y: yCoordinate + 100,
      },
    ]);

    // Pause to observe the action
    await driver.pause(5000);
  });
});