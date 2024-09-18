 import { createBdd } from "playwright-bdd";
 const {Given,When,Then} = createBdd();
 
 
 
 Given('User navigates to sauce demo page with url {string}', async ({page}, url) => {
    await page.goto(url);
  });
  
 
  When('User enters username as {string}', async ({page}, username) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(username)
  });
  
  When('User enters password as {string}', async ({page}, password) => {
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(password);
  });
  
  Then('User clicks on Login', async ({page}) => {
    await page.locator('[data-test="login-button"]').click(); 
    console.log("Hi iam passed");
    
  });