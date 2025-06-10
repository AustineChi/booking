import { test, expect } from '@playwright/test';

test.describe('Group Booking Form', () => {
  test('submits the form successfully', async ({ page }) => {
    // Navigate to the group booking page
    await page.goto('/group-booking');

    // Fill out the form
    await page.selectOption('select[name="title"]', { value: 'Mr' });
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="phoneNumber"]', '1234567890');
    await page.fill('input[name="emailAddress"]', 'john.doe@example.com');

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for a success message or redirection (adjust based on your app)
    await expect(page.locator('text=Thank you for your request')).toBeVisible();
  });

  test('shows validation error for empty fields', async ({ page }) => {
    // Navigate to the group booking page
    await page.goto('/group-booking');

    // Submit without filling fields
    await page.click('button[type="submit"]');

    // Check for validation errors
    await expect(page.locator('text=Please fill in all fields')).toBeVisible();
  });
});