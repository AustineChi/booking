# Test info

- Name: Premier Inn Group Booking Form >> should fill contact details and proceed
- Location: /Users/emeghara/Documents/booking/e2e/group-booking.spec.ts:28:7

# Error details

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#accordion-content-0').locator('[aria-label="Title"]')

    at /Users/emeghara/Documents/booking/e2e/group-booking.spec.ts:35:72
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
   9 |     // Activate "Contact details" step
  10 |     await page.getByRole('button', { name: 'Contact details' }).click();
  11 |     await expect(page.getByText('Your contact details')).toBeVisible();
  12 |
  13 |     // Navigate to "Booking details" and scope to its content
  14 |     await page.getByRole('button', { name: 'Booking details' }).click();
  15 |     await expect(
  16 |       page.locator('#accordion-content-1').getByRole('heading', { name: 'Booking details' })
  17 |     ).toBeVisible();
  18 |     await expect(page.getByLabel('Personal')).toBeVisible();
  19 |
  20 |     // Navigate to "Room requirements" and scope to its heading
  21 |     await page.getByRole('button', { name: 'Room requirements' }).click();
  22 |     await expect(
  23 |       page.locator('#accordion-content-2').getByRole('heading', { name: 'Rooms' })
  24 |     ).toBeVisible();
  25 |     await expect(page.getByLabel('Single Occupancy')).toBeVisible();
  26 |   });
  27 |
  28 |   test('should fill contact details and proceed', async ({ page }) => {
  29 |     // Activate "Contact details" step and wait for content
  30 |     await page.getByRole('button', { name: 'Contact details' }).click();
  31 |     await page.waitForSelector('#accordion-content-0 >> text=Your contact details');
  32 |     await expect(page.getByText('Your contact details')).toBeVisible();
  33 |
  34 |     // Fill the form using a more specific locator for the select
> 35 |     await page.locator('#accordion-content-0 >> [aria-label="Title"]').selectOption('Mr');
     |                                                                        ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  36 |     await page.getByLabel('First Name').fill('Augustine');
  37 |     await page.getByLabel('Last Name').fill('Emegwara');
  38 |     await page.getByLabel('Phone Number').fill('+447369630');
  39 |     await page.getByLabel('Email address').fill('emeghara.augustine@gmail.com');
  40 |
  41 |     // Submit to next step
  42 |     await page.getByRole('button', { name: 'Continue' }).click();
  43 |     await expect(
  44 |       page.locator('#accordion-content-1').getByRole('heading', { name: 'Booking details' })
  45 |     ).toBeVisible();
  46 |     await expect(page.getByLabel('Personal')).toBeVisible();
  47 |   });
  48 |
  49 |   test('should submit form with valid data', async ({ page }) => {
  50 |     // Contact Details Step
  51 |     await page.getByRole('button', { name: 'Contact details' }).click();
  52 |     await page.waitForSelector('#accordion-content-0 >> text=Your contact details');
  53 |     await page.locator('#accordion-content-0 >> [aria-label="Title"]').selectOption('Ms');
  54 |     await page.getByLabel('First Name').fill('Augustine');
  55 |     await page.getByLabel('Last Name').fill('Emegwara');
  56 |     await page.getByLabel('Phone Number').fill('+447369630');
  57 |     await page.getByLabel('Email address').fill('emegwara.augustine@gmail.com');
  58 |     await page.getByRole('button', { name: 'Continue' }).click();
  59 |
  60 |     // Booking Details Step
  61 |     await page.getByRole('button', { name: 'Booking details' }).click();
  62 |     await page.waitForSelector('#accordion-content-1 >> text=Booking details');
  63 |     await page.getByLabel('Personal').check();
  64 |     await page.getByLabel('Business').check();
  65 |     await page.getByLabel('Layover').selectOption('Layover');
  66 |     await page.getByLabel('Enter a hotel').fill('Derry / Londonderry');
  67 |     await page.getByLabel('Check In | Check Out').fill('11 Jun 2025 | 18 Jun 2025'); // Adjust for date picker
  68 |     await page.getByLabel('Premier Inn breakfast').check();
  69 |     await page.getByRole('button', { name: 'Continue' }).click();
  70 |
  71 |     // Room Requirements Step
  72 |     await page.getByRole('button', { name: 'Room requirements' }).click();
  73 |     await page.waitForSelector('#accordion-content-2 >> text=Rooms');
  74 |     await page.getByLabel('Travelling/staying with children (2-15 years)').check();
  75 |     await page.getByLabel('Accessible room is needed').check();
  76 |     await page.getByLabel('Single Occupancy').fill('3');
  77 |     await page.getByLabel('Double Occupancy').fill('2');
  78 |     await page.getByLabel('Twin').fill('2');
  79 |     await page.getByLabel('Additional information (optional)').fill('shhss');
  80 |
  81 |     // Mock API response
  82 |     await page.route('**/api/submit', (route) =>
  83 |       route.fulfill({
  84 |         status: 200,
  85 |         contentType: 'application/json',
  86 |         body: JSON.stringify({ message: 'Form submitted success!' }),
  87 |       })
  88 |     );
  89 |
  90 |     await page.getByRole('button', { name: 'Submit request' }).click();
  91 |     await expect(page.getByText('Form submitted success!')).toBeVisible();
  92 |   });
  93 | });
```