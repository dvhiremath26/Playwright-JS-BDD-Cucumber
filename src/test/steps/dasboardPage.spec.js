const { Given, When, Then } = require('@cucumber/cucumber');
const { DashboardPage } = require('../../pages/DashboardPage');
const { expect } = require('@playwright/test');



Given('User is on the Dashboard Page', async function() {
    const dashboardPage = new DashboardPage(this.page);
    const title = await dashboardPage.verifyDashboardPage();
    expect(title).toBe('Learn Automation Courses');
});

When('User navigate to Manage Courses Page', async function() {
    const dashboardPage = new DashboardPage(this.page);
    await dashboardPage.navigateToManageCourses();
});

Then('User verify the Manage Courses Page', async function() {
    const dashboardPage = new DashboardPage(this.page);
    const title = await dashboardPage.verifyManageCoursesPage();
    expect(title).toBe('Learn Automation Courses');
});






// const { Given, When, Then } = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');


// Given('User is on the Dashboard Page', async function() {
//     const title = await this.page.title();
//     await expect(title).toBe('Learn Automation Courses');
// });

// When('User navigate to Manage Courses Page', async function() {
//     await this.page.locator("//span[normalize-space()='Manage']").hover();
//     await this.page.locator("//a[normalize-space()='Manage Courses']").click();
//     await this.page.waitForTimeout(2000);
// });

// Then('User verify the Manage Courses Page', async function() {
//     const title = await this.page.title();
//     expect(title).toBe('Learn Automation Courses');
// });