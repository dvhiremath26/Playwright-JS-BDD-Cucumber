
class DashboardPage {

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page) {
        this.page = page;
    }

    async verifyDashboardPage() {
        return await this.page.title();
    }

    async navigateToManageCourses() {
        await this.page.locator("//span[normalize-space()='Manage']").hover();
        await this.page.locator("//a[normalize-space()='Manage Courses']").click();
        await this.page.waitForTimeout(2000);
    }

    async verifyManageCoursesPage() {        
        return await this.page.title();
    }
}

module.exports = {  DashboardPage };