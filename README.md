# rsclone-api
Api for Rolling Scopes School task "RSClone".

## Setup and Running
- Use `node 14.x` or higher.
- Clone this repo: `$ git clone https://github.com/strei-foxflashbacks/rsclone-api`.
- Go to downloaded folder: `$ cd rsclone-api`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start`.
- Now you can send requests to the address: `http://127.0.0.1:3000`.

## Usage

- **Films**
    - [Get Films](https://github.com/strei-foxflashbacks/rsclone-api/tree/develop#get-films)
    - [Get Film](https://github.com/strei-foxflashbacks/rsclone-api/tree/develop#get-film)
- **Persons**
    - [Get Persons](https://github.com/strei-foxflashbacks/rsclone-api/tree/develop#get-persons)
    - [Get Person](https://github.com/strei-foxflashbacks/rsclone-api/tree/develop#get-person)

**Get Films**
----
Returns json data from films database.

<details>

* **URL**

    /films

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Optional:**

    `page=[integer]`

    `limit=[integer]`

    If `limit` param is passed api returns a header `X-Total-Count` that countains total number of records.

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```JavaScript
      [
        {
          id: 1,
          name: 'Континенталь',
          slogan: 'Испанская версия «Острых козырьков»',
          ratings: [7, 7],
          age: '16+',
          originalName: 'El Continental',
          poster: 'https://pic.showjet.ru/pics/57358089-7937-4e8c-b650-7a44bac85d5f/10x5/1250.jpg',
          summary: '1 сезон / криминал, драма, 2018',
          trailer: [{ thumbnail: 'https://pic.showjet.ru/pics/eafa7275-22f1-42eb-aeb0-04b8f2baa190/10x5/550.jpg', src: '' }],
          thumbnails: [
            'https://pic.showjet.ru/pics/d8a6a58d-1e25-4310-ba96-09883523b26e/10x7/1000.jpg',
            'https://pic.showjet.ru/pics/65bb0ba9-8922-4a8e-a333-1e03ff2d01c9/10x7/1000.jpg',
            'https://pic.showjet.ru/pics/425bc2c0-ffad-4194-bff9-d176c9c81ca6/10x7/1000.jpg',
            'https://pic.showjet.ru/pics/ed11242f-86b0-4464-ab2e-4fa7566deef2/10x7/1000.jpg',
            'https://pic.showjet.ru/pics/82677ac2-45f6-4ef1-be12-30a126f19d0d/10x7/1000.jpg',
            'https://pic.showjet.ru/pics/a0fb80d3-654b-4164-8a85-15d65c0be4d7/10x7/1000.jpg',
          ],
          description: 'Стильная гангстерская драма из Испании в лучших традициях «Острых козырьков». \nМадрид, 1920-е годы. Местный гангстер Рикардо Леон промышляет нелегальной продажей алкоголя и хочет расширить свой бизнес. Он решает возродить пафосное, но убыточного кафе «Континенталь», чтобы превратить его в самое модное заведение города. Однако Леон преследует личные цели: завоевать сердце своенравной дочери владельца «Континенталя» и переиграть главного врага — собственного дядю.',
          usersRating: 5,
          reviews: [''],
          genre: 'криминал, драма',
          release: ['17 сентября 2018 г.', '01 июля 2021 г.'],
          audio: 'Испанский, Русский',
          countries: 'Испания',
          actors: [
            { personId: 62, role: 'Белице' },
            { personId: 63, role: 'Баэна' },
            { personId: 64, role: 'Глория' },
            { personId: 65, role: 'Альфонсо Абаскал' },
            { personId: 66, role: 'Рикардо Леон' },
            { personId: 67, role: 'Андреа Абаскал' },
          ],
          director: [
            { personId: 68, role: 'Frank Ariza' },
            { personId: 69, role: 'Kiké Maíllo' },
          ],
          producers: [
            { personId: 68, role: 'Frank Ariza' },
            { personId: 70, role: 'Maite López Pisonero' },
          ],
          facts: [
            '',
          ],
          wins: ['Телевизионная премия BAFTA: Лучшие визуальные эффекты'],
          type: 'serial',
          serial: {
            seasonsQty: 1,
            seasons: [
              {
                seasonInfo: 'Сезон 1 / 2010',
                episodes: [
                  { name: 'Эпизод 1', thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg', src: '' },
                  { name: 'Эпизод 2', thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg', src: '' },
                  { name: 'Эпизод 3', thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg', src: '' },
                  { name: 'Эпизод 4', thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg', src: '' },
                ],
              },
            ],
          },
        },
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "10"
    ```

* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get Film**
----
Returns json data about specified film.

<details>

* **URL**

    /films/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**

    `id=[integer]`

* **Query Params**

    **Optional:**

    `season=[integer]`

    * **Success Response:**

      * **Code:** 200 OK <br />
        **Content:**
        ```JavaScript
          {
            seasonInfo: 'Сезон 1 / 2010',
            episodes: [
              { name: 'Эпизод 1', thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg', src: '' },
              { name: 'Эпизод 2', thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg', src: '' },
              { name: 'Эпизод 3', thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg', src: '' },
              { name: 'Эпизод 4', thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg', src: '' },
            ]
          }
        ```
    * **Error Response:**

      * **Code:** 404 NOT FOUND <br />
        **Content:**

        No such season, sorry

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```JavaScript
      {
        id: 1,
        name: 'Континенталь',
        slogan: 'Испанская версия «Острых козырьков»',
        ratings: [7, 7],
        age: '16+',
        originalName: 'El Continental',
        poster: 'https://pic.showjet.ru/pics/57358089-7937-4e8c-b650-7a44bac85d5f/10x5/1250.jpg',
        summary: '1 сезон / криминал, драма, 2018',
        trailer: [{ thumbnail: 'https://pic.showjet.ru/pics/eafa7275-22f1-42eb-aeb0-04b8f2baa190/10x5/550.jpg', src: '' }],
        thumbnails: [
          'https://pic.showjet.ru/pics/d8a6a58d-1e25-4310-ba96-09883523b26e/10x7/1000.jpg',
          'https://pic.showjet.ru/pics/65bb0ba9-8922-4a8e-a333-1e03ff2d01c9/10x7/1000.jpg',
          'https://pic.showjet.ru/pics/425bc2c0-ffad-4194-bff9-d176c9c81ca6/10x7/1000.jpg',
          'https://pic.showjet.ru/pics/ed11242f-86b0-4464-ab2e-4fa7566deef2/10x7/1000.jpg',
          'https://pic.showjet.ru/pics/82677ac2-45f6-4ef1-be12-30a126f19d0d/10x7/1000.jpg',
          'https://pic.showjet.ru/pics/a0fb80d3-654b-4164-8a85-15d65c0be4d7/10x7/1000.jpg',
        ],
        description: 'Стильная гангстерская драма из Испании в лучших традициях «Острых козырьков». \nМадрид, 1920-е годы. Местный гангстер Рикардо Леон промышляет нелегальной продажей алкоголя и хочет расширить свой бизнес. Он решает возродить пафосное, но убыточного кафе «Континенталь», чтобы превратить его в самое модное заведение города. Однако Леон преследует личные цели: завоевать сердце своенравной дочери владельца «Континенталя» и переиграть главного врага — собственного дядю.',
        usersRating: 5,
        reviews: [''],
        genre: 'криминал, драма',
        release: ['17 сентября 2018 г.', '01 июля 2021 г.'],
        audio: 'Испанский, Русский',
        countries: 'Испания',
        actors: [
          { personId: 62, role: 'Белице' },
          { personId: 63, role: 'Баэна' },
          { personId: 64, role: 'Глория' },
          { personId: 65, role: 'Альфонсо Абаскал' },
          { personId: 66, role: 'Рикардо Леон' },
          { personId: 67, role: 'Андреа Абаскал' },
        ],
        director: [
          { personId: 68, role: 'Frank Ariza' },
          { personId: 69, role: 'Kiké Maíllo' },
        ],
        producers: [
          { personId: 68, role: 'Frank Ariza' },
          { personId: 70, role: 'Maite López Pisonero' },
        ],
        facts: [
          '',
        ],
        wins: ['Телевизионная премия BAFTA: Лучшие визуальные эффекты'],
        type: 'serial',
        serial: {
          seasonsQty: 1,
          seasons: [
            {
              seasonInfo: 'Сезон 1 / 2010',
              episodes: [
                { name: 'Эпизод 1', thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg', src: '' },
                { name: 'Эпизод 2', thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg', src: '' },
                { name: 'Эпизод 3', thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg', src: '' },
                { name: 'Эпизод 4', thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg', src: '' },
              ],
            },
          ],
        },
      }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**

    No such film, sorry

* **Notes:**

    None

</details>

**Get Persons**
----
Returns json data from persons database.

<details>

* **URL**

    /persons

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

* **Code:** 200 OK <br />
  **Content:**
  ```JavaScript
    [
      {
        id: 1,
        img: 'https://pic.showjet.ru/pics/932b74ff-6252-43f7-85e4-b85aea3e7102/10x5/1250.jpg',
        imgMin: 'https://pic.showjet.ru/pics/932b74ff-6252-43f7-85e4-b85aea3e7102/10x10/100.jpg',
        nameRu: 'Стив Пембертон',
        nameEn: 'Steve Pemberton',
        profession: 'актёр, режиссёр, сценарист, продюсер',
        birth: 'Дата рождения 01 сентября 1967 г., Блэкберн, Ланкашир, Англия, Великобритания',
        filmIds: [2],
      }
    ]
  ```

* **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:**

    None

</details>

**Get Person**
----
Returns json data about specified person.

<details>

* **URL**

    /persons/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**

    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

* **Code:** 200 OK <br />
  **Content:**
  ```JavaScript
    {
      id: 1,
      img: 'https://pic.showjet.ru/pics/932b74ff-6252-43f7-85e4-b85aea3e7102/10x5/1250.jpg',
      imgMin: 'https://pic.showjet.ru/pics/932b74ff-6252-43f7-85e4-b85aea3e7102/10x10/100.jpg',
      nameRu: 'Стив Пембертон',
      nameEn: 'Steve Pemberton',
      profession: 'актёр, режиссёр, сценарист, продюсер',
      birth: 'Дата рождения 01 сентября 1967 г., Блэкберн, Ланкашир, Англия, Великобритания',
      filmIds: [2],
    }
  ```

* **Error Response:**

* **Code:** 404 NOT FOUND <br />
  **Content:**

  No such person, sorry

</details>
