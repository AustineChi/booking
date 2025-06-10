import { test, expect } from '@playwright/test';

test.describe('Premier Inn Group Booking Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/form');
  });

  test('should navigate between steps', async ({ page }) => {
    await page.getByRole('button', { name: 'Contact details' }).click();
    await expect(page.getByText('Your contact details')).toBeVisible();

    await page.getByRole('button', { name: 'Booking details' }).click();
    await expect(
      page.locator('#accordion-content-1').getByRole('heading', { name: 'Booking details' })
    ).toBeVisible();
    await expect(page.getByLabel('Personal')).toBeVisible();

    await page.getByRole('button', { name: 'Room requirements' }).click();
    await expect(
      page.locator('#accordion-content-2').getByRole('heading', { name: 'Rooms' })
    ).toBeVisible();
    await expect(page.getByLabel('Single Occupancy')).toBeVisible();
  });

  test('should fill contact details and proceed', async ({ page }) => {
    await page.getByRole('button', { name: 'Contact details' }).click();
    await page.waitForSelector('#accordion-content-0 >> text=Your contact details');
    await expect(page.getByText('Your contact details')).toBeVisible();

    await page.locator('#accordion-content-0 >> [aria-label="Title"]').selectOption('Mr');
    await page.getByLabel('First Name').fill('Augustine');
    await page.getByLabel('Last Name').fill('Emegwara');
    await page.getByLabel('Phone Number').fill('+447369630');
    await page.getByLabel('Email address').fill('emeghara.augustine@gmail.com');

    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(
      page.locator('#accordion-content-1').getByRole('heading', { name: 'Booking details' })
    ).toBeVisible();
    await expect(page.getByLabel('Personal')).toBeVisible();
  });

  test('should submit form with valid data', async ({ page }) => {

    await page.getByRole('button', { name: 'Contact details' }).click();
    await page.waitForSelector('#accordion-content-0 >> text=Your contact details');
    await page.locator('#accordion-content-0 >> [aria-label="Title"]').selectOption('Ms');
    await page.getByLabel('First Name').fill('Augustine');
    await page.getByLabel('Last Name').fill('Emegwara');
    await page.getByLabel('Phone Number').fill('+447369630');
    await page.getByLabel('Email address').fill('emegwara.augustine@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();

    await page.getByRole('button', { name: 'Booking details' }).click();
    await page.waitForSelector('#accordion-content-1 >> text=Booking details');
    await page.getByLabel('Personal').check();
    await page.getByLabel('Business').check();
    await page.getByLabel('Layover').selectOption('Layover');
    await page.getByLabel('Enter a hotel').fill('Derry / Londonderry');
    await page.getByLabel('Check In | Check Out').fill('11 Jun 2025 | 18 Jun 2025');
    await page.getByLabel('Premier Inn breakfast').check();
    await page.getByRole('button', { name: 'Continue' }).click();

    await page.getByRole('button', { name: 'Room requirements' }).click();
    await page.waitForSelector('#accordion-content-2 >> text=Rooms');
    await page.getByLabel('Travelling/staying with children (2-15 years)').check();
    await page.getByLabel('Accessible room is needed').check();
    await page.getByLabel('Single Occupancy').fill('3');
    await page.getByLabel('Double Occupancy').fill('2');
    await page.getByLabel('Twin').fill('2');
    await page.getByLabel('Additional information (optional)').fill('shhss');

    await page.route('**/api/submit', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Form submitted success!' }),
      })
    );

    await page.getByRole('button', { name: 'Submit request' }).click();
    await expect(page.getByText('Form submitted success!')).toBeVisible();
  });
});