import { test, expect } from "@playwright/test";

test.describe("Premier Inn Group Booking Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/form");
  });

  test("should navigate between steps", async ({ page }) => {
    await expect(page.getByText("Contact details")).toBeVisible();
    await expect(page.getByText("Your contact details")).toBeVisible();

    await page.getByText("Booking details").click();
    await expect(page.getByText("Booking details")).toBeVisible();
    await expect(page.getByText("Personal")).toBeVisible();

    await page.getByText("Room Requirements").click();
    await expect(page.getByText("Rooms")).toBeVisible();
    await expect(page.getByText("Single Occupancy")).toBeVisible();
  });

  test("should fill contact details and proceed", async ({ page }) => {
    await page.getByLabel("Title").selectOption("Mr");
    await page.getByLabel("First Name").fill("Augustine");
    await page.getByLabel("Last Name").fill("Emegwara");
    await page.getByLabel("Phone Number").fill("+447369630");
    await page.getByLabel("Email address").fill("emeghara.augustine@gmail.com");

    await page.getByRole("button", { name: "Continue" }).click();

    await expect(page.getByText("Booking details")).toBeVisible();
    await expect(page.getByText("Personal")).toBeVisible();
  });

  test("should submit form with valid data", async ({ page }) => {
    await page.getByLabel("Title").selectOption("Ms");
    await page.getByLabel("First Name").fill("Augustine");
    await page.getByLabel("Last Name").fill("Emegwara");
    await page.getByLabel("Phone Number").fill("+447369630");
    await page.getByLabel("Email address").fill("emegwara.augustine@gmail.com");
    await page.getByRole("button", { name: "Continue" }).click();

    await page.getByLabel("Personal").check();
    await page.getByLabel("Business").check();
    await page.getByLabel("Business").check();
    await page.getByLabel("Layover").selectOption("Layover");
    await page.getByLabel("Derry / Londonderry").fill("Derry / Londonderry");
    await page
      .getByLabel("11 Jun 2025 | 18 Jun 2025")
      .fill("11 Jun 2025 | 18 Jun 2025");
    await page.getByLabel("Premier Inn Breakfast").check();
    await page.getByRole("button", { name: "Continue" }).click();

    await page
      .getByLabel("Travelling/staying with children (2-15 years)")
      .check();
    await page.getByLabel("Accessible room is needed").check();
    await page.getByLabel("Single Occupancy").fill("3");
    await page.getByLabel("Double Occupancy").fill("2");
    await page.getByLabel("Twin").fill("2");
    await page.getByLabel("Additional information (optional)").fill("shhss");

    await page.getByRole("button", { name: "Submit request" }).click();

    await expect(page.getByText("Form submitted successfully!")).toBeVisible();
  });
});
