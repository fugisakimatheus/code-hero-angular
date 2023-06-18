import { test, expect } from '@playwright/test';
import {
  characterListRequestMockPage1,
  characterDetailRequestMock,
} from './data-mock';

test.describe('Character Details', () => {
  test('Should go to and show character details', async ({ page }) => {
    await page.route(
      /https:\/\/gateway.marvel.com\/v1\/public\/characters/,
      async (route, request) => {
        if (request.url().includes('1017100')) {
          await route.fulfill({
            status: 200,
            json: characterDetailRequestMock,
          });
        } else {
          await route.fulfill({
            status: 200,
            json: characterListRequestMockPage1,
          });
        }
      }
    );

    await page.goto('/');

    await page.getByText('3-D Man', { exact: true }).click();

    await expect(page).toHaveURL(
      'http://localhost:4200/character-details/1011334'
    );

    const finded = page.getByText('Marvel Premiere (1972 - 1981)', {
      exact: true,
    });

    await expect(finded).toHaveText('Marvel Premiere (1972 - 1981)');
  });

  test('Should go back to list', async ({ page }) => {
    await page.route(
      /https:\/\/gateway.marvel.com\/v1\/public\/characters/,
      async (route, request) => {
        if (request.url().includes('1017100')) {
          await route.fulfill({
            status: 200,
            json: characterDetailRequestMock,
          });
        } else {
          await route.fulfill({
            status: 200,
            json: characterListRequestMockPage1,
          });
        }
      }
    );

    await page.goto('/character-details/1011334');

    const finded1 = page.getByText('Marvel Premiere (1972 - 1981)', {
      exact: true,
    });

    await expect(finded1).toHaveText('Marvel Premiere (1972 - 1981)');

    await page.getByRole('button', { name: 'Voltar', exact: true }).click();

    const finded2 = page.getByText('A-Bomb (HAS)', {
      exact: true,
    });

    await expect(finded2).toHaveText('A-Bomb (HAS)');
  });
});
