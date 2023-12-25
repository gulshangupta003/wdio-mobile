module.exports.input = async (textFieldLocator, value, relativeStaticElementLocator = "") => {
    if (process.env.PLATFORM === "ANDROID") {
        await $(textFieldLocator).setValue(value);
        await driver.hideKeyboard();
    } else {
        // lets change the keyboard logic as it is very slow
        // enter using setValue if not entered correctly then clear it and enter it by character
        await $(textFieldLocator).setValue(value);
        const enteredValue = await $(textFieldLocator).getText();
        if (enteredValue !== value) {
            for (let character of value) {
                await $(textFieldLocator).addValue(character);
            }
        }

        // First way hiding the keyboard - based on the return keyword
        if (await $("~Return").isDisplayed()) {
            await $("~Return").click(); // hide the keyboard
        }

        // 2nd way of hiding the keyboard - based on relative static element
        if (relativeStaticElementLocator !== "") {
            // We will use relative static element on the screen and click it to make keyboard disappear in iOS
            await $(relativeStaticElementLocator).click(); // Chose the element in such a way that no action is triggered
        }

        // ... any other process of hiding keyboard
    }
};