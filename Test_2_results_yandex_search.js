
const puppeteer = require('puppeteer');

async function testYaRu(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({headless: false, slowMo: 250});

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу ya.ru');
    await page.goto('https://ya.ru/');

    console.log('Ввод текста "Автоматизация тестирования" в поисковую строку');
    const searchField = await page.$('#text');
    await searchField.type('Автоматизация тестирования');

    console.log('Клик в кнопку "Найти"');
    const searchButton = await page.$('button[type=submit]');
    await searchButton.click();
    
    console.log('Ожидание перехода в страницу поисковых результатов');
   await page.waitForNavigation('.serp-item');  // todo: напиши команду ожидания загрузки результата

    console.log('Получение элементов результата поиска');
    let result = await page.$('.serp-item');// todo: создай переменную result и положи в неё элемент поисковой выдачи

    console.log('Сравнение ОР и ФР');
    // todo:
  if  (result == null) {
      console.log('Результаты поиска не найдены');
  } else {
      console.log('Результаты поиска отобразились');
  } // напиши конструкцию if-else:
    // если результат null, выведи в консоль "Результаты поиска не найдены"
    // иначе, выведи в консоль "Результаты поиска отобразились" 
    
    console.log('Закрытие браузера');
    await browser.close();
}

testYaRu();