describe('iOS Locator Strategies', () => {
  it('should identify elements using various locator strategies', async () => {
    // Adding a wait for the element to be displayed, This is temporary and we will tackle it later
    // await driver.pause(10000);

    // Accessibility ID locator strategy
    const menuIcon = (await $('~tab bar option menu')).waitForDisplayed();
    console.log(`Menu icon - ${menuIcon}`);

    // Xpath locator strategy
    const menuIconXpath = (await $('//XCUIElementTypeButton[@name="tab bar option menu"]')).waitForDisplayed();
    console.log(`Menu icon using xpath - ${menuIconXpath}`);

    // iOS class chain locator strategy
    const menuIconIOSClassChain = (await $('-ios class chain:**/XCUIElementTypeButton[`label == "Menu, tab, 3 of 3"`]')).waitForDisplayed();
    console.log(`Menu icon using iOS class chain - ${menuIconIOSClassChain}`);

    // iOS Predicate string
    const menuIconIOSPredicateString = (await $(`-ios predicate string:label == "Menu, tab, 3 of 3"`)).waitForDisplayed();
    console.log(`Menu icon using predicate string - ${menuIconIOSPredicateString}`);
  });
});