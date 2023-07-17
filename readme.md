## GoIT Node.js Course Template Homework

Виконайте форк цього репозиторію для виконання домашніх завдань (2-6)
Форк створить репозиторій на вашому http://github.com

Додайте ментора до колаборації

Для кожної домашньої роботи створюйте свою гілку.

- hw02
- hw03
- hw04
- hw05
- hw06

Кожна нова гілка для др повинна робитися з master

Після того, як ви закінчили виконувати домашнє завдання у своїй гілці, необхідно зробити пулл-реквест (PR). Потім додати ментора для рев'ю коду. Тільки після того, як ментор заапрувить PR, ви можете виконати мердж гілки з домашнім завданням у майстер.

Уважно читайте коментарі ментора. Виправте зауваження та зробіть коміт у гілці з домашнім завданням. Зміни підтягнуться у PR автоматично після того, як ви відправите коміт з виправленнями на github
Після виправлення знову додайте ментора на рев'ю коду.

- При здачі домашньої роботи є посилання на PR
- JS-код чистий та зрозумілий, для форматування використовується Prettier

### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок
  npm i nodemon --devDependencies установка nodemon
  npm i nodemon --save-dev
  npx nodemon contacts.js
  npx nodemon server.js

  $ npm install --global yarn -install yarn
  $ yarn - start yarn
  $ yarn add express -install express
  $ yarn start:dev - запуск додатка
  yarn add cors - пакет для разрешения крос доменных запрсов (запросы с одного сайта на другой)
  hw3👇
  1R433zjq0Ee6evVw
  mongodb+srv://Dmytro:1R433zjq0Ee6evVw@cluster0.igrmbda.mongodb.net/test
  My ToDo Pet👇
  Bi..........54
  mongodb+srv://Dmytro:Bi..........54@cluster0.jga5tum.mongodb.net/?retryWrites=true&w=majority

1 URL: http://localhost:3000/api/contacts
Получение всех контактов (GET /api/contacts):
Метод: GET

## URL: http://localhost:3000/api/contacts

2
Получение контакта по идентификатору (GET /api/contacts/:contactId):
Метод: GET

## URL: http://localhost:3000/api/contacts/1

(где 1 - идентификатор контакта)

3
Добавление контакта (POST /api/contacts):
Метод: POST

## URL: http://localhost:3000/api/contacts

Тело запроса (body): JSON
{
"text": "Новый контакт"
}

4
Обновление контакта по идентификатору (PUT /api/contacts/:contactId):
Метод: PUT

## URL: http://localhost:3000/api/contacts/1

(где 1 - идентификатор контакта)
Тело запроса (body): JSON
{
"text": "Обновленный контакт"
}
5
Удаление контакта по идентификатору (DELETE /api/contacts/:contactId):

Метод: DELETE

## URL: http://localhost:3000/api/contacts/1

(где 1 - идентификатор контакта)

strapi.io для интернет магазинов (надо посмотреть)

