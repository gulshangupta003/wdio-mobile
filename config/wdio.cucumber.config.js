const ANDROID_CAPABILITIES = [
    {
        "appium:platformName": "Android",
        "appium:deviceName": "Pixel_4A_XL",
        "appium:automationName": "UIAutomator2",
        "appium:udid": "emulator-5554",
        "appium:app": `${process.cwd()}/app/android_sauce_lab_app.apk`,
        "appium:chromedriverExecutable": `${process.cwd()}/app/chromedriver`,
    },
];

exports.config = {
    specs: [`${process.cwd()}/test/specs/cucumber/features/**/*.feature`],
    framework: "cucumber",
    cucumberOpts: {
        require: [`${process.cwd()}/test/specs/cucumber/step-definitions/**/*.js`],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: "",
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    runner: "local",
    port: 4723,
    capabilities: ANDROID_CAPABILITIES,
    logLevel: "info",
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ["appium"],
    reporters: [
        "spec",
        [
            "allure",
            {
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],

};