const { Given, When, Then } = require('@cucumber/cucumber');

Given('I have a greeting', function () {
    this.greeting = 'Hello, World!';
});

When('I ask for a greeting', function () {
    this.response = this.greeting;
});

Then('I should receive a greeting', function () {
    if (this.response !== 'Hello, World!') {
        throw new Error('Expected "Hello, World!", but got "' + this.response + '"');
    }
});