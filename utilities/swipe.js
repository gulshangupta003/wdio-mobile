// utilities/swipe.js
const swipe = async (element) => {
  // Define the maximum number of scroll attempts
  const maxScrollAttempts = 5;
  let elementFound = false;
  for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
    // Check if the element is visible
    if (await element.isDisplayed()) {
      elementFound = true;
      break; // Element is found, exit the loop
    }

    // Define swipe start and end coordinates for a scroll
    const startX = 500; // X-coordinate (horizontal position)
    const startY = 800; // Starting Y-coordinate (top of the screen)
    const endY = 200; // Ending Y-coordinate (bottom of the screen)

    // Perform the vertical swipe (scroll down)
    await driver.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "wait", ms: 2000 }, // Wait for a short duration (optional)
      { action: "moveTo", x: startX, y: endY },
      { action: "release" },
    ]);
  }
};

module.exports = {
  swipe,
};

const horizontalSwipe = async (element) => {
  const maxScrollAttempts = 5;
  let elementFound = false;

  for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
    if (await element.isDisplayed()) {
      elementFound = true;
      break;
    }

    // Coordinates for horizontal swipe
    const startX = 200; // Starting X-coordinate (left of the screen)
    const endX = 800; // Ending X-coordinate (right of the screen)
    const startY = 500; // Y-coordinate (kept constant)

    // Perform the horizontal swipe (scroll right)
    await driver.touchAction([
      { action: "press", x: endX, y: startY },
      { action: "wait", ms: 2000 },
      { action: "moveTo", x: startX, y: startY },
      { action: "release" },
    ]);
  }
};

module.exports = {
  horizontalSwipe,
};

// utilities/swipe.js
const swipeByPercentage = async (
  element,
  startPercentage,
  endPercentage,
  maxScrollAttempts = 5
) => {
  let elementFound = false;

  for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
    // Check if the element is visible
    if (await element.isDisplayed()) {
      elementFound = true;
      break; // Element is found, exit the loop
    }

    // Get the size of the mobile device screen
    const screenSize = await driver.getWindowRect();

    // Calculate the coordinates based on percentages
    const startX = screenSize.width * (startPercentage / 100);
    const startY = screenSize.height * (80 / 100); // Starting Y-coordinate fixed at 80%
    const endY = screenSize.height * (endPercentage / 100);

    // Perform the vertical swipe based on percentages
    await driver.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "wait", ms: 2000 }, // Wait for a short duration (optional)
      { action: "moveTo", x: startX, y: endY },
      { action: "release" },
    ]);
  }

  return elementFound;
};

module.exports = {
  swipe,
  swipeByPercentage,
};

const horizontalSwipeByPercentage = async (
  element,
  startPercentage,
  endPercentage,
  maxScrollAttempts = 5
) => {
  let elementFound = false;

  for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
    if (await element.isDisplayed()) {
      elementFound = true;
      break;
    }

    const screenSize = await driver.getWindowRect();

    // Calculate coordinates for horizontal swipe
    const startY = screenSize.height * (50 / 100); // Y-coordinate fixed at 50%
    const startX = screenSize.width * (startPercentage / 100);
    const endX = screenSize.width * (endPercentage / 100);

    // Perform the horizontal swipe
    await driver.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "wait", ms: 2000 },
      { action: "moveTo", x: endX, y: startY },
      { action: "release" },
    ]);
  }

  return elementFound;
};

module.exports = {
  horizontalSwipeByPercentage,
};
