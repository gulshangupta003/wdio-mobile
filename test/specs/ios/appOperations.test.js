describe("iOS App Operations", () => {
  it("should perform app operations successfully", async () => {
    const IOS_BUNDLE_ID = "com.saucelabs.mydemoapp.rn"

    console.log("App launch successful");
    await driver.pause(5000);

    await driver.terminateApp(IOS_BUNDLE_ID);
    console.log("App terminated");

    await driver.pause(5000);
    await driver.activateApp(IOS_BUNDLE_ID);
    console.log("App activated");

    await driver.pause(5000);
    await driver.removeApp(IOS_BUNDLE_ID);
    console.log("App removed");
  });
});