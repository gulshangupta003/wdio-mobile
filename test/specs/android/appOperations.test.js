describe("Android App Operations", () => {
  it("should perform app operations successfully", async () => {
    const ANDROID_PACKAGE = "com.saucelabs.mydemoapp.rn";

    console.log("App launch successful");
    await driver.pause(5000);

    await driver.terminateApp(ANDROID_PACKAGE);
    console.log("App terminated");

    await driver.pause(5000);
    await driver.activateApp(ANDROID_PACKAGE);
    console.log("App activated");

    await driver.pause(5000);
    await driver.removeApp(ANDROID_PACKAGE);
    console.log("App removed");
  });
});