const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the login page', () => {
  browser.url('<https://example.com/login>');
});

When('I enter username {string} and password {string}', (username, password) => {
  $('#username').setValue(username);
  $('#password').setValue(password);
  $('#submit').click();
});

Then('I should see the login {string}', (outcome) => {
  if (outcome === 'successful') {
    expect($('#welcomeMessage')).toHaveText('Welcome');
  } else {
    expect($('#errorMessage')).toHaveText('Invalid credentials');
  }
});