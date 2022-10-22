import { chromium } from 'playwright-core';

export async function getPreviewImages(url: string) {
  const replacedUrl = url.replace(/\//g, '@');

  let browser = await chromium.launch();

  let page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1080 });
  await page.goto(url as string);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `public/previews/${replacedUrl}.png` });
  await browser.close();
}
