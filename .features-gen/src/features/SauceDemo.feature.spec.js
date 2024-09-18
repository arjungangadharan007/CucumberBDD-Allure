/** Generated from: src\features\SauceDemo.feature */
import { test } from "playwright-bdd";

test.describe("Sauce demo basic sanity", () => {

  test("Verify user is able to login with valid credentials", async ({ Given, page, When, And, Then }) => {
    await Given("User navigates to sauce demo page with url \"https://www.saucedemo.com/\"", null, { page });
    await When("User enters username as \"standard_user\"", null, { page });
    await And("User enters password as \"secret_sauce\"", null, { page });
    await Then("User clicks on Login", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\SauceDemo.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"4:3"},
};