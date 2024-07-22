const { test, expect } = require('@playwright/test');

test('click test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/click');

    // >>>>> дополнить код здесь
    await page.locator("#badButton").click();
    // <<<<<

    await expect(await page.locator("#badButton").getAttribute("class")).toMatch(/btn-success/);
  });

test('checkbox and radio', async({page}) => {
  await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');

  // >>>>> дополнить код здесь
  await page.locator("[for=radio-1]").click();
  await page.locator("[for=checkbox-4]").click();
  await page.locator("[for=checkbox-nested-3]").click();
  await page.locator("[for=checkbox-nested-4]").click();
  // <<<<<

  await expect(page.locator("[for=radio-1]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-4]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-nested-3]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-nested-4]")).toHaveClass(/ui-checkboxradio-checked/);
});

test('login test', async({page}) => {
  await page.goto('http://uitestingplayground.com/sampleapp');

  const login = 'grace';

  await page.getByPlaceholder("User Name").fill(login);
  await page.getByPlaceholder("********").fill("pwd");

  await page.locator("#login").click();

  await expect(page.locator("#loginstatus")).toHaveText(`Welcome, ${login}!`)
  }
)


test('zoom page', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/textinput');
    await page.locator("#newButtonName").fill("Abc")

// >>>>> дополнить код здесь
    await page.locator("#newButtonName").press('Meta+A');
    await page.locator("#newButtonName").press('Meta+X');
    await page.locator("#newButtonName").press('Meta+V');
    await page.locator("#newButtonName").press('Meta+V');
    await page.locator("#newButtonName").press('Meta+V');

// <<<<<
    await page.locator("#updatingButton").click()
    await expect(page.locator("#updatingButton")).toHaveText("AbcAbcAbc")

});

test('get image caption', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');
  const image = await page.locator(".figure").nth(1)

  await image.hover();
  await expect(image.locator(".figcaption h5")).toBeVisible()
});

test('checkboxes', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/checkboxes');
  const form = page.locator("#checkboxes input")
  const cb1 = form.nth(0);
  const cb2 = form.nth(1);

// >>>>> дополнить код здесь
  await cb1.check();
  await cb2.uncheck();
// <<<<<

await expect(cb1).toBeChecked()
await expect(cb2).not.toBeChecked()
});


test('Проверяем, что 2+2 == 4', () => {
    expect(2+2, "Неправильно посчитали").toEqual(4);
});

test('Проверяем, что строка содержит `Abc`', () => {
    expect("Test"+"Abc").toContain('Abc');
})

test('Проверяем, что длина (length) массива == 3', () => {
    expect([1,2,3]).toHaveLength(3);
})

test('url and title', async ({ page }) => {
  await page.goto('http://habr.com/ru');

  // >>>>> дополнить код здесь
  await expect(page).toHaveTitle("Публикации / Моя лента / Хабр");
  await expect(page).toHaveURL("https://habr.com/ru/feed/");
  // <<<<<

});

test('url and title new', async ({ page }) => {
  await page.goto('https://inzhenerka.tech/');

  // >>>>> дополнить код здесь
  await expect(page.locator('[field=descr]').first()).toHaveText("Помогаем инженерам повысить свою квалификацию на рынке труда и приобрести навыки международного уровня");
  await expect(page.locator('h1')).toContainText("ИнженеркаТех");
  // <<<<<

});

 const url = (c) => `https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=${c}`;

test("check elements count", async ({ page }) => {
  await page.goto(url(120));

  // >>>>> дополнить код здесь
  await expect(page.locator("li.s-item[data-gr4]")).toHaveCount(120);
  // <<<<<

  await page.goto(url(240));

  // >>>>> дополнить код здесь
  await expect(page.locator("li.s-item[data-gr4]")).toHaveCount(240);
  // <<<<<
});
