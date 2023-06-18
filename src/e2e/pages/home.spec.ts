import { test, expect } from '@playwright/test';
import {
  characterListRequestMockPage1,
  characterListRequestMockPage2,
  characterListRequestMockSearch,
} from './data-mock';

test.describe('Home', () => {
  test('Should has page title', async ({ page }) => {
    await page.route(
      'https://gateway.marvel.com/v1/public/characters?apikey=73a70d052907f8020f59ffd206209d48&limit=8&offset=0',
      async (route) => {
        await route.fulfill({
          status: 200,
          json: characterListRequestMockPage1,
        });
      }
    );

    await page.goto('/');
    await expect(page).toHaveTitle(/Hero - Início/);
  });

  test('Should go to character details', async ({ page }) => {
    await page.route(
      'https://gateway.marvel.com/v1/public/characters?apikey=73a70d052907f8020f59ffd206209d48&limit=8&offset=0',
      async (route) => {
        await route.fulfill({
          status: 200,
          json: characterListRequestMockPage1,
        });
      }
    );

    await page.goto('/');

    await page.getByText('3-D Man', { exact: true }).click();

    await expect(page).toHaveURL(
      'http://localhost:4200/character-details/1011334'
    );
  });

  test('Should change page in paginator', async ({ page }) => {
    await page.route(
      /https:\/\/gateway.marvel.com\/v1\/public\/characters/,
      async (route, request) => {
        if (request.url().includes('offset=0')) {
          await route.fulfill({
            status: 200,
            json: characterListRequestMockPage1,
          });
        }

        if (request.url().includes('offset=8')) {
          await route.fulfill({
            status: 200,
            json: characterListRequestMockPage2,
          });
        }
      }
    );

    await page.goto('/');

    await page.getByRole('button', { name: '2', exact: true }).click();

    const finded = page.getByText('Adam Warlock', {
      exact: true,
    });

    await expect(finded).toHaveText('Adam Warlock');
  });

  test('Should search by name', async ({ page }) => {
    await page.route(
      /https:\/\/gateway.marvel.com\/v1\/public\/characters/,
      async (route, request) => {
        if (request.url().includes('nameStartsWith=spider')) {
          await route.fulfill({
            status: 200,
            json: characterListRequestMockSearch,
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

    await page.getByPlaceholder('Search').type('spider');

    await page.waitForTimeout(600);

    const finded = page.getByText('Spider-dok', {
      exact: true,
    });

    await expect(finded).toHaveText('Spider-dok');
  });
});
