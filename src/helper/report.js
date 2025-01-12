const report = require("multiple-cucumber-html-reporter");

// Generate the Cucumber HTML report
report.generate({
    jsonDir: "test-results", // Path to the directory containing JSON files
    reportPath: "./", // Path where the report will be saved
    reportName: "Playwright Cucumber Report", // Name of the report
    pageTitle: "Playwright Cucumber Report", // Title of the report page
    displayDuration: false, // Whether to display the duration of each step
    metadata: {
        browser: {
            name: "chrome", // Browser name
            version: "latest", // Browser version
        },
        device: "Deepak-PC", // Device name
        platform: {
            name: "windows", // Platform name
            version: "10", // Platform version
        },
    },
    customData: {
        title: "Test info", // Custom data title
        data: [
            { label: "Project", value: "Custom project" }, // Project information
            { label: "Release", value: "1.2.3" }, // Release version
            { label: "Cycle", value: "B11221.34321" } // Test cycle information
        ],
    },
});