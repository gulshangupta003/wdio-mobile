describe("iOS WebdriverIO Methods", () => {
  it("should interact with elements using WebdriverIO methods", async () => {
    // Identify the "Product Title" element using XPath
    const productTitle = await $(`//XCUIElementTypeStaticText[@name="Products"]`);

    // Wait for the "Product Title" element to be displayed
    await productTitle.waitForDisplayed();

    // Fetch and log the name attribute of the "Product Title" element
    const classAttributeValue = await productTitle.getAttribute("name");
    console.log(`\nClass attribute value - ${classAttributeValue}\n`);

    // Fetch and log the text content of the "Product Title" element
    const productTitleText = await productTitle.getText();
    console.log(`\nProduct title text - ${productTitleText}\n`);

    // Check if the "Product Title" element is displayed and log the result
    const isProductTitleElementDisplayed = await productTitle.isDisplayed();
    console.log(`\nProduct title element displayed - ${isProductTitleElementDisplayed}\n`);

    // Fetch and log the dimensions of the "Product Title" element
    const productElementDimensionSize = await productTitle.getSize();
    console.log(
      `\nProduct title - width: ${productElementDimensionSize.width} & height: ${productElementDimensionSize.height}\n`
    );
  });
});