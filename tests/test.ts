import { expect, test } from '@playwright/test';

test('index page has the Eisenmatrix', async ({ page }) => {
	await page.goto('/');
	expect(await page.$('matrix-container')).not.toBeNull();
});
