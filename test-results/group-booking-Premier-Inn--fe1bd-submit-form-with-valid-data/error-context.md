# Test info

- Name: Premier Inn Group Booking Form >> should submit form with valid data
- Location: /Users/emeghara/Documents/booking/e2e/group-booking.spec.ts:49:7

# Error details

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#accordion-content-0').locator('[aria-label="Title"]')

    at /Users/emeghara/Documents/booking/e2e/group-booking.spec.ts:53:72
```

# Page snapshot

```yaml
- banner:
  - link "Premier Inn Logo":
    - /url: /en
    - img "Premier Inn Logo"
  - link "View form in German":
    - /url: /de/form
    - text: Deutsch
  - button "Switch to dark theme": 🌙 Dark Mode
- heading "Request a group booking" [level=1]
- strong: Planning a group event and need 10 or more rooms?
- text: Fill out the form below! Once we’ve received your request, our group booking team will be in touch.
- button "Contact details" [expanded]
- region:
  - paragraph: Your contact details
  - group:
    - combobox:
      - img
    - text: Title
  - text: First Name
  - textbox
  - text: First Name Last Name
  - textbox
  - text: Last Name
  - group "Phone Number":
    - text: Phone Number
    - combobox "Country code":
      - option "🇬🇧 +44" [selected]
      - option "🇦🇫 +93"
      - option "🇦🇱 +355"
      - option "🇩🇿 +213"
      - option "🇦🇩 +376"
      - option "🇦🇴 +244"
      - option "🇦🇷 +54"
      - option "🇦🇲 +374"
      - option "🇦🇺 +61"
      - option "🇨🇭 +41"
      - option "🇹🇼 +886"
      - option "🇹🇿 +255"
      - option "🇹🇭 +66"
      - option "🇹🇬 +228"
      - option "🇹🇳 +216"
      - option "🇹🇷 +90"
      - option "🇺🇬 +256"
      - option "🇺🇦 +380"
      - option "🇦🇪 +971"
      - option "🇺🇸 +1"
      - option "🇺🇾 +598"
      - option "🇺🇿 +998"
      - option "🇻🇪 +58"
      - option "🇻🇳 +84"
      - option "🇾🇪 +967"
      - option "🇿🇲 +260"
      - option "🇿🇼 +263"
    - textbox "Phone Number"
  - text: Email Address
  - textbox
  - text: Email Address
  - button "Continue"
- button "Booking details"
- button "Room requirements"
- contentinfo:
  - button "Cancel and return to home":
    - img
    - text: Cancel and return to home
- region "Notifications Alt+T"
- alert
- button "Open Next.js Dev Tools":
  - img
- button "Open issues overlay": 1 Issue
- button "Collapse issues badge":
  - img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('Premier Inn Group Booking Form', () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     await page.goto('/en/form');
   6 |   });
   7 |
   8 |   test('should navigate between steps', async ({ page }) => {
   9 |     await page.getByRole('button', { name: 'Contact details' }).click();
  10 |     await expect(page.getByText('Your contact details')).toBeVisible();
  11 |
  12 |     await page.getByRole('button', { name: 'Booking details' }).click();
  13 |     await expect(
  14 |       page.locator('#accordion-content-1').getByRole('heading', { name: 'Booking details' })
  15 |     ).toBeVisible();
  16 |     await expect(page.getByLabel('Personal')).toBeVisible();
  17 |
  18 |     await page.getByRole('button', { name: 'Room requirements' }).click();
  19 |     await expect(
  20 |       page.locator('#accordion-content-2').getByRole('heading', { name: 'Rooms' })
  21 |     ).toBeVisible();
  22 |     await expect(page.getByLabel('Single Occupancy')).toBeVisible();
  23 |   });
  24 |
  25 |   test('should fill contact details and proceed', async ({ page }) => {
  26 |     await page.getByRole('button', { name: 'Contact details' }).click();
  27 |     await page.waitForSelector('#accordion-content-0 >> text=Your contact details');
  28 |     await expect(page.getByText('Your contact details')).toBeVisible();
  29 |
  30 |     await page.locator('#accordion-content-0 >> [aria-label="Title"]').selectOption('Mr');
  31 |     await page.getByLabel('First Name').fill('Augustine');
  32 |     await page.getByLabel('Last Name').fill('Emegwara');
  33 |     await page.getByLabel('Phone Number').fill('+447369630');
  34 |     await page.getByLabel('Email address').fill('emeghara.augustine@gmail.com');
  35 |
  36 |     await page.getByRole('button', { name: 'Continue' }).click();
  37 |     await expect(
  38 |       page.locator('#accordion-content-1').getByRole('heading', { name: 'Booking details' })
  39 |     ).toBeVisible();
  40 |     await expect(page.getByLabel('Personal')).toBeVisible();
  41 |   });
  42 |
  43 |   test('should submit form with valid data', async ({ page }) => {
  44 |
  45 |     await page.getByRole('button', { name: 'Contact details' }).click();
  46 |     await page.waitForSelector('#accordion-content-0 >> text=Your contact details');
  47 |     await page.locator('#accordion-content-0 >> [aria-label="Title"]').selectOption('Ms');
  48 |     await page.getByLabel('First Name').fill('Augustine');
  49 |     await page.getByLabel('Last Name').fill('Emegwara');
  50 |     await page.getByLabel('Phone Number').fill('+447369630');
  51 |     await page.getByLabel('Email address').fill('emegwara.augustine@gmail.com');
  52 |     await page.getByRole('button', { name: 'Continue' }).click();
> 53 |
     | ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  54 |     await page.getByRole('button', { name: 'Booking details' }).click();
  55 |     await page.waitForSelector('#accordion-content-1 >> text=Booking details');
  56 |     await page.getByLabel('Personal').check();
  57 |     await page.getByLabel('Business').check();
  58 |     await page.getByLabel('Layover').selectOption('Layover');
  59 |     await page.getByLabel('Enter a hotel').fill('Derry / Londonderry');
  60 |     await page.getByLabel('Check In | Check Out').fill('11 Jun 2025 | 18 Jun 2025');
  61 |     await page.getByLabel('Premier Inn breakfast').check();
  62 |     await page.getByRole('button', { name: 'Continue' }).click();
  63 |
  64 |     await page.getByRole('button', { name: 'Room requirements' }).click();
  65 |     await page.waitForSelector('#accordion-content-2 >> text=Rooms');
  66 |     await page.getByLabel('Travelling/staying with children (2-15 years)').check();
  67 |     await page.getByLabel('Accessible room is needed').check();
  68 |     await page.getByLabel('Single Occupancy').fill('3');
  69 |     await page.getByLabel('Double Occupancy').fill('2');
  70 |     await page.getByLabel('Twin').fill('2');
  71 |     await page.getByLabel('Additional information (optional)').fill('shhss');
  72 |
  73 |     await page.route('**/api/submit', (route) =>
  74 |       route.fulfill({
  75 |         status: 200,
  76 |         contentType: 'application/json',
  77 |         body: JSON.stringify({ message: 'Form submitted success!' }),
  78 |       })
  79 |     );
  80 |
  81 |     await page.getByRole('button', { name: 'Submit request' }).click();
  82 |     await expect(page.getByText('Form submitted success!')).toBeVisible();
  83 |   });
  84 | });
```