const { test, expect } = require('@playwright/test');

const casos = [
  { name: "Caso 1", url: "https://example.com/", esperado: "Example Domain" },
  { name: "Caso 2", url: "https://example.com/", esperado: /Example/ },
  { name: "Caso 3", url: "https://www.google.com/", esperado: "Google" },
  { name: "Caso 4", url: "https://www.google.com/", esperado: /Google/ },
  { name: "Caso 5", url: "https://www.youtube.com/", esperado: "YouTube" },
  { name: "Caso 6", url: "https://www.youtube.com/", esperado: /YouTube/ },
   { name: "Caso 7", url: "https://github.com/", esperado: /GitHub/i },
  { name: "Caso 8", url: "https://github.com/", esperado: /GitHub/i },
  { name: "Caso 9", url: "https://www.wikipedia.org/", esperado: "Wikipedia" },
  { name: "Caso 10", url: "https://www.wikipedia.org/", esperado: /Wiki/ },

];

for (const {name, url, esperado } of casos) {
  test(`valida el titulo correcto en ${name}`, async ({ page }) => {
    // Abre la página
    await page.goto(url);
    await sleep(3000);

    // Verificación del título exacto
    await expect(page).toHaveTitle(esperado);
  });
}

function sleep (time) {
   return new Promise((resolve) =>setTimeout(resolve, time));
}