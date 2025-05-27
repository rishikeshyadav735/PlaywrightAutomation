const {test,expect} = require('@playwright/test')

test("Playwright Special Locators", async ({page}) => {
  // Navigate to the URL
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    console.log(await page.title());
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female"); 
    await page.getByPlaceholder("Password").fill("Rishi");
    await page.getByRole("button", { name: "Submit" }).click();
    await page.getByText("Success! The Form has been submitted successfully!").waitFor();
    const bool = await page.getByText("Success! The Form has been submitted successfully!").isVisible();
    console.log("Success message: " + bool);
    expect(bool).toBeTruthy();
    await page.getByRole("link", { name: "Shop" }).click();
    await page.waitForLoadState('networkidle');
    await page.locator("app-card").filter({hasText: "Blackberry"}).getByRole("button").click();



    await page.pause();
});