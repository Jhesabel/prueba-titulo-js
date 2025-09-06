const{test, expect}= require('@playwright/test');
test('valida el titulo exacto' , async ({ page })=>{
   //Abre la pagina example.com
    await page.goto('https://example.com//');
    await sleep(5000);
   //Verificacion del titulo exacto

   await expect(page).toHaveTitle('Example Domain')
});
test('valida titulo con regex (contiene una palabra )', async ({ page })=>{
    //Abre la pagina example.com
    await page.goto('https://example.com//');
    await sleep(5000);
   //Verificacion palabra
   await expect(page).toHaveTitle(/Example/)
});

test('valida el titulo exacto en Google', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await sleep(5000);

  await expect(page).toHaveTitle('Google');
});

test('valida titulo con regex en Google', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await sleep(5000);

  await expect(page).toHaveTitle(/Google/);
});

test('valida el titulo exacto en YouTube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await sleep(5000);

  await expect(page).toHaveTitle('YouTube');
});

test('valida titulo con regex en YouTube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await sleep(5000);

  await expect(page).toHaveTitle(/YouTube/);
});

test('valida el titulo exacto en Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await sleep(5000);

  await expect(page).toHaveTitle('Wikipedia');
});

test('valida titulo con regex en Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await sleep(5000);

  await expect(page).toHaveTitle(/Wiki/);
});

function sleep (time) {
   return new Promise((resolve) =>setTimeout(resolve, time));
}