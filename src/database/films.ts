import { Film } from '../types/Film';

const films: Film[] = [
  {
    id: 1,
    name: 'Континенталь',
    slogan: 'Испанская версия «Острых козырьков»',
    ratings: [7, 7],
    age: '16+',
    originalName: 'El Continental',
    poster: 'https://pic.showjet.ru/pics/57358089-7937-4e8c-b650-7a44bac85d5f/10x5/1250.jpg',
    summary: '1 сезон / криминал, драма, 2018',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/eafa7275-22f1-42eb-aeb0-04b8f2baa190/10x5/550.jpg',
        src: '1.mp4',
        subtitles: [
          {
            src: '1-sp.vtt',
            srcLang: 'sp',
            label: 'Spanish',
          },
          {
            src: '1-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/d8a6a58d-1e25-4310-ba96-09883523b26e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/65bb0ba9-8922-4a8e-a333-1e03ff2d01c9/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/425bc2c0-ffad-4194-bff9-d176c9c81ca6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/ed11242f-86b0-4464-ab2e-4fa7566deef2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/82677ac2-45f6-4ef1-be12-30a126f19d0d/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a0fb80d3-654b-4164-8a85-15d65c0be4d7/10x7/1000.jpg',
    ],
    description: 'Стильная гангстерская драма из Испании в лучших традициях «Острых козырьков». \nМадрид, 1920-е годы. Местный гангстер Рикардо Леон промышляет нелегальной продажей алкоголя и хочет расширить свой бизнес. Он решает возродить пафосное, но убыточного кафе «Континенталь», чтобы превратить его в самое модное заведение города. Однако Леон преследует личные цели: завоевать сердце своенравной дочери владельца «Континенталя» и переиграть главного врага — собственного дядю.',
    usersRating: 4,
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
    facts: [],
    wins: ['Телевизионная премия BAFTA: Лучшие визуальные эффекты'],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Опочтарение',
    slogan: 'Вам письмо!',
    ratings: [7.8, 7.7],
    age: '16+',
    originalName: 'Going Postal',
    poster: 'https://i.imgur.com/u0QyCmo.jpg',
    summary: '1 сезон / фэнтези, приключения, 2010',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/4440a521-5663-4d4e-8326-02bf205b665f/10x5/550.jpg',
        src: '2.mp4',
        subtitles: [
          {
            src: '2-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '2-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://i.imgur.com/imKqvro.jpg',
      'https://i.imgur.com/rea5SbN.jpg',
      'https://i.imgur.com/583EUaK.jpg',
      'https://i.imgur.com/qBnAEFW.jpg',
      'https://i.imgur.com/jtAWyJm.jpg',
      'https://i.imgur.com/KYKoPyY.jpg',
    ],
    description: 'Добро пожаловать в воображариум Терри Пратчетта! \nМокрист фон Губвиг был гениальным мошенником: подделывал предметы искусства и мастерски обкрадывал людей — настоящий Остап Бендер в мире стимпанка. Однажды Мокриста всё-таки поймали и приговорили к смертной казни, но вместо исполнения приговора предложили сделку: восстановить работу единственного городского почтамта. \nВсё бы хорошо, но писем там скопилось просто тьма, а над самим почтамтом висит страшное проклятье: 4 предшественника Губвига погибли при очень странных обстоятельствах. Вдобавок ко всему у главного героя появляется неприятный конкурент — Взяткер Позолот.',
    usersRating: 5,
    reviews: [''],
    genre: 'фэнтези, приключения, мелодрама, детектив, комедия',
    release: ['30 мая 2010 г.', '30 мая 2010 г.'],
    audio: 'Английский, Русский',
    studio: ['Sky'],
    countries: 'Великобритания',
    actors: [
      { personId: 1, role: 'Барабант' },
      { personId: 2, role: 'Лорд Витинари' },
      { personId: 3, role: 'Мисс Крипслок' },
      { personId: 4, role: 'Мокрист фон Губвиг' },
      { personId: 5, role: 'Мистер Грыль' },
      { personId: 6, role: 'Взяткер Позолот' },
      { personId: 7, role: 'Почтальон' },
      { personId: 8, role: 'Стэнли' },
      { personId: 9, role: 'Ангела Красота Добросерд' },
    ],
    director: [
      { personId: 10, role: 'Jon Jones' },
    ],
    producers: [
      { personId: 11, role: 'Rod Brown' },
      { personId: 12, role: 'Vadim Jean' },
      { personId: 13, role: 'Sue De Beauvoir' },
      { personId: 14, role: 'Sarah Conroy' },
    ],
    facts: [
      'Фильм снят по мотивам романа Терри Пратчетта «Опочтарение» (Going Postal, 2004)',
      'Не будучи профессиональным актером, Терри Пратчетт испытал некоторые затруднения со своей ролью, которая заключалась в том, чтобы просто пройтись по комнате. По словам самого писателя, ему «понадобилось шесть дублей, чтобы справиться с этой непростой задачей».',
      'Почтальон в последней сцене — Терри Пратчетт, автор книги.', 'Термин «опочтарение» (англ. going postal) применяется для обозначения актов массовых убийств, которые совершаются в порыве ярости или в состоянии эмоциональной нестабильности.',
    ],
    wins: ['Телевизионная премия BAFTA: Лучшие визуальные эффекты'],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Сын',
    slogan: 'В главной роли Пирс Броснан',
    ratings: [7.5, 6.8],
    age: '16+',
    originalName: 'The Son',
    poster: 'https://pic.showjet.ru/pics/c5f48991-e55c-44b4-991d-b15ee8f374d5/10x5/1250.jpg',
    summary: '2 сезона / вестерн, драма, 2017 - 2019',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/a6ba8fe9-96c4-4247-adf1-08a586b41fcd/10x5/550.jpg',
        src: '3.mp4',
        subtitles: [
          {
            src: '3-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '3-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: ['https://pic.showjet.ru/pics/f57d97e2-4343-4190-ba62-e7b35f21aa13/10x7/1000.jpg', 'https://pic.showjet.ru/pics/bd46c3b8-d2ce-4467-b18d-76d820bd136c/10x7/1000.jpg', 'https://pic.showjet.ru/pics/90147cc5-81e0-4920-9525-b1a2859b30dd/10x7/1000.jpg', 'https://pic.showjet.ru/pics/095bf496-1b81-4a55-a7a3-1e01be77bf7f/10x7/1000.jpg', 'https://pic.showjet.ru/pics/6c6a7ceb-e19e-47b3-8fd5-9697e703de36/10x7/1000.jpg', 'https://pic.showjet.ru/pics/51961699-1ce6-4cea-a0d0-3656d908495e/10x7/1000.jpg'],
    description: 'Жестокий и эпический вестерн о становлении Америки, показанном через историю одной семьи. В главной роли — Пирс Броснан. \n1849 год, центральный Техас. Юный Илай Маккалоу попадает в плен к индейцам после того, как те ворвались в дом и безжалостно расправились с его сёстрами и матерью. Неопытный, но смелый парень учится выживать и договариваться с диким племенем. \n1915 год, южный Техас. Параллельно разворачивается история уже взрослого Илая Маккалоу в окружении детей и внуков. Властный и уважаемый глава семьи, он владеет ранчо и пытается отыскать нефть. Теперь вместо индейцев его главными врагами стали мексиканцы, которые вот-вот развяжут войну. Однако сын Илая, Пит, не готов мириться с жестокими методами отца и отпускает одного мексиканца, которого Маккалоу взяли в плен. Это грозит разрушить не только семейные узы, но и всю империю Илая Маккалоу, которую тот строил много лет...',
    usersRating: 4,
    reviews: [''],
    genre: 'вестерн, драма',
    release: ['08 апреля 2017 г.'],
    audio: 'Английский, Русский',
    studio: ['AMC Studios'],
    countries: 'Соединенные Штаты Америки',
    actors: [
      { personId: 14, role: 'Элай Маккалоу' },
      { personId: 15, role: 'Пит Маккалоу' },
      { personId: 16, role: 'Мария Гарсия' },
      { personId: 17, role: 'Тошауэй' },
      { personId: 18, role: 'Салли Маккалоу' },
      { personId: 19, role: 'Молодой Элай Маккалоу' },
    ],
    director: [
      { personId: 20, role: 'Tom Harper' },
      { personId: 21, role: 'Tom Vaughan' },
      { personId: 22, role: 'Ellen Kuras' },
    ],
    producers: [
      { personId: 23, role: 'Daniel C. Connolly' },
      { personId: 24, role: 'Henry Bronchtein' },
    ],
    facts: [
      'Сериал основан на одноимённом романе Филиппа Майера, который был опубликован в 2013 году.',
      'Изначально планировалось, что главную роль сыграет Сэм Нил, однако из-за личных обстоятельств он отказался от участия.',
      'Пирс Броснан не играл в сериалах свыше 30 лет — после работы в сериале «Ремингтон Стил» (1982-1987).',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2019',
          episodes: [
            {
              name: 'Нумунуу',
              thumbnail: 'https://pic.showjet.ru/pics/4b29fa99-d5d6-4a0b-8961-c303c8dfd4dc/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Десять долларов и ощипанный гусь',
              thumbnail: 'https://pic.showjet.ru/pics/4db1a856-346f-4169-bfe3-0ef37a4e3a96/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Слепой тигр',
              thumbnail: 'https://pic.showjet.ru/pics/f6a0943c-1338-492d-aa09-9003f246f5d5/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Оскальпированная собака',
              thumbnail: 'https://pic.showjet.ru/pics/e5293d71-6402-402d-aeb1-e56e8fb2f434/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Горячее масло',
              thumbnail: 'https://pic.showjet.ru/pics/8bef34f2-b1e8-425b-9485-ae55a67666cc/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Голубой свет',
              thumbnail: 'https://pic.showjet.ru/pics/32cefeef-a8f2-44c4-8edc-636bdd20ee90/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Кто-то взял лопату',
              thumbnail: 'https://pic.showjet.ru/pics/ed8c9aa6-23ec-47fb-825d-924c6971618a/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Все их обвинительные следы',
              thumbnail: 'https://pic.showjet.ru/pics/d18d3370-c8a7-43f4-b7da-b224d8047045/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Медведь',
              thumbnail: 'https://pic.showjet.ru/pics/2828829f-7c9f-4f1f-9fd4-f1525519604a/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Легенда',
              thumbnail: 'https://pic.showjet.ru/pics/6939ca8f-e8ba-464c-9c9a-cd0c24257542/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2017',
          episodes: [
            {
              name: 'Первый сын Техаса',
              thumbnail: 'https://pic.showjet.ru/pics/a00f09db-c2aa-4e01-a641-65480ad71301/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Сливовое дерево',
              thumbnail: 'https://pic.showjet.ru/pics/b7aba7f2-6805-46b3-867c-c3ebc1fe6c7c/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Вторая империя',
              thumbnail: 'https://pic.showjet.ru/pics/5ff4588a-7cc2-4ddc-86da-e95799ac46a5/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Песня смерти',
              thumbnail: 'https://pic.showjet.ru/pics/8bf58de5-79e9-4262-a1aa-4a88b879706c/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Никаких пленных',
              thumbnail: 'https://pic.showjet.ru/pics/4f17fb20-62d6-4746-a205-4ab51ce98401/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Охотник на буйволов',
              thumbnail: 'https://pic.showjet.ru/pics/99af408e-6c9a-46f2-9809-01d5d6bd7786/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Брачные узы',
              thumbnail: 'https://pic.showjet.ru/pics/0e377e3f-380d-4c92-bcff-89fe04257c55/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Медовая охота',
              thumbnail: 'https://pic.showjet.ru/pics/cf2ec742-6a20-4212-8c64-dd40fa605610/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пророчество',
              thumbnail: 'https://pic.showjet.ru/pics/497eedd0-2953-4600-b348-0fcb4049bdc2/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Скальпы',
              thumbnail: 'https://pic.showjet.ru/pics/6f2f017b-5fab-48fd-b93d-7a0fa7a8f171/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    name: 'Индийское лето',
    slogan: 'Любовь на закате империи',
    ratings: [7.2, 7],
    age: '16+',
    originalName: 'Indian Summers',
    poster: 'https://pic.showjet.ru/pics/ab191704-3437-4e09-80b3-cfb3d61c6467/10x5/1250.jpg',
    summary: '2 сезона / история, мелодрама, 2015 - 2016',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/121a0a7b-a56b-4ed5-aa7c-25a4c26f62a3/10x5/550.jpg',
        src: '4.mp4',
        subtitles: [
          {
            src: '4-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '4-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/278d3a15-9dd9-4fa2-a499-c9cc25796322/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/0cfc2e39-9dc0-489f-b66a-b6f5f7dcd807/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/cd318c1d-e3b1-4058-9c59-efac23c16965/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5f2e456f-081b-4015-9db0-c98d4d2b63de/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3a5f58d3-3ef6-4855-a7ce-b536e2a37af2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3b436cb2-1d88-40ef-8a6c-95844c1754e5/10x7/1000.jpg',
    ],
    description: 'Драматическая история любви и борьбы за власть в лучших традициях «Аббатства Даунтон». \nИндия, 1932 год. С приближением лета английские аристократы устремляются на север страны в город Шимла, расположенный у подножия Гималаев. Здесь, в закрытом клубе для британцев, они предаются изысканным развлечениям и танцуют ночи напролёт, не замечая, что местные жители уже начали борьбу за независимость. На фоне тревожных событий и политических интриг между героями вспыхивают чувства, которые ведут к необратимым последствиям…',
    usersRating: 3,
    reviews: [''],
    genre: 'история, мелодрама, драма',
    release: ['15 февраля 2015 г.', '15 февраля 2015 г.'],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting', 'Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 25, role: 'Синтия' },
      { personId: 26, role: 'Ральф Уилан' },
      { personId: 27, role: 'Африн Делал' },
      { personId: 28, role: 'Суни Далал' },
      { personId: 29, role: 'Юджин Мэтерс' },
      { personId: 30, role: 'Дуги Раворт' },
      { personId: 31, role: 'Чарли Хэвисток' },
      { personId: 32, role: 'Сита' },
      { personId: 33, role: 'Ронни Кин' },
      { personId: 34, role: 'Сирена' },
      { personId: 35, role: 'Мадлен Мэтерс' },
      { personId: 36, role: 'Элис Уилан' },
    ],
    director: [
      { personId: 37, role: 'Jamie Payne' },
      { personId: 38, role: 'Jonathan Teplitzky' },
      { personId: 39, role: 'Paul Wilmshurst' },
    ],
    producers: [
      { personId: 40, role: 'Rebecca Eaton' },
      { personId: 41, role: 'Indira Varma' },
    ],
    facts: [
      'Сериал на самом деле был снят не в Индии, а в Малайзии, штате Пинанг.',
      '«Индийское лето» — самый масштабный британский проект для Channel 4 за последние 20 лет.',
      'Место действия Королевского клуба — это Crag Hotel, который был построен в XIX веке и принадлежал армянской семье Саркис. После Второй мировой войны отель стал пансионом, но после 1991 года оказался заброшен. Создатели сериала занялись реконструкцией здания и превратили его в роскошный курортный отель.',
      'Для актрисы Джулии Уолтерс (в её фильмографии более 80 фильмов!) сериал стал первым проектом, съёмки которого проходили за пределами родной Великобритании.',
      'До середины прошлого века в городе Шимла, где разворачиваются события сериала, на самом деле находилась летняя столица Британской империи.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2016',
          episodes: [
            {
              name: 'Индиец в английском костюме',
              thumbnail: 'https://pic.showjet.ru/pics/bc109e10-ea6f-40ab-b1b7-047fba82d2ac/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Чёрная змея',
              thumbnail: 'https://pic.showjet.ru/pics/b50f9d21-a89f-46fc-b555-a6f991c41d40/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Белые боги',
              thumbnail: 'https://pic.showjet.ru/pics/6393e2c2-a0f1-4176-a2be-744b611a791f/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пустое кресло',
              thumbnail: 'https://pic.showjet.ru/pics/b9193410-fe21-45b7-ab4c-388cb901aaa0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Игра в прятки',
              thumbnail: 'https://pic.showjet.ru/pics/917274f0-e40e-4185-a364-b4b7ce0dceea/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Подарок для короля',
              thumbnail: 'https://pic.showjet.ru/pics/43356090-ccce-4d1b-8b70-ec92dd68eff2/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Предложение',
              thumbnail: 'https://pic.showjet.ru/pics/0596b831-2c25-4776-9eca-05bb8c7ac74e/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'День рождения',
              thumbnail: 'https://pic.showjet.ru/pics/6dd94ed7-bef4-46b3-8fa5-9bc8672ffb58/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Победитель забирает всё',
              thumbnail: 'https://pic.showjet.ru/pics/5bed2232-bfc6-46de-9961-591741cbf549/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Отъезд из дома',
              thumbnail: 'https://pic.showjet.ru/pics/59687dc9-9431-4d07-8d68-56fcff9e80a7/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2015',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/285a7f76-5d82-48f4-bc87-78670f464015/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/e021d111-96ee-4bae-b651-d4c9b41b555a/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/6623d27d-8d09-4858-aac5-5b20a2067569/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/875d952a-e889-4cee-9491-23836ca85576/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/fe79ab1c-ff16-44ca-90f9-c52091558fd0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/4a9e003f-1f71-46f7-8158-b1acac914233/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 7',
              thumbnail: 'https://pic.showjet.ru/pics/ee9138a6-c10e-414c-9d63-6928b152a5e0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 8',
              thumbnail: 'https://pic.showjet.ru/pics/2b8a943b-e609-410d-b931-f2e49779cca8/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 9',
              thumbnail: 'https://pic.showjet.ru/pics/a8e808c2-2fc9-4039-ae5e-de1b833b2514/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 10',
              thumbnail: 'https://pic.showjet.ru/pics/02b76b56-d3ce-4378-b681-ef15cb2b24db/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 5,
    name: 'Хроники Шаннары',
    slogan: 'Для поклонников «Властелина колец»',
    ratings: [7.2, 6.9],
    age: '16+',
    originalName: 'The Shannara Chronicles',
    poster: 'https://pic.showjet.ru/pics/a259e19b-e21c-416f-b948-567aaa05ab50/10x5/1250.jpg',
    summary: '2 сезона / фэнтези, приключения, 2016 - 2017',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/adb38dc6-441c-442b-af92-33456eb57f7f/10x5/550.jpg',
        src: '5.mp4',
        subtitles: [
          {
            src: '5-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '5-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/e0ae03d8-d9df-40ff-a36a-9d62bf590c51/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5c8a6c40-9bd4-4061-b67e-a524e51d6151/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a5b9805e-d7f4-497c-9588-d9d975746ddf/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/9c43cc69-6c59-4562-8ca1-7dab4c4f85df/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a62afcff-ef43-40ec-a1fa-f2158d13520b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/d9bfe531-1404-4a65-aefb-1b7afc9fdbbf/10x7/1000.jpg',
    ],
    description: 'Для поклонников «Властелина колец»: масштабный фэнтези-сериал «Хроники Шаннары», основанный на романе Терри Брукса. \nВ далёком постапокалиптическом будущем мир разделился на 4 Земли: территории людей, эльфов, троллей и дварфов. После войны рас, уничтожившей магию, всё зло заключили в дереве Элькрис, которое бережно охраняют эльфы. Для молодого поколения истории про магию и демонов — лишь сказки. Всё меняется, когда древние тёмные силы пробуждаются, а судьба мира оказывается в руках трёх юных героев.  \nЭмберли, принцесса королевства эльфов, получает пугающее видения о конце мира. Уилл, юный эльф-полукровка, после смерти матери узнаёт о своей причастности к древнему роду Шаннары — великих королей и магов. Эретрия, сирота и юная воровка, становится преданным другом Уилла и Эмберли. Вместе с друидом Алланоном героям предстоит тяжелый путь по спасению всех 4 Земель от гибели.',
    usersRating: 3,
    reviews: [''],
    genre: 'фэнтези, приключения, фантастика',
    release: ['05 января 2016 г.'],
    audio: 'Английский, Русский',
    studio: ['Music Television (MTV)'],
    countries: 'Новая Зеландия, Соединенные Штаты Америки',
    actors: [
      { personId: 42, role: 'Король Эвентин Элесседил' },
      { personId: 43, role: 'Эмберли Элесседил' },
      { personId: 44, role: 'Марет' },
      { personId: 45, role: 'Андер Элесседил' },
      { personId: 46, role: 'Алланон' },
      { personId: 47, role: 'Эретрия' },
      { personId: 48, role: 'Уилл Омсфорд' },
    ],
    director: [
      { personId: 49, role: 'James Marshall' },
      { personId: 50, role: 'Brad Turner' },
    ],
    producers: [
      { personId: 51, role: 'David Blocker' },
      { personId: 52, role: 'Jon Favreau' },
    ],
    facts: [
      'Эльфийского короля Эвентина Элесседила сыграл британский актёр Джон Рис-Дэвис, известный по роли гнома Гимли в трилогии «Властелин колец».',
      'Сериал является экранизацией второй книги из трилогии «Шаннары» Терри Брукса.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2017',
          episodes: [
            {
              name: 'Друид',
              thumbnail: 'https://pic.showjet.ru/pics/360459d2-7868-4ce4-a4f8-05c46e9627e6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Дух',
              thumbnail: 'https://pic.showjet.ru/pics/3b7cb649-939d-49eb-afcb-3a2a8c72a843/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Грэймарк',
              thumbnail: 'https://pic.showjet.ru/pics/2a53e92d-acf6-41dc-856f-de9a7d32d6d6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Обитатель',
              thumbnail: 'https://pic.showjet.ru/pics/4641e4cc-1131-476f-93cb-e830400f6079/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Паранор',
              thumbnail: 'https://pic.showjet.ru/pics/45e54d0d-7b9f-4d60-9ae4-caacf1de4171/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Алый',
              thumbnail: 'https://pic.showjet.ru/pics/0d5e8203-870d-45e9-baf3-375e13341740/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Чародей',
              thumbnail: 'https://pic.showjet.ru/pics/3c6474a9-cb81-4ac4-a325-4f5683534922/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эмберли',
              thumbnail: 'https://pic.showjet.ru/pics/b733396c-16ab-4468-b8d7-0085783bb0a6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Уайлдерун',
              thumbnail: 'https://pic.showjet.ru/pics/58f03822-be47-4493-8fb1-8eb6b14d9bb8/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Кровь',
              thumbnail: 'https://pic.showjet.ru/pics/168aeb9b-247c-4141-bdef-ac1feb7d4cb1/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2016',
          episodes: [
            {
              name: 'Избранная: Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/25e8bd73-c497-41cb-9c18-3562c52b1552/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Избранная: Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/c3077ef4-48a5-4293-8f92-d07d2402be3d/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Фурия',
              thumbnail: 'https://pic.showjet.ru/pics/fc4e239a-0969-44c2-abe0-55d480d16356/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Подмена',
              thumbnail: 'https://pic.showjet.ru/pics/f8a9e6ba-eb86-4ec5-ac74-cc73d02c43f7/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Жнец',
              thumbnail: 'https://pic.showjet.ru/pics/0d47802d-da71-44fd-8e03-6da42a744b3c/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пайкон',
              thumbnail: 'https://pic.showjet.ru/pics/63ed40ac-b2b6-4eb1-af1b-3a05c8ca22d9/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Разлом',
              thumbnail: 'https://pic.showjet.ru/pics/f0f8e6e1-8acb-4181-b1df-11b57b37dfca/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Утопия',
              thumbnail: 'https://pic.showjet.ru/pics/c5534b8b-fc9f-4895-96c7-a998e524e492/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Убежище',
              thumbnail: 'https://pic.showjet.ru/pics/e8c5a84f-4b56-4a41-a7cd-19c973a0d83c/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Элькрис',
              thumbnail: 'https://pic.showjet.ru/pics/4b843bd5-d6e8-44c4-bc6e-d6e3c3cdc4b2/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 6,
    name: 'Тайны Лауры',
    slogan: 'Женская версия «Касла»',
    ratings: [7.4, 7.4],
    age: '16+',
    originalName: 'Los misterios de Laura',
    poster: 'https://pic.showjet.ru/pics/c6b9b3f9-ee9f-4e29-868b-273196701d0f/10x5/1250.jpg',
    summary: '3 сезона / приключения, детектив, 2009 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/fab57c5e-75a3-4310-a431-f7b576b5cd26/10x5/550.jpg',
        src: '6.mp4',
        subtitles: [
          {
            src: '6-sp.vtt',
            srcLang: 'sp',
            label: 'Spanish',
          },
          {
            src: '6-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/c308d35e-35a1-4408-83b3-69789451002e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3d42a3b4-4322-4c19-9c86-92ed6017aa7e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/b7d4f3ad-548d-4a6a-bf44-74f3cc8c187e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/2546855e-9f9b-40e5-afda-ac0a5afa2c8b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/049063c3-020d-40bc-a1a7-f3ffb4010cb6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5d376ad7-002c-40db-b9c1-6c7065752bf7/10x7/1000.jpg',
    ],
    description: 'Для поклонников культового сериала «Касл»: испанская комедия о том, как женщина-детектив пытается совместить работу, развод и воспитание близнецов. \nЛаура — уважаемый детектив с идеальной интуицией, который одинаково хорошо может справиться как с хитрым продавцом в мясном магазине, так и с опасным преступником. Неудачи настигают женщину только в личной жизни: сыновья-близнецы сводят с ума проделками, экс-супруг стал начальником, и активно пытается помириться, а коллега Мартин, который нравится Лауре ещё со времен академии, относится к ней как к подруге, отдавая предпочтение сексапильным свидетельницам. \nПоможет ли шестое чувство Лауры стать ей не только счастливым профессионалом, но и счастливой женщиной?',
    usersRating: 2,
    reviews: [''],
    genre: 'приключения, детектив, комедия',
    release: ['27 июля 2009 г.'],
    audio: 'Русский',
    countries: 'Испания',
    actors: [
      { personId: 53, role: 'Мартин Мареска' },
      { personId: 54, role: 'Хави Сальгадо Лебрель' },
      { personId: 55, role: 'Карлос Сальгадо Лебрель' },
      { personId: 56, role: 'Вероника Лебрель' },
      { personId: 57, role: 'Лидия Мартинез' },
      { personId: 58, role: 'Висенте Куэвас' },
      { personId: 59, role: 'Лаура Лебрель' },
      { personId: 60, role: 'Джакобо Сальгадо' },
    ],
    director: [
      { personId: 61, role: 'Pau Freixas' },
    ],
    producers: [
      { personId: 61, role: 'Pau Freixas' },
    ],
    facts: [
      'Сериал на самом деле был снят не в Индии, а в Малайзии, штате Пинанг.',
      '«Индийское лето» — самый масштабный британский проект для Channel 4 за последние 20 лет.',
      'Место действия Королевского клуба — это Crag Hotel, который был построен в XIX веке и принадлежал армянской семье Саркис. После Второй мировой войны отель стал пансионом, но после 1991 года оказался заброшен. Создатели сериала занялись реконструкцией здания и превратили его в роскошный курортный отель.',
      'Для актрисы Джулии Уолтерс (в её фильмографии более 80 фильмов!) сериал стал первым проектом, съёмки которого проходили за пределами родной Великобритании.',
      'До середины прошлого века в городе Шимла, где разворачиваются события сериала, на самом деле находилась летняя столица Британской империи.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 3,
      seasons: [
        {
          seasonInfo: 'Сезон 3 / 2014',
          episodes: [
            {
              name: 'Лаура и загадка комнаты 308',
              thumbnail: 'https://pic.showjet.ru/pics/93d09f2d-7696-499a-b199-953ecf4894f9/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна капсулы времени. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/f1b9d562-a17e-4a2a-845d-dd27c881c0a6/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна капсулы времени. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/29dfe795-588d-4968-9b3e-39047d02d821/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна гостя',
              thumbnail: 'https://pic.showjet.ru/pics/787f7dd5-8730-4e0d-9e75-cd3c5dfd7529/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна одной женщины',
              thumbnail: 'https://pic.showjet.ru/pics/078a8ccd-2dd5-4c3d-acc6-89724aa8d6f2/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна невидимого убийцы',
              thumbnail: 'https://pic.showjet.ru/pics/a29bb785-a12c-4ef6-ab1f-79f839784e05/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна преступления века',
              thumbnail: 'https://pic.showjet.ru/pics/b9cc4b88-996d-4029-a448-7bab02beea11/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна призрака',
              thumbnail: 'https://pic.showjet.ru/pics/ba4671c0-71ed-441c-8932-0aeb5e809732/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и шпион, который много болтал',
              thumbnail: 'https://pic.showjet.ru/pics/f2c1a40c-0227-450e-9fb6-f318cb63627e/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна пойманных мышей',
              thumbnail: 'https://pic.showjet.ru/pics/ac2c6427-5383-40c9-b9bc-804a8e0c5a78/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна ликов истины',
              thumbnail: 'https://pic.showjet.ru/pics/8baefd1f-51c0-4adb-ab58-88ae3556f9e5/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/14c862ac-2ca3-4832-ad90-cde6baa21627/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/937aef3f-43c4-4b3f-ac27-ccc7d613b174/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 3',
              thumbnail: 'https://pic.showjet.ru/pics/937aef3f-43c4-4b3f-ac27-ccc7d613b174/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 2 / 2011',
          episodes: [
            {
              name: 'Тайна молчуна',
              thumbnail: 'https://pic.showjet.ru/pics/0f83463c-d300-4588-9321-b93b3bba96c1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна клуба',
              thumbnail: 'https://pic.showjet.ru/pics/438c316f-df2c-42d3-8c18-7d709b90b22a/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна человека, которого не было',
              thumbnail: 'https://pic.showjet.ru/pics/46a728a5-0e7a-4308-b2ca-22e9c7139e38/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна недовольного пациента',
              thumbnail: 'https://pic.showjet.ru/pics/438a6834-2657-4fbc-be57-0f3c6003a25c/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна человека, который не хотел умирать',
              thumbnail: 'https://pic.showjet.ru/pics/ef5143b8-7223-45fe-b46e-0273a266f3ea/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна восьми мужчин',
              thumbnail: 'https://pic.showjet.ru/pics/16111a03-134f-4c73-ba79-d697cf7e34be/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна кричащего свидетеля',
              thumbnail: 'https://pic.showjet.ru/pics/9ec1cfee-6d95-4999-84e1-1269f534ea10/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна необычного трюка',
              thumbnail: 'https://pic.showjet.ru/pics/6995ac7b-5fbf-4bd5-86a2-c4172d6b04a1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна преступного аббатства',
              thumbnail: 'https://pic.showjet.ru/pics/17a59cdd-8507-4f9f-923f-36a6e5bbec33/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна красной леди',
              thumbnail: 'https://pic.showjet.ru/pics/f0ecb1cf-be3b-4dc2-bdb5-eb4d7506cc8d/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна десяти незнакомцев. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/5affa3d5-68c6-4a48-9fb8-919f609ca7cd/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна десяти незнакомцев. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/182848c5-62bd-47c1-aaf1-10e8d28444a9/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2009',
          episodes: [
            {
              name: 'Тайна запечатанной комнаты. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/cff1a7d9-2c46-49c9-97dd-f215a82b0df1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна запечатанной комнаты. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/24e77673-eb0a-40bf-a7a1-d3b670c1bd6d/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального соседа. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/2842bfef-d0b7-4772-997c-4e3a3d00b714/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального соседа. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/0db050a1-ee55-4f55-992b-bd6f9b1252f2/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального алиби. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/bc7e30c8-d704-437d-8fcf-3a981581dfaa/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального алиби. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/503d32b5-7769-425a-95fc-9461a3614272/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна места преступления',
              thumbnail: 'https://pic.showjet.ru/pics/8da94e6e-01a7-4b1b-8ed5-a887fd0faf35/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна синего попугая. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/e24cc7b0-325e-489a-8779-4336c1ab9332/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна синего попугая. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/f7d93d95-17a2-47d0-bb9c-ff2ef9e6b7f3/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна найденного трупа',
              thumbnail: 'https://pic.showjet.ru/pics/7a97aa9d-ceac-4e29-915e-36e0455fca50/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 7,
    name: 'Бивер Фолс',
    slogan: '«Американский пирог» с британской начинкой',
    ratings: [7.8, 7.7],
    age: '16+',
    originalName: 'Beaver Falls',
    poster: 'https://pic.showjet.ru/pics/9087e07e-cfb7-4552-aea8-1e4b2c1c6484/10x5/1250.jpg',
    summary: '2 сезона / комедия, 2011 - 2012',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/45586294-928e-4ebf-94aa-466caa626060/10x5/550.jpg',
        src: '7.mp4',
        subtitles: [
          {
            src: '7-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '7-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/e39ee4f3-f56c-44f3-bc88-10176eeadfe2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/8110233e-baae-4259-ad0e-9b8c4177fa2b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/9cb76cc8-c507-4003-832b-d60b0c0bf9ac/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a6d35c62-b65c-48e9-a7f6-8d2c376fb825/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/344ff3db-fb40-4106-ba3e-60359503a3f0/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/ebc395e4-faea-4f7b-ab86-0fa0039e406a/10x7/1000.jpg',
    ],
    description: 'Молодёжная комедия в лучших традициях «Американского пирога», «Евротура» и «Короля вечеринок». \nСолнце, воздух, природа, красивые девчонки и симпатичные парни, романтические приключения и безудержное веселье — что ещё нужно для счастья? Трое английских студентов — Флинн, А-Раб и Барри — устраиваются на работу в летний американский лагерь, куда приезжают отдыхать отпрыски самых богатых семейств Калифорнии. Ребятам предстоит присматривать за детишками, но на самом деле они намерены оторваться по полной и покутить так, чтобы было о чём рассказать внукам!',
    usersRating: 3,
    reviews: [''],
    genre: 'комедия',
    release: ['27 июля 2011 г.', '27 июля 2011 г.'],
    audio: 'Английский, Русский',
    countries: 'Великобритания',
    actors: [
      { personId: 71, role: 'Джейк' },
      { personId: 72, role: 'Рик' },
      { personId: 73, role: 'Кимберли' },
      { personId: 74, role: 'ПиДжей' },
      { personId: 75, role: 'Брэндон' },
      { personId: 76, role: 'Мак' },
      { personId: 77, role: 'А-Раб' },
      { personId: 78, role: 'Флинн' },
      { personId: 79, role: 'Барри' },
      { personId: 80, role: 'Рэйчел' },
      { personId: 81, role: 'Хоуп' },
    ],
    director: [
      { personId: 82, role: 'Daniel O\'Hara' },
      { personId: 83, role: 'Benjamin Caron' },
      { personId: 84, role: 'Lawrence Till' },
      { personId: 85, role: 'Jack Clough' },
    ],
    producers: [
      { personId: 86, role: 'Liz Lewin' },
      { personId: 87, role: 'Charles Pattinson' },
      { personId: 88, role: 'George Faber' },
    ],
    facts: [
      'Действие сериала происходит в Калифорнии, однако съёмки проходили в Южной Африке.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2017',
          episodes: [
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/b3ce4602-b324-4912-8b3d-c4c6f4c2ae49/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/371788d1-52ec-42eb-a4f4-b55d3ab6f618/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/701749f1-f300-4bca-a2ed-d5e81433cceb/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/ff00806c-75a5-4b56-b73f-1f5df5f324f0/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/ab8186e0-4e7d-4b82-9022-f284ecce6251/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/0e697263-140e-4967-9192-0cbd871589dd/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2016',
          episodes: [
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/fbe6ac2b-3bbf-4ae6-8bd9-6b0c9ebd5446/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/d9bda9bd-a8ee-4217-adc7-836b6259c879/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/1fe76f9b-b64a-4226-9670-6f0bc5ca904b/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/9a6aca44-df21-4eab-b5cf-df9003ebd176/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/13c7773f-1c4d-4222-a2c6-52a93027008b/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/18715ea9-7241-4348-b10e-8be6309ed0d5/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 8,
    name: 'Тишина',
    slogan: 'Глухая девушка становится свидетелем убийства...',
    ratings: [7.1, 6.9],
    age: '16+',
    originalName: 'The Silence',
    poster: 'https://pic.showjet.ru/pics/332bc7ab-9f7c-4219-9df9-f72ee808e1ff/10x5/1250.jpg',
    summary: '1 сезон / триллер, детектив, 2010',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/06f33b2d-e146-49d3-8ada-e082dcd12a7c/10x5/550.jpg',
        src: '8.mp4',
        subtitles: [
          {
            src: '8-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '8-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/1067a9d4-5274-4e46-a025-72ecc4c11efa/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/f4be9a42-638e-4f14-9053-2dc3696fecff/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c1a1cffd-4643-411e-b303-e2b1aab512db/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/87294aac-295b-4ac5-94bd-591ff74f786a/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5fc9e229-0d1f-46d7-b2a4-3158ea826979/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/efbf7c81-0787-4e64-a4f4-daa2c3117a8f/10x7/1000.jpg',
    ],
    description: 'Переплетение психологической драмы и захватывающего триллера, которое никого не оставит равнодушным. \nАмелия, 18-летняя глухая девушка, случайным образом становится свидетельницей убийства женщины-полицейского и оказывается вовлечена в расследование сложного и запутанного дела. Окружающий мир обрушивается на девушку градом жестокости, несправедливости и разочарований, и теперь, чтобы помочь найти виновных, ей предстоит превратить свою особенность в преимущество.',
    usersRating: 5,
    reviews: [''],
    genre: 'триллер, детектив, криминал, драма',
    release: ['12 июля 2010 г.', '12 июля 2010 г.'],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 89, role: 'Амелия' },
      { personId: 90, role: 'Мэгги' },
      { personId: 91, role: 'Энн' },
      { personId: 92, role: 'Крис' },
      { personId: 93, role: 'Джим' },
    ],
    director: [
      { personId: 94, role: 'Dearbhla Walsh' },
    ],
    producers: [
      { personId: 88, role: 'George Faber' },
      { personId: 94, role: 'Cait Collins' },
    ],
    facts: [
      'Сериал стал первым британским проектом для сценариста Фионы Серес, которая родилась в Австралии. Ради работы над шоу она перевезла всю свою семью из Сиднея в Лондон.',
      'Женевьева Барр, как и её героиня, родилась глухой и в обычной жизни использует слуховые аппараты. Но для роли их необходимо было снять, а также девушке пришлось изучить язык жестов, который она раньше не применяла, полагаясь лишь на свои слуховые аппараты и чтение губ.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/313b8ff2-2d38-44db-82f8-e56b4ed24bb8/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/952e497f-cbec-4485-a73e-767162eaa4c4/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/37871517-0a5c-4f51-957d-6f39c448be0e/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/abb2ba21-0630-4c85-aa5d-7fb2d1294caf/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 9,
    name: 'Джек Айриш',
    slogan: 'В главной роли Гай Пирс',
    ratings: [6.8, 6.8],
    age: '18+',
    originalName: 'Jack Irish',
    poster: 'https://pic.showjet.ru/pics/d55f54c2-4b9f-4a90-8f73-191e9c3c98f0/10x5/1250.jpg',
    summary: '1 сезон / триллер, криминал, 2012 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/d388f434-a6dd-4c02-a95f-e41f3649fb27/10x5/550.jpg',
        src: '9.mp4',
        subtitles: [
          {
            src: '9-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '9-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/0327a903-cb0f-4a94-a83d-69e8958107e7/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/f9d598d0-8e5b-4efb-bf52-45f51ad59cc4/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a04e989a-3822-4879-bee4-2ba0661faa37/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/87d31c07-bb25-4594-98f1-8ad4ef0dea76/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/1b6615b5-6609-45f4-a8f4-5070ba1da03d/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/878c83a0-ccdd-45d5-90da-6773dbe122a3/10x7/1000.jpg',
    ],
    description: 'Криминальная драма о мрачных тайнах австралийского Мельбурна и депрессивном адвокате, который пытается их раскрыть. В главной роли — номинант на «Золотой глобус» Гай Пирс («Железный человек 3»). \nУ адвоката Джека Айриша была прекрасная жена, отличная работа и хорошая репутация. Но когда бывший клиент жестоко убил его супругу, а потом застрелился сам, Джек пустился во все тяжкие. Теперь его друзья — депрессия, ночные посиделки в баре и ставки на спорт. От прежней жизни не осталось ничего. \nНо как бы Айриш не пытался убежать от прошлого, ничего не получилось. Мёртвым находят другого клиента Джека — Дэнни, который отчаянно пытался дозвониться до бывшего адвоката. Официальная версия смерти — застрелен полицейским при попытке сопротивления. Только вот сам Айриш в это не верит, и вместе с очаровательной журналисткой Линдой Хиллер начинает собственное расследование. И чем больше он узнаёт, тем яснее становится: это не случайность, а намеренное убийство…',
    usersRating: 4,
    reviews: [''],
    genre: 'триллер, криминал, драма',
    release: ['14 октября 2012 г.'],
    audio: 'Английский, Русский',
    studio: ['ZDF'],
    countries: 'Австралия',
    actors: [
      { personId: 95, role: 'Джек Айриш' },
      { personId: 96, role: 'Линда Хиллер' },
      { personId: 97, role: 'Кэм Делрэй' },
      { personId: 98, role: 'Гарри Странг' },
      { personId: 99, role: 'Изабелла Айриш' },
    ],
    director: [
      { personId: 100, role: 'Jeffrey Walker' },
    ],
    producers: [
      { personId: 101, role: 'Christopher Gist' },
      { personId: 102, role: 'Andrew Knight' },
      { personId: 103, role: 'Ian Collie' },
    ],
    facts: [],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Безнадежные долги. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/b671462c-3943-435a-8e90-ae79a2ed8112/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Безнадежные долги. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/95d196c4-49ac-4968-b2ab-8f81f10f7614/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Черный прилив. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/1ba14a1b-f3cb-47b8-bdb8-34b19fd9c7c9/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Черный прилив. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/d788e49f-a8c6-45c6-87e2-4464610de758/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тупик. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/3a4bd9ce-bb7a-4b89-a150-0fcf002e9821/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тупик. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/d4dd73f4-345b-4496-ae0b-6b483084bde1/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 10,
    name: 'Деревня',
    slogan: 'Большая история маленького человека',
    ratings: [7.7, 7.7],
    age: '16+',
    originalName: 'The Village',
    poster: 'https://pic.showjet.ru/pics/d6bea79d-cf36-43d5-bcc8-52284e1d7d3a/10x5/1250.jpg',
    summary: '2 сезона / история, драма, 2013 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/dd1bf4c8-251e-4821-86f1-2c6a974f2bc6/10x5/550.jpg',
        src: '10.mp4',
        subtitles: [
          {
            src: '10-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '10-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/0a1f6aba-b650-422b-9838-d7ed6952b8c9/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c2d19edb-a9cc-467c-a09a-ef12b5bed724/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/aa685705-bd9b-40b9-8c71-19438757fd82/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/042a25d5-343b-4f6a-92db-18fdf0cc6fb6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/bd475603-51c3-468d-8a5f-9b527ea60560/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c74ce51c-a8ad-41bc-b71e-9b6c74eafb49/10x7/1000.jpg',
    ],
    description: 'Невероятно достоверная историческая драма от обладателя премии BAFTA Питера Моффата.  \n112-летний Берт Миддлтон родился в глухой английской деревушке графства Дербишир. В 1914 году его отец работал на ферме, а старший брат трудился в богатом доме носильщиком воды. Тогда жёны не смели перечить мужьям, фермеры не видели смысла в образовании, а учителя били школьников за то, что те писали левой рукой. Но всё меняется, когда в тихую деревню приезжает первый автобус, из которого выходит неизвестная леди… \nГлазами Берта мы увидим целое столетие жизни: счастье и боль, любовь и предательство, рождение и смерть. Переживём важнейшие события английской истории (в том числе мировые войны) и узнаем, как менялась целая нация на протяжении XX века.',
    usersRating: 5,
    reviews: [''],
    genre: 'история, драма',
    release: ['31 марта 2013 г.', '31 марта 2013 г.'],
    wins: [
      'Телевизионная премия BAFTA: Лучший драматический сериал',
      'Телевизионная премия BAFTA: Лучшая мужская роль второго плана',
      'Телевизионная премия BAFTA: Лучшая актриса',
    ],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 104, role: 'Клем Аллингэм' },
      { personId: 105, role: 'Эдмунд Аллингэм' },
      { personId: 106, role: 'Джо Миддлтон' },
      { personId: 107, role: 'Джерард  Эйр' },
      { personId: 108, role: 'Фиби Рандл' },
      { personId: 109, role: 'Грэйс Миддлтон' },
      { personId: 110, role: 'Джон Миддлтон' },
      { personId: 111, role: 'Марта Аллингэм' },
      { personId: 112, role: 'Каро Аллингэм' },
    ],
    director: [
      { personId: 113, role: 'Gillies MacKinnon' },
      { personId: 114, role: 'Luke Watson' },
      { personId: 115, role: 'Antonia Bird' },
      { personId: 116, role: 'Dominic Leclerc' },
    ],
    producers: [
      { personId: 117, role: 'Amy Roberts' },
      { personId: 118, role: 'Polly Hill' },
      { personId: 88, role: 'George Faber' },
      { personId: 119, role: 'Peter Moffat' },
      { personId: 120, role: 'Emma Burge' },
    ],
    facts: [
      'В сериале звучит музыка в исполнении брасс-квинтета (джазовый ансамбль для пяти исполнителей, играющих на медных духовых инструментах — прим.ред.) Университета Солфорда, который закончила исполнительница главной роли Максин Пик.',
      'Режиссёр Гиллис МакКиннон показал Нико Мираллегро (Джо) свой ранний фильм «Возрождение» (1997), чтобы актёр лучше передал эмоции в сцене, когда его герой возвращается с Первой мировой войны.',
      'Создатель сериала Питер Моффат использовал в качестве материалов записи историка Маргарет Вомбель и архив Имперского военного музея, а также дал актёрам задание подучить историю XX века.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2014',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/8a29746a-e279-4e25-bf67-8f50a8dcb501/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/33d8c25e-a8b3-42b2-af97-d5a8f0536f92/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fa180cdf-f44f-4d21-99cd-16d47cb2002e/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/eb85daa7-22cc-4071-af27-741e2dfaa57c/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/9fa8aa26-968d-4ecd-a905-0120fc8ff312/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/1673b773-883b-4bc7-80e2-1897e0ae9a56/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2013',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/e8fde516-06b2-4b0a-98ad-538dc6d7cb96/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/b958a6c3-6560-4955-a035-797838920393/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/8c99629f-f98e-4707-9351-6af9af57431e/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/c4d02fe7-2b88-4691-9b79-8d642eb3d741/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/eb46a9b4-94a3-40af-bce7-08d1759809e8/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/3fcbee17-0f28-4e56-af26-afc69f5de79a/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 11,
    name: 'Мой сосед Тоторо',
    slogan: 'Неподражаемо обаятельный ностальгический аниме-шедевр',
    ratings: [8.1, 8.2],
    age: '0+',
    originalName: 'Tonari no Totoro',
    poster: 'https://images2.alphacoders.com/499/499590.jpg',
    summary: 'аниме, семейный, 1988',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzcwY2E2YTItMjFkZS00OTdjLTkyZTQtOTMxYzc3MGYyNmFkXkEyXkFqcGdeQXN3aWZ0dw@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '11.mp4',
        subtitles: [
          {
            src: '11-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '11-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BODIwMTc0NDA4Ml5BMl5BanBnXkFtZTgwNDE3OTEwMjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTc2MDgzODgxNF5BMl5BanBnXkFtZTgwMzE3OTEwMjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUyODI0ODA1NV5BMl5BanBnXkFtZTgwNTA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjEyMzI0Nzc1N15BMl5BanBnXkFtZTgwNjA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTM4MjIxMjQ3N15BMl5BanBnXkFtZTgwNzA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODYxNjQ2OTA2Ml5BMl5BanBnXkFtZTgwODA2MDIyMDE@._V1_.jpg',
    ],
    description: 'Сестры Сацуки и Мэй переезжают вместе с папой в деревенский дом. Однажды девочки обнаруживают, что по соседству с ними живут лесные духи — хранители леса во главе со своим могущественным и добрым повелителем Тоторо. Постепенно Тоторо становится другом девочек, помогая им в их повседневных приключениях.',
    usersRating: 5,
    reviews: [''],
    genre: 'аниме, мультфильм, фэнтези, приключения, семейный',
    release: ['16 апреля 1988 г.', '20 марта 2008 г.'],
    wins: [
      'Academy of Science Fiction, Fantasy & Horror Films, USA: Best Genre Video Release',
      'Blue Ribbon Awards: Special Award',
      'Kinema Junpo Awards: Best Film',
      'Kinema Junpo Awards: Best Japanese Film',
      'Mainichi Film Concours: Best Film',
    ],
    audio: 'Японский, Английский, Русский',
    studio: ['Nibariki', 'Studio Ghibli', 'Tokuma Japan Communications Co. Ltd.', 'Disney'],
    countries: 'Япония',
    actors: [
      { personId: 121, role: 'Тоторо' },
      { personId: 122, role: 'Сатсуки' },
      { personId: 123, role: 'Мей' },
      { personId: 124, role: 'Тацуо Кусакабе' },
      { personId: 125, role: 'Ясуко Кусакабе' },
      { personId: 126, role: 'Бабушка' },
      { personId: 127, role: 'Канта' },
      { personId: 128, role: 'Папа Канты' },
      { personId: 129, role: 'Мама Канты' },
    ],
    director: [
      { personId: 130, role: 'Hayao Miyazaki' },
    ],
    producers: [
      { personId: 131, role: 'Toru Hara' },
      { personId: 132, role: 'Eiko Tanaka' },
      { personId: 133, role: 'Yasuyoshi Tokuma' },
    ],
    facts: [
      'Хаяо Миядзаки использовал в «Тоторо» некоторые автобиографические мотивы (например, долгая болезнь матери героинь туберкулезом), а также привлек с его помощью внимание к надвигающейся урбанизации и уничтожению традиционного японского сельского ландшафта — полей и лесов. Он пожертвовал три миллиона долларов и права на изображение Тоторо обществу защиты природы своего родного города Токородзава (в настоящее время — пригород Токио).',
      'Оригинальный японский релиз анимационной ленты шёл в виде сдвоенных показов с фильмом «Могила светлячков» (1988), поскольку прокатчики посчитали, что выпускать её самостоятельно будет слишком рискованным шагом.',
      'Первая англоязычная дублированная версия появилась ещё в 1988 году эксклюзивно для трансокеанских рейсов авиакомпании Japan Airlines. В США дубляж был выпущен в 1993 году студией Troma, а затем на VHS и DVD Fox Video. После того как права этих студий на ленту истекли, их приобрела студия Disney, выпустившая полностью новую дублированную версию в марте 2006 года.',
    ],
    type: 'film',
    film: {
      name: 'Мой сосед Тоторо',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzcwY2E2YTItMjFkZS00OTdjLTkyZTQtOTMxYzc3MGYyNmFkXkEyXkFqcGdeQXN3aWZ0dw@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '11.mp4',
      subtitles: [
        {
          src: '11-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '11-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 12,
    name: 'Сияние',
    slogan: 'Шедевр современного хоррора',
    ratings: [8.4, 7.8],
    age: '18+',
    originalName: 'The Shining',
    poster: 'https://c4.wallpaperflare.com/wallpaper/613/473/199/movie-the-shining-wallpaper-preview.jpg',
    summary: 'ужасы, триллер, 1980',
    trailer: [
      {
        thumbnail: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/8884a77f204ed671f6612c7920671078/100x64_3',
        src: '12.mp4',
        subtitles: [
          {
            src: '12-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '12-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTc5MjM4Njg3Nl5BMl5BanBnXkFtZTgwNTk1NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTA0NzUxMjU3OTJeQTJeQWpwZ15BbWU4MDc5NTQ1NjYz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTU3MTkwMjQ1MF5BMl5BanBnXkFtZTgwODk1NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTU4NTY0MzUyMF5BMl5BanBnXkFtZTgwMDA2NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNzczMTIxMjk4Nl5BMl5BanBnXkFtZTgwOTMzMDYwNDI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg0MzkzODUwNV5BMl5BanBnXkFtZTgwODM1MjEwNDI@._V1_.jpg',
    ],
    description: 'Джек Торренс с женой и сыном приезжает в элегантный отдалённый отель, чтобы работать смотрителем во время мертвого сезона. Торренс здесь раньше никогда не бывал. Или это не совсем так? Ответ лежит во мраке, сотканном из преступного кошмара.',
    usersRating: 4,
    reviews: [''],
    genre: 'триллер, драма, ужасы, детектив',
    release: ['23 мая 1980 г.', '29 октября 2020 г.'],
    wins: [
      'National Film Preservation Board, USA: National Film Preservation Board',
      'Online Film & Television Association:  Motion Picture',
      'Academy of Science Fiction, Fantasy & Horror Films, USA: Best Supporting Actor',
    ],
    audio: 'Английский, Русский',
    studio: ['Warner Bros. Pictures', 'Hawk Films Ltd.', 'Peregrine', 'Producers Circle'],
    countries: 'Соединенные Штаты Америки',
    actors: [
      { personId: 134, role: 'Джек Торренс' },
      { personId: 135, role: 'Венди Торренс' },
      { personId: 136, role: 'Денни Торренс' },
      { personId: 137, role: 'Дик Халлорен' },
      { personId: 138, role: 'Стюарт Уллман' },
      { personId: 139, role: 'Чарльз Грейди' },
      { personId: 140, role: 'Лойд' },
      { personId: 141, role: 'Доктор' },
      { personId: 142, role: 'Дёркин' },
    ],
    director: [
      { personId: 143, role: 'Stanley Kubrick' },
    ],
    producers: [
      { personId: 143, role: 'Stanley Kubrick' },
      { personId: 144, role: 'Jan Harlan' },
      { personId: 145, role: 'Mary Lea Johnson' },
      { personId: 146, role: 'Robert Fryer' },
      { personId: 147, role: 'Martin Richards' },
    ],
    facts: [
      'Фильм снят по мотивам романа Стивена Кинга «Сияние» (The Shining, 1977).',
      'Чтобы погрузить съемочную группу в необходимое психологическое состояние, Кубрик показывал им фильм «Голова-ластик» (1977).',
      'Стивен Кинг пытался отговорить Кубрика приглашать на главную роль Джека Николсона и предлагал взамен взять Джона Войта или Майкла Мориарти. В качестве аргумента он приводил свое убеждение в том, что зрителю гораздо интереснее будет наблюдать за постепенным сумасшествием актера с изначально нормальным выражением лица, нежели за Николсоном, у которого с самого начала фильма несколько безумный вид.',
    ],
    type: 'film',
    film: {
      name: 'Сияние',
      thumbnail: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/8884a77f204ed671f6612c7920671078/100x64_3',
      src: '12.mp4',
      subtitles: [
        {
          src: '12-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '12-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 13,
    name: 'Хороший, плохой, злой',
    slogan: 'Вестерн на все времена',
    ratings: [8.8, 8.5],
    age: '16+',
    originalName: 'Il buono, il brutto, il cattivo',
    poster: 'https://i.ebayimg.com/images/g/8u4AAOSwFfdhpTZe/s-l1600.jpg',
    summary: 'приключения, вестерн, 1966',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzMzMDAxZDAtYTBkNy00NjMwLWIyYzctODA1YzE0MzUwMTI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '13.mp4',
        subtitles: [
          {
            src: '13-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '13-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BN2ZmNWUzNTQtMDY2OS00YjBmLWI5NTQtMzg5MDk0MzM5OTc2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUxNzUzMzMtNzc5MS00MTllLThhODQtNDRjZTQ4NWY5MjUyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BZmUyN2UxZGUtMWQwZi00MTA5LTkzNzUtOTJjOTU3MDRhZGQ2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BYWZjYzA3YTgtNzQyZS00NmNkLWE4ZmItMjJhNmJiMzJkZTI0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOWIwNjcyZDUtNjRmZS00ZGNiLWIwZDUtMmUyYzQ5NTQ4OTA3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg3NTQ2OTIwN15BMl5BanBnXkFtZTcwNzc0Mzg4Mw@@._V1_.jpg',
    ],
    description: 'В разгар гражданской войны таинственный стрелок скитается по просторам Дикого Запада. У него нет ни дома, ни друзей, ни компаньонов, пока он не встречает двоих незнакомцев, таких же безжалостных и циничных.\nПо воле судьбы трое мужчин вынуждены объединить свои усилия в поисках украденного золота. Но совместная работа - не самое подходящее занятие для таких отъявленных бандитов, как они. Компаньоны вскоре понимают, что в их дерзком и опасном путешествии по разоренной войной стране самое важное - никому не доверять и держать пистолет наготове, если хочешь остаться в живых.',
    usersRating: 4,
    reviews: [''],
    genre: 'приключения, вестерн',
    release: ['23 декабря 1966'],
    wins: [
      'Faro Island Film Festival: Best Actor',
      'Online Film & Television Association:  Score',
      'Online Film & Television Association:   Motion Picture',
    ],
    audio: 'Английский, Русский',
    studio: ['Arturo González Producciones Cinematográficas S.A.', 'Constantin Film', 'Produzioni Europee Associati (PEA)'],
    countries: 'Италия, Испания, Германия (ФРГ)',
    actors: [
      { personId: 148, role: 'Блондин' },
      { personId: 149, role: 'Сентенца' },
      { personId: 150, role: 'Туко' },
      { personId: 151, role: 'Капитан Клинтон' },
      { personId: 152, role: 'Падре Пабло Рамирес' },
      { personId: 153, role: 'Мария' },
    ],
    director: [
      { personId: 154, role: 'Sergio Leone' },
    ],
    producers: [
      { personId: 155, role: 'Alberto Grimaldi' },
    ],
    facts: [
      'Первое слово в фильме произносится только на 10 минуте фильма.',
      'Так как Серджио Леоне практически не говорил по-английски, а Илай Уоллак практически не говорил по-итальянски, они общались на французском.',
      '«Человек без имени» всего 17 минут за весь фильм носит «фирменное» Пончо, которое стало эпохальным за два первых вестерна. ',
    ],
    type: 'film',
    film: {
      name: 'Хороший, плохой, злой',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzMzMDAxZDAtYTBkNy00NjMwLWIyYzctODA1YzE0MzUwMTI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '13.mp4',
      subtitles: [
        {
          src: '13-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '13-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 14,
    name: 'Бегущий по лезвию 2049',
    slogan: 'Мечтают ли андроиды об электроовцах?',
    ratings: [8.0, 7.8],
    age: '18+',
    originalName: 'Blade Runner 2049',
    poster: 'https://wallpapers.com/images/featured/ln4wirn5204bujot.jpg',
    summary: 'фантастика, триллер, 2017',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjE3MjY3MTkzNV5BMl5BanBnXkFtZTgwNTE0NjU3MzI@._V1_QL75_UX500_CR0,46,500,281_.jpg',
        src: '14.mp4',
        subtitles: [
          {
            src: '14-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '14-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTg3NDIwNzU3MF5BMl5BanBnXkFtZTgwMDQ5MjY2MzI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTgyMzYyMTU2NF5BMl5BanBnXkFtZTgwMTQ5MjY2MzI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjA5NzE4NTA0MF5BMl5BanBnXkFtZTgwNTg5NjUyMjI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOTgwY2M1ZmYtZWE1Yi00YmNlLWEyNDYtOTViODE4MTliMTNiXkEyXkFqcGdeQXVyNzg2ODI2OTU@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOGJjY2Q2NTgtZmE5OS00ZjY0LWJmNGMtMThiMDQ5NzBiYjM1XkEyXkFqcGdeQXVyNzg2ODI2OTU@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTk2OTU3MDA3N15BMl5BanBnXkFtZTgwMTg5NjUyMjI@._V1_.jpg',
    ],
    description: 'В недалеком будущем мир населен людьми и репликантами, созданными выполнять самую тяжелую работу. Работа офицера полиции Кей — держать репликантов под контролем в условиях нарастающего напряжения. Он случайно становится обладателем секретной информации, которая ставит под угрозу существование всего человечества. Желая найти ключ к разгадке, Кей решает разыскать Рика Декарда — бывшего офицера специального подразделения полиции Лос-Анджелеса, который бесследно исчез много лет назад.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, боевик, триллер, драма',
    release: ['3 октября 2017', '5 октября 2017'],
    wins: [
      'Oscar: Best Achievement in Cinematography',
      'Oscar: Best Achievement in Visual Effects',
      'BAFTA: Best Cinematography',
      'BAFTA: Best Achievement in Special Visual Effects',
      'Saturn Award: Best Science Fiction Film',
    ],
    audio: 'Английский, Русский',
    studio: [
      '16:14 Entertainment',
      'Alcon Entertainment',
      'Columbia Pictures',
      'Scott Free Productions',
      'Thunderbird FilmsTorridon Films',
      'Warner Bros. Pictures',
    ],
    countries: 'США, Великобритания, Канада, Испания',
    actors: [
      { personId: 156, role: 'К' },
      { personId: 157, role: 'Рик Декард' },
      { personId: 158, role: 'Джой' },
      { personId: 159, role: 'Саппер Мортон' },
      { personId: 160, role: 'Лейтенант Джоши' },
      { personId: 161, role: 'Ниандер Уоллес' },
    ],
    director: [
      { personId: 162, role: 'Denis Villeneuve' },
    ],
    producers: [
      { personId: 163, role: 'Yale Badik' },
      { personId: 164, role: 'Broderick Johnson' },
      { personId: 165, role: 'Andrew A. Kosove' },
      { personId: 166, role: 'Ridley Scott' },
    ],
    facts: [
      'На ранних стадиях проекта принималось, что режиссёром фильма будет Ридли Скотт. Незадолго до начала съёмок, однако, Скотт объявил, что режиссурой заниматься не станет, а останется в проекте только в должности продюсера. О причинах такого решения ничего сказано не было.',
      'Для прохождения теста на эмоции Кей произносит фразу: «Кроваво-черное ничто пустилось вить систему клеток, связанных внутри, клеток, связанных внутри, клеток в едином стебле и явственно, до жути на фоне тьмы ввысь белым бил фонтан». Это фраза взята из романа Владимира Набокова «Бледный огонь», написанного на английском языке и изданного в 1962 году.',
      'Изначально персонаж Ниандера Уоллеса был написан под Дэвида Боуи. Но в январе 2016-го Дэвид ушел из жизни, и в итоге, персонажа сыграл Джаред Лето.',
    ],
    type: 'film',
    film: {
      name: 'Бегущий по лезвию 2049',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjE3MjY3MTkzNV5BMl5BanBnXkFtZTgwNTE0NjU3MzI@._V1_QL75_UX500_CR0,46,500,281_.jpg',
      src: '14.mp4',
      subtitles: [
        {
          src: '14-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '14-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 15,
    name: 'Девушка с татуировкой дракона',
    slogan: 'Напряженный нордический триллер',
    ratings: [7.8, 7.7],
    age: '18+',
    originalName: 'The Girl with the Dragon Tattoo',
    poster: 'https://p4.wallpaperbetter.com/wallpaper/704/961/190/the-girl-with-the-dragon-tattoo-wallpaper-preview.jpg',
    summary: 'детектив, триллер, 2011',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjM2OTU4MDA1OV5BMl5BanBnXkFtZTgwNzg2MTAyMzE@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '15.mp4',
        subtitles: [
          {
            src: '15-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '15-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTkwODI5ODcxMl5BMl5BanBnXkFtZTcwNjIyNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjE1Njc3MDIwNV5BMl5BanBnXkFtZTcwMTQyNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTY2MzQwODMxN15BMl5BanBnXkFtZTcwNjQzNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjc0NTg1NjkyNl5BMl5BanBnXkFtZTcwNTgzNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg4NDg4MDAxN15BMl5BanBnXkFtZTcwMDUwMDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BY2U4MjE2YTUtNzg2ZC00N2U2LWE3NTItM2Q3YmViZjgxYTdjXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg',
    ],
    description: '40 лет назад Харриет Вангер бесследно пропала на острове, принадлежащем могущественному клану Вангер. Тело так и не нашли, но её дядя убежден, что девушку убили, и что убийца является членом его собственной неблагополучной семьи. Он нанимает опального журналиста Микаэля Блумквиста и татуированную хакершу Лисбет Саландер для проведения расследования.',
    usersRating: 5,
    reviews: [''],
    genre: 'детектив, триллер, драма, криминал',
    release: ['12 декабря 2011', '2 января 2012'],
    wins: [
      'Oscar: Best Achievement in Film Editing',
      'Saturn Award: Best Horror/Thriller Film',
      'AFI Awards: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Columbia Pictures',
      'Film Rites',
      'Ground Control',
      'Metro-Goldwyn-Mayer (MGM)',
      'Scott Rudin Productions',
      'Yellow Bird Films AB',
    ],
    countries: 'США, Швеция, Норвегия',
    actors: [
      { personId: 167, role: 'Микаэль Блумквист' },
      { personId: 168, role: 'Лисбет Саландер' },
      { personId: 169, role: 'Хенрик Вангер' },
      { personId: 170, role: 'Мартин Вангер' },
      { personId: 171, role: 'Фроде' },
      { personId: 160, role: 'Эрика Бергер' },
      { personId: 172, role: 'Бьюрман' },
      { personId: 173, role: 'Анита Вангер' },
      { personId: 174, role: 'Сесилия' },
    ],
    director: [
      { personId: 175, role: 'David Fincher' },
    ],
    producers: [
      { personId: 176, role: 'Ceán Chaffin' },
      { personId: 177, role: 'Scott Rudin' },
      { personId: 178, role: 'Søren Stærmose' },
      { personId: 179, role: 'Ole Søndberg' },
    ],
    facts: [
      'Фильм снят по мотивам романа Стига Ларссона «Девушка с татуировкой дракона» (Män som hatar kvinnor, 2004).',
      'Период съёмок в Швеции пришёлся на самую холодную зиму за последние 20 лет.',
      'Следуя плану, утвержденному самим Финчером, Руни Мара за один день сделала пирсинг во всех местах, где это требовалось по сценарию, хотя раньше не носила даже серьги.',
    ],
    type: 'film',
    film: {
      name: 'Девушка с татуировкой дракона',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjM2OTU4MDA1OV5BMl5BanBnXkFtZTgwNzg2MTAyMzE@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '15.mp4',
      subtitles: [
        {
          src: '15-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '15-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 16,
    name: 'Отель «Гранд Будапешт»',
    slogan: 'Неповторимый стиль Уэса Андерсона',
    ratings: [8.1, 7.9],
    age: '16+',
    originalName: 'The Grand Budapest Hotel',
    poster: 'https://i.pinimg.com/originals/44/36/f8/4436f881a2a637ed5c6b9d0c10372089.jpg',
    summary: 'комедия, детектив, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTgxODI4OTU3N15BMl5BanBnXkFtZTgwODgzNDMzMTE@._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '16.mp4',
        subtitles: [
          {
            src: '16-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '16-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMjM1MjYzODE4N15BMl5BanBnXkFtZTgwNzU4ODY2OTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTY1OTE0NDU4Nl5BMl5BanBnXkFtZTgwOTYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ0NzAyNDI1MV5BMl5BanBnXkFtZTgwNjYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjU1NTE3NTkyMV5BMl5BanBnXkFtZTgwNzYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BYjRhMDgzZTctMzg0MS00OGQ3LWFhNmMtMDU1ZGNiMGRmODcwXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOTI3NTgxNTUtZmEwNi00ZmY5LTk1MmQtM2MwZWEwMGJjOTY0XkEyXkFqcGdeQXVyNjc0NjIyMDI@._V1_.jpg',
    ],
    description: 'Фильм рассказывает об увлекательных приключениях легендарного консьержа Густава и его юного друга, портье Зеро Мустафы. Сотрудники гостиницы становятся свидетелями кражи и поисков бесценных картин эпохи Возрождения, борьбы за огромное состояние богатой семьи и… драматических изменений в Европе между двумя кровопролитными войнами XX века.',
    usersRating: 5,
    reviews: [''],
    genre: 'комедия, приключения, детектив, криминал',
    release: ['6 февраля 2014', '13 марта 2014'],
    wins: [
      'Oscar: Best Achievement in Costume Design',
      'Oscar: Best Achievement in Makeup and Hairstyling',
      'Oscar: Best Achievement in Music Written for Motion Pictures, Original Score',
      'Oscar: Best Achievement in Production Design',
      'Screen Actors Guild Awards: Outstanding Performance by a Cast in a Motion Picture',
    ],
    audio: 'Английский, Русский',
    studio: [
      'American Empirical Pictures',
      'Indian Paintbrush',
      'Scott Rudin Productions',
      'Studio Babelsberg',
    ],
    countries: 'США, Германия',
    actors: [
      { personId: 180, role: 'М. Густав' },
      { personId: 181, role: 'Зеро' },
      { personId: 182, role: 'Агата' },
      { personId: 183, role: 'Дмитрий' },
      { personId: 184, role: 'Джоплинг' },
      { personId: 185, role: 'Хенкельс' },
      { personId: 186, role: 'Серж Икс' },
      { personId: 187, role: 'Мадам Д' },
      { personId: 188, role: 'Мистер Мустафа' },
      { personId: 189, role: 'Молодой писатель' },
    ],
    director: [
      { personId: 190, role: 'Wes Anderson' },
    ],
    producers: [
      { personId: 190, role: 'Wes Anderson' },
      { personId: 191, role: 'Jeremy Dawson' },
      { personId: 192, role: 'Steven Rales' },
      { personId: 177, role: 'Scott Rudin' },
    ],
    facts: [
      'В качестве декорации отеля «Гранд Будапешт» Уэс Андерсон использовал старый и выполненный в стиле ар-деко универмаг Karstadt, расположенный в Саксонии, в городке Герлиц, что на границе Германии, Чехии и Польши.',
      'Уэс Андерсон снял фильм в трех различных соотношениях сторон: 1.33, 1.85 и 2.35:1, которые соответствуют трём разным отрезкам времени. Разные пропорции кадра подсказывают зрителям, какой временной период на экране.',
      'На самом деле, картина «Мальчик с яблоком» писалась не Иоганном Ван Хойтом младшим, как говорится в фильме, а небезызвестным английским портретистом Майклом Тэйлором, по заказу самого режиссера, Уэса Андерсона.',
    ],
    type: 'film',
    film: {
      name: 'Отель «Гранд Будапешт»',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTgxODI4OTU3N15BMl5BanBnXkFtZTgwODgzNDMzMTE@._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '16.mp4',
      subtitles: [
        {
          src: '16-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '16-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 17,
    name: 'Дюна',
    slogan: 'Научно-фантастическая драма',
    ratings: [8.0, 7.7],
    age: '12+',
    originalName: 'Dune: Part One',
    poster: 'https://www.pixel4k.com/wp-content/uploads/2021/10/dune-movie-4k-poster_1635032438.jpg.webp',
    summary: 'фантастика, драма, 2021',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTEwYWFjYmItZWJmNi00MGExLWI1MjktYzRiYjJkNzhiMWIxXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '17.mp4',
        subtitles: [
          {
            src: '17-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '17-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BOGI4ZjA5YjItNzM3My00Mjk4LWI4NzEtOGFhZWU5Y2Y1YmExXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjY5NGYzZGQtNjc4Zi00MzUxLTlkNWItMzM5NjUzNGY4Yjg3XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNDQyNmVlM2QtOTg4MS00OWQ2LWEyODEtOTBhZTdjODRjMzYzXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMzc0ZDU2MWYtZmQ1Zi00ZWJlLTk5OGMtN2I5MzVkMWUwNDVhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODdkMzA1MDQtZDQ5OC00NjVlLWE4MmMtYTdkNDdhMTFiMzAzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTFiMjdjYTMtYjkyNi00MWI5LWEyZWEtYTdkZDBlZmVkNTc1XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
    ],
    description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, боевик, драма, приключения',
    release: ['3 сентября 2021', '16 сентября 2021'],
    wins: [
      'Oscar: Best Sound',
      'Oscar: Best Achievement in Visual Effects',
      'Oscar: Best Achievement in Production Design',
      'Oscar: Best Achievement in Music Written for Motion Pictures, Original Score',
      'Oscar: Best Achievement in Film Editing',
      'Oscar: Best Achievement in Cinematography',
      'AACTA International Awards:  Best Direction',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Legendary Pictures',
      'Villeneuve Films',
      'Warner Bros.',
    ],
    countries: 'США, Канада, Венгрия',
    actors: [
      { personId: 193, role: 'Пол Атрейдес' },
      { personId: 194, role: 'Леди Джессика Атрейдес' },
      { personId: 195, role: 'Герцог Лето Атрейдес' },
      { personId: 196, role: 'Гурней Халлек' },
      { personId: 197, role: 'Дункан Идахо' },
      { personId: 198, role: 'Чани' },
      { personId: 170, role: 'Барон Владимир Харконнен' },
      { personId: 199, role: 'Стилгар' },
      { personId: 159, role: 'Глоссу Раббан Харконнен' },
    ],
    director: [
      { personId: 162, role: 'Denis Villeneuve' },
    ],
    producers: [
      { personId: 162, role: 'Denis Villeneuve' },
      { personId: 200, role: 'Mary Parent' },
      { personId: 201, role: 'Cale Boyter' },
    ],
    facts: [
      'Съёмки фильма проходили в Венгрии, Норвегии (океаны на Каладане), ОАЭ, Австрии и Словакии. Сцены пустынь на Арракисе снимали в основном в Иордании и в Абу-Даби.',
      'Режиссёр Дени Вильнёв представлял себе барона Владимира Харконнена (Стеллан Скарсгард) как «носорога в человеческом обличье». Каждый день перед съёмками актёр проводил по 7 часов в кресле гримёра.',
      'По словам режиссёра Дени Вильнёва, на разработку образа гигантских песчаных червей Арракиса ушёл год.',
    ],
    type: 'film',
    film: {
      name: 'Дюна',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTEwYWFjYmItZWJmNi00MGExLWI1MjktYzRiYjJkNzhiMWIxXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '17.mp4',
      subtitles: [
        {
          src: '17-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '17-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 18,
    name: 'Достать ножи',
    slogan: 'Деконструкция детективного жанра',
    ratings: [7.9, 8.1],
    age: '16+',
    originalName: 'Knives Out',
    poster: 'https://images8.alphacoders.com/105/thumb-1920-1052048.jpg',
    summary: 'детектив, комедия, 2019',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BZGI3ODkzOTUtNzJjNS00ODhkLThkMzMtZjM4NjViZTYxNGY5XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '18.mp4',
        subtitles: [
          {
            src: '18-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '18-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BYzQ0YmIzYzYtOTk2NC00OWI3LWI2YjAtYzhlMDUwNWQ2NmRlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BN2NjZmZhZDItOGNiNS00OTdmLTgyMzgtZDgyYzUzMGU5YTkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMmNiYmU1ZmQtNmM0My00ZmEyLTllNGQtZGE4N2ExOWM3YmI5XkEyXkFqcGdeQXVyMTIwODk1NTQ@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNWY4ZTQ4MTgtZTdlMy00NjAwLThlOTktNWVkZmM1OWQ3MzA4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BM2MyMTg0YzMtMGU4ZS00MzViLWE1ZDktZmY1NWI2NTdhNDk3XkEyXkFqcGdeQXVyMTA4OTk3Nzcw._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BZjYyZTAyOTYtYTUxYS00NmZhLWFjZTUtYTA0OThiNjk1NTA0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    ],
    description: 'На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан. Тем же утром он получил конверт с наличными от неизвестного и заказ на расследование смерти Харлана. Не нужно быть опытным следователем, чтобы понять, что все приукрашивают свои отношения с почившим главой семейства, но Блану достаётся настоящий подарок — медсестра покойного, которая физически не выносит ложь.',
    usersRating: 4,
    reviews: [''],
    genre: 'детектив, комедия, драма, криминал',
    release: ['7 сентября 2019', '28 ноября 2019'],
    wins: [
      'AARP Movies for Grownups Awards: Best Ensemble',
      'Saturn Award: Best Editing',
      'Saturn Award: Best Thriller Film',
      'Saturn Award: Best Supporting Actress',
      'AFI Award: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Lionsgate',
      'Media Rights Capital',
      'T-Street',
    ],
    countries: 'США',
    actors: [
      { personId: 167, role: 'Бенуа Бланк' },
      { personId: 202, role: 'Рэнсон Драйсдейл' },
      { personId: 158, role: 'Марта Кабрера' },
      { personId: 203, role: 'Линда Драйсдейл' },
      { personId: 204, role: 'Уолт Тромби' },
      { personId: 205, role: 'Ричард Драйсдейл' },
      { personId: 206, role: 'Джони Тромби' },
      { personId: 169, role: 'Харлан Тромби' },
      { personId: 207, role: 'Мэг Тромби' },
      { personId: 208, role: 'Джейкоб Тромби' },
      { personId: 209, role: 'Донна Тромби' },
    ],
    director: [
      { personId: 210, role: 'Rian Johnson' },
    ],
    producers: [
      { personId: 211, role: 'Ram Bergman' },
      { personId: 210, role: 'Rian Johnson' },
      { personId: 212, role: 'Tom Karnowski' },
    ],
    facts: [
      'Манеру речи своего героя Дэниел Крейг позаимствовал у писателя, историка и журналиста Шелби Фута.',
      'Когда Бенуа Блан впервые появляется на экране, он показан в кабинете, где лейтенант Эллиот допрашивает членов семейства Тромби. Блан нажимает на клавиатуре одну и ту же ноту вроде бы в случайном порядке, однако порядок этот отнюдь не случаен. Когда Блан нажимает клавишу, Эллиот всё время задаёт один и тот же вопрос: «Когда вы вернулись домой?», т.е. звук этой ноты служит для Эллиота сигналом, чтобы задать вопрос.',
      'Для начальных кадров требовалось, чтобы две собаки пробежали от одного дрессировщика к другому, однако никак не получалось сделать так, чтобы они пробежали поближе к камере. В конце концов пришлось построить небольшой пандус, чтобы собаки не проскочили прямо под камерой.',
    ],
    type: 'film',
    film: {
      name: 'Достать ножи',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BZGI3ODkzOTUtNzJjNS00ODhkLThkMzMtZjM4NjViZTYxNGY5XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '18.mp4',
      subtitles: [
        {
          src: '18-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '18-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 19,
    name: 'Интерстеллар',
    slogan: 'Космическая одиссея 21 века',
    ratings: [8.6, 8.6],
    age: '16+',
    originalName: 'Interstellar',
    poster: 'https://www.teahub.io/photos/full/357-3579460_interstellar-ice-planet-poster-interstellar-cover.jpg',
    summary: 'фантастика, драма, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_QL75_UX500_CR0,46,500,281_.jpg',
        src: '19.mp4',
        subtitles: [
          {
            src: '19-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '19-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTc0NDQ4MjkyOF5BMl5BanBnXkFtZTgwNDE2NzUzOTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ0MjQ3NjE1MF5BMl5BanBnXkFtZTgwMzMyODgxMzE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg4MTY3MDUyNl5BMl5BanBnXkFtZTgwMDMyODgxMzE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTAyOTI5MTg5MDFeQTJeQWpwZ15BbWU4MDYyMjg4MTMx._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ4OTQyMTMwOF5BMl5BanBnXkFtZTgwOTQ0Mjk3MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMWY1YmY4ZjItYTdlMi00OTNkLTk3NGEtODBkOGI5ZDYxNmQxXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_.jpg',
    ],
    description: 'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, драма, приключения',
    release: ['26 октября 2014', '6 ноября 2014'],
    wins: [
      'Oscar: Best Achievement in Visual Effects',
      'Saturn Award: Best Science Fiction Film',
      'Saturn Award: Best Production Design',
      'Saturn Award: Best Special Effects',
      'Saturn Award: Best Performance by a Younger Actor',
      'Saturn Award: Best Writing',
      'Saturn Award: Best Music',
      'AFI Award: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Legendary Pictures',
      'Lynda Obst Productions',
      'Paramount Pictures',
      'Syncopy',
      'Warner Bros. Pictures',
    ],
    countries: 'США, Великобритания, Канада',
    actors: [
      { personId: 213, role: 'Купер' },
      { personId: 214, role: 'Брэнд' },
      { personId: 215, role: 'Мёрф' },
      { personId: 216, role: 'Профессор Брэнд' },
      { personId: 217, role: 'Ромилли' },
      { personId: 218, role: 'Дойл' },
      { personId: 219, role: 'Том' },
      { personId: 220, role: 'Манн' },
    ],
    director: [
      { personId: 221, role: 'Christopher Nolan' },
    ],
    producers: [
      { personId: 221, role: 'Christopher Nolan' },
      { personId: 222, role: 'Lynda Obst' },
      { personId: 223, role: 'Emma Thomas' },
    ],
    facts: [
      'Сценарий основан на научных работах физика-теоретика Кипа Торна.',
      'Во время съемок фильма изображение окружающей среды, созданное заранее, проецировалось на экраны, расположенные вокруг съемочной площадки, чтобы актеры, смотря в окна космического корабля, видели реальную картинку, а не зеленый экран.',
      'На создание описываемой в фильме апокалиптической обстановки на Земле Кристофера Нолана вдохновила серия катастрофических пыльных бурь, происходивших в США в 1930-е.',
    ],
    type: 'film',
    film: {
      name: 'Интерстеллар',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_QL75_UX500_CR0,46,500,281_.jpg',
      src: '19.mp4',
      subtitles: [
        {
          src: '19-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '19-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 20,
    name: 'Остров собак',
    slogan: 'Трогательная история о дружбе',
    ratings: [7.8, 8.1],
    age: '12+',
    originalName: 'Isle of Dogs',
    poster: 'https://wallpaperaccess.com/full/4734723.jpg',
    summary: 'комедия, приключения, 2018',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjZkYzYwNmQtNjk3ZC00Y2M2LThhY2EtODIzOThiNDJmMTk2XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR86,0,500,281_.jpg',
        src: '20.mp4',
        subtitles: [
          {
            src: '20-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '20-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BNTkxMTQ1Njc1Ml5BMl5BanBnXkFtZTgwNDA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUyNjQ5MzgzMV5BMl5BanBnXkFtZTgwNTA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODQyMTg1MDkyMl5BMl5BanBnXkFtZTgwNjA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTU0NTkyMTUzMl5BMl5BanBnXkFtZTgwODA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODUyNDUzODcyNF5BMl5BanBnXkFtZTgwMTE5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODRhOWExNDktZmYyOS00NTFjLTk4MWQtZmY0MWY4Mzc0YTA3XkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_.jpg',
    ],
    description: 'История 12-летнего мальчика Атари Кобаяси, опекаемого коррумпированным мэром Кобаяши. Когда по Указу последнего все домашние собаки города Мегасаки изгоняются на громадную свалку, Атари в одиночку отправляется на миниатюрном летательном аппарате на мусорный остров, чтобы найти своего верного пса по прозвищу Спотс. Там на острове вместе со стаей новых друзей-дворняг он начнет эпичное путешествие, которое решит будущую судьбу всей Префектуры.',
    usersRating: 4,
    reviews: [''],
    genre: 'мультфильм, фантастика, драма, комедия, приключения',
    release: ['29 июня 2018', '15 февраля 2018'],
    wins: [
      'Annie Awards: Outstanding Achievement for Voice Acting in an Animated Feature Production',
      'Art Directors Guild: Animated Film',
      'Atlanta Film Critics Circle: Best Animated Film',
    ],
    audio: 'Английский, Русский',
    studio: [
      '20th Century Fox Animation',
      'American Empirical Pictures',
      'Indian Paintbrush',
      'Studio Babelsberg',
    ],
    countries: 'США, Германия, Япония, Великобритания',
    actors: [
      { personId: 224, role: 'Шеф' },
      { personId: 225, role: 'Атари' },
      { personId: 185, role: 'Рэкс' },
      { personId: 226, role: 'Король' },
      { personId: 227, role: 'Граф' },
      { personId: 228, role: 'Босс' },
      { personId: 229, role: 'Трейси Уолкер' },
      { personId: 230, role: 'Переводчица Нэльсон' },
    ],
    director: [
      { personId: 190, role: 'Wes Anderson' },
    ],
    producers: [
      { personId: 190, role: 'Wes Anderson' },
      { personId: 231, role: 'Ben Adler' },
      { personId: 232, role: 'Eli Bush' },
    ],
    facts: [
      'Название «Isle of Dogs» (Остров собак) — игра слов. Если произнести его быстро, оно звучит как «I love dogs» (я люблю собак).',
      'Для фильма было создано порядка 20 000 лиц, для второстепенных персонажей создали 2 000 кукол. На создание куклы одного из главных героев обычно уходило 2-3 месяца.',
      'Режиссёр Уэс Андерсон организовал соревнование для желающих озвучить какую-нибудь роль в фильме. От соискателей требовалось только перечислить любую сумму свыше $10 долларов на счёт некоммерческой организации, которую основал Мартин Скорсезе для восстановления и сохранения старых фильмов.',
    ],
    type: 'film',
    film: {
      name: 'Остров собак',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjZkYzYwNmQtNjk3ZC00Y2M2LThhY2EtODIzOThiNDJmMTk2XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR86,0,500,281_.jpg',
      src: '20.mp4',
      subtitles: [
        {
          src: '20-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '20-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 21,
    name: 'Джон Уик',
    slogan: 'Его лучше не трогать',
    ratings: [7.4, 7.0],
    age: '16+',
    originalName: 'John Wick',
    poster: 'https://live.staticflickr.com/5610/15540738980_9d0a3230dd_b.jpg',
    summary: 'боевик, криминал, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTAxNDk2ODYzMzleQTJeQWpwZ15BbWU4MDY5NDExNzIx._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '21.mp4',
        subtitles: [
          {
            src: '21-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '21-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMjA1OTUxNjU4M15BMl5BanBnXkFtZTgwNTY3MDk5MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTk1MDQ0ODUzNF5BMl5BanBnXkFtZTgwMjY3MDk5MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTEyODY0MDI1MDNeQTJeQWpwZ15BbWU4MDQ2NzA5OTIx._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNzI0ODk2MjY0OV5BMl5BanBnXkFtZTgwMzg1MTI4MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjAwNjA1Mjk2OV5BMl5BanBnXkFtZTgwNDg1MTI4MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTYzMTcxNzcyNl5BMl5BanBnXkFtZTgwODc1MTI4MjE@._V1_.jpg',
    ],
    description: 'Джон Уик - на первый взгляд, самый обычный среднестатистический американец, который ведет спокойную мирную жизнь. Однако мало кто знает, что он был наёмным убийцей, причём одним из лучших профессионалов в своём деле. После того как сынок главы бандитской группы со своими приятелями угоняет его любимый «Мустанг» 1969 года выпуска, при этом убив его собаку Дейзи, которая была подарком недавно почившей супруги, Джон вынужден вернуться к своему прошлому. Теперь Уик начинает охоту за теми, кто имел неосторожность перейти ему дорогу, и он готов на всё, чтобы отомстить.',
    usersRating: 4,
    reviews: [''],
    genre: 'боевик, триллер, криминал',
    release: ['19 сентября 2014', '1 января 2015'],
    wins: [
      'Golden Schmoes Awards: Biggest Surprise of the Year',
      'Golden Trailer Awards: Best Thriller Poster',
      'IGN Summer Movie Awards: Best Action Movie',
    ],
    audio: 'Английский, Русский',
    studio: [
      '87Eleven',
      'Company Films',
      'Cutting Edge Group',
      'DefyNite Films',
      'Huayi Brothers Media',
      'MJW Films',
      'Poquito Productions',
      'Summit Entertainment',
      'Thunder Road',
      'Unbelievable Entertainment',
    ],
    countries: 'США, Китай',
    actors: [
      { personId: 233, role: 'Джон Уик' },
      { personId: 234, role: 'Вигго Тарасов' },
      { personId: 235, role: 'Йозеф Тарасов' },
      { personId: 184, role: 'Маркус' },
      { personId: 236, role: 'Эви' },
      { personId: 237, role: 'Мисс Перкинс' },
    ],
    director: [
      { personId: 238, role: 'Chad Stahelski' },
      { personId: 239, role: 'David Leitch' },
    ],
    producers: [
      { personId: 240, role: 'Basil Iwanyk' },
      { personId: 239, role: 'David Leitch' },
      { personId: 241, role: 'Eva Longoria' },
    ],
    facts: [
      'По словам Киану Ривза он сам исполнил 90% трюков в фильме.',
      'В сценах рукопашного боя можно заметить, что Джон Уик использует приемы дзюдо, а его соперница мисс Перкинс — джиу-джитсу.',
      'Охранник, который машет Уику на взлетно-посадочной полосе, читает роман Треваньяна (Род Уитакер) «Шибуми». В этом романе описываются события, схожие с сюжетом фильма: ушедший на покой наемный убийца вынужден вновь взяться за свое ремесло. Также история, которую рассказывает Вигго о том, как Уик убил трех людей при помощи карандаша, является отсылкой к роману «Шибуми», герой которого использовал для совершения убийств различные предметы быта.',
    ],
    type: 'film',
    film: {
      name: 'Джон Уик',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTAxNDk2ODYzMzleQTJeQWpwZ15BbWU4MDY5NDExNzIx._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '21.mp4',
      subtitles: [
        {
          src: '21-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '21-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 22,
    name: 'Континенталь',
    slogan: 'Испанская версия «Острых козырьков»',
    ratings: [7, 7],
    age: '16+',
    originalName: 'El Continental',
    poster: 'https://pic.showjet.ru/pics/57358089-7937-4e8c-b650-7a44bac85d5f/10x5/1250.jpg',
    summary: '1 сезон / криминал, драма, 2018',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/eafa7275-22f1-42eb-aeb0-04b8f2baa190/10x5/550.jpg',
        src: '1.mp4',
        subtitles: [
          {
            src: '1-sp.vtt',
            srcLang: 'sp',
            label: 'Spanish',
          },
          {
            src: '1-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/d8a6a58d-1e25-4310-ba96-09883523b26e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/65bb0ba9-8922-4a8e-a333-1e03ff2d01c9/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/425bc2c0-ffad-4194-bff9-d176c9c81ca6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/ed11242f-86b0-4464-ab2e-4fa7566deef2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/82677ac2-45f6-4ef1-be12-30a126f19d0d/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a0fb80d3-654b-4164-8a85-15d65c0be4d7/10x7/1000.jpg',
    ],
    description: 'Стильная гангстерская драма из Испании в лучших традициях «Острых козырьков». \nМадрид, 1920-е годы. Местный гангстер Рикардо Леон промышляет нелегальной продажей алкоголя и хочет расширить свой бизнес. Он решает возродить пафосное, но убыточного кафе «Континенталь», чтобы превратить его в самое модное заведение города. Однако Леон преследует личные цели: завоевать сердце своенравной дочери владельца «Континенталя» и переиграть главного врага — собственного дядю.',
    usersRating: 4,
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
    facts: [],
    wins: ['Телевизионная премия BAFTA: Лучшие визуальные эффекты'],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 23,
    name: 'Опочтарение',
    slogan: 'Вам письмо!',
    ratings: [7.8, 7.7],
    age: '16+',
    originalName: 'Going Postal',
    poster: 'https://i.imgur.com/u0QyCmo.jpg',
    summary: '1 сезон / фэнтези, приключения, 2010',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/4440a521-5663-4d4e-8326-02bf205b665f/10x5/550.jpg',
        src: '2.mp4',
        subtitles: [
          {
            src: '2-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '2-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://i.imgur.com/imKqvro.jpg',
      'https://i.imgur.com/rea5SbN.jpg',
      'https://i.imgur.com/583EUaK.jpg',
      'https://i.imgur.com/qBnAEFW.jpg',
      'https://i.imgur.com/jtAWyJm.jpg',
      'https://i.imgur.com/KYKoPyY.jpg',
    ],
    description: 'Добро пожаловать в воображариум Терри Пратчетта! \nМокрист фон Губвиг был гениальным мошенником: подделывал предметы искусства и мастерски обкрадывал людей — настоящий Остап Бендер в мире стимпанка. Однажды Мокриста всё-таки поймали и приговорили к смертной казни, но вместо исполнения приговора предложили сделку: восстановить работу единственного городского почтамта. \nВсё бы хорошо, но писем там скопилось просто тьма, а над самим почтамтом висит страшное проклятье: 4 предшественника Губвига погибли при очень странных обстоятельствах. Вдобавок ко всему у главного героя появляется неприятный конкурент — Взяткер Позолот.',
    usersRating: 5,
    reviews: [''],
    genre: 'фэнтези, приключения, мелодрама, детектив, комедия',
    release: ['30 мая 2010 г.', '30 мая 2010 г.'],
    audio: 'Английский, Русский',
    studio: ['Sky'],
    countries: 'Великобритания',
    actors: [
      { personId: 1, role: 'Барабант' },
      { personId: 2, role: 'Лорд Витинари' },
      { personId: 3, role: 'Мисс Крипслок' },
      { personId: 4, role: 'Мокрист фон Губвиг' },
      { personId: 5, role: 'Мистер Грыль' },
      { personId: 6, role: 'Взяткер Позолот' },
      { personId: 7, role: 'Почтальон' },
      { personId: 8, role: 'Стэнли' },
      { personId: 9, role: 'Ангела Красота Добросерд' },
    ],
    director: [
      { personId: 10, role: 'Jon Jones' },
    ],
    producers: [
      { personId: 11, role: 'Rod Brown' },
      { personId: 12, role: 'Vadim Jean' },
      { personId: 13, role: 'Sue De Beauvoir' },
      { personId: 14, role: 'Sarah Conroy' },
    ],
    facts: [
      'Фильм снят по мотивам романа Терри Пратчетта «Опочтарение» (Going Postal, 2004)',
      'Не будучи профессиональным актером, Терри Пратчетт испытал некоторые затруднения со своей ролью, которая заключалась в том, чтобы просто пройтись по комнате. По словам самого писателя, ему «понадобилось шесть дублей, чтобы справиться с этой непростой задачей».',
      'Почтальон в последней сцене — Терри Пратчетт, автор книги.', 'Термин «опочтарение» (англ. going postal) применяется для обозначения актов массовых убийств, которые совершаются в порыве ярости или в состоянии эмоциональной нестабильности.',
    ],
    wins: ['Телевизионная премия BAFTA: Лучшие визуальные эффекты'],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 24,
    name: 'Сын',
    slogan: 'В главной роли Пирс Броснан',
    ratings: [7.5, 6.8],
    age: '16+',
    originalName: 'The Son',
    poster: 'https://pic.showjet.ru/pics/c5f48991-e55c-44b4-991d-b15ee8f374d5/10x5/1250.jpg',
    summary: '2 сезона / вестерн, драма, 2017 - 2019',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/a6ba8fe9-96c4-4247-adf1-08a586b41fcd/10x5/550.jpg',
        src: '3.mp4',
        subtitles: [
          {
            src: '3-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '3-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: ['https://pic.showjet.ru/pics/f57d97e2-4343-4190-ba62-e7b35f21aa13/10x7/1000.jpg', 'https://pic.showjet.ru/pics/bd46c3b8-d2ce-4467-b18d-76d820bd136c/10x7/1000.jpg', 'https://pic.showjet.ru/pics/90147cc5-81e0-4920-9525-b1a2859b30dd/10x7/1000.jpg', 'https://pic.showjet.ru/pics/095bf496-1b81-4a55-a7a3-1e01be77bf7f/10x7/1000.jpg', 'https://pic.showjet.ru/pics/6c6a7ceb-e19e-47b3-8fd5-9697e703de36/10x7/1000.jpg', 'https://pic.showjet.ru/pics/51961699-1ce6-4cea-a0d0-3656d908495e/10x7/1000.jpg'],
    description: 'Жестокий и эпический вестерн о становлении Америки, показанном через историю одной семьи. В главной роли — Пирс Броснан. \n1849 год, центральный Техас. Юный Илай Маккалоу попадает в плен к индейцам после того, как те ворвались в дом и безжалостно расправились с его сёстрами и матерью. Неопытный, но смелый парень учится выживать и договариваться с диким племенем. \n1915 год, южный Техас. Параллельно разворачивается история уже взрослого Илая Маккалоу в окружении детей и внуков. Властный и уважаемый глава семьи, он владеет ранчо и пытается отыскать нефть. Теперь вместо индейцев его главными врагами стали мексиканцы, которые вот-вот развяжут войну. Однако сын Илая, Пит, не готов мириться с жестокими методами отца и отпускает одного мексиканца, которого Маккалоу взяли в плен. Это грозит разрушить не только семейные узы, но и всю империю Илая Маккалоу, которую тот строил много лет...',
    usersRating: 4,
    reviews: [''],
    genre: 'вестерн, драма',
    release: ['08 апреля 2017 г.'],
    audio: 'Английский, Русский',
    studio: ['AMC Studios'],
    countries: 'Соединенные Штаты Америки',
    actors: [
      { personId: 14, role: 'Элай Маккалоу' },
      { personId: 15, role: 'Пит Маккалоу' },
      { personId: 16, role: 'Мария Гарсия' },
      { personId: 17, role: 'Тошауэй' },
      { personId: 18, role: 'Салли Маккалоу' },
      { personId: 19, role: 'Молодой Элай Маккалоу' },
    ],
    director: [
      { personId: 20, role: 'Tom Harper' },
      { personId: 21, role: 'Tom Vaughan' },
      { personId: 22, role: 'Ellen Kuras' },
    ],
    producers: [
      { personId: 23, role: 'Daniel C. Connolly' },
      { personId: 24, role: 'Henry Bronchtein' },
    ],
    facts: [
      'Сериал основан на одноимённом романе Филиппа Майера, который был опубликован в 2013 году.',
      'Изначально планировалось, что главную роль сыграет Сэм Нил, однако из-за личных обстоятельств он отказался от участия.',
      'Пирс Броснан не играл в сериалах свыше 30 лет — после работы в сериале «Ремингтон Стил» (1982-1987).',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2019',
          episodes: [
            {
              name: 'Нумунуу',
              thumbnail: 'https://pic.showjet.ru/pics/4b29fa99-d5d6-4a0b-8961-c303c8dfd4dc/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Десять долларов и ощипанный гусь',
              thumbnail: 'https://pic.showjet.ru/pics/4db1a856-346f-4169-bfe3-0ef37a4e3a96/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Слепой тигр',
              thumbnail: 'https://pic.showjet.ru/pics/f6a0943c-1338-492d-aa09-9003f246f5d5/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Оскальпированная собака',
              thumbnail: 'https://pic.showjet.ru/pics/e5293d71-6402-402d-aeb1-e56e8fb2f434/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Горячее масло',
              thumbnail: 'https://pic.showjet.ru/pics/8bef34f2-b1e8-425b-9485-ae55a67666cc/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Голубой свет',
              thumbnail: 'https://pic.showjet.ru/pics/32cefeef-a8f2-44c4-8edc-636bdd20ee90/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Кто-то взял лопату',
              thumbnail: 'https://pic.showjet.ru/pics/ed8c9aa6-23ec-47fb-825d-924c6971618a/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Все их обвинительные следы',
              thumbnail: 'https://pic.showjet.ru/pics/d18d3370-c8a7-43f4-b7da-b224d8047045/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Медведь',
              thumbnail: 'https://pic.showjet.ru/pics/2828829f-7c9f-4f1f-9fd4-f1525519604a/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Легенда',
              thumbnail: 'https://pic.showjet.ru/pics/6939ca8f-e8ba-464c-9c9a-cd0c24257542/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2017',
          episodes: [
            {
              name: 'Первый сын Техаса',
              thumbnail: 'https://pic.showjet.ru/pics/a00f09db-c2aa-4e01-a641-65480ad71301/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Сливовое дерево',
              thumbnail: 'https://pic.showjet.ru/pics/b7aba7f2-6805-46b3-867c-c3ebc1fe6c7c/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Вторая империя',
              thumbnail: 'https://pic.showjet.ru/pics/5ff4588a-7cc2-4ddc-86da-e95799ac46a5/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Песня смерти',
              thumbnail: 'https://pic.showjet.ru/pics/8bf58de5-79e9-4262-a1aa-4a88b879706c/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Никаких пленных',
              thumbnail: 'https://pic.showjet.ru/pics/4f17fb20-62d6-4746-a205-4ab51ce98401/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Охотник на буйволов',
              thumbnail: 'https://pic.showjet.ru/pics/99af408e-6c9a-46f2-9809-01d5d6bd7786/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Брачные узы',
              thumbnail: 'https://pic.showjet.ru/pics/0e377e3f-380d-4c92-bcff-89fe04257c55/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Медовая охота',
              thumbnail: 'https://pic.showjet.ru/pics/cf2ec742-6a20-4212-8c64-dd40fa605610/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пророчество',
              thumbnail: 'https://pic.showjet.ru/pics/497eedd0-2953-4600-b348-0fcb4049bdc2/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Скальпы',
              thumbnail: 'https://pic.showjet.ru/pics/6f2f017b-5fab-48fd-b93d-7a0fa7a8f171/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 25,
    name: 'Индийское лето',
    slogan: 'Любовь на закате империи',
    ratings: [7.2, 7],
    age: '16+',
    originalName: 'Indian Summers',
    poster: 'https://pic.showjet.ru/pics/ab191704-3437-4e09-80b3-cfb3d61c6467/10x5/1250.jpg',
    summary: '2 сезона / история, мелодрама, 2015 - 2016',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/121a0a7b-a56b-4ed5-aa7c-25a4c26f62a3/10x5/550.jpg',
        src: '4.mp4',
        subtitles: [
          {
            src: '4-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '4-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/278d3a15-9dd9-4fa2-a499-c9cc25796322/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/0cfc2e39-9dc0-489f-b66a-b6f5f7dcd807/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/cd318c1d-e3b1-4058-9c59-efac23c16965/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5f2e456f-081b-4015-9db0-c98d4d2b63de/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3a5f58d3-3ef6-4855-a7ce-b536e2a37af2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3b436cb2-1d88-40ef-8a6c-95844c1754e5/10x7/1000.jpg',
    ],
    description: 'Драматическая история любви и борьбы за власть в лучших традициях «Аббатства Даунтон». \nИндия, 1932 год. С приближением лета английские аристократы устремляются на север страны в город Шимла, расположенный у подножия Гималаев. Здесь, в закрытом клубе для британцев, они предаются изысканным развлечениям и танцуют ночи напролёт, не замечая, что местные жители уже начали борьбу за независимость. На фоне тревожных событий и политических интриг между героями вспыхивают чувства, которые ведут к необратимым последствиям…',
    usersRating: 3,
    reviews: [''],
    genre: 'история, мелодрама, драма',
    release: ['15 февраля 2015 г.', '15 февраля 2015 г.'],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting', 'Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 25, role: 'Синтия' },
      { personId: 26, role: 'Ральф Уилан' },
      { personId: 27, role: 'Африн Делал' },
      { personId: 28, role: 'Суни Далал' },
      { personId: 29, role: 'Юджин Мэтерс' },
      { personId: 30, role: 'Дуги Раворт' },
      { personId: 31, role: 'Чарли Хэвисток' },
      { personId: 32, role: 'Сита' },
      { personId: 33, role: 'Ронни Кин' },
      { personId: 34, role: 'Сирена' },
      { personId: 35, role: 'Мадлен Мэтерс' },
      { personId: 36, role: 'Элис Уилан' },
    ],
    director: [
      { personId: 37, role: 'Jamie Payne' },
      { personId: 38, role: 'Jonathan Teplitzky' },
      { personId: 39, role: 'Paul Wilmshurst' },
    ],
    producers: [
      { personId: 40, role: 'Rebecca Eaton' },
      { personId: 41, role: 'Indira Varma' },
    ],
    facts: [
      'Сериал на самом деле был снят не в Индии, а в Малайзии, штате Пинанг.',
      '«Индийское лето» — самый масштабный британский проект для Channel 4 за последние 20 лет.',
      'Место действия Королевского клуба — это Crag Hotel, который был построен в XIX веке и принадлежал армянской семье Саркис. После Второй мировой войны отель стал пансионом, но после 1991 года оказался заброшен. Создатели сериала занялись реконструкцией здания и превратили его в роскошный курортный отель.',
      'Для актрисы Джулии Уолтерс (в её фильмографии более 80 фильмов!) сериал стал первым проектом, съёмки которого проходили за пределами родной Великобритании.',
      'До середины прошлого века в городе Шимла, где разворачиваются события сериала, на самом деле находилась летняя столица Британской империи.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2016',
          episodes: [
            {
              name: 'Индиец в английском костюме',
              thumbnail: 'https://pic.showjet.ru/pics/bc109e10-ea6f-40ab-b1b7-047fba82d2ac/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Чёрная змея',
              thumbnail: 'https://pic.showjet.ru/pics/b50f9d21-a89f-46fc-b555-a6f991c41d40/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Белые боги',
              thumbnail: 'https://pic.showjet.ru/pics/6393e2c2-a0f1-4176-a2be-744b611a791f/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пустое кресло',
              thumbnail: 'https://pic.showjet.ru/pics/b9193410-fe21-45b7-ab4c-388cb901aaa0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Игра в прятки',
              thumbnail: 'https://pic.showjet.ru/pics/917274f0-e40e-4185-a364-b4b7ce0dceea/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Подарок для короля',
              thumbnail: 'https://pic.showjet.ru/pics/43356090-ccce-4d1b-8b70-ec92dd68eff2/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Предложение',
              thumbnail: 'https://pic.showjet.ru/pics/0596b831-2c25-4776-9eca-05bb8c7ac74e/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'День рождения',
              thumbnail: 'https://pic.showjet.ru/pics/6dd94ed7-bef4-46b3-8fa5-9bc8672ffb58/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Победитель забирает всё',
              thumbnail: 'https://pic.showjet.ru/pics/5bed2232-bfc6-46de-9961-591741cbf549/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Отъезд из дома',
              thumbnail: 'https://pic.showjet.ru/pics/59687dc9-9431-4d07-8d68-56fcff9e80a7/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2015',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/285a7f76-5d82-48f4-bc87-78670f464015/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/e021d111-96ee-4bae-b651-d4c9b41b555a/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/6623d27d-8d09-4858-aac5-5b20a2067569/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/875d952a-e889-4cee-9491-23836ca85576/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/fe79ab1c-ff16-44ca-90f9-c52091558fd0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/4a9e003f-1f71-46f7-8158-b1acac914233/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 7',
              thumbnail: 'https://pic.showjet.ru/pics/ee9138a6-c10e-414c-9d63-6928b152a5e0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 8',
              thumbnail: 'https://pic.showjet.ru/pics/2b8a943b-e609-410d-b931-f2e49779cca8/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 9',
              thumbnail: 'https://pic.showjet.ru/pics/a8e808c2-2fc9-4039-ae5e-de1b833b2514/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 10',
              thumbnail: 'https://pic.showjet.ru/pics/02b76b56-d3ce-4378-b681-ef15cb2b24db/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 26,
    name: 'Хроники Шаннары',
    slogan: 'Для поклонников «Властелина колец»',
    ratings: [7.2, 6.9],
    age: '16+',
    originalName: 'The Shannara Chronicles',
    poster: 'https://pic.showjet.ru/pics/a259e19b-e21c-416f-b948-567aaa05ab50/10x5/1250.jpg',
    summary: '2 сезона / фэнтези, приключения, 2016 - 2017',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/adb38dc6-441c-442b-af92-33456eb57f7f/10x5/550.jpg',
        src: '5.mp4',
        subtitles: [
          {
            src: '5-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '5-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/e0ae03d8-d9df-40ff-a36a-9d62bf590c51/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5c8a6c40-9bd4-4061-b67e-a524e51d6151/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a5b9805e-d7f4-497c-9588-d9d975746ddf/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/9c43cc69-6c59-4562-8ca1-7dab4c4f85df/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a62afcff-ef43-40ec-a1fa-f2158d13520b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/d9bfe531-1404-4a65-aefb-1b7afc9fdbbf/10x7/1000.jpg',
    ],
    description: 'Для поклонников «Властелина колец»: масштабный фэнтези-сериал «Хроники Шаннары», основанный на романе Терри Брукса. \nВ далёком постапокалиптическом будущем мир разделился на 4 Земли: территории людей, эльфов, троллей и дварфов. После войны рас, уничтожившей магию, всё зло заключили в дереве Элькрис, которое бережно охраняют эльфы. Для молодого поколения истории про магию и демонов — лишь сказки. Всё меняется, когда древние тёмные силы пробуждаются, а судьба мира оказывается в руках трёх юных героев.  \nЭмберли, принцесса королевства эльфов, получает пугающее видения о конце мира. Уилл, юный эльф-полукровка, после смерти матери узнаёт о своей причастности к древнему роду Шаннары — великих королей и магов. Эретрия, сирота и юная воровка, становится преданным другом Уилла и Эмберли. Вместе с друидом Алланоном героям предстоит тяжелый путь по спасению всех 4 Земель от гибели.',
    usersRating: 3,
    reviews: [''],
    genre: 'фэнтези, приключения, фантастика',
    release: ['05 января 2016 г.'],
    audio: 'Английский, Русский',
    studio: ['Music Television (MTV)'],
    countries: 'Новая Зеландия, Соединенные Штаты Америки',
    actors: [
      { personId: 42, role: 'Король Эвентин Элесседил' },
      { personId: 43, role: 'Эмберли Элесседил' },
      { personId: 44, role: 'Марет' },
      { personId: 45, role: 'Андер Элесседил' },
      { personId: 46, role: 'Алланон' },
      { personId: 47, role: 'Эретрия' },
      { personId: 48, role: 'Уилл Омсфорд' },
    ],
    director: [
      { personId: 49, role: 'James Marshall' },
      { personId: 50, role: 'Brad Turner' },
    ],
    producers: [
      { personId: 51, role: 'David Blocker' },
      { personId: 52, role: 'Jon Favreau' },
    ],
    facts: [
      'Эльфийского короля Эвентина Элесседила сыграл британский актёр Джон Рис-Дэвис, известный по роли гнома Гимли в трилогии «Властелин колец».',
      'Сериал является экранизацией второй книги из трилогии «Шаннары» Терри Брукса.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2017',
          episodes: [
            {
              name: 'Друид',
              thumbnail: 'https://pic.showjet.ru/pics/360459d2-7868-4ce4-a4f8-05c46e9627e6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Дух',
              thumbnail: 'https://pic.showjet.ru/pics/3b7cb649-939d-49eb-afcb-3a2a8c72a843/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Грэймарк',
              thumbnail: 'https://pic.showjet.ru/pics/2a53e92d-acf6-41dc-856f-de9a7d32d6d6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Обитатель',
              thumbnail: 'https://pic.showjet.ru/pics/4641e4cc-1131-476f-93cb-e830400f6079/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Паранор',
              thumbnail: 'https://pic.showjet.ru/pics/45e54d0d-7b9f-4d60-9ae4-caacf1de4171/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Алый',
              thumbnail: 'https://pic.showjet.ru/pics/0d5e8203-870d-45e9-baf3-375e13341740/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Чародей',
              thumbnail: 'https://pic.showjet.ru/pics/3c6474a9-cb81-4ac4-a325-4f5683534922/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эмберли',
              thumbnail: 'https://pic.showjet.ru/pics/b733396c-16ab-4468-b8d7-0085783bb0a6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Уайлдерун',
              thumbnail: 'https://pic.showjet.ru/pics/58f03822-be47-4493-8fb1-8eb6b14d9bb8/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Кровь',
              thumbnail: 'https://pic.showjet.ru/pics/168aeb9b-247c-4141-bdef-ac1feb7d4cb1/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2016',
          episodes: [
            {
              name: 'Избранная: Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/25e8bd73-c497-41cb-9c18-3562c52b1552/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Избранная: Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/c3077ef4-48a5-4293-8f92-d07d2402be3d/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Фурия',
              thumbnail: 'https://pic.showjet.ru/pics/fc4e239a-0969-44c2-abe0-55d480d16356/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Подмена',
              thumbnail: 'https://pic.showjet.ru/pics/f8a9e6ba-eb86-4ec5-ac74-cc73d02c43f7/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Жнец',
              thumbnail: 'https://pic.showjet.ru/pics/0d47802d-da71-44fd-8e03-6da42a744b3c/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пайкон',
              thumbnail: 'https://pic.showjet.ru/pics/63ed40ac-b2b6-4eb1-af1b-3a05c8ca22d9/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Разлом',
              thumbnail: 'https://pic.showjet.ru/pics/f0f8e6e1-8acb-4181-b1df-11b57b37dfca/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Утопия',
              thumbnail: 'https://pic.showjet.ru/pics/c5534b8b-fc9f-4895-96c7-a998e524e492/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Убежище',
              thumbnail: 'https://pic.showjet.ru/pics/e8c5a84f-4b56-4a41-a7cd-19c973a0d83c/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Элькрис',
              thumbnail: 'https://pic.showjet.ru/pics/4b843bd5-d6e8-44c4-bc6e-d6e3c3cdc4b2/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 27,
    name: 'Тайны Лауры',
    slogan: 'Женская версия «Касла»',
    ratings: [7.4, 7.4],
    age: '16+',
    originalName: 'Los misterios de Laura',
    poster: 'https://pic.showjet.ru/pics/c6b9b3f9-ee9f-4e29-868b-273196701d0f/10x5/1250.jpg',
    summary: '3 сезона / приключения, детектив, 2009 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/fab57c5e-75a3-4310-a431-f7b576b5cd26/10x5/550.jpg',
        src: '6.mp4',
        subtitles: [
          {
            src: '6-sp.vtt',
            srcLang: 'sp',
            label: 'Spanish',
          },
          {
            src: '6-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/c308d35e-35a1-4408-83b3-69789451002e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3d42a3b4-4322-4c19-9c86-92ed6017aa7e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/b7d4f3ad-548d-4a6a-bf44-74f3cc8c187e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/2546855e-9f9b-40e5-afda-ac0a5afa2c8b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/049063c3-020d-40bc-a1a7-f3ffb4010cb6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5d376ad7-002c-40db-b9c1-6c7065752bf7/10x7/1000.jpg',
    ],
    description: 'Для поклонников культового сериала «Касл»: испанская комедия о том, как женщина-детектив пытается совместить работу, развод и воспитание близнецов. \nЛаура — уважаемый детектив с идеальной интуицией, который одинаково хорошо может справиться как с хитрым продавцом в мясном магазине, так и с опасным преступником. Неудачи настигают женщину только в личной жизни: сыновья-близнецы сводят с ума проделками, экс-супруг стал начальником, и активно пытается помириться, а коллега Мартин, который нравится Лауре ещё со времен академии, относится к ней как к подруге, отдавая предпочтение сексапильным свидетельницам. \nПоможет ли шестое чувство Лауры стать ей не только счастливым профессионалом, но и счастливой женщиной?',
    usersRating: 2,
    reviews: [''],
    genre: 'приключения, детектив, комедия',
    release: ['27 июля 2009 г.'],
    audio: 'Русский',
    countries: 'Испания',
    actors: [
      { personId: 53, role: 'Мартин Мареска' },
      { personId: 54, role: 'Хави Сальгадо Лебрель' },
      { personId: 55, role: 'Карлос Сальгадо Лебрель' },
      { personId: 56, role: 'Вероника Лебрель' },
      { personId: 57, role: 'Лидия Мартинез' },
      { personId: 58, role: 'Висенте Куэвас' },
      { personId: 59, role: 'Лаура Лебрель' },
      { personId: 60, role: 'Джакобо Сальгадо' },
    ],
    director: [
      { personId: 61, role: 'Pau Freixas' },
    ],
    producers: [
      { personId: 61, role: 'Pau Freixas' },
    ],
    facts: [
      'Сериал на самом деле был снят не в Индии, а в Малайзии, штате Пинанг.',
      '«Индийское лето» — самый масштабный британский проект для Channel 4 за последние 20 лет.',
      'Место действия Королевского клуба — это Crag Hotel, который был построен в XIX веке и принадлежал армянской семье Саркис. После Второй мировой войны отель стал пансионом, но после 1991 года оказался заброшен. Создатели сериала занялись реконструкцией здания и превратили его в роскошный курортный отель.',
      'Для актрисы Джулии Уолтерс (в её фильмографии более 80 фильмов!) сериал стал первым проектом, съёмки которого проходили за пределами родной Великобритании.',
      'До середины прошлого века в городе Шимла, где разворачиваются события сериала, на самом деле находилась летняя столица Британской империи.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 3,
      seasons: [
        {
          seasonInfo: 'Сезон 3 / 2014',
          episodes: [
            {
              name: 'Лаура и загадка комнаты 308',
              thumbnail: 'https://pic.showjet.ru/pics/93d09f2d-7696-499a-b199-953ecf4894f9/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна капсулы времени. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/f1b9d562-a17e-4a2a-845d-dd27c881c0a6/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна капсулы времени. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/29dfe795-588d-4968-9b3e-39047d02d821/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна гостя',
              thumbnail: 'https://pic.showjet.ru/pics/787f7dd5-8730-4e0d-9e75-cd3c5dfd7529/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна одной женщины',
              thumbnail: 'https://pic.showjet.ru/pics/078a8ccd-2dd5-4c3d-acc6-89724aa8d6f2/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна невидимого убийцы',
              thumbnail: 'https://pic.showjet.ru/pics/a29bb785-a12c-4ef6-ab1f-79f839784e05/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна преступления века',
              thumbnail: 'https://pic.showjet.ru/pics/b9cc4b88-996d-4029-a448-7bab02beea11/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна призрака',
              thumbnail: 'https://pic.showjet.ru/pics/ba4671c0-71ed-441c-8932-0aeb5e809732/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и шпион, который много болтал',
              thumbnail: 'https://pic.showjet.ru/pics/f2c1a40c-0227-450e-9fb6-f318cb63627e/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна пойманных мышей',
              thumbnail: 'https://pic.showjet.ru/pics/ac2c6427-5383-40c9-b9bc-804a8e0c5a78/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна ликов истины',
              thumbnail: 'https://pic.showjet.ru/pics/8baefd1f-51c0-4adb-ab58-88ae3556f9e5/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/14c862ac-2ca3-4832-ad90-cde6baa21627/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/937aef3f-43c4-4b3f-ac27-ccc7d613b174/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 3',
              thumbnail: 'https://pic.showjet.ru/pics/937aef3f-43c4-4b3f-ac27-ccc7d613b174/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 2 / 2011',
          episodes: [
            {
              name: 'Тайна молчуна',
              thumbnail: 'https://pic.showjet.ru/pics/0f83463c-d300-4588-9321-b93b3bba96c1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна клуба',
              thumbnail: 'https://pic.showjet.ru/pics/438c316f-df2c-42d3-8c18-7d709b90b22a/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна человека, которого не было',
              thumbnail: 'https://pic.showjet.ru/pics/46a728a5-0e7a-4308-b2ca-22e9c7139e38/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна недовольного пациента',
              thumbnail: 'https://pic.showjet.ru/pics/438a6834-2657-4fbc-be57-0f3c6003a25c/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна человека, который не хотел умирать',
              thumbnail: 'https://pic.showjet.ru/pics/ef5143b8-7223-45fe-b46e-0273a266f3ea/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна восьми мужчин',
              thumbnail: 'https://pic.showjet.ru/pics/16111a03-134f-4c73-ba79-d697cf7e34be/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна кричащего свидетеля',
              thumbnail: 'https://pic.showjet.ru/pics/9ec1cfee-6d95-4999-84e1-1269f534ea10/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна необычного трюка',
              thumbnail: 'https://pic.showjet.ru/pics/6995ac7b-5fbf-4bd5-86a2-c4172d6b04a1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна преступного аббатства',
              thumbnail: 'https://pic.showjet.ru/pics/17a59cdd-8507-4f9f-923f-36a6e5bbec33/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна красной леди',
              thumbnail: 'https://pic.showjet.ru/pics/f0ecb1cf-be3b-4dc2-bdb5-eb4d7506cc8d/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна десяти незнакомцев. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/5affa3d5-68c6-4a48-9fb8-919f609ca7cd/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна десяти незнакомцев. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/182848c5-62bd-47c1-aaf1-10e8d28444a9/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2009',
          episodes: [
            {
              name: 'Тайна запечатанной комнаты. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/cff1a7d9-2c46-49c9-97dd-f215a82b0df1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна запечатанной комнаты. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/24e77673-eb0a-40bf-a7a1-d3b670c1bd6d/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального соседа. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/2842bfef-d0b7-4772-997c-4e3a3d00b714/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального соседа. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/0db050a1-ee55-4f55-992b-bd6f9b1252f2/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального алиби. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/bc7e30c8-d704-437d-8fcf-3a981581dfaa/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального алиби. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/503d32b5-7769-425a-95fc-9461a3614272/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна места преступления',
              thumbnail: 'https://pic.showjet.ru/pics/8da94e6e-01a7-4b1b-8ed5-a887fd0faf35/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна синего попугая. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/e24cc7b0-325e-489a-8779-4336c1ab9332/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна синего попугая. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/f7d93d95-17a2-47d0-bb9c-ff2ef9e6b7f3/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна найденного трупа',
              thumbnail: 'https://pic.showjet.ru/pics/7a97aa9d-ceac-4e29-915e-36e0455fca50/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 28,
    name: 'Бивер Фолс',
    slogan: '«Американский пирог» с британской начинкой',
    ratings: [7.8, 7.7],
    age: '16+',
    originalName: 'Beaver Falls',
    poster: 'https://pic.showjet.ru/pics/9087e07e-cfb7-4552-aea8-1e4b2c1c6484/10x5/1250.jpg',
    summary: '2 сезона / комедия, 2011 - 2012',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/45586294-928e-4ebf-94aa-466caa626060/10x5/550.jpg',
        src: '7.mp4',
        subtitles: [
          {
            src: '7-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '7-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/e39ee4f3-f56c-44f3-bc88-10176eeadfe2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/8110233e-baae-4259-ad0e-9b8c4177fa2b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/9cb76cc8-c507-4003-832b-d60b0c0bf9ac/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a6d35c62-b65c-48e9-a7f6-8d2c376fb825/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/344ff3db-fb40-4106-ba3e-60359503a3f0/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/ebc395e4-faea-4f7b-ab86-0fa0039e406a/10x7/1000.jpg',
    ],
    description: 'Молодёжная комедия в лучших традициях «Американского пирога», «Евротура» и «Короля вечеринок». \nСолнце, воздух, природа, красивые девчонки и симпатичные парни, романтические приключения и безудержное веселье — что ещё нужно для счастья? Трое английских студентов — Флинн, А-Раб и Барри — устраиваются на работу в летний американский лагерь, куда приезжают отдыхать отпрыски самых богатых семейств Калифорнии. Ребятам предстоит присматривать за детишками, но на самом деле они намерены оторваться по полной и покутить так, чтобы было о чём рассказать внукам!',
    usersRating: 3,
    reviews: [''],
    genre: 'комедия',
    release: ['27 июля 2011 г.', '27 июля 2011 г.'],
    audio: 'Английский, Русский',
    countries: 'Великобритания',
    actors: [
      { personId: 71, role: 'Джейк' },
      { personId: 72, role: 'Рик' },
      { personId: 73, role: 'Кимберли' },
      { personId: 74, role: 'ПиДжей' },
      { personId: 75, role: 'Брэндон' },
      { personId: 76, role: 'Мак' },
      { personId: 77, role: 'А-Раб' },
      { personId: 78, role: 'Флинн' },
      { personId: 79, role: 'Барри' },
      { personId: 80, role: 'Рэйчел' },
      { personId: 81, role: 'Хоуп' },
    ],
    director: [
      { personId: 82, role: 'Daniel O\'Hara' },
      { personId: 83, role: 'Benjamin Caron' },
      { personId: 84, role: 'Lawrence Till' },
      { personId: 85, role: 'Jack Clough' },
    ],
    producers: [
      { personId: 86, role: 'Liz Lewin' },
      { personId: 87, role: 'Charles Pattinson' },
      { personId: 88, role: 'George Faber' },
    ],
    facts: [
      'Действие сериала происходит в Калифорнии, однако съёмки проходили в Южной Африке.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2017',
          episodes: [
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/b3ce4602-b324-4912-8b3d-c4c6f4c2ae49/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/371788d1-52ec-42eb-a4f4-b55d3ab6f618/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/701749f1-f300-4bca-a2ed-d5e81433cceb/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/ff00806c-75a5-4b56-b73f-1f5df5f324f0/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/ab8186e0-4e7d-4b82-9022-f284ecce6251/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/0e697263-140e-4967-9192-0cbd871589dd/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2016',
          episodes: [
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/fbe6ac2b-3bbf-4ae6-8bd9-6b0c9ebd5446/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/d9bda9bd-a8ee-4217-adc7-836b6259c879/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/1fe76f9b-b64a-4226-9670-6f0bc5ca904b/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/9a6aca44-df21-4eab-b5cf-df9003ebd176/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/13c7773f-1c4d-4222-a2c6-52a93027008b/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/18715ea9-7241-4348-b10e-8be6309ed0d5/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 29,
    name: 'Тишина',
    slogan: 'Глухая девушка становится свидетелем убийства...',
    ratings: [7.1, 6.9],
    age: '16+',
    originalName: 'The Silence',
    poster: 'https://pic.showjet.ru/pics/332bc7ab-9f7c-4219-9df9-f72ee808e1ff/10x5/1250.jpg',
    summary: '1 сезон / триллер, детектив, 2010',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/06f33b2d-e146-49d3-8ada-e082dcd12a7c/10x5/550.jpg',
        src: '8.mp4',
        subtitles: [
          {
            src: '8-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '8-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/1067a9d4-5274-4e46-a025-72ecc4c11efa/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/f4be9a42-638e-4f14-9053-2dc3696fecff/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c1a1cffd-4643-411e-b303-e2b1aab512db/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/87294aac-295b-4ac5-94bd-591ff74f786a/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5fc9e229-0d1f-46d7-b2a4-3158ea826979/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/efbf7c81-0787-4e64-a4f4-daa2c3117a8f/10x7/1000.jpg',
    ],
    description: 'Переплетение психологической драмы и захватывающего триллера, которое никого не оставит равнодушным. \nАмелия, 18-летняя глухая девушка, случайным образом становится свидетельницей убийства женщины-полицейского и оказывается вовлечена в расследование сложного и запутанного дела. Окружающий мир обрушивается на девушку градом жестокости, несправедливости и разочарований, и теперь, чтобы помочь найти виновных, ей предстоит превратить свою особенность в преимущество.',
    usersRating: 5,
    reviews: [''],
    genre: 'триллер, детектив, криминал, драма',
    release: ['12 июля 2010 г.', '12 июля 2010 г.'],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 89, role: 'Амелия' },
      { personId: 90, role: 'Мэгги' },
      { personId: 91, role: 'Энн' },
      { personId: 92, role: 'Крис' },
      { personId: 93, role: 'Джим' },
    ],
    director: [
      { personId: 94, role: 'Dearbhla Walsh' },
    ],
    producers: [
      { personId: 88, role: 'George Faber' },
      { personId: 94, role: 'Cait Collins' },
    ],
    facts: [
      'Сериал стал первым британским проектом для сценариста Фионы Серес, которая родилась в Австралии. Ради работы над шоу она перевезла всю свою семью из Сиднея в Лондон.',
      'Женевьева Барр, как и её героиня, родилась глухой и в обычной жизни использует слуховые аппараты. Но для роли их необходимо было снять, а также девушке пришлось изучить язык жестов, который она раньше не применяла, полагаясь лишь на свои слуховые аппараты и чтение губ.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/313b8ff2-2d38-44db-82f8-e56b4ed24bb8/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/952e497f-cbec-4485-a73e-767162eaa4c4/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/37871517-0a5c-4f51-957d-6f39c448be0e/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/abb2ba21-0630-4c85-aa5d-7fb2d1294caf/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 30,
    name: 'Джек Айриш',
    slogan: 'В главной роли Гай Пирс',
    ratings: [6.8, 6.8],
    age: '18+',
    originalName: 'Jack Irish',
    poster: 'https://pic.showjet.ru/pics/d55f54c2-4b9f-4a90-8f73-191e9c3c98f0/10x5/1250.jpg',
    summary: '1 сезон / триллер, криминал, 2012 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/d388f434-a6dd-4c02-a95f-e41f3649fb27/10x5/550.jpg',
        src: '9.mp4',
        subtitles: [
          {
            src: '9-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '9-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/0327a903-cb0f-4a94-a83d-69e8958107e7/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/f9d598d0-8e5b-4efb-bf52-45f51ad59cc4/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a04e989a-3822-4879-bee4-2ba0661faa37/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/87d31c07-bb25-4594-98f1-8ad4ef0dea76/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/1b6615b5-6609-45f4-a8f4-5070ba1da03d/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/878c83a0-ccdd-45d5-90da-6773dbe122a3/10x7/1000.jpg',
    ],
    description: 'Криминальная драма о мрачных тайнах австралийского Мельбурна и депрессивном адвокате, который пытается их раскрыть. В главной роли — номинант на «Золотой глобус» Гай Пирс («Железный человек 3»). \nУ адвоката Джека Айриша была прекрасная жена, отличная работа и хорошая репутация. Но когда бывший клиент жестоко убил его супругу, а потом застрелился сам, Джек пустился во все тяжкие. Теперь его друзья — депрессия, ночные посиделки в баре и ставки на спорт. От прежней жизни не осталось ничего. \nНо как бы Айриш не пытался убежать от прошлого, ничего не получилось. Мёртвым находят другого клиента Джека — Дэнни, который отчаянно пытался дозвониться до бывшего адвоката. Официальная версия смерти — застрелен полицейским при попытке сопротивления. Только вот сам Айриш в это не верит, и вместе с очаровательной журналисткой Линдой Хиллер начинает собственное расследование. И чем больше он узнаёт, тем яснее становится: это не случайность, а намеренное убийство…',
    usersRating: 4,
    reviews: [''],
    genre: 'триллер, криминал, драма',
    release: ['14 октября 2012 г.'],
    audio: 'Английский, Русский',
    studio: ['ZDF'],
    countries: 'Австралия',
    actors: [
      { personId: 95, role: 'Джек Айриш' },
      { personId: 96, role: 'Линда Хиллер' },
      { personId: 97, role: 'Кэм Делрэй' },
      { personId: 98, role: 'Гарри Странг' },
      { personId: 99, role: 'Изабелла Айриш' },
    ],
    director: [
      { personId: 100, role: 'Jeffrey Walker' },
    ],
    producers: [
      { personId: 101, role: 'Christopher Gist' },
      { personId: 102, role: 'Andrew Knight' },
      { personId: 103, role: 'Ian Collie' },
    ],
    facts: [],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Безнадежные долги. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/b671462c-3943-435a-8e90-ae79a2ed8112/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Безнадежные долги. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/95d196c4-49ac-4968-b2ab-8f81f10f7614/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Черный прилив. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/1ba14a1b-f3cb-47b8-bdb8-34b19fd9c7c9/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Черный прилив. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/d788e49f-a8c6-45c6-87e2-4464610de758/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тупик. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/3a4bd9ce-bb7a-4b89-a150-0fcf002e9821/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тупик. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/d4dd73f4-345b-4496-ae0b-6b483084bde1/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 31,
    name: 'Деревня',
    slogan: 'Большая история маленького человека',
    ratings: [7.7, 7.7],
    age: '16+',
    originalName: 'The Village',
    poster: 'https://pic.showjet.ru/pics/d6bea79d-cf36-43d5-bcc8-52284e1d7d3a/10x5/1250.jpg',
    summary: '2 сезона / история, драма, 2013 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/dd1bf4c8-251e-4821-86f1-2c6a974f2bc6/10x5/550.jpg',
        src: '10.mp4',
        subtitles: [
          {
            src: '10-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '10-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/0a1f6aba-b650-422b-9838-d7ed6952b8c9/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c2d19edb-a9cc-467c-a09a-ef12b5bed724/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/aa685705-bd9b-40b9-8c71-19438757fd82/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/042a25d5-343b-4f6a-92db-18fdf0cc6fb6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/bd475603-51c3-468d-8a5f-9b527ea60560/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c74ce51c-a8ad-41bc-b71e-9b6c74eafb49/10x7/1000.jpg',
    ],
    description: 'Невероятно достоверная историческая драма от обладателя премии BAFTA Питера Моффата.  \n112-летний Берт Миддлтон родился в глухой английской деревушке графства Дербишир. В 1914 году его отец работал на ферме, а старший брат трудился в богатом доме носильщиком воды. Тогда жёны не смели перечить мужьям, фермеры не видели смысла в образовании, а учителя били школьников за то, что те писали левой рукой. Но всё меняется, когда в тихую деревню приезжает первый автобус, из которого выходит неизвестная леди… \nГлазами Берта мы увидим целое столетие жизни: счастье и боль, любовь и предательство, рождение и смерть. Переживём важнейшие события английской истории (в том числе мировые войны) и узнаем, как менялась целая нация на протяжении XX века.',
    usersRating: 5,
    reviews: [''],
    genre: 'история, драма',
    release: ['31 марта 2013 г.', '31 марта 2013 г.'],
    wins: [
      'Телевизионная премия BAFTA: Лучший драматический сериал',
      'Телевизионная премия BAFTA: Лучшая мужская роль второго плана',
      'Телевизионная премия BAFTA: Лучшая актриса',
    ],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 104, role: 'Клем Аллингэм' },
      { personId: 105, role: 'Эдмунд Аллингэм' },
      { personId: 106, role: 'Джо Миддлтон' },
      { personId: 107, role: 'Джерард  Эйр' },
      { personId: 108, role: 'Фиби Рандл' },
      { personId: 109, role: 'Грэйс Миддлтон' },
      { personId: 110, role: 'Джон Миддлтон' },
      { personId: 111, role: 'Марта Аллингэм' },
      { personId: 112, role: 'Каро Аллингэм' },
    ],
    director: [
      { personId: 113, role: 'Gillies MacKinnon' },
      { personId: 114, role: 'Luke Watson' },
      { personId: 115, role: 'Antonia Bird' },
      { personId: 116, role: 'Dominic Leclerc' },
    ],
    producers: [
      { personId: 117, role: 'Amy Roberts' },
      { personId: 118, role: 'Polly Hill' },
      { personId: 88, role: 'George Faber' },
      { personId: 119, role: 'Peter Moffat' },
      { personId: 120, role: 'Emma Burge' },
    ],
    facts: [
      'В сериале звучит музыка в исполнении брасс-квинтета (джазовый ансамбль для пяти исполнителей, играющих на медных духовых инструментах — прим.ред.) Университета Солфорда, который закончила исполнительница главной роли Максин Пик.',
      'Режиссёр Гиллис МакКиннон показал Нико Мираллегро (Джо) свой ранний фильм «Возрождение» (1997), чтобы актёр лучше передал эмоции в сцене, когда его герой возвращается с Первой мировой войны.',
      'Создатель сериала Питер Моффат использовал в качестве материалов записи историка Маргарет Вомбель и архив Имперского военного музея, а также дал актёрам задание подучить историю XX века.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2014',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/8a29746a-e279-4e25-bf67-8f50a8dcb501/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/33d8c25e-a8b3-42b2-af97-d5a8f0536f92/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fa180cdf-f44f-4d21-99cd-16d47cb2002e/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/eb85daa7-22cc-4071-af27-741e2dfaa57c/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/9fa8aa26-968d-4ecd-a905-0120fc8ff312/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/1673b773-883b-4bc7-80e2-1897e0ae9a56/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2013',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/e8fde516-06b2-4b0a-98ad-538dc6d7cb96/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/b958a6c3-6560-4955-a035-797838920393/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/8c99629f-f98e-4707-9351-6af9af57431e/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/c4d02fe7-2b88-4691-9b79-8d642eb3d741/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/eb46a9b4-94a3-40af-bce7-08d1759809e8/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/3fcbee17-0f28-4e56-af26-afc69f5de79a/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 32,
    name: 'Мой сосед Тоторо',
    slogan: 'Неподражаемо обаятельный ностальгический аниме-шедевр',
    ratings: [8.1, 8.2],
    age: '0+',
    originalName: 'Tonari no Totoro',
    poster: 'https://images2.alphacoders.com/499/499590.jpg',
    summary: 'аниме, семейный, 1988',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzcwY2E2YTItMjFkZS00OTdjLTkyZTQtOTMxYzc3MGYyNmFkXkEyXkFqcGdeQXN3aWZ0dw@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '11.mp4',
        subtitles: [
          {
            src: '11-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '11-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BODIwMTc0NDA4Ml5BMl5BanBnXkFtZTgwNDE3OTEwMjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTc2MDgzODgxNF5BMl5BanBnXkFtZTgwMzE3OTEwMjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUyODI0ODA1NV5BMl5BanBnXkFtZTgwNTA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjEyMzI0Nzc1N15BMl5BanBnXkFtZTgwNjA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTM4MjIxMjQ3N15BMl5BanBnXkFtZTgwNzA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODYxNjQ2OTA2Ml5BMl5BanBnXkFtZTgwODA2MDIyMDE@._V1_.jpg',
    ],
    description: 'Сестры Сацуки и Мэй переезжают вместе с папой в деревенский дом. Однажды девочки обнаруживают, что по соседству с ними живут лесные духи — хранители леса во главе со своим могущественным и добрым повелителем Тоторо. Постепенно Тоторо становится другом девочек, помогая им в их повседневных приключениях.',
    usersRating: 5,
    reviews: [''],
    genre: 'аниме, мультфильм, фэнтези, приключения, семейный',
    release: ['16 апреля 1988 г.', '20 марта 2008 г.'],
    wins: [
      'Academy of Science Fiction, Fantasy & Horror Films, USA: Best Genre Video Release',
      'Blue Ribbon Awards: Special Award',
      'Kinema Junpo Awards: Best Film',
      'Kinema Junpo Awards: Best Japanese Film',
      'Mainichi Film Concours: Best Film',
    ],
    audio: 'Японский, Английский, Русский',
    studio: ['Nibariki', 'Studio Ghibli', 'Tokuma Japan Communications Co. Ltd.', 'Disney'],
    countries: 'Япония',
    actors: [
      { personId: 121, role: 'Тоторо' },
      { personId: 122, role: 'Сатсуки' },
      { personId: 123, role: 'Мей' },
      { personId: 124, role: 'Тацуо Кусакабе' },
      { personId: 125, role: 'Ясуко Кусакабе' },
      { personId: 126, role: 'Бабушка' },
      { personId: 127, role: 'Канта' },
      { personId: 128, role: 'Папа Канты' },
      { personId: 129, role: 'Мама Канты' },
    ],
    director: [
      { personId: 130, role: 'Hayao Miyazaki' },
    ],
    producers: [
      { personId: 131, role: 'Toru Hara' },
      { personId: 132, role: 'Eiko Tanaka' },
      { personId: 133, role: 'Yasuyoshi Tokuma' },
    ],
    facts: [
      'Хаяо Миядзаки использовал в «Тоторо» некоторые автобиографические мотивы (например, долгая болезнь матери героинь туберкулезом), а также привлек с его помощью внимание к надвигающейся урбанизации и уничтожению традиционного японского сельского ландшафта — полей и лесов. Он пожертвовал три миллиона долларов и права на изображение Тоторо обществу защиты природы своего родного города Токородзава (в настоящее время — пригород Токио).',
      'Оригинальный японский релиз анимационной ленты шёл в виде сдвоенных показов с фильмом «Могила светлячков» (1988), поскольку прокатчики посчитали, что выпускать её самостоятельно будет слишком рискованным шагом.',
      'Первая англоязычная дублированная версия появилась ещё в 1988 году эксклюзивно для трансокеанских рейсов авиакомпании Japan Airlines. В США дубляж был выпущен в 1993 году студией Troma, а затем на VHS и DVD Fox Video. После того как права этих студий на ленту истекли, их приобрела студия Disney, выпустившая полностью новую дублированную версию в марте 2006 года.',
    ],
    type: 'film',
    film: {
      name: 'Мой сосед Тоторо',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzcwY2E2YTItMjFkZS00OTdjLTkyZTQtOTMxYzc3MGYyNmFkXkEyXkFqcGdeQXN3aWZ0dw@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '11.mp4',
      subtitles: [
        {
          src: '11-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '11-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 33,
    name: 'Сияние',
    slogan: 'Шедевр современного хоррора',
    ratings: [8.4, 7.8],
    age: '18+',
    originalName: 'The Shining',
    poster: 'https://c4.wallpaperflare.com/wallpaper/613/473/199/movie-the-shining-wallpaper-preview.jpg',
    summary: 'ужасы, триллер, 1980',
    trailer: [
      {
        thumbnail: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/8884a77f204ed671f6612c7920671078/100x64_3',
        src: '12.mp4',
        subtitles: [
          {
            src: '12-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '12-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTc5MjM4Njg3Nl5BMl5BanBnXkFtZTgwNTk1NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTA0NzUxMjU3OTJeQTJeQWpwZ15BbWU4MDc5NTQ1NjYz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTU3MTkwMjQ1MF5BMl5BanBnXkFtZTgwODk1NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTU4NTY0MzUyMF5BMl5BanBnXkFtZTgwMDA2NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNzczMTIxMjk4Nl5BMl5BanBnXkFtZTgwOTMzMDYwNDI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg0MzkzODUwNV5BMl5BanBnXkFtZTgwODM1MjEwNDI@._V1_.jpg',
    ],
    description: 'Джек Торренс с женой и сыном приезжает в элегантный отдалённый отель, чтобы работать смотрителем во время мертвого сезона. Торренс здесь раньше никогда не бывал. Или это не совсем так? Ответ лежит во мраке, сотканном из преступного кошмара.',
    usersRating: 4,
    reviews: [''],
    genre: 'триллер, драма, ужасы, детектив',
    release: ['23 мая 1980 г.', '29 октября 2020 г.'],
    wins: [
      'National Film Preservation Board, USA: National Film Preservation Board',
      'Online Film & Television Association:  Motion Picture',
      'Academy of Science Fiction, Fantasy & Horror Films, USA: Best Supporting Actor',
    ],
    audio: 'Английский, Русский',
    studio: ['Warner Bros. Pictures', 'Hawk Films Ltd.', 'Peregrine', 'Producers Circle'],
    countries: 'Соединенные Штаты Америки',
    actors: [
      { personId: 134, role: 'Джек Торренс' },
      { personId: 135, role: 'Венди Торренс' },
      { personId: 136, role: 'Денни Торренс' },
      { personId: 137, role: 'Дик Халлорен' },
      { personId: 138, role: 'Стюарт Уллман' },
      { personId: 139, role: 'Чарльз Грейди' },
      { personId: 140, role: 'Лойд' },
      { personId: 141, role: 'Доктор' },
      { personId: 142, role: 'Дёркин' },
    ],
    director: [
      { personId: 143, role: 'Stanley Kubrick' },
    ],
    producers: [
      { personId: 143, role: 'Stanley Kubrick' },
      { personId: 144, role: 'Jan Harlan' },
      { personId: 145, role: 'Mary Lea Johnson' },
      { personId: 146, role: 'Robert Fryer' },
      { personId: 147, role: 'Martin Richards' },
    ],
    facts: [
      'Фильм снят по мотивам романа Стивена Кинга «Сияние» (The Shining, 1977).',
      'Чтобы погрузить съемочную группу в необходимое психологическое состояние, Кубрик показывал им фильм «Голова-ластик» (1977).',
      'Стивен Кинг пытался отговорить Кубрика приглашать на главную роль Джека Николсона и предлагал взамен взять Джона Войта или Майкла Мориарти. В качестве аргумента он приводил свое убеждение в том, что зрителю гораздо интереснее будет наблюдать за постепенным сумасшествием актера с изначально нормальным выражением лица, нежели за Николсоном, у которого с самого начала фильма несколько безумный вид.',
    ],
    type: 'film',
    film: {
      name: 'Сияние',
      thumbnail: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/8884a77f204ed671f6612c7920671078/100x64_3',
      src: '12.mp4',
      subtitles: [
        {
          src: '12-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '12-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 34,
    name: 'Хороший, плохой, злой',
    slogan: 'Вестерн на все времена',
    ratings: [8.8, 8.5],
    age: '16+',
    originalName: 'Il buono, il brutto, il cattivo',
    poster: 'https://i.ebayimg.com/images/g/8u4AAOSwFfdhpTZe/s-l1600.jpg',
    summary: 'приключения, вестерн, 1966',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzMzMDAxZDAtYTBkNy00NjMwLWIyYzctODA1YzE0MzUwMTI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '13.mp4',
        subtitles: [
          {
            src: '13-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '13-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BN2ZmNWUzNTQtMDY2OS00YjBmLWI5NTQtMzg5MDk0MzM5OTc2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUxNzUzMzMtNzc5MS00MTllLThhODQtNDRjZTQ4NWY5MjUyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BZmUyN2UxZGUtMWQwZi00MTA5LTkzNzUtOTJjOTU3MDRhZGQ2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BYWZjYzA3YTgtNzQyZS00NmNkLWE4ZmItMjJhNmJiMzJkZTI0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOWIwNjcyZDUtNjRmZS00ZGNiLWIwZDUtMmUyYzQ5NTQ4OTA3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg3NTQ2OTIwN15BMl5BanBnXkFtZTcwNzc0Mzg4Mw@@._V1_.jpg',
    ],
    description: 'В разгар гражданской войны таинственный стрелок скитается по просторам Дикого Запада. У него нет ни дома, ни друзей, ни компаньонов, пока он не встречает двоих незнакомцев, таких же безжалостных и циничных.\nПо воле судьбы трое мужчин вынуждены объединить свои усилия в поисках украденного золота. Но совместная работа - не самое подходящее занятие для таких отъявленных бандитов, как они. Компаньоны вскоре понимают, что в их дерзком и опасном путешествии по разоренной войной стране самое важное - никому не доверять и держать пистолет наготове, если хочешь остаться в живых.',
    usersRating: 4,
    reviews: [''],
    genre: 'приключения, вестерн',
    release: ['23 декабря 1966'],
    wins: [
      'Faro Island Film Festival: Best Actor',
      'Online Film & Television Association:  Score',
      'Online Film & Television Association:   Motion Picture',
    ],
    audio: 'Английский, Русский',
    studio: ['Arturo González Producciones Cinematográficas S.A.', 'Constantin Film', 'Produzioni Europee Associati (PEA)'],
    countries: 'Италия, Испания, Германия (ФРГ)',
    actors: [
      { personId: 148, role: 'Блондин' },
      { personId: 149, role: 'Сентенца' },
      { personId: 150, role: 'Туко' },
      { personId: 151, role: 'Капитан Клинтон' },
      { personId: 152, role: 'Падре Пабло Рамирес' },
      { personId: 153, role: 'Мария' },
    ],
    director: [
      { personId: 154, role: 'Sergio Leone' },
    ],
    producers: [
      { personId: 155, role: 'Alberto Grimaldi' },
    ],
    facts: [
      'Первое слово в фильме произносится только на 10 минуте фильма.',
      'Так как Серджио Леоне практически не говорил по-английски, а Илай Уоллак практически не говорил по-итальянски, они общались на французском.',
      '«Человек без имени» всего 17 минут за весь фильм носит «фирменное» Пончо, которое стало эпохальным за два первых вестерна. ',
    ],
    type: 'film',
    film: {
      name: 'Хороший, плохой, злой',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzMzMDAxZDAtYTBkNy00NjMwLWIyYzctODA1YzE0MzUwMTI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '13.mp4',
      subtitles: [
        {
          src: '13-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '13-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 35,
    name: 'Бегущий по лезвию 2049',
    slogan: 'Мечтают ли андроиды об электроовцах?',
    ratings: [8.0, 7.8],
    age: '18+',
    originalName: 'Blade Runner 2049',
    poster: 'https://wallpapers.com/images/featured/ln4wirn5204bujot.jpg',
    summary: 'фантастика, триллер, 2017',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjE3MjY3MTkzNV5BMl5BanBnXkFtZTgwNTE0NjU3MzI@._V1_QL75_UX500_CR0,46,500,281_.jpg',
        src: '14.mp4',
        subtitles: [
          {
            src: '14-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '14-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTg3NDIwNzU3MF5BMl5BanBnXkFtZTgwMDQ5MjY2MzI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTgyMzYyMTU2NF5BMl5BanBnXkFtZTgwMTQ5MjY2MzI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjA5NzE4NTA0MF5BMl5BanBnXkFtZTgwNTg5NjUyMjI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOTgwY2M1ZmYtZWE1Yi00YmNlLWEyNDYtOTViODE4MTliMTNiXkEyXkFqcGdeQXVyNzg2ODI2OTU@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOGJjY2Q2NTgtZmE5OS00ZjY0LWJmNGMtMThiMDQ5NzBiYjM1XkEyXkFqcGdeQXVyNzg2ODI2OTU@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTk2OTU3MDA3N15BMl5BanBnXkFtZTgwMTg5NjUyMjI@._V1_.jpg',
    ],
    description: 'В недалеком будущем мир населен людьми и репликантами, созданными выполнять самую тяжелую работу. Работа офицера полиции Кей — держать репликантов под контролем в условиях нарастающего напряжения. Он случайно становится обладателем секретной информации, которая ставит под угрозу существование всего человечества. Желая найти ключ к разгадке, Кей решает разыскать Рика Декарда — бывшего офицера специального подразделения полиции Лос-Анджелеса, который бесследно исчез много лет назад.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, боевик, триллер, драма',
    release: ['3 октября 2017', '5 октября 2017'],
    wins: [
      'Oscar: Best Achievement in Cinematography',
      'Oscar: Best Achievement in Visual Effects',
      'BAFTA: Best Cinematography',
      'BAFTA: Best Achievement in Special Visual Effects',
      'Saturn Award: Best Science Fiction Film',
    ],
    audio: 'Английский, Русский',
    studio: [
      '16:14 Entertainment',
      'Alcon Entertainment',
      'Columbia Pictures',
      'Scott Free Productions',
      'Thunderbird FilmsTorridon Films',
      'Warner Bros. Pictures',
    ],
    countries: 'США, Великобритания, Канада, Испания',
    actors: [
      { personId: 156, role: 'К' },
      { personId: 157, role: 'Рик Декард' },
      { personId: 158, role: 'Джой' },
      { personId: 159, role: 'Саппер Мортон' },
      { personId: 160, role: 'Лейтенант Джоши' },
      { personId: 161, role: 'Ниандер Уоллес' },
    ],
    director: [
      { personId: 162, role: 'Denis Villeneuve' },
    ],
    producers: [
      { personId: 163, role: 'Yale Badik' },
      { personId: 164, role: 'Broderick Johnson' },
      { personId: 165, role: 'Andrew A. Kosove' },
      { personId: 166, role: 'Ridley Scott' },
    ],
    facts: [
      'На ранних стадиях проекта принималось, что режиссёром фильма будет Ридли Скотт. Незадолго до начала съёмок, однако, Скотт объявил, что режиссурой заниматься не станет, а останется в проекте только в должности продюсера. О причинах такого решения ничего сказано не было.',
      'Для прохождения теста на эмоции Кей произносит фразу: «Кроваво-черное ничто пустилось вить систему клеток, связанных внутри, клеток, связанных внутри, клеток в едином стебле и явственно, до жути на фоне тьмы ввысь белым бил фонтан». Это фраза взята из романа Владимира Набокова «Бледный огонь», написанного на английском языке и изданного в 1962 году.',
      'Изначально персонаж Ниандера Уоллеса был написан под Дэвида Боуи. Но в январе 2016-го Дэвид ушел из жизни, и в итоге, персонажа сыграл Джаред Лето.',
    ],
    type: 'film',
    film: {
      name: 'Бегущий по лезвию 2049',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjE3MjY3MTkzNV5BMl5BanBnXkFtZTgwNTE0NjU3MzI@._V1_QL75_UX500_CR0,46,500,281_.jpg',
      src: '14.mp4',
      subtitles: [
        {
          src: '14-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '14-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 36,
    name: 'Девушка с татуировкой дракона',
    slogan: 'Напряженный нордический триллер',
    ratings: [7.8, 7.7],
    age: '18+',
    originalName: 'The Girl with the Dragon Tattoo',
    poster: 'https://p4.wallpaperbetter.com/wallpaper/704/961/190/the-girl-with-the-dragon-tattoo-wallpaper-preview.jpg',
    summary: 'детектив, триллер, 2011',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjM2OTU4MDA1OV5BMl5BanBnXkFtZTgwNzg2MTAyMzE@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '15.mp4',
        subtitles: [
          {
            src: '15-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '15-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTkwODI5ODcxMl5BMl5BanBnXkFtZTcwNjIyNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjE1Njc3MDIwNV5BMl5BanBnXkFtZTcwMTQyNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTY2MzQwODMxN15BMl5BanBnXkFtZTcwNjQzNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjc0NTg1NjkyNl5BMl5BanBnXkFtZTcwNTgzNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg4NDg4MDAxN15BMl5BanBnXkFtZTcwMDUwMDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BY2U4MjE2YTUtNzg2ZC00N2U2LWE3NTItM2Q3YmViZjgxYTdjXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg',
    ],
    description: '40 лет назад Харриет Вангер бесследно пропала на острове, принадлежащем могущественному клану Вангер. Тело так и не нашли, но её дядя убежден, что девушку убили, и что убийца является членом его собственной неблагополучной семьи. Он нанимает опального журналиста Микаэля Блумквиста и татуированную хакершу Лисбет Саландер для проведения расследования.',
    usersRating: 5,
    reviews: [''],
    genre: 'детектив, триллер, драма, криминал',
    release: ['12 декабря 2011', '2 января 2012'],
    wins: [
      'Oscar: Best Achievement in Film Editing',
      'Saturn Award: Best Horror/Thriller Film',
      'AFI Awards: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Columbia Pictures',
      'Film Rites',
      'Ground Control',
      'Metro-Goldwyn-Mayer (MGM)',
      'Scott Rudin Productions',
      'Yellow Bird Films AB',
    ],
    countries: 'США, Швеция, Норвегия',
    actors: [
      { personId: 167, role: 'Микаэль Блумквист' },
      { personId: 168, role: 'Лисбет Саландер' },
      { personId: 169, role: 'Хенрик Вангер' },
      { personId: 170, role: 'Мартин Вангер' },
      { personId: 171, role: 'Фроде' },
      { personId: 160, role: 'Эрика Бергер' },
      { personId: 172, role: 'Бьюрман' },
      { personId: 173, role: 'Анита Вангер' },
      { personId: 174, role: 'Сесилия' },
    ],
    director: [
      { personId: 175, role: 'David Fincher' },
    ],
    producers: [
      { personId: 176, role: 'Ceán Chaffin' },
      { personId: 177, role: 'Scott Rudin' },
      { personId: 178, role: 'Søren Stærmose' },
      { personId: 179, role: 'Ole Søndberg' },
    ],
    facts: [
      'Фильм снят по мотивам романа Стига Ларссона «Девушка с татуировкой дракона» (Män som hatar kvinnor, 2004).',
      'Период съёмок в Швеции пришёлся на самую холодную зиму за последние 20 лет.',
      'Следуя плану, утвержденному самим Финчером, Руни Мара за один день сделала пирсинг во всех местах, где это требовалось по сценарию, хотя раньше не носила даже серьги.',
    ],
    type: 'film',
    film: {
      name: 'Девушка с татуировкой дракона',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjM2OTU4MDA1OV5BMl5BanBnXkFtZTgwNzg2MTAyMzE@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '15.mp4',
      subtitles: [
        {
          src: '15-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '15-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 37,
    name: 'Отель «Гранд Будапешт»',
    slogan: 'Неповторимый стиль Уэса Андерсона',
    ratings: [8.1, 7.9],
    age: '16+',
    originalName: 'The Grand Budapest Hotel',
    poster: 'https://i.pinimg.com/originals/44/36/f8/4436f881a2a637ed5c6b9d0c10372089.jpg',
    summary: 'комедия, детектив, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTgxODI4OTU3N15BMl5BanBnXkFtZTgwODgzNDMzMTE@._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '16.mp4',
        subtitles: [
          {
            src: '16-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '16-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMjM1MjYzODE4N15BMl5BanBnXkFtZTgwNzU4ODY2OTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTY1OTE0NDU4Nl5BMl5BanBnXkFtZTgwOTYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ0NzAyNDI1MV5BMl5BanBnXkFtZTgwNjYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjU1NTE3NTkyMV5BMl5BanBnXkFtZTgwNzYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BYjRhMDgzZTctMzg0MS00OGQ3LWFhNmMtMDU1ZGNiMGRmODcwXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOTI3NTgxNTUtZmEwNi00ZmY5LTk1MmQtM2MwZWEwMGJjOTY0XkEyXkFqcGdeQXVyNjc0NjIyMDI@._V1_.jpg',
    ],
    description: 'Фильм рассказывает об увлекательных приключениях легендарного консьержа Густава и его юного друга, портье Зеро Мустафы. Сотрудники гостиницы становятся свидетелями кражи и поисков бесценных картин эпохи Возрождения, борьбы за огромное состояние богатой семьи и… драматических изменений в Европе между двумя кровопролитными войнами XX века.',
    usersRating: 5,
    reviews: [''],
    genre: 'комедия, приключения, детектив, криминал',
    release: ['6 февраля 2014', '13 марта 2014'],
    wins: [
      'Oscar: Best Achievement in Costume Design',
      'Oscar: Best Achievement in Makeup and Hairstyling',
      'Oscar: Best Achievement in Music Written for Motion Pictures, Original Score',
      'Oscar: Best Achievement in Production Design',
      'Screen Actors Guild Awards: Outstanding Performance by a Cast in a Motion Picture',
    ],
    audio: 'Английский, Русский',
    studio: [
      'American Empirical Pictures',
      'Indian Paintbrush',
      'Scott Rudin Productions',
      'Studio Babelsberg',
    ],
    countries: 'США, Германия',
    actors: [
      { personId: 180, role: 'М. Густав' },
      { personId: 181, role: 'Зеро' },
      { personId: 182, role: 'Агата' },
      { personId: 183, role: 'Дмитрий' },
      { personId: 184, role: 'Джоплинг' },
      { personId: 185, role: 'Хенкельс' },
      { personId: 186, role: 'Серж Икс' },
      { personId: 187, role: 'Мадам Д' },
      { personId: 188, role: 'Мистер Мустафа' },
      { personId: 189, role: 'Молодой писатель' },
    ],
    director: [
      { personId: 190, role: 'Wes Anderson' },
    ],
    producers: [
      { personId: 190, role: 'Wes Anderson' },
      { personId: 191, role: 'Jeremy Dawson' },
      { personId: 192, role: 'Steven Rales' },
      { personId: 177, role: 'Scott Rudin' },
    ],
    facts: [
      'В качестве декорации отеля «Гранд Будапешт» Уэс Андерсон использовал старый и выполненный в стиле ар-деко универмаг Karstadt, расположенный в Саксонии, в городке Герлиц, что на границе Германии, Чехии и Польши.',
      'Уэс Андерсон снял фильм в трех различных соотношениях сторон: 1.33, 1.85 и 2.35:1, которые соответствуют трём разным отрезкам времени. Разные пропорции кадра подсказывают зрителям, какой временной период на экране.',
      'На самом деле, картина «Мальчик с яблоком» писалась не Иоганном Ван Хойтом младшим, как говорится в фильме, а небезызвестным английским портретистом Майклом Тэйлором, по заказу самого режиссера, Уэса Андерсона.',
    ],
    type: 'film',
    film: {
      name: 'Отель «Гранд Будапешт»',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTgxODI4OTU3N15BMl5BanBnXkFtZTgwODgzNDMzMTE@._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '16.mp4',
      subtitles: [
        {
          src: '16-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '16-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 38,
    name: 'Дюна',
    slogan: 'Научно-фантастическая драма',
    ratings: [8.0, 7.7],
    age: '12+',
    originalName: 'Dune: Part One',
    poster: 'https://www.pixel4k.com/wp-content/uploads/2021/10/dune-movie-4k-poster_1635032438.jpg.webp',
    summary: 'фантастика, драма, 2021',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTEwYWFjYmItZWJmNi00MGExLWI1MjktYzRiYjJkNzhiMWIxXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '17.mp4',
        subtitles: [
          {
            src: '17-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '17-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BOGI4ZjA5YjItNzM3My00Mjk4LWI4NzEtOGFhZWU5Y2Y1YmExXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjY5NGYzZGQtNjc4Zi00MzUxLTlkNWItMzM5NjUzNGY4Yjg3XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNDQyNmVlM2QtOTg4MS00OWQ2LWEyODEtOTBhZTdjODRjMzYzXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMzc0ZDU2MWYtZmQ1Zi00ZWJlLTk5OGMtN2I5MzVkMWUwNDVhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODdkMzA1MDQtZDQ5OC00NjVlLWE4MmMtYTdkNDdhMTFiMzAzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTFiMjdjYTMtYjkyNi00MWI5LWEyZWEtYTdkZDBlZmVkNTc1XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
    ],
    description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, боевик, драма, приключения',
    release: ['3 сентября 2021', '16 сентября 2021'],
    wins: [
      'Oscar: Best Sound',
      'Oscar: Best Achievement in Visual Effects',
      'Oscar: Best Achievement in Production Design',
      'Oscar: Best Achievement in Music Written for Motion Pictures, Original Score',
      'Oscar: Best Achievement in Film Editing',
      'Oscar: Best Achievement in Cinematography',
      'AACTA International Awards:  Best Direction',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Legendary Pictures',
      'Villeneuve Films',
      'Warner Bros.',
    ],
    countries: 'США, Канада, Венгрия',
    actors: [
      { personId: 193, role: 'Пол Атрейдес' },
      { personId: 194, role: 'Леди Джессика Атрейдес' },
      { personId: 195, role: 'Герцог Лето Атрейдес' },
      { personId: 196, role: 'Гурней Халлек' },
      { personId: 197, role: 'Дункан Идахо' },
      { personId: 198, role: 'Чани' },
      { personId: 170, role: 'Барон Владимир Харконнен' },
      { personId: 199, role: 'Стилгар' },
      { personId: 159, role: 'Глоссу Раббан Харконнен' },
    ],
    director: [
      { personId: 162, role: 'Denis Villeneuve' },
    ],
    producers: [
      { personId: 162, role: 'Denis Villeneuve' },
      { personId: 200, role: 'Mary Parent' },
      { personId: 201, role: 'Cale Boyter' },
    ],
    facts: [
      'Съёмки фильма проходили в Венгрии, Норвегии (океаны на Каладане), ОАЭ, Австрии и Словакии. Сцены пустынь на Арракисе снимали в основном в Иордании и в Абу-Даби.',
      'Режиссёр Дени Вильнёв представлял себе барона Владимира Харконнена (Стеллан Скарсгард) как «носорога в человеческом обличье». Каждый день перед съёмками актёр проводил по 7 часов в кресле гримёра.',
      'По словам режиссёра Дени Вильнёва, на разработку образа гигантских песчаных червей Арракиса ушёл год.',
    ],
    type: 'film',
    film: {
      name: 'Дюна',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTEwYWFjYmItZWJmNi00MGExLWI1MjktYzRiYjJkNzhiMWIxXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '17.mp4',
      subtitles: [
        {
          src: '17-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '17-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 39,
    name: 'Достать ножи',
    slogan: 'Деконструкция детективного жанра',
    ratings: [7.9, 8.1],
    age: '16+',
    originalName: 'Knives Out',
    poster: 'https://images8.alphacoders.com/105/thumb-1920-1052048.jpg',
    summary: 'детектив, комедия, 2019',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BZGI3ODkzOTUtNzJjNS00ODhkLThkMzMtZjM4NjViZTYxNGY5XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '18.mp4',
        subtitles: [
          {
            src: '18-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '18-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BYzQ0YmIzYzYtOTk2NC00OWI3LWI2YjAtYzhlMDUwNWQ2NmRlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BN2NjZmZhZDItOGNiNS00OTdmLTgyMzgtZDgyYzUzMGU5YTkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMmNiYmU1ZmQtNmM0My00ZmEyLTllNGQtZGE4N2ExOWM3YmI5XkEyXkFqcGdeQXVyMTIwODk1NTQ@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNWY4ZTQ4MTgtZTdlMy00NjAwLThlOTktNWVkZmM1OWQ3MzA4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BM2MyMTg0YzMtMGU4ZS00MzViLWE1ZDktZmY1NWI2NTdhNDk3XkEyXkFqcGdeQXVyMTA4OTk3Nzcw._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BZjYyZTAyOTYtYTUxYS00NmZhLWFjZTUtYTA0OThiNjk1NTA0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    ],
    description: 'На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан. Тем же утром он получил конверт с наличными от неизвестного и заказ на расследование смерти Харлана. Не нужно быть опытным следователем, чтобы понять, что все приукрашивают свои отношения с почившим главой семейства, но Блану достаётся настоящий подарок — медсестра покойного, которая физически не выносит ложь.',
    usersRating: 4,
    reviews: [''],
    genre: 'детектив, комедия, драма, криминал',
    release: ['7 сентября 2019', '28 ноября 2019'],
    wins: [
      'AARP Movies for Grownups Awards: Best Ensemble',
      'Saturn Award: Best Editing',
      'Saturn Award: Best Thriller Film',
      'Saturn Award: Best Supporting Actress',
      'AFI Award: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Lionsgate',
      'Media Rights Capital',
      'T-Street',
    ],
    countries: 'США',
    actors: [
      { personId: 167, role: 'Бенуа Бланк' },
      { personId: 202, role: 'Рэнсон Драйсдейл' },
      { personId: 158, role: 'Марта Кабрера' },
      { personId: 203, role: 'Линда Драйсдейл' },
      { personId: 204, role: 'Уолт Тромби' },
      { personId: 205, role: 'Ричард Драйсдейл' },
      { personId: 206, role: 'Джони Тромби' },
      { personId: 169, role: 'Харлан Тромби' },
      { personId: 207, role: 'Мэг Тромби' },
      { personId: 208, role: 'Джейкоб Тромби' },
      { personId: 209, role: 'Донна Тромби' },
    ],
    director: [
      { personId: 210, role: 'Rian Johnson' },
    ],
    producers: [
      { personId: 211, role: 'Ram Bergman' },
      { personId: 210, role: 'Rian Johnson' },
      { personId: 212, role: 'Tom Karnowski' },
    ],
    facts: [
      'Манеру речи своего героя Дэниел Крейг позаимствовал у писателя, историка и журналиста Шелби Фута.',
      'Когда Бенуа Блан впервые появляется на экране, он показан в кабинете, где лейтенант Эллиот допрашивает членов семейства Тромби. Блан нажимает на клавиатуре одну и ту же ноту вроде бы в случайном порядке, однако порядок этот отнюдь не случаен. Когда Блан нажимает клавишу, Эллиот всё время задаёт один и тот же вопрос: «Когда вы вернулись домой?», т.е. звук этой ноты служит для Эллиота сигналом, чтобы задать вопрос.',
      'Для начальных кадров требовалось, чтобы две собаки пробежали от одного дрессировщика к другому, однако никак не получалось сделать так, чтобы они пробежали поближе к камере. В конце концов пришлось построить небольшой пандус, чтобы собаки не проскочили прямо под камерой.',
    ],
    type: 'film',
    film: {
      name: 'Достать ножи',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BZGI3ODkzOTUtNzJjNS00ODhkLThkMzMtZjM4NjViZTYxNGY5XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '18.mp4',
      subtitles: [
        {
          src: '18-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '18-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 40,
    name: 'Интерстеллар',
    slogan: 'Космическая одиссея 21 века',
    ratings: [8.6, 8.6],
    age: '16+',
    originalName: 'Interstellar',
    poster: 'https://www.teahub.io/photos/full/357-3579460_interstellar-ice-planet-poster-interstellar-cover.jpg',
    summary: 'фантастика, драма, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_QL75_UX500_CR0,46,500,281_.jpg',
        src: '19.mp4',
        subtitles: [
          {
            src: '19-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '19-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTc0NDQ4MjkyOF5BMl5BanBnXkFtZTgwNDE2NzUzOTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ0MjQ3NjE1MF5BMl5BanBnXkFtZTgwMzMyODgxMzE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg4MTY3MDUyNl5BMl5BanBnXkFtZTgwMDMyODgxMzE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTAyOTI5MTg5MDFeQTJeQWpwZ15BbWU4MDYyMjg4MTMx._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ4OTQyMTMwOF5BMl5BanBnXkFtZTgwOTQ0Mjk3MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMWY1YmY4ZjItYTdlMi00OTNkLTk3NGEtODBkOGI5ZDYxNmQxXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_.jpg',
    ],
    description: 'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, драма, приключения',
    release: ['26 октября 2014', '6 ноября 2014'],
    wins: [
      'Oscar: Best Achievement in Visual Effects',
      'Saturn Award: Best Science Fiction Film',
      'Saturn Award: Best Production Design',
      'Saturn Award: Best Special Effects',
      'Saturn Award: Best Performance by a Younger Actor',
      'Saturn Award: Best Writing',
      'Saturn Award: Best Music',
      'AFI Award: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Legendary Pictures',
      'Lynda Obst Productions',
      'Paramount Pictures',
      'Syncopy',
      'Warner Bros. Pictures',
    ],
    countries: 'США, Великобритания, Канада',
    actors: [
      { personId: 213, role: 'Купер' },
      { personId: 214, role: 'Брэнд' },
      { personId: 215, role: 'Мёрф' },
      { personId: 216, role: 'Профессор Брэнд' },
      { personId: 217, role: 'Ромилли' },
      { personId: 218, role: 'Дойл' },
      { personId: 219, role: 'Том' },
      { personId: 220, role: 'Манн' },
    ],
    director: [
      { personId: 221, role: 'Christopher Nolan' },
    ],
    producers: [
      { personId: 221, role: 'Christopher Nolan' },
      { personId: 222, role: 'Lynda Obst' },
      { personId: 223, role: 'Emma Thomas' },
    ],
    facts: [
      'Сценарий основан на научных работах физика-теоретика Кипа Торна.',
      'Во время съемок фильма изображение окружающей среды, созданное заранее, проецировалось на экраны, расположенные вокруг съемочной площадки, чтобы актеры, смотря в окна космического корабля, видели реальную картинку, а не зеленый экран.',
      'На создание описываемой в фильме апокалиптической обстановки на Земле Кристофера Нолана вдохновила серия катастрофических пыльных бурь, происходивших в США в 1930-е.',
    ],
    type: 'film',
    film: {
      name: 'Интерстеллар',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_QL75_UX500_CR0,46,500,281_.jpg',
      src: '19.mp4',
      subtitles: [
        {
          src: '19-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '19-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 41,
    name: 'Остров собак',
    slogan: 'Трогательная история о дружбе',
    ratings: [7.8, 8.1],
    age: '12+',
    originalName: 'Isle of Dogs',
    poster: 'https://wallpaperaccess.com/full/4734723.jpg',
    summary: 'комедия, приключения, 2018',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjZkYzYwNmQtNjk3ZC00Y2M2LThhY2EtODIzOThiNDJmMTk2XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR86,0,500,281_.jpg',
        src: '20.mp4',
        subtitles: [
          {
            src: '20-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '20-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BNTkxMTQ1Njc1Ml5BMl5BanBnXkFtZTgwNDA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUyNjQ5MzgzMV5BMl5BanBnXkFtZTgwNTA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODQyMTg1MDkyMl5BMl5BanBnXkFtZTgwNjA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTU0NTkyMTUzMl5BMl5BanBnXkFtZTgwODA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODUyNDUzODcyNF5BMl5BanBnXkFtZTgwMTE5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODRhOWExNDktZmYyOS00NTFjLTk4MWQtZmY0MWY4Mzc0YTA3XkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_.jpg',
    ],
    description: 'История 12-летнего мальчика Атари Кобаяси, опекаемого коррумпированным мэром Кобаяши. Когда по Указу последнего все домашние собаки города Мегасаки изгоняются на громадную свалку, Атари в одиночку отправляется на миниатюрном летательном аппарате на мусорный остров, чтобы найти своего верного пса по прозвищу Спотс. Там на острове вместе со стаей новых друзей-дворняг он начнет эпичное путешествие, которое решит будущую судьбу всей Префектуры.',
    usersRating: 4,
    reviews: [''],
    genre: 'мультфильм, фантастика, драма, комедия, приключения',
    release: ['29 июня 2018', '15 февраля 2018'],
    wins: [
      'Annie Awards: Outstanding Achievement for Voice Acting in an Animated Feature Production',
      'Art Directors Guild: Animated Film',
      'Atlanta Film Critics Circle: Best Animated Film',
    ],
    audio: 'Английский, Русский',
    studio: [
      '20th Century Fox Animation',
      'American Empirical Pictures',
      'Indian Paintbrush',
      'Studio Babelsberg',
    ],
    countries: 'США, Германия, Япония, Великобритания',
    actors: [
      { personId: 224, role: 'Шеф' },
      { personId: 225, role: 'Атари' },
      { personId: 185, role: 'Рэкс' },
      { personId: 226, role: 'Король' },
      { personId: 227, role: 'Граф' },
      { personId: 228, role: 'Босс' },
      { personId: 229, role: 'Трейси Уолкер' },
      { personId: 230, role: 'Переводчица Нэльсон' },
    ],
    director: [
      { personId: 190, role: 'Wes Anderson' },
    ],
    producers: [
      { personId: 190, role: 'Wes Anderson' },
      { personId: 231, role: 'Ben Adler' },
      { personId: 232, role: 'Eli Bush' },
    ],
    facts: [
      'Название «Isle of Dogs» (Остров собак) — игра слов. Если произнести его быстро, оно звучит как «I love dogs» (я люблю собак).',
      'Для фильма было создано порядка 20 000 лиц, для второстепенных персонажей создали 2 000 кукол. На создание куклы одного из главных героев обычно уходило 2-3 месяца.',
      'Режиссёр Уэс Андерсон организовал соревнование для желающих озвучить какую-нибудь роль в фильме. От соискателей требовалось только перечислить любую сумму свыше $10 долларов на счёт некоммерческой организации, которую основал Мартин Скорсезе для восстановления и сохранения старых фильмов.',
    ],
    type: 'film',
    film: {
      name: 'Остров собак',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjZkYzYwNmQtNjk3ZC00Y2M2LThhY2EtODIzOThiNDJmMTk2XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR86,0,500,281_.jpg',
      src: '20.mp4',
      subtitles: [
        {
          src: '20-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '20-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 42,
    name: 'Джон Уик',
    slogan: 'Его лучше не трогать',
    ratings: [7.4, 7.0],
    age: '16+',
    originalName: 'John Wick',
    poster: 'https://live.staticflickr.com/5610/15540738980_9d0a3230dd_b.jpg',
    summary: 'боевик, криминал, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTAxNDk2ODYzMzleQTJeQWpwZ15BbWU4MDY5NDExNzIx._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '21.mp4',
        subtitles: [
          {
            src: '21-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '21-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMjA1OTUxNjU4M15BMl5BanBnXkFtZTgwNTY3MDk5MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTk1MDQ0ODUzNF5BMl5BanBnXkFtZTgwMjY3MDk5MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTEyODY0MDI1MDNeQTJeQWpwZ15BbWU4MDQ2NzA5OTIx._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNzI0ODk2MjY0OV5BMl5BanBnXkFtZTgwMzg1MTI4MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjAwNjA1Mjk2OV5BMl5BanBnXkFtZTgwNDg1MTI4MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTYzMTcxNzcyNl5BMl5BanBnXkFtZTgwODc1MTI4MjE@._V1_.jpg',
    ],
    description: 'Джон Уик - на первый взгляд, самый обычный среднестатистический американец, который ведет спокойную мирную жизнь. Однако мало кто знает, что он был наёмным убийцей, причём одним из лучших профессионалов в своём деле. После того как сынок главы бандитской группы со своими приятелями угоняет его любимый «Мустанг» 1969 года выпуска, при этом убив его собаку Дейзи, которая была подарком недавно почившей супруги, Джон вынужден вернуться к своему прошлому. Теперь Уик начинает охоту за теми, кто имел неосторожность перейти ему дорогу, и он готов на всё, чтобы отомстить.',
    usersRating: 4,
    reviews: [''],
    genre: 'боевик, триллер, криминал',
    release: ['19 сентября 2014', '1 января 2015'],
    wins: [
      'Golden Schmoes Awards: Biggest Surprise of the Year',
      'Golden Trailer Awards: Best Thriller Poster',
      'IGN Summer Movie Awards: Best Action Movie',
    ],
    audio: 'Английский, Русский',
    studio: [
      '87Eleven',
      'Company Films',
      'Cutting Edge Group',
      'DefyNite Films',
      'Huayi Brothers Media',
      'MJW Films',
      'Poquito Productions',
      'Summit Entertainment',
      'Thunder Road',
      'Unbelievable Entertainment',
    ],
    countries: 'США, Китай',
    actors: [
      { personId: 233, role: 'Джон Уик' },
      { personId: 234, role: 'Вигго Тарасов' },
      { personId: 235, role: 'Йозеф Тарасов' },
      { personId: 184, role: 'Маркус' },
      { personId: 236, role: 'Эви' },
      { personId: 237, role: 'Мисс Перкинс' },
    ],
    director: [
      { personId: 238, role: 'Chad Stahelski' },
      { personId: 239, role: 'David Leitch' },
    ],
    producers: [
      { personId: 240, role: 'Basil Iwanyk' },
      { personId: 239, role: 'David Leitch' },
      { personId: 241, role: 'Eva Longoria' },
    ],
    facts: [
      'По словам Киану Ривза он сам исполнил 90% трюков в фильме.',
      'В сценах рукопашного боя можно заметить, что Джон Уик использует приемы дзюдо, а его соперница мисс Перкинс — джиу-джитсу.',
      'Охранник, который машет Уику на взлетно-посадочной полосе, читает роман Треваньяна (Род Уитакер) «Шибуми». В этом романе описываются события, схожие с сюжетом фильма: ушедший на покой наемный убийца вынужден вновь взяться за свое ремесло. Также история, которую рассказывает Вигго о том, как Уик убил трех людей при помощи карандаша, является отсылкой к роману «Шибуми», герой которого использовал для совершения убийств различные предметы быта.',
    ],
    type: 'film',
    film: {
      name: 'Джон Уик',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTAxNDk2ODYzMzleQTJeQWpwZ15BbWU4MDY5NDExNzIx._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '21.mp4',
      subtitles: [
        {
          src: '21-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '21-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 43,
    name: 'Континенталь',
    slogan: 'Испанская версия «Острых козырьков»',
    ratings: [7, 7],
    age: '16+',
    originalName: 'El Continental',
    poster: 'https://pic.showjet.ru/pics/57358089-7937-4e8c-b650-7a44bac85d5f/10x5/1250.jpg',
    summary: '1 сезон / криминал, драма, 2018',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/eafa7275-22f1-42eb-aeb0-04b8f2baa190/10x5/550.jpg',
        src: '1.mp4',
        subtitles: [
          {
            src: '1-sp.vtt',
            srcLang: 'sp',
            label: 'Spanish',
          },
          {
            src: '1-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/d8a6a58d-1e25-4310-ba96-09883523b26e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/65bb0ba9-8922-4a8e-a333-1e03ff2d01c9/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/425bc2c0-ffad-4194-bff9-d176c9c81ca6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/ed11242f-86b0-4464-ab2e-4fa7566deef2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/82677ac2-45f6-4ef1-be12-30a126f19d0d/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a0fb80d3-654b-4164-8a85-15d65c0be4d7/10x7/1000.jpg',
    ],
    description: 'Стильная гангстерская драма из Испании в лучших традициях «Острых козырьков». \nМадрид, 1920-е годы. Местный гангстер Рикардо Леон промышляет нелегальной продажей алкоголя и хочет расширить свой бизнес. Он решает возродить пафосное, но убыточного кафе «Континенталь», чтобы превратить его в самое модное заведение города. Однако Леон преследует личные цели: завоевать сердце своенравной дочери владельца «Континенталя» и переиграть главного врага — собственного дядю.',
    usersRating: 4,
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
    facts: [],
    wins: ['Телевизионная премия BAFTA: Лучшие визуальные эффекты'],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg',
              src: '1.mp4',
              subtitles: [
                {
                  src: '1-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '1-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 44,
    name: 'Опочтарение',
    slogan: 'Вам письмо!',
    ratings: [7.8, 7.7],
    age: '16+',
    originalName: 'Going Postal',
    poster: 'https://i.imgur.com/u0QyCmo.jpg',
    summary: '1 сезон / фэнтези, приключения, 2010',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/4440a521-5663-4d4e-8326-02bf205b665f/10x5/550.jpg',
        src: '2.mp4',
        subtitles: [
          {
            src: '2-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '2-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://i.imgur.com/imKqvro.jpg',
      'https://i.imgur.com/rea5SbN.jpg',
      'https://i.imgur.com/583EUaK.jpg',
      'https://i.imgur.com/qBnAEFW.jpg',
      'https://i.imgur.com/jtAWyJm.jpg',
      'https://i.imgur.com/KYKoPyY.jpg',
    ],
    description: 'Добро пожаловать в воображариум Терри Пратчетта! \nМокрист фон Губвиг был гениальным мошенником: подделывал предметы искусства и мастерски обкрадывал людей — настоящий Остап Бендер в мире стимпанка. Однажды Мокриста всё-таки поймали и приговорили к смертной казни, но вместо исполнения приговора предложили сделку: восстановить работу единственного городского почтамта. \nВсё бы хорошо, но писем там скопилось просто тьма, а над самим почтамтом висит страшное проклятье: 4 предшественника Губвига погибли при очень странных обстоятельствах. Вдобавок ко всему у главного героя появляется неприятный конкурент — Взяткер Позолот.',
    usersRating: 5,
    reviews: [''],
    genre: 'фэнтези, приключения, мелодрама, детектив, комедия',
    release: ['30 мая 2010 г.', '30 мая 2010 г.'],
    audio: 'Английский, Русский',
    studio: ['Sky'],
    countries: 'Великобритания',
    actors: [
      { personId: 1, role: 'Барабант' },
      { personId: 2, role: 'Лорд Витинари' },
      { personId: 3, role: 'Мисс Крипслок' },
      { personId: 4, role: 'Мокрист фон Губвиг' },
      { personId: 5, role: 'Мистер Грыль' },
      { personId: 6, role: 'Взяткер Позолот' },
      { personId: 7, role: 'Почтальон' },
      { personId: 8, role: 'Стэнли' },
      { personId: 9, role: 'Ангела Красота Добросерд' },
    ],
    director: [
      { personId: 10, role: 'Jon Jones' },
    ],
    producers: [
      { personId: 11, role: 'Rod Brown' },
      { personId: 12, role: 'Vadim Jean' },
      { personId: 13, role: 'Sue De Beauvoir' },
      { personId: 14, role: 'Sarah Conroy' },
    ],
    facts: [
      'Фильм снят по мотивам романа Терри Пратчетта «Опочтарение» (Going Postal, 2004)',
      'Не будучи профессиональным актером, Терри Пратчетт испытал некоторые затруднения со своей ролью, которая заключалась в том, чтобы просто пройтись по комнате. По словам самого писателя, ему «понадобилось шесть дублей, чтобы справиться с этой непростой задачей».',
      'Почтальон в последней сцене — Терри Пратчетт, автор книги.', 'Термин «опочтарение» (англ. going postal) применяется для обозначения актов массовых убийств, которые совершаются в порыве ярости или в состоянии эмоциональной нестабильности.',
    ],
    wins: ['Телевизионная премия BAFTA: Лучшие визуальные эффекты'],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg',
              src: '2.mp4',
              subtitles: [
                {
                  src: '2-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '2-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 45,
    name: 'Сын',
    slogan: 'В главной роли Пирс Броснан',
    ratings: [7.5, 6.8],
    age: '16+',
    originalName: 'The Son',
    poster: 'https://pic.showjet.ru/pics/c5f48991-e55c-44b4-991d-b15ee8f374d5/10x5/1250.jpg',
    summary: '2 сезона / вестерн, драма, 2017 - 2019',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/a6ba8fe9-96c4-4247-adf1-08a586b41fcd/10x5/550.jpg',
        src: '3.mp4',
        subtitles: [
          {
            src: '3-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '3-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: ['https://pic.showjet.ru/pics/f57d97e2-4343-4190-ba62-e7b35f21aa13/10x7/1000.jpg', 'https://pic.showjet.ru/pics/bd46c3b8-d2ce-4467-b18d-76d820bd136c/10x7/1000.jpg', 'https://pic.showjet.ru/pics/90147cc5-81e0-4920-9525-b1a2859b30dd/10x7/1000.jpg', 'https://pic.showjet.ru/pics/095bf496-1b81-4a55-a7a3-1e01be77bf7f/10x7/1000.jpg', 'https://pic.showjet.ru/pics/6c6a7ceb-e19e-47b3-8fd5-9697e703de36/10x7/1000.jpg', 'https://pic.showjet.ru/pics/51961699-1ce6-4cea-a0d0-3656d908495e/10x7/1000.jpg'],
    description: 'Жестокий и эпический вестерн о становлении Америки, показанном через историю одной семьи. В главной роли — Пирс Броснан. \n1849 год, центральный Техас. Юный Илай Маккалоу попадает в плен к индейцам после того, как те ворвались в дом и безжалостно расправились с его сёстрами и матерью. Неопытный, но смелый парень учится выживать и договариваться с диким племенем. \n1915 год, южный Техас. Параллельно разворачивается история уже взрослого Илая Маккалоу в окружении детей и внуков. Властный и уважаемый глава семьи, он владеет ранчо и пытается отыскать нефть. Теперь вместо индейцев его главными врагами стали мексиканцы, которые вот-вот развяжут войну. Однако сын Илая, Пит, не готов мириться с жестокими методами отца и отпускает одного мексиканца, которого Маккалоу взяли в плен. Это грозит разрушить не только семейные узы, но и всю империю Илая Маккалоу, которую тот строил много лет...',
    usersRating: 4,
    reviews: [''],
    genre: 'вестерн, драма',
    release: ['08 апреля 2017 г.'],
    audio: 'Английский, Русский',
    studio: ['AMC Studios'],
    countries: 'Соединенные Штаты Америки',
    actors: [
      { personId: 14, role: 'Элай Маккалоу' },
      { personId: 15, role: 'Пит Маккалоу' },
      { personId: 16, role: 'Мария Гарсия' },
      { personId: 17, role: 'Тошауэй' },
      { personId: 18, role: 'Салли Маккалоу' },
      { personId: 19, role: 'Молодой Элай Маккалоу' },
    ],
    director: [
      { personId: 20, role: 'Tom Harper' },
      { personId: 21, role: 'Tom Vaughan' },
      { personId: 22, role: 'Ellen Kuras' },
    ],
    producers: [
      { personId: 23, role: 'Daniel C. Connolly' },
      { personId: 24, role: 'Henry Bronchtein' },
    ],
    facts: [
      'Сериал основан на одноимённом романе Филиппа Майера, который был опубликован в 2013 году.',
      'Изначально планировалось, что главную роль сыграет Сэм Нил, однако из-за личных обстоятельств он отказался от участия.',
      'Пирс Броснан не играл в сериалах свыше 30 лет — после работы в сериале «Ремингтон Стил» (1982-1987).',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2019',
          episodes: [
            {
              name: 'Нумунуу',
              thumbnail: 'https://pic.showjet.ru/pics/4b29fa99-d5d6-4a0b-8961-c303c8dfd4dc/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Десять долларов и ощипанный гусь',
              thumbnail: 'https://pic.showjet.ru/pics/4db1a856-346f-4169-bfe3-0ef37a4e3a96/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Слепой тигр',
              thumbnail: 'https://pic.showjet.ru/pics/f6a0943c-1338-492d-aa09-9003f246f5d5/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Оскальпированная собака',
              thumbnail: 'https://pic.showjet.ru/pics/e5293d71-6402-402d-aeb1-e56e8fb2f434/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Горячее масло',
              thumbnail: 'https://pic.showjet.ru/pics/8bef34f2-b1e8-425b-9485-ae55a67666cc/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Голубой свет',
              thumbnail: 'https://pic.showjet.ru/pics/32cefeef-a8f2-44c4-8edc-636bdd20ee90/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Кто-то взял лопату',
              thumbnail: 'https://pic.showjet.ru/pics/ed8c9aa6-23ec-47fb-825d-924c6971618a/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Все их обвинительные следы',
              thumbnail: 'https://pic.showjet.ru/pics/d18d3370-c8a7-43f4-b7da-b224d8047045/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Медведь',
              thumbnail: 'https://pic.showjet.ru/pics/2828829f-7c9f-4f1f-9fd4-f1525519604a/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Легенда',
              thumbnail: 'https://pic.showjet.ru/pics/6939ca8f-e8ba-464c-9c9a-cd0c24257542/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2017',
          episodes: [
            {
              name: 'Первый сын Техаса',
              thumbnail: 'https://pic.showjet.ru/pics/a00f09db-c2aa-4e01-a641-65480ad71301/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Сливовое дерево',
              thumbnail: 'https://pic.showjet.ru/pics/b7aba7f2-6805-46b3-867c-c3ebc1fe6c7c/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Вторая империя',
              thumbnail: 'https://pic.showjet.ru/pics/5ff4588a-7cc2-4ddc-86da-e95799ac46a5/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Песня смерти',
              thumbnail: 'https://pic.showjet.ru/pics/8bf58de5-79e9-4262-a1aa-4a88b879706c/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Никаких пленных',
              thumbnail: 'https://pic.showjet.ru/pics/4f17fb20-62d6-4746-a205-4ab51ce98401/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Охотник на буйволов',
              thumbnail: 'https://pic.showjet.ru/pics/99af408e-6c9a-46f2-9809-01d5d6bd7786/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Брачные узы',
              thumbnail: 'https://pic.showjet.ru/pics/0e377e3f-380d-4c92-bcff-89fe04257c55/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Медовая охота',
              thumbnail: 'https://pic.showjet.ru/pics/cf2ec742-6a20-4212-8c64-dd40fa605610/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пророчество',
              thumbnail: 'https://pic.showjet.ru/pics/497eedd0-2953-4600-b348-0fcb4049bdc2/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Скальпы',
              thumbnail: 'https://pic.showjet.ru/pics/6f2f017b-5fab-48fd-b93d-7a0fa7a8f171/10x7/400.jpg',
              src: '3.mp4',
              subtitles: [
                {
                  src: '3-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '3-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 46,
    name: 'Индийское лето',
    slogan: 'Любовь на закате империи',
    ratings: [7.2, 7],
    age: '16+',
    originalName: 'Indian Summers',
    poster: 'https://pic.showjet.ru/pics/ab191704-3437-4e09-80b3-cfb3d61c6467/10x5/1250.jpg',
    summary: '2 сезона / история, мелодрама, 2015 - 2016',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/121a0a7b-a56b-4ed5-aa7c-25a4c26f62a3/10x5/550.jpg',
        src: '4.mp4',
        subtitles: [
          {
            src: '4-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '4-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/278d3a15-9dd9-4fa2-a499-c9cc25796322/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/0cfc2e39-9dc0-489f-b66a-b6f5f7dcd807/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/cd318c1d-e3b1-4058-9c59-efac23c16965/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5f2e456f-081b-4015-9db0-c98d4d2b63de/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3a5f58d3-3ef6-4855-a7ce-b536e2a37af2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3b436cb2-1d88-40ef-8a6c-95844c1754e5/10x7/1000.jpg',
    ],
    description: 'Драматическая история любви и борьбы за власть в лучших традициях «Аббатства Даунтон». \nИндия, 1932 год. С приближением лета английские аристократы устремляются на север страны в город Шимла, расположенный у подножия Гималаев. Здесь, в закрытом клубе для британцев, они предаются изысканным развлечениям и танцуют ночи напролёт, не замечая, что местные жители уже начали борьбу за независимость. На фоне тревожных событий и политических интриг между героями вспыхивают чувства, которые ведут к необратимым последствиям…',
    usersRating: 3,
    reviews: [''],
    genre: 'история, мелодрама, драма',
    release: ['15 февраля 2015 г.', '15 февраля 2015 г.'],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting', 'Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 25, role: 'Синтия' },
      { personId: 26, role: 'Ральф Уилан' },
      { personId: 27, role: 'Африн Делал' },
      { personId: 28, role: 'Суни Далал' },
      { personId: 29, role: 'Юджин Мэтерс' },
      { personId: 30, role: 'Дуги Раворт' },
      { personId: 31, role: 'Чарли Хэвисток' },
      { personId: 32, role: 'Сита' },
      { personId: 33, role: 'Ронни Кин' },
      { personId: 34, role: 'Сирена' },
      { personId: 35, role: 'Мадлен Мэтерс' },
      { personId: 36, role: 'Элис Уилан' },
    ],
    director: [
      { personId: 37, role: 'Jamie Payne' },
      { personId: 38, role: 'Jonathan Teplitzky' },
      { personId: 39, role: 'Paul Wilmshurst' },
    ],
    producers: [
      { personId: 40, role: 'Rebecca Eaton' },
      { personId: 41, role: 'Indira Varma' },
    ],
    facts: [
      'Сериал на самом деле был снят не в Индии, а в Малайзии, штате Пинанг.',
      '«Индийское лето» — самый масштабный британский проект для Channel 4 за последние 20 лет.',
      'Место действия Королевского клуба — это Crag Hotel, который был построен в XIX веке и принадлежал армянской семье Саркис. После Второй мировой войны отель стал пансионом, но после 1991 года оказался заброшен. Создатели сериала занялись реконструкцией здания и превратили его в роскошный курортный отель.',
      'Для актрисы Джулии Уолтерс (в её фильмографии более 80 фильмов!) сериал стал первым проектом, съёмки которого проходили за пределами родной Великобритании.',
      'До середины прошлого века в городе Шимла, где разворачиваются события сериала, на самом деле находилась летняя столица Британской империи.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2016',
          episodes: [
            {
              name: 'Индиец в английском костюме',
              thumbnail: 'https://pic.showjet.ru/pics/bc109e10-ea6f-40ab-b1b7-047fba82d2ac/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Чёрная змея',
              thumbnail: 'https://pic.showjet.ru/pics/b50f9d21-a89f-46fc-b555-a6f991c41d40/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Белые боги',
              thumbnail: 'https://pic.showjet.ru/pics/6393e2c2-a0f1-4176-a2be-744b611a791f/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пустое кресло',
              thumbnail: 'https://pic.showjet.ru/pics/b9193410-fe21-45b7-ab4c-388cb901aaa0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Игра в прятки',
              thumbnail: 'https://pic.showjet.ru/pics/917274f0-e40e-4185-a364-b4b7ce0dceea/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Подарок для короля',
              thumbnail: 'https://pic.showjet.ru/pics/43356090-ccce-4d1b-8b70-ec92dd68eff2/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Предложение',
              thumbnail: 'https://pic.showjet.ru/pics/0596b831-2c25-4776-9eca-05bb8c7ac74e/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'День рождения',
              thumbnail: 'https://pic.showjet.ru/pics/6dd94ed7-bef4-46b3-8fa5-9bc8672ffb58/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Победитель забирает всё',
              thumbnail: 'https://pic.showjet.ru/pics/5bed2232-bfc6-46de-9961-591741cbf549/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Отъезд из дома',
              thumbnail: 'https://pic.showjet.ru/pics/59687dc9-9431-4d07-8d68-56fcff9e80a7/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2015',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/285a7f76-5d82-48f4-bc87-78670f464015/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/e021d111-96ee-4bae-b651-d4c9b41b555a/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/6623d27d-8d09-4858-aac5-5b20a2067569/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/875d952a-e889-4cee-9491-23836ca85576/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/fe79ab1c-ff16-44ca-90f9-c52091558fd0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/4a9e003f-1f71-46f7-8158-b1acac914233/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 7',
              thumbnail: 'https://pic.showjet.ru/pics/ee9138a6-c10e-414c-9d63-6928b152a5e0/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 8',
              thumbnail: 'https://pic.showjet.ru/pics/2b8a943b-e609-410d-b931-f2e49779cca8/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 9',
              thumbnail: 'https://pic.showjet.ru/pics/a8e808c2-2fc9-4039-ae5e-de1b833b2514/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 10',
              thumbnail: 'https://pic.showjet.ru/pics/02b76b56-d3ce-4378-b681-ef15cb2b24db/10x7/400.jpg',
              src: '4.mp4',
              subtitles: [
                {
                  src: '4-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '4-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 47,
    name: 'Хроники Шаннары',
    slogan: 'Для поклонников «Властелина колец»',
    ratings: [7.2, 6.9],
    age: '16+',
    originalName: 'The Shannara Chronicles',
    poster: 'https://pic.showjet.ru/pics/a259e19b-e21c-416f-b948-567aaa05ab50/10x5/1250.jpg',
    summary: '2 сезона / фэнтези, приключения, 2016 - 2017',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/adb38dc6-441c-442b-af92-33456eb57f7f/10x5/550.jpg',
        src: '5.mp4',
        subtitles: [
          {
            src: '5-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '5-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/e0ae03d8-d9df-40ff-a36a-9d62bf590c51/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5c8a6c40-9bd4-4061-b67e-a524e51d6151/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a5b9805e-d7f4-497c-9588-d9d975746ddf/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/9c43cc69-6c59-4562-8ca1-7dab4c4f85df/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a62afcff-ef43-40ec-a1fa-f2158d13520b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/d9bfe531-1404-4a65-aefb-1b7afc9fdbbf/10x7/1000.jpg',
    ],
    description: 'Для поклонников «Властелина колец»: масштабный фэнтези-сериал «Хроники Шаннары», основанный на романе Терри Брукса. \nВ далёком постапокалиптическом будущем мир разделился на 4 Земли: территории людей, эльфов, троллей и дварфов. После войны рас, уничтожившей магию, всё зло заключили в дереве Элькрис, которое бережно охраняют эльфы. Для молодого поколения истории про магию и демонов — лишь сказки. Всё меняется, когда древние тёмные силы пробуждаются, а судьба мира оказывается в руках трёх юных героев.  \nЭмберли, принцесса королевства эльфов, получает пугающее видения о конце мира. Уилл, юный эльф-полукровка, после смерти матери узнаёт о своей причастности к древнему роду Шаннары — великих королей и магов. Эретрия, сирота и юная воровка, становится преданным другом Уилла и Эмберли. Вместе с друидом Алланоном героям предстоит тяжелый путь по спасению всех 4 Земель от гибели.',
    usersRating: 3,
    reviews: [''],
    genre: 'фэнтези, приключения, фантастика',
    release: ['05 января 2016 г.'],
    audio: 'Английский, Русский',
    studio: ['Music Television (MTV)'],
    countries: 'Новая Зеландия, Соединенные Штаты Америки',
    actors: [
      { personId: 42, role: 'Король Эвентин Элесседил' },
      { personId: 43, role: 'Эмберли Элесседил' },
      { personId: 44, role: 'Марет' },
      { personId: 45, role: 'Андер Элесседил' },
      { personId: 46, role: 'Алланон' },
      { personId: 47, role: 'Эретрия' },
      { personId: 48, role: 'Уилл Омсфорд' },
    ],
    director: [
      { personId: 49, role: 'James Marshall' },
      { personId: 50, role: 'Brad Turner' },
    ],
    producers: [
      { personId: 51, role: 'David Blocker' },
      { personId: 52, role: 'Jon Favreau' },
    ],
    facts: [
      'Эльфийского короля Эвентина Элесседила сыграл британский актёр Джон Рис-Дэвис, известный по роли гнома Гимли в трилогии «Властелин колец».',
      'Сериал является экранизацией второй книги из трилогии «Шаннары» Терри Брукса.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2017',
          episodes: [
            {
              name: 'Друид',
              thumbnail: 'https://pic.showjet.ru/pics/360459d2-7868-4ce4-a4f8-05c46e9627e6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Дух',
              thumbnail: 'https://pic.showjet.ru/pics/3b7cb649-939d-49eb-afcb-3a2a8c72a843/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Грэймарк',
              thumbnail: 'https://pic.showjet.ru/pics/2a53e92d-acf6-41dc-856f-de9a7d32d6d6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Обитатель',
              thumbnail: 'https://pic.showjet.ru/pics/4641e4cc-1131-476f-93cb-e830400f6079/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Паранор',
              thumbnail: 'https://pic.showjet.ru/pics/45e54d0d-7b9f-4d60-9ae4-caacf1de4171/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Алый',
              thumbnail: 'https://pic.showjet.ru/pics/0d5e8203-870d-45e9-baf3-375e13341740/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Чародей',
              thumbnail: 'https://pic.showjet.ru/pics/3c6474a9-cb81-4ac4-a325-4f5683534922/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эмберли',
              thumbnail: 'https://pic.showjet.ru/pics/b733396c-16ab-4468-b8d7-0085783bb0a6/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Уайлдерун',
              thumbnail: 'https://pic.showjet.ru/pics/58f03822-be47-4493-8fb1-8eb6b14d9bb8/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Кровь',
              thumbnail: 'https://pic.showjet.ru/pics/168aeb9b-247c-4141-bdef-ac1feb7d4cb1/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2016',
          episodes: [
            {
              name: 'Избранная: Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/25e8bd73-c497-41cb-9c18-3562c52b1552/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Избранная: Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/c3077ef4-48a5-4293-8f92-d07d2402be3d/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Фурия',
              thumbnail: 'https://pic.showjet.ru/pics/fc4e239a-0969-44c2-abe0-55d480d16356/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Подмена',
              thumbnail: 'https://pic.showjet.ru/pics/f8a9e6ba-eb86-4ec5-ac74-cc73d02c43f7/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Жнец',
              thumbnail: 'https://pic.showjet.ru/pics/0d47802d-da71-44fd-8e03-6da42a744b3c/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Пайкон',
              thumbnail: 'https://pic.showjet.ru/pics/63ed40ac-b2b6-4eb1-af1b-3a05c8ca22d9/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Разлом',
              thumbnail: 'https://pic.showjet.ru/pics/f0f8e6e1-8acb-4181-b1df-11b57b37dfca/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Утопия',
              thumbnail: 'https://pic.showjet.ru/pics/c5534b8b-fc9f-4895-96c7-a998e524e492/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Убежище',
              thumbnail: 'https://pic.showjet.ru/pics/e8c5a84f-4b56-4a41-a7cd-19c973a0d83c/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Элькрис',
              thumbnail: 'https://pic.showjet.ru/pics/4b843bd5-d6e8-44c4-bc6e-d6e3c3cdc4b2/10x7/400.jpg',
              src: '5.mp4',
              subtitles: [
                {
                  src: '5-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '5-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 48,
    name: 'Тайны Лауры',
    slogan: 'Женская версия «Касла»',
    ratings: [7.4, 7.4],
    age: '16+',
    originalName: 'Los misterios de Laura',
    poster: 'https://pic.showjet.ru/pics/c6b9b3f9-ee9f-4e29-868b-273196701d0f/10x5/1250.jpg',
    summary: '3 сезона / приключения, детектив, 2009 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/fab57c5e-75a3-4310-a431-f7b576b5cd26/10x5/550.jpg',
        src: '6.mp4',
        subtitles: [
          {
            src: '6-sp.vtt',
            srcLang: 'sp',
            label: 'Spanish',
          },
          {
            src: '6-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/c308d35e-35a1-4408-83b3-69789451002e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3d42a3b4-4322-4c19-9c86-92ed6017aa7e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/b7d4f3ad-548d-4a6a-bf44-74f3cc8c187e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/2546855e-9f9b-40e5-afda-ac0a5afa2c8b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/049063c3-020d-40bc-a1a7-f3ffb4010cb6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5d376ad7-002c-40db-b9c1-6c7065752bf7/10x7/1000.jpg',
    ],
    description: 'Для поклонников культового сериала «Касл»: испанская комедия о том, как женщина-детектив пытается совместить работу, развод и воспитание близнецов. \nЛаура — уважаемый детектив с идеальной интуицией, который одинаково хорошо может справиться как с хитрым продавцом в мясном магазине, так и с опасным преступником. Неудачи настигают женщину только в личной жизни: сыновья-близнецы сводят с ума проделками, экс-супруг стал начальником, и активно пытается помириться, а коллега Мартин, который нравится Лауре ещё со времен академии, относится к ней как к подруге, отдавая предпочтение сексапильным свидетельницам. \nПоможет ли шестое чувство Лауры стать ей не только счастливым профессионалом, но и счастливой женщиной?',
    usersRating: 2,
    reviews: [''],
    genre: 'приключения, детектив, комедия',
    release: ['27 июля 2009 г.'],
    audio: 'Русский',
    countries: 'Испания',
    actors: [
      { personId: 53, role: 'Мартин Мареска' },
      { personId: 54, role: 'Хави Сальгадо Лебрель' },
      { personId: 55, role: 'Карлос Сальгадо Лебрель' },
      { personId: 56, role: 'Вероника Лебрель' },
      { personId: 57, role: 'Лидия Мартинез' },
      { personId: 58, role: 'Висенте Куэвас' },
      { personId: 59, role: 'Лаура Лебрель' },
      { personId: 60, role: 'Джакобо Сальгадо' },
    ],
    director: [
      { personId: 61, role: 'Pau Freixas' },
    ],
    producers: [
      { personId: 61, role: 'Pau Freixas' },
    ],
    facts: [
      'Сериал на самом деле был снят не в Индии, а в Малайзии, штате Пинанг.',
      '«Индийское лето» — самый масштабный британский проект для Channel 4 за последние 20 лет.',
      'Место действия Королевского клуба — это Crag Hotel, который был построен в XIX веке и принадлежал армянской семье Саркис. После Второй мировой войны отель стал пансионом, но после 1991 года оказался заброшен. Создатели сериала занялись реконструкцией здания и превратили его в роскошный курортный отель.',
      'Для актрисы Джулии Уолтерс (в её фильмографии более 80 фильмов!) сериал стал первым проектом, съёмки которого проходили за пределами родной Великобритании.',
      'До середины прошлого века в городе Шимла, где разворачиваются события сериала, на самом деле находилась летняя столица Британской империи.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 3,
      seasons: [
        {
          seasonInfo: 'Сезон 3 / 2014',
          episodes: [
            {
              name: 'Лаура и загадка комнаты 308',
              thumbnail: 'https://pic.showjet.ru/pics/93d09f2d-7696-499a-b199-953ecf4894f9/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна капсулы времени. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/f1b9d562-a17e-4a2a-845d-dd27c881c0a6/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна капсулы времени. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/29dfe795-588d-4968-9b3e-39047d02d821/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна гостя',
              thumbnail: 'https://pic.showjet.ru/pics/787f7dd5-8730-4e0d-9e75-cd3c5dfd7529/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна одной женщины',
              thumbnail: 'https://pic.showjet.ru/pics/078a8ccd-2dd5-4c3d-acc6-89724aa8d6f2/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна невидимого убийцы',
              thumbnail: 'https://pic.showjet.ru/pics/a29bb785-a12c-4ef6-ab1f-79f839784e05/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна преступления века',
              thumbnail: 'https://pic.showjet.ru/pics/b9cc4b88-996d-4029-a448-7bab02beea11/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна призрака',
              thumbnail: 'https://pic.showjet.ru/pics/ba4671c0-71ed-441c-8932-0aeb5e809732/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и шпион, который много болтал',
              thumbnail: 'https://pic.showjet.ru/pics/f2c1a40c-0227-450e-9fb6-f318cb63627e/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна пойманных мышей',
              thumbnail: 'https://pic.showjet.ru/pics/ac2c6427-5383-40c9-b9bc-804a8e0c5a78/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и тайна ликов истины',
              thumbnail: 'https://pic.showjet.ru/pics/8baefd1f-51c0-4adb-ab58-88ae3556f9e5/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/14c862ac-2ca3-4832-ad90-cde6baa21627/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/937aef3f-43c4-4b3f-ac27-ccc7d613b174/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Лаура и загадка числа 17. Часть 3',
              thumbnail: 'https://pic.showjet.ru/pics/937aef3f-43c4-4b3f-ac27-ccc7d613b174/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 2 / 2011',
          episodes: [
            {
              name: 'Тайна молчуна',
              thumbnail: 'https://pic.showjet.ru/pics/0f83463c-d300-4588-9321-b93b3bba96c1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна клуба',
              thumbnail: 'https://pic.showjet.ru/pics/438c316f-df2c-42d3-8c18-7d709b90b22a/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна человека, которого не было',
              thumbnail: 'https://pic.showjet.ru/pics/46a728a5-0e7a-4308-b2ca-22e9c7139e38/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна недовольного пациента',
              thumbnail: 'https://pic.showjet.ru/pics/438a6834-2657-4fbc-be57-0f3c6003a25c/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна человека, который не хотел умирать',
              thumbnail: 'https://pic.showjet.ru/pics/ef5143b8-7223-45fe-b46e-0273a266f3ea/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна восьми мужчин',
              thumbnail: 'https://pic.showjet.ru/pics/16111a03-134f-4c73-ba79-d697cf7e34be/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна кричащего свидетеля',
              thumbnail: 'https://pic.showjet.ru/pics/9ec1cfee-6d95-4999-84e1-1269f534ea10/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна необычного трюка',
              thumbnail: 'https://pic.showjet.ru/pics/6995ac7b-5fbf-4bd5-86a2-c4172d6b04a1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна преступного аббатства',
              thumbnail: 'https://pic.showjet.ru/pics/17a59cdd-8507-4f9f-923f-36a6e5bbec33/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна красной леди',
              thumbnail: 'https://pic.showjet.ru/pics/f0ecb1cf-be3b-4dc2-bdb5-eb4d7506cc8d/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна десяти незнакомцев. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/5affa3d5-68c6-4a48-9fb8-919f609ca7cd/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна десяти незнакомцев. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/182848c5-62bd-47c1-aaf1-10e8d28444a9/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2009',
          episodes: [
            {
              name: 'Тайна запечатанной комнаты. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/cff1a7d9-2c46-49c9-97dd-f215a82b0df1/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна запечатанной комнаты. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/24e77673-eb0a-40bf-a7a1-d3b670c1bd6d/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального соседа. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/2842bfef-d0b7-4772-997c-4e3a3d00b714/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального соседа. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/0db050a1-ee55-4f55-992b-bd6f9b1252f2/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального алиби. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/bc7e30c8-d704-437d-8fcf-3a981581dfaa/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна идеального алиби. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/503d32b5-7769-425a-95fc-9461a3614272/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна места преступления',
              thumbnail: 'https://pic.showjet.ru/pics/8da94e6e-01a7-4b1b-8ed5-a887fd0faf35/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна синего попугая. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/e24cc7b0-325e-489a-8779-4336c1ab9332/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна синего попугая. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/f7d93d95-17a2-47d0-bb9c-ff2ef9e6b7f3/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тайна найденного трупа',
              thumbnail: 'https://pic.showjet.ru/pics/7a97aa9d-ceac-4e29-915e-36e0455fca50/10x7/400.jpg',
              src: '6.mp4',
              subtitles: [
                {
                  src: '6-sp.vtt',
                  srcLang: 'sp',
                  label: 'Spanish',
                },
                {
                  src: '6-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 49,
    name: 'Бивер Фолс',
    slogan: '«Американский пирог» с британской начинкой',
    ratings: [7.8, 7.7],
    age: '16+',
    originalName: 'Beaver Falls',
    poster: 'https://pic.showjet.ru/pics/9087e07e-cfb7-4552-aea8-1e4b2c1c6484/10x5/1250.jpg',
    summary: '2 сезона / комедия, 2011 - 2012',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/45586294-928e-4ebf-94aa-466caa626060/10x5/550.jpg',
        src: '7.mp4',
        subtitles: [
          {
            src: '7-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '7-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/e39ee4f3-f56c-44f3-bc88-10176eeadfe2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/8110233e-baae-4259-ad0e-9b8c4177fa2b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/9cb76cc8-c507-4003-832b-d60b0c0bf9ac/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a6d35c62-b65c-48e9-a7f6-8d2c376fb825/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/344ff3db-fb40-4106-ba3e-60359503a3f0/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/ebc395e4-faea-4f7b-ab86-0fa0039e406a/10x7/1000.jpg',
    ],
    description: 'Молодёжная комедия в лучших традициях «Американского пирога», «Евротура» и «Короля вечеринок». \nСолнце, воздух, природа, красивые девчонки и симпатичные парни, романтические приключения и безудержное веселье — что ещё нужно для счастья? Трое английских студентов — Флинн, А-Раб и Барри — устраиваются на работу в летний американский лагерь, куда приезжают отдыхать отпрыски самых богатых семейств Калифорнии. Ребятам предстоит присматривать за детишками, но на самом деле они намерены оторваться по полной и покутить так, чтобы было о чём рассказать внукам!',
    usersRating: 3,
    reviews: [''],
    genre: 'комедия',
    release: ['27 июля 2011 г.', '27 июля 2011 г.'],
    audio: 'Английский, Русский',
    countries: 'Великобритания',
    actors: [
      { personId: 71, role: 'Джейк' },
      { personId: 72, role: 'Рик' },
      { personId: 73, role: 'Кимберли' },
      { personId: 74, role: 'ПиДжей' },
      { personId: 75, role: 'Брэндон' },
      { personId: 76, role: 'Мак' },
      { personId: 77, role: 'А-Раб' },
      { personId: 78, role: 'Флинн' },
      { personId: 79, role: 'Барри' },
      { personId: 80, role: 'Рэйчел' },
      { personId: 81, role: 'Хоуп' },
    ],
    director: [
      { personId: 82, role: 'Daniel O\'Hara' },
      { personId: 83, role: 'Benjamin Caron' },
      { personId: 84, role: 'Lawrence Till' },
      { personId: 85, role: 'Jack Clough' },
    ],
    producers: [
      { personId: 86, role: 'Liz Lewin' },
      { personId: 87, role: 'Charles Pattinson' },
      { personId: 88, role: 'George Faber' },
    ],
    facts: [
      'Действие сериала происходит в Калифорнии, однако съёмки проходили в Южной Африке.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2017',
          episodes: [
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/b3ce4602-b324-4912-8b3d-c4c6f4c2ae49/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/371788d1-52ec-42eb-a4f4-b55d3ab6f618/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/701749f1-f300-4bca-a2ed-d5e81433cceb/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/ff00806c-75a5-4b56-b73f-1f5df5f324f0/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/ab8186e0-4e7d-4b82-9022-f284ecce6251/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/0e697263-140e-4967-9192-0cbd871589dd/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2016',
          episodes: [
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/fbe6ac2b-3bbf-4ae6-8bd9-6b0c9ebd5446/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/d9bda9bd-a8ee-4217-adc7-836b6259c879/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/1fe76f9b-b64a-4226-9670-6f0bc5ca904b/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/9a6aca44-df21-4eab-b5cf-df9003ebd176/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/13c7773f-1c4d-4222-a2c6-52a93027008b/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: '',
              thumbnail: 'https://pic.showjet.ru/pics/18715ea9-7241-4348-b10e-8be6309ed0d5/10x7/400.jpg',
              src: '7.mp4',
              subtitles: [
                {
                  src: '7-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '7-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 50,
    name: 'Тишина',
    slogan: 'Глухая девушка становится свидетелем убийства...',
    ratings: [7.1, 6.9],
    age: '16+',
    originalName: 'The Silence',
    poster: 'https://pic.showjet.ru/pics/332bc7ab-9f7c-4219-9df9-f72ee808e1ff/10x5/1250.jpg',
    summary: '1 сезон / триллер, детектив, 2010',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/06f33b2d-e146-49d3-8ada-e082dcd12a7c/10x5/550.jpg',
        src: '8.mp4',
        subtitles: [
          {
            src: '8-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '8-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/1067a9d4-5274-4e46-a025-72ecc4c11efa/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/f4be9a42-638e-4f14-9053-2dc3696fecff/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c1a1cffd-4643-411e-b303-e2b1aab512db/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/87294aac-295b-4ac5-94bd-591ff74f786a/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5fc9e229-0d1f-46d7-b2a4-3158ea826979/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/efbf7c81-0787-4e64-a4f4-daa2c3117a8f/10x7/1000.jpg',
    ],
    description: 'Переплетение психологической драмы и захватывающего триллера, которое никого не оставит равнодушным. \nАмелия, 18-летняя глухая девушка, случайным образом становится свидетельницей убийства женщины-полицейского и оказывается вовлечена в расследование сложного и запутанного дела. Окружающий мир обрушивается на девушку градом жестокости, несправедливости и разочарований, и теперь, чтобы помочь найти виновных, ей предстоит превратить свою особенность в преимущество.',
    usersRating: 5,
    reviews: [''],
    genre: 'триллер, детектив, криминал, драма',
    release: ['12 июля 2010 г.', '12 июля 2010 г.'],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 89, role: 'Амелия' },
      { personId: 90, role: 'Мэгги' },
      { personId: 91, role: 'Энн' },
      { personId: 92, role: 'Крис' },
      { personId: 93, role: 'Джим' },
    ],
    director: [
      { personId: 94, role: 'Dearbhla Walsh' },
    ],
    producers: [
      { personId: 88, role: 'George Faber' },
      { personId: 94, role: 'Cait Collins' },
    ],
    facts: [
      'Сериал стал первым британским проектом для сценариста Фионы Серес, которая родилась в Австралии. Ради работы над шоу она перевезла всю свою семью из Сиднея в Лондон.',
      'Женевьева Барр, как и её героиня, родилась глухой и в обычной жизни использует слуховые аппараты. Но для роли их необходимо было снять, а также девушке пришлось изучить язык жестов, который она раньше не применяла, полагаясь лишь на свои слуховые аппараты и чтение губ.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/313b8ff2-2d38-44db-82f8-e56b4ed24bb8/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/952e497f-cbec-4485-a73e-767162eaa4c4/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/37871517-0a5c-4f51-957d-6f39c448be0e/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/abb2ba21-0630-4c85-aa5d-7fb2d1294caf/10x7/400.jpg',
              src: '8.mp4',
              subtitles: [
                {
                  src: '8-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '8-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 51,
    name: 'Джек Айриш',
    slogan: 'В главной роли Гай Пирс',
    ratings: [6.8, 6.8],
    age: '18+',
    originalName: 'Jack Irish',
    poster: 'https://pic.showjet.ru/pics/d55f54c2-4b9f-4a90-8f73-191e9c3c98f0/10x5/1250.jpg',
    summary: '1 сезон / триллер, криминал, 2012 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/d388f434-a6dd-4c02-a95f-e41f3649fb27/10x5/550.jpg',
        src: '9.mp4',
        subtitles: [
          {
            src: '9-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '9-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/0327a903-cb0f-4a94-a83d-69e8958107e7/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/f9d598d0-8e5b-4efb-bf52-45f51ad59cc4/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a04e989a-3822-4879-bee4-2ba0661faa37/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/87d31c07-bb25-4594-98f1-8ad4ef0dea76/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/1b6615b5-6609-45f4-a8f4-5070ba1da03d/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/878c83a0-ccdd-45d5-90da-6773dbe122a3/10x7/1000.jpg',
    ],
    description: 'Криминальная драма о мрачных тайнах австралийского Мельбурна и депрессивном адвокате, который пытается их раскрыть. В главной роли — номинант на «Золотой глобус» Гай Пирс («Железный человек 3»). \nУ адвоката Джека Айриша была прекрасная жена, отличная работа и хорошая репутация. Но когда бывший клиент жестоко убил его супругу, а потом застрелился сам, Джек пустился во все тяжкие. Теперь его друзья — депрессия, ночные посиделки в баре и ставки на спорт. От прежней жизни не осталось ничего. \nНо как бы Айриш не пытался убежать от прошлого, ничего не получилось. Мёртвым находят другого клиента Джека — Дэнни, который отчаянно пытался дозвониться до бывшего адвоката. Официальная версия смерти — застрелен полицейским при попытке сопротивления. Только вот сам Айриш в это не верит, и вместе с очаровательной журналисткой Линдой Хиллер начинает собственное расследование. И чем больше он узнаёт, тем яснее становится: это не случайность, а намеренное убийство…',
    usersRating: 4,
    reviews: [''],
    genre: 'триллер, криминал, драма',
    release: ['14 октября 2012 г.'],
    audio: 'Английский, Русский',
    studio: ['ZDF'],
    countries: 'Австралия',
    actors: [
      { personId: 95, role: 'Джек Айриш' },
      { personId: 96, role: 'Линда Хиллер' },
      { personId: 97, role: 'Кэм Делрэй' },
      { personId: 98, role: 'Гарри Странг' },
      { personId: 99, role: 'Изабелла Айриш' },
    ],
    director: [
      { personId: 100, role: 'Jeffrey Walker' },
    ],
    producers: [
      { personId: 101, role: 'Christopher Gist' },
      { personId: 102, role: 'Andrew Knight' },
      { personId: 103, role: 'Ian Collie' },
    ],
    facts: [],
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          seasonInfo: 'Сезон 1 / 2010',
          episodes: [
            {
              name: 'Безнадежные долги. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/b671462c-3943-435a-8e90-ae79a2ed8112/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Безнадежные долги. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/95d196c4-49ac-4968-b2ab-8f81f10f7614/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Черный прилив. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/1ba14a1b-f3cb-47b8-bdb8-34b19fd9c7c9/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Черный прилив. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/d788e49f-a8c6-45c6-87e2-4464610de758/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тупик. Часть 1',
              thumbnail: 'https://pic.showjet.ru/pics/3a4bd9ce-bb7a-4b89-a150-0fcf002e9821/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Тупик. Часть 2',
              thumbnail: 'https://pic.showjet.ru/pics/d4dd73f4-345b-4496-ae0b-6b483084bde1/10x7/400.jpg',
              src: '9.mp4',
              subtitles: [
                {
                  src: '9-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '9-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 52,
    name: 'Деревня',
    slogan: 'Большая история маленького человека',
    ratings: [7.7, 7.7],
    age: '16+',
    originalName: 'The Village',
    poster: 'https://pic.showjet.ru/pics/d6bea79d-cf36-43d5-bcc8-52284e1d7d3a/10x5/1250.jpg',
    summary: '2 сезона / история, драма, 2013 - 2014',
    trailer: [
      {
        thumbnail: 'https://pic.showjet.ru/pics/dd1bf4c8-251e-4821-86f1-2c6a974f2bc6/10x5/550.jpg',
        src: '10.mp4',
        subtitles: [
          {
            src: '10-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '10-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://pic.showjet.ru/pics/0a1f6aba-b650-422b-9838-d7ed6952b8c9/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c2d19edb-a9cc-467c-a09a-ef12b5bed724/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/aa685705-bd9b-40b9-8c71-19438757fd82/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/042a25d5-343b-4f6a-92db-18fdf0cc6fb6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/bd475603-51c3-468d-8a5f-9b527ea60560/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/c74ce51c-a8ad-41bc-b71e-9b6c74eafb49/10x7/1000.jpg',
    ],
    description: 'Невероятно достоверная историческая драма от обладателя премии BAFTA Питера Моффата.  \n112-летний Берт Миддлтон родился в глухой английской деревушке графства Дербишир. В 1914 году его отец работал на ферме, а старший брат трудился в богатом доме носильщиком воды. Тогда жёны не смели перечить мужьям, фермеры не видели смысла в образовании, а учителя били школьников за то, что те писали левой рукой. Но всё меняется, когда в тихую деревню приезжает первый автобус, из которого выходит неизвестная леди… \nГлазами Берта мы увидим целое столетие жизни: счастье и боль, любовь и предательство, рождение и смерть. Переживём важнейшие события английской истории (в том числе мировые войны) и узнаем, как менялась целая нация на протяжении XX века.',
    usersRating: 5,
    reviews: [''],
    genre: 'история, драма',
    release: ['31 марта 2013 г.', '31 марта 2013 г.'],
    wins: [
      'Телевизионная премия BAFTA: Лучший драматический сериал',
      'Телевизионная премия BAFTA: Лучшая мужская роль второго плана',
      'Телевизионная премия BAFTA: Лучшая актриса',
    ],
    audio: 'Английский, Русский',
    studio: ['British Broadcasting Corporation (BBC) Television'],
    countries: 'Великобритания',
    actors: [
      { personId: 104, role: 'Клем Аллингэм' },
      { personId: 105, role: 'Эдмунд Аллингэм' },
      { personId: 106, role: 'Джо Миддлтон' },
      { personId: 107, role: 'Джерард  Эйр' },
      { personId: 108, role: 'Фиби Рандл' },
      { personId: 109, role: 'Грэйс Миддлтон' },
      { personId: 110, role: 'Джон Миддлтон' },
      { personId: 111, role: 'Марта Аллингэм' },
      { personId: 112, role: 'Каро Аллингэм' },
    ],
    director: [
      { personId: 113, role: 'Gillies MacKinnon' },
      { personId: 114, role: 'Luke Watson' },
      { personId: 115, role: 'Antonia Bird' },
      { personId: 116, role: 'Dominic Leclerc' },
    ],
    producers: [
      { personId: 117, role: 'Amy Roberts' },
      { personId: 118, role: 'Polly Hill' },
      { personId: 88, role: 'George Faber' },
      { personId: 119, role: 'Peter Moffat' },
      { personId: 120, role: 'Emma Burge' },
    ],
    facts: [
      'В сериале звучит музыка в исполнении брасс-квинтета (джазовый ансамбль для пяти исполнителей, играющих на медных духовых инструментах — прим.ред.) Университета Солфорда, который закончила исполнительница главной роли Максин Пик.',
      'Режиссёр Гиллис МакКиннон показал Нико Мираллегро (Джо) свой ранний фильм «Возрождение» (1997), чтобы актёр лучше передал эмоции в сцене, когда его герой возвращается с Первой мировой войны.',
      'Создатель сериала Питер Моффат использовал в качестве материалов записи историка Маргарет Вомбель и архив Имперского военного музея, а также дал актёрам задание подучить историю XX века.',
    ],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          seasonInfo: 'Сезон 2 / 2014',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/8a29746a-e279-4e25-bf67-8f50a8dcb501/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/33d8c25e-a8b3-42b2-af97-d5a8f0536f92/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/fa180cdf-f44f-4d21-99cd-16d47cb2002e/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/eb85daa7-22cc-4071-af27-741e2dfaa57c/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/9fa8aa26-968d-4ecd-a905-0120fc8ff312/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/1673b773-883b-4bc7-80e2-1897e0ae9a56/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2013',
          episodes: [
            {
              name: 'Эпизод 1',
              thumbnail: 'https://pic.showjet.ru/pics/e8fde516-06b2-4b0a-98ad-538dc6d7cb96/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 2',
              thumbnail: 'https://pic.showjet.ru/pics/b958a6c3-6560-4955-a035-797838920393/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 3',
              thumbnail: 'https://pic.showjet.ru/pics/8c99629f-f98e-4707-9351-6af9af57431e/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 4',
              thumbnail: 'https://pic.showjet.ru/pics/c4d02fe7-2b88-4691-9b79-8d642eb3d741/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 5',
              thumbnail: 'https://pic.showjet.ru/pics/eb46a9b4-94a3-40af-bce7-08d1759809e8/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
            {
              name: 'Эпизод 6',
              thumbnail: 'https://pic.showjet.ru/pics/3fcbee17-0f28-4e56-af26-afc69f5de79a/10x7/400.jpg',
              src: '10.mp4',
              subtitles: [
                {
                  src: '10-en.vtt',
                  srcLang: 'en',
                  label: 'English',
                },
                {
                  src: '10-ru.vtt',
                  srcLang: 'ru',
                  label: 'Russian',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 53,
    name: 'Мой сосед Тоторо',
    slogan: 'Неподражаемо обаятельный ностальгический аниме-шедевр',
    ratings: [8.1, 8.2],
    age: '0+',
    originalName: 'Tonari no Totoro',
    poster: 'https://images2.alphacoders.com/499/499590.jpg',
    summary: 'аниме, семейный, 1988',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzcwY2E2YTItMjFkZS00OTdjLTkyZTQtOTMxYzc3MGYyNmFkXkEyXkFqcGdeQXN3aWZ0dw@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '11.mp4',
        subtitles: [
          {
            src: '11-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '11-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BODIwMTc0NDA4Ml5BMl5BanBnXkFtZTgwNDE3OTEwMjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTc2MDgzODgxNF5BMl5BanBnXkFtZTgwMzE3OTEwMjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUyODI0ODA1NV5BMl5BanBnXkFtZTgwNTA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjEyMzI0Nzc1N15BMl5BanBnXkFtZTgwNjA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTM4MjIxMjQ3N15BMl5BanBnXkFtZTgwNzA2MDIyMDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODYxNjQ2OTA2Ml5BMl5BanBnXkFtZTgwODA2MDIyMDE@._V1_.jpg',
    ],
    description: 'Сестры Сацуки и Мэй переезжают вместе с папой в деревенский дом. Однажды девочки обнаруживают, что по соседству с ними живут лесные духи — хранители леса во главе со своим могущественным и добрым повелителем Тоторо. Постепенно Тоторо становится другом девочек, помогая им в их повседневных приключениях.',
    usersRating: 5,
    reviews: [''],
    genre: 'аниме, мультфильм, фэнтези, приключения, семейный',
    release: ['16 апреля 1988 г.', '20 марта 2008 г.'],
    wins: [
      'Academy of Science Fiction, Fantasy & Horror Films, USA: Best Genre Video Release',
      'Blue Ribbon Awards: Special Award',
      'Kinema Junpo Awards: Best Film',
      'Kinema Junpo Awards: Best Japanese Film',
      'Mainichi Film Concours: Best Film',
    ],
    audio: 'Японский, Английский, Русский',
    studio: ['Nibariki', 'Studio Ghibli', 'Tokuma Japan Communications Co. Ltd.', 'Disney'],
    countries: 'Япония',
    actors: [
      { personId: 121, role: 'Тоторо' },
      { personId: 122, role: 'Сатсуки' },
      { personId: 123, role: 'Мей' },
      { personId: 124, role: 'Тацуо Кусакабе' },
      { personId: 125, role: 'Ясуко Кусакабе' },
      { personId: 126, role: 'Бабушка' },
      { personId: 127, role: 'Канта' },
      { personId: 128, role: 'Папа Канты' },
      { personId: 129, role: 'Мама Канты' },
    ],
    director: [
      { personId: 130, role: 'Hayao Miyazaki' },
    ],
    producers: [
      { personId: 131, role: 'Toru Hara' },
      { personId: 132, role: 'Eiko Tanaka' },
      { personId: 133, role: 'Yasuyoshi Tokuma' },
    ],
    facts: [
      'Хаяо Миядзаки использовал в «Тоторо» некоторые автобиографические мотивы (например, долгая болезнь матери героинь туберкулезом), а также привлек с его помощью внимание к надвигающейся урбанизации и уничтожению традиционного японского сельского ландшафта — полей и лесов. Он пожертвовал три миллиона долларов и права на изображение Тоторо обществу защиты природы своего родного города Токородзава (в настоящее время — пригород Токио).',
      'Оригинальный японский релиз анимационной ленты шёл в виде сдвоенных показов с фильмом «Могила светлячков» (1988), поскольку прокатчики посчитали, что выпускать её самостоятельно будет слишком рискованным шагом.',
      'Первая англоязычная дублированная версия появилась ещё в 1988 году эксклюзивно для трансокеанских рейсов авиакомпании Japan Airlines. В США дубляж был выпущен в 1993 году студией Troma, а затем на VHS и DVD Fox Video. После того как права этих студий на ленту истекли, их приобрела студия Disney, выпустившая полностью новую дублированную версию в марте 2006 года.',
    ],
    type: 'film',
    film: {
      name: 'Мой сосед Тоторо',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzcwY2E2YTItMjFkZS00OTdjLTkyZTQtOTMxYzc3MGYyNmFkXkEyXkFqcGdeQXN3aWZ0dw@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '11.mp4',
      subtitles: [
        {
          src: '11-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '11-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 54,
    name: 'Сияние',
    slogan: 'Шедевр современного хоррора',
    ratings: [8.4, 7.8],
    age: '18+',
    originalName: 'The Shining',
    poster: 'https://c4.wallpaperflare.com/wallpaper/613/473/199/movie-the-shining-wallpaper-preview.jpg',
    summary: 'ужасы, триллер, 1980',
    trailer: [
      {
        thumbnail: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/8884a77f204ed671f6612c7920671078/100x64_3',
        src: '12.mp4',
        subtitles: [
          {
            src: '12-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '12-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTc5MjM4Njg3Nl5BMl5BanBnXkFtZTgwNTk1NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTA0NzUxMjU3OTJeQTJeQWpwZ15BbWU4MDc5NTQ1NjYz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTU3MTkwMjQ1MF5BMl5BanBnXkFtZTgwODk1NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTU4NTY0MzUyMF5BMl5BanBnXkFtZTgwMDA2NDU2NjM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNzczMTIxMjk4Nl5BMl5BanBnXkFtZTgwOTMzMDYwNDI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg0MzkzODUwNV5BMl5BanBnXkFtZTgwODM1MjEwNDI@._V1_.jpg',
    ],
    description: 'Джек Торренс с женой и сыном приезжает в элегантный отдалённый отель, чтобы работать смотрителем во время мертвого сезона. Торренс здесь раньше никогда не бывал. Или это не совсем так? Ответ лежит во мраке, сотканном из преступного кошмара.',
    usersRating: 4,
    reviews: [''],
    genre: 'триллер, драма, ужасы, детектив',
    release: ['23 мая 1980 г.', '29 октября 2020 г.'],
    wins: [
      'National Film Preservation Board, USA: National Film Preservation Board',
      'Online Film & Television Association:  Motion Picture',
      'Academy of Science Fiction, Fantasy & Horror Films, USA: Best Supporting Actor',
    ],
    audio: 'Английский, Русский',
    studio: ['Warner Bros. Pictures', 'Hawk Films Ltd.', 'Peregrine', 'Producers Circle'],
    countries: 'Соединенные Штаты Америки',
    actors: [
      { personId: 134, role: 'Джек Торренс' },
      { personId: 135, role: 'Венди Торренс' },
      { personId: 136, role: 'Денни Торренс' },
      { personId: 137, role: 'Дик Халлорен' },
      { personId: 138, role: 'Стюарт Уллман' },
      { personId: 139, role: 'Чарльз Грейди' },
      { personId: 140, role: 'Лойд' },
      { personId: 141, role: 'Доктор' },
      { personId: 142, role: 'Дёркин' },
    ],
    director: [
      { personId: 143, role: 'Stanley Kubrick' },
    ],
    producers: [
      { personId: 143, role: 'Stanley Kubrick' },
      { personId: 144, role: 'Jan Harlan' },
      { personId: 145, role: 'Mary Lea Johnson' },
      { personId: 146, role: 'Robert Fryer' },
      { personId: 147, role: 'Martin Richards' },
    ],
    facts: [
      'Фильм снят по мотивам романа Стивена Кинга «Сияние» (The Shining, 1977).',
      'Чтобы погрузить съемочную группу в необходимое психологическое состояние, Кубрик показывал им фильм «Голова-ластик» (1977).',
      'Стивен Кинг пытался отговорить Кубрика приглашать на главную роль Джека Николсона и предлагал взамен взять Джона Войта или Майкла Мориарти. В качестве аргумента он приводил свое убеждение в том, что зрителю гораздо интереснее будет наблюдать за постепенным сумасшествием актера с изначально нормальным выражением лица, нежели за Николсоном, у которого с самого начала фильма несколько безумный вид.',
    ],
    type: 'film',
    film: {
      name: 'Сияние',
      thumbnail: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/8884a77f204ed671f6612c7920671078/100x64_3',
      src: '12.mp4',
      subtitles: [
        {
          src: '12-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '12-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 55,
    name: 'Хороший, плохой, злой',
    slogan: 'Вестерн на все времена',
    ratings: [8.8, 8.5],
    age: '16+',
    originalName: 'Il buono, il brutto, il cattivo',
    poster: 'https://i.ebayimg.com/images/g/8u4AAOSwFfdhpTZe/s-l1600.jpg',
    summary: 'приключения, вестерн, 1966',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzMzMDAxZDAtYTBkNy00NjMwLWIyYzctODA1YzE0MzUwMTI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '13.mp4',
        subtitles: [
          {
            src: '13-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '13-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BN2ZmNWUzNTQtMDY2OS00YjBmLWI5NTQtMzg5MDk0MzM5OTc2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUxNzUzMzMtNzc5MS00MTllLThhODQtNDRjZTQ4NWY5MjUyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BZmUyN2UxZGUtMWQwZi00MTA5LTkzNzUtOTJjOTU3MDRhZGQ2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BYWZjYzA3YTgtNzQyZS00NmNkLWE4ZmItMjJhNmJiMzJkZTI0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOWIwNjcyZDUtNjRmZS00ZGNiLWIwZDUtMmUyYzQ5NTQ4OTA3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg3NTQ2OTIwN15BMl5BanBnXkFtZTcwNzc0Mzg4Mw@@._V1_.jpg',
    ],
    description: 'В разгар гражданской войны таинственный стрелок скитается по просторам Дикого Запада. У него нет ни дома, ни друзей, ни компаньонов, пока он не встречает двоих незнакомцев, таких же безжалостных и циничных.\nПо воле судьбы трое мужчин вынуждены объединить свои усилия в поисках украденного золота. Но совместная работа - не самое подходящее занятие для таких отъявленных бандитов, как они. Компаньоны вскоре понимают, что в их дерзком и опасном путешествии по разоренной войной стране самое важное - никому не доверять и держать пистолет наготове, если хочешь остаться в живых.',
    usersRating: 4,
    reviews: [''],
    genre: 'приключения, вестерн',
    release: ['23 декабря 1966'],
    wins: [
      'Faro Island Film Festival: Best Actor',
      'Online Film & Television Association:  Score',
      'Online Film & Television Association:   Motion Picture',
    ],
    audio: 'Английский, Русский',
    studio: ['Arturo González Producciones Cinematográficas S.A.', 'Constantin Film', 'Produzioni Europee Associati (PEA)'],
    countries: 'Италия, Испания, Германия (ФРГ)',
    actors: [
      { personId: 148, role: 'Блондин' },
      { personId: 149, role: 'Сентенца' },
      { personId: 150, role: 'Туко' },
      { personId: 151, role: 'Капитан Клинтон' },
      { personId: 152, role: 'Падре Пабло Рамирес' },
      { personId: 153, role: 'Мария' },
    ],
    director: [
      { personId: 154, role: 'Sergio Leone' },
    ],
    producers: [
      { personId: 155, role: 'Alberto Grimaldi' },
    ],
    facts: [
      'Первое слово в фильме произносится только на 10 минуте фильма.',
      'Так как Серджио Леоне практически не говорил по-английски, а Илай Уоллак практически не говорил по-итальянски, они общались на французском.',
      '«Человек без имени» всего 17 минут за весь фильм носит «фирменное» Пончо, которое стало эпохальным за два первых вестерна. ',
    ],
    type: 'film',
    film: {
      name: 'Хороший, плохой, злой',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzMzMDAxZDAtYTBkNy00NjMwLWIyYzctODA1YzE0MzUwMTI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '13.mp4',
      subtitles: [
        {
          src: '13-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '13-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 56,
    name: 'Бегущий по лезвию 2049',
    slogan: 'Мечтают ли андроиды об электроовцах?',
    ratings: [8.0, 7.8],
    age: '18+',
    originalName: 'Blade Runner 2049',
    poster: 'https://wallpapers.com/images/featured/ln4wirn5204bujot.jpg',
    summary: 'фантастика, триллер, 2017',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjE3MjY3MTkzNV5BMl5BanBnXkFtZTgwNTE0NjU3MzI@._V1_QL75_UX500_CR0,46,500,281_.jpg',
        src: '14.mp4',
        subtitles: [
          {
            src: '14-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '14-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTg3NDIwNzU3MF5BMl5BanBnXkFtZTgwMDQ5MjY2MzI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTgyMzYyMTU2NF5BMl5BanBnXkFtZTgwMTQ5MjY2MzI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjA5NzE4NTA0MF5BMl5BanBnXkFtZTgwNTg5NjUyMjI@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOTgwY2M1ZmYtZWE1Yi00YmNlLWEyNDYtOTViODE4MTliMTNiXkEyXkFqcGdeQXVyNzg2ODI2OTU@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOGJjY2Q2NTgtZmE5OS00ZjY0LWJmNGMtMThiMDQ5NzBiYjM1XkEyXkFqcGdeQXVyNzg2ODI2OTU@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTk2OTU3MDA3N15BMl5BanBnXkFtZTgwMTg5NjUyMjI@._V1_.jpg',
    ],
    description: 'В недалеком будущем мир населен людьми и репликантами, созданными выполнять самую тяжелую работу. Работа офицера полиции Кей — держать репликантов под контролем в условиях нарастающего напряжения. Он случайно становится обладателем секретной информации, которая ставит под угрозу существование всего человечества. Желая найти ключ к разгадке, Кей решает разыскать Рика Декарда — бывшего офицера специального подразделения полиции Лос-Анджелеса, который бесследно исчез много лет назад.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, боевик, триллер, драма',
    release: ['3 октября 2017', '5 октября 2017'],
    wins: [
      'Oscar: Best Achievement in Cinematography',
      'Oscar: Best Achievement in Visual Effects',
      'BAFTA: Best Cinematography',
      'BAFTA: Best Achievement in Special Visual Effects',
      'Saturn Award: Best Science Fiction Film',
    ],
    audio: 'Английский, Русский',
    studio: [
      '16:14 Entertainment',
      'Alcon Entertainment',
      'Columbia Pictures',
      'Scott Free Productions',
      'Thunderbird FilmsTorridon Films',
      'Warner Bros. Pictures',
    ],
    countries: 'США, Великобритания, Канада, Испания',
    actors: [
      { personId: 156, role: 'К' },
      { personId: 157, role: 'Рик Декард' },
      { personId: 158, role: 'Джой' },
      { personId: 159, role: 'Саппер Мортон' },
      { personId: 160, role: 'Лейтенант Джоши' },
      { personId: 161, role: 'Ниандер Уоллес' },
    ],
    director: [
      { personId: 162, role: 'Denis Villeneuve' },
    ],
    producers: [
      { personId: 163, role: 'Yale Badik' },
      { personId: 164, role: 'Broderick Johnson' },
      { personId: 165, role: 'Andrew A. Kosove' },
      { personId: 166, role: 'Ridley Scott' },
    ],
    facts: [
      'На ранних стадиях проекта принималось, что режиссёром фильма будет Ридли Скотт. Незадолго до начала съёмок, однако, Скотт объявил, что режиссурой заниматься не станет, а останется в проекте только в должности продюсера. О причинах такого решения ничего сказано не было.',
      'Для прохождения теста на эмоции Кей произносит фразу: «Кроваво-черное ничто пустилось вить систему клеток, связанных внутри, клеток, связанных внутри, клеток в едином стебле и явственно, до жути на фоне тьмы ввысь белым бил фонтан». Это фраза взята из романа Владимира Набокова «Бледный огонь», написанного на английском языке и изданного в 1962 году.',
      'Изначально персонаж Ниандера Уоллеса был написан под Дэвида Боуи. Но в январе 2016-го Дэвид ушел из жизни, и в итоге, персонажа сыграл Джаред Лето.',
    ],
    type: 'film',
    film: {
      name: 'Бегущий по лезвию 2049',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjE3MjY3MTkzNV5BMl5BanBnXkFtZTgwNTE0NjU3MzI@._V1_QL75_UX500_CR0,46,500,281_.jpg',
      src: '14.mp4',
      subtitles: [
        {
          src: '14-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '14-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 57,
    name: 'Девушка с татуировкой дракона',
    slogan: 'Напряженный нордический триллер',
    ratings: [7.8, 7.7],
    age: '18+',
    originalName: 'The Girl with the Dragon Tattoo',
    poster: 'https://p4.wallpaperbetter.com/wallpaper/704/961/190/the-girl-with-the-dragon-tattoo-wallpaper-preview.jpg',
    summary: 'детектив, триллер, 2011',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjM2OTU4MDA1OV5BMl5BanBnXkFtZTgwNzg2MTAyMzE@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '15.mp4',
        subtitles: [
          {
            src: '15-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '15-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTkwODI5ODcxMl5BMl5BanBnXkFtZTcwNjIyNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjE1Njc3MDIwNV5BMl5BanBnXkFtZTcwMTQyNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTY2MzQwODMxN15BMl5BanBnXkFtZTcwNjQzNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjc0NTg1NjkyNl5BMl5BanBnXkFtZTcwNTgzNDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg4NDg4MDAxN15BMl5BanBnXkFtZTcwMDUwMDAxNw@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BY2U4MjE2YTUtNzg2ZC00N2U2LWE3NTItM2Q3YmViZjgxYTdjXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg',
    ],
    description: '40 лет назад Харриет Вангер бесследно пропала на острове, принадлежащем могущественному клану Вангер. Тело так и не нашли, но её дядя убежден, что девушку убили, и что убийца является членом его собственной неблагополучной семьи. Он нанимает опального журналиста Микаэля Блумквиста и татуированную хакершу Лисбет Саландер для проведения расследования.',
    usersRating: 5,
    reviews: [''],
    genre: 'детектив, триллер, драма, криминал',
    release: ['12 декабря 2011', '2 января 2012'],
    wins: [
      'Oscar: Best Achievement in Film Editing',
      'Saturn Award: Best Horror/Thriller Film',
      'AFI Awards: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Columbia Pictures',
      'Film Rites',
      'Ground Control',
      'Metro-Goldwyn-Mayer (MGM)',
      'Scott Rudin Productions',
      'Yellow Bird Films AB',
    ],
    countries: 'США, Швеция, Норвегия',
    actors: [
      { personId: 167, role: 'Микаэль Блумквист' },
      { personId: 168, role: 'Лисбет Саландер' },
      { personId: 169, role: 'Хенрик Вангер' },
      { personId: 170, role: 'Мартин Вангер' },
      { personId: 171, role: 'Фроде' },
      { personId: 160, role: 'Эрика Бергер' },
      { personId: 172, role: 'Бьюрман' },
      { personId: 173, role: 'Анита Вангер' },
      { personId: 174, role: 'Сесилия' },
    ],
    director: [
      { personId: 175, role: 'David Fincher' },
    ],
    producers: [
      { personId: 176, role: 'Ceán Chaffin' },
      { personId: 177, role: 'Scott Rudin' },
      { personId: 178, role: 'Søren Stærmose' },
      { personId: 179, role: 'Ole Søndberg' },
    ],
    facts: [
      'Фильм снят по мотивам романа Стига Ларссона «Девушка с татуировкой дракона» (Män som hatar kvinnor, 2004).',
      'Период съёмок в Швеции пришёлся на самую холодную зиму за последние 20 лет.',
      'Следуя плану, утвержденному самим Финчером, Руни Мара за один день сделала пирсинг во всех местах, где это требовалось по сценарию, хотя раньше не носила даже серьги.',
    ],
    type: 'film',
    film: {
      name: 'Девушка с татуировкой дракона',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjM2OTU4MDA1OV5BMl5BanBnXkFtZTgwNzg2MTAyMzE@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '15.mp4',
      subtitles: [
        {
          src: '15-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '15-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 58,
    name: 'Отель «Гранд Будапешт»',
    slogan: 'Неповторимый стиль Уэса Андерсона',
    ratings: [8.1, 7.9],
    age: '16+',
    originalName: 'The Grand Budapest Hotel',
    poster: 'https://i.pinimg.com/originals/44/36/f8/4436f881a2a637ed5c6b9d0c10372089.jpg',
    summary: 'комедия, детектив, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTgxODI4OTU3N15BMl5BanBnXkFtZTgwODgzNDMzMTE@._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '16.mp4',
        subtitles: [
          {
            src: '16-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '16-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMjM1MjYzODE4N15BMl5BanBnXkFtZTgwNzU4ODY2OTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTY1OTE0NDU4Nl5BMl5BanBnXkFtZTgwOTYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ0NzAyNDI1MV5BMl5BanBnXkFtZTgwNjYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjU1NTE3NTkyMV5BMl5BanBnXkFtZTgwNzYwODYyMTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BYjRhMDgzZTctMzg0MS00OGQ3LWFhNmMtMDU1ZGNiMGRmODcwXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BOTI3NTgxNTUtZmEwNi00ZmY5LTk1MmQtM2MwZWEwMGJjOTY0XkEyXkFqcGdeQXVyNjc0NjIyMDI@._V1_.jpg',
    ],
    description: 'Фильм рассказывает об увлекательных приключениях легендарного консьержа Густава и его юного друга, портье Зеро Мустафы. Сотрудники гостиницы становятся свидетелями кражи и поисков бесценных картин эпохи Возрождения, борьбы за огромное состояние богатой семьи и… драматических изменений в Европе между двумя кровопролитными войнами XX века.',
    usersRating: 5,
    reviews: [''],
    genre: 'комедия, приключения, детектив, криминал',
    release: ['6 февраля 2014', '13 марта 2014'],
    wins: [
      'Oscar: Best Achievement in Costume Design',
      'Oscar: Best Achievement in Makeup and Hairstyling',
      'Oscar: Best Achievement in Music Written for Motion Pictures, Original Score',
      'Oscar: Best Achievement in Production Design',
      'Screen Actors Guild Awards: Outstanding Performance by a Cast in a Motion Picture',
    ],
    audio: 'Английский, Русский',
    studio: [
      'American Empirical Pictures',
      'Indian Paintbrush',
      'Scott Rudin Productions',
      'Studio Babelsberg',
    ],
    countries: 'США, Германия',
    actors: [
      { personId: 180, role: 'М. Густав' },
      { personId: 181, role: 'Зеро' },
      { personId: 182, role: 'Агата' },
      { personId: 183, role: 'Дмитрий' },
      { personId: 184, role: 'Джоплинг' },
      { personId: 185, role: 'Хенкельс' },
      { personId: 186, role: 'Серж Икс' },
      { personId: 187, role: 'Мадам Д' },
      { personId: 188, role: 'Мистер Мустафа' },
      { personId: 189, role: 'Молодой писатель' },
    ],
    director: [
      { personId: 190, role: 'Wes Anderson' },
    ],
    producers: [
      { personId: 190, role: 'Wes Anderson' },
      { personId: 191, role: 'Jeremy Dawson' },
      { personId: 192, role: 'Steven Rales' },
      { personId: 177, role: 'Scott Rudin' },
    ],
    facts: [
      'В качестве декорации отеля «Гранд Будапешт» Уэс Андерсон использовал старый и выполненный в стиле ар-деко универмаг Karstadt, расположенный в Саксонии, в городке Герлиц, что на границе Германии, Чехии и Польши.',
      'Уэс Андерсон снял фильм в трех различных соотношениях сторон: 1.33, 1.85 и 2.35:1, которые соответствуют трём разным отрезкам времени. Разные пропорции кадра подсказывают зрителям, какой временной период на экране.',
      'На самом деле, картина «Мальчик с яблоком» писалась не Иоганном Ван Хойтом младшим, как говорится в фильме, а небезызвестным английским портретистом Майклом Тэйлором, по заказу самого режиссера, Уэса Андерсона.',
    ],
    type: 'film',
    film: {
      name: 'Отель «Гранд Будапешт»',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTgxODI4OTU3N15BMl5BanBnXkFtZTgwODgzNDMzMTE@._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '16.mp4',
      subtitles: [
        {
          src: '16-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '16-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 59,
    name: 'Дюна',
    slogan: 'Научно-фантастическая драма',
    ratings: [8.0, 7.7],
    age: '12+',
    originalName: 'Dune: Part One',
    poster: 'https://www.pixel4k.com/wp-content/uploads/2021/10/dune-movie-4k-poster_1635032438.jpg.webp',
    summary: 'фантастика, драма, 2021',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTEwYWFjYmItZWJmNi00MGExLWI1MjktYzRiYjJkNzhiMWIxXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '17.mp4',
        subtitles: [
          {
            src: '17-en.vtt',
            srcLang: 'en',
            label: 'English',
          },
          {
            src: '17-ru.vtt',
            srcLang: 'ru',
            label: 'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BOGI4ZjA5YjItNzM3My00Mjk4LWI4NzEtOGFhZWU5Y2Y1YmExXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjY5NGYzZGQtNjc4Zi00MzUxLTlkNWItMzM5NjUzNGY4Yjg3XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNDQyNmVlM2QtOTg4MS00OWQ2LWEyODEtOTBhZTdjODRjMzYzXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMzc0ZDU2MWYtZmQ1Zi00ZWJlLTk5OGMtN2I5MzVkMWUwNDVhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODdkMzA1MDQtZDQ5OC00NjVlLWE4MmMtYTdkNDdhMTFiMzAzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTFiMjdjYTMtYjkyNi00MWI5LWEyZWEtYTdkZDBlZmVkNTc1XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
    ],
    description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, боевик, драма, приключения',
    release: ['3 сентября 2021', '16 сентября 2021'],
    wins: [
      'Oscar: Best Sound',
      'Oscar: Best Achievement in Visual Effects',
      'Oscar: Best Achievement in Production Design',
      'Oscar: Best Achievement in Music Written for Motion Pictures, Original Score',
      'Oscar: Best Achievement in Film Editing',
      'Oscar: Best Achievement in Cinematography',
      'AACTA International Awards:  Best Direction',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Legendary Pictures',
      'Villeneuve Films',
      'Warner Bros.',
    ],
    countries: 'США, Канада, Венгрия',
    actors: [
      { personId: 193, role: 'Пол Атрейдес' },
      { personId: 194, role: 'Леди Джессика Атрейдес' },
      { personId: 195, role: 'Герцог Лето Атрейдес' },
      { personId: 196, role: 'Гурней Халлек' },
      { personId: 197, role: 'Дункан Идахо' },
      { personId: 198, role: 'Чани' },
      { personId: 170, role: 'Барон Владимир Харконнен' },
      { personId: 199, role: 'Стилгар' },
      { personId: 159, role: 'Глоссу Раббан Харконнен' },
    ],
    director: [
      { personId: 162, role: 'Denis Villeneuve' },
    ],
    producers: [
      { personId: 162, role: 'Denis Villeneuve' },
      { personId: 200, role: 'Mary Parent' },
      { personId: 201, role: 'Cale Boyter' },
    ],
    facts: [
      'Съёмки фильма проходили в Венгрии, Норвегии (океаны на Каладане), ОАЭ, Австрии и Словакии. Сцены пустынь на Арракисе снимали в основном в Иордании и в Абу-Даби.',
      'Режиссёр Дени Вильнёв представлял себе барона Владимира Харконнена (Стеллан Скарсгард) как «носорога в человеческом обличье». Каждый день перед съёмками актёр проводил по 7 часов в кресле гримёра.',
      'По словам режиссёра Дени Вильнёва, на разработку образа гигантских песчаных червей Арракиса ушёл год.',
    ],
    type: 'film',
    film: {
      name: 'Дюна',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTEwYWFjYmItZWJmNi00MGExLWI1MjktYzRiYjJkNzhiMWIxXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '17.mp4',
      subtitles: [
        {
          src: '17-en.vtt',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '17-ru.vtt',
          srcLang: 'ru',
          label: 'Russian',
        },
      ],
    },
  },
  {
    id: 60,
    name: 'Достать ножи',
    slogan: 'Деконструкция детективного жанра',
    ratings: [7.9, 8.1],
    age: '16+',
    originalName: 'Knives Out',
    poster: 'https://images8.alphacoders.com/105/thumb-1920-1052048.jpg',
    summary: 'детектив, комедия, 2019',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BZGI3ODkzOTUtNzJjNS00ODhkLThkMzMtZjM4NjViZTYxNGY5XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        src: '18.mp4',
        subtitles: [
          {
            src: '18-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '18-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BYzQ0YmIzYzYtOTk2NC00OWI3LWI2YjAtYzhlMDUwNWQ2NmRlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BN2NjZmZhZDItOGNiNS00OTdmLTgyMzgtZDgyYzUzMGU5YTkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMmNiYmU1ZmQtNmM0My00ZmEyLTllNGQtZGE4N2ExOWM3YmI5XkEyXkFqcGdeQXVyMTIwODk1NTQ@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNWY4ZTQ4MTgtZTdlMy00NjAwLThlOTktNWVkZmM1OWQ3MzA4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BM2MyMTg0YzMtMGU4ZS00MzViLWE1ZDktZmY1NWI2NTdhNDk3XkEyXkFqcGdeQXVyMTA4OTk3Nzcw._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BZjYyZTAyOTYtYTUxYS00NmZhLWFjZTUtYTA0OThiNjk1NTA0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    ],
    description: 'На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан. Тем же утром он получил конверт с наличными от неизвестного и заказ на расследование смерти Харлана. Не нужно быть опытным следователем, чтобы понять, что все приукрашивают свои отношения с почившим главой семейства, но Блану достаётся настоящий подарок — медсестра покойного, которая физически не выносит ложь.',
    usersRating: 4,
    reviews: [''],
    genre: 'детектив, комедия, драма, криминал',
    release: ['7 сентября 2019', '28 ноября 2019'],
    wins: [
      'AARP Movies for Grownups Awards: Best Ensemble',
      'Saturn Award: Best Editing',
      'Saturn Award: Best Thriller Film',
      'Saturn Award: Best Supporting Actress',
      'AFI Award: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Lionsgate',
      'Media Rights Capital',
      'T-Street',
    ],
    countries: 'США',
    actors: [
      { personId: 167, role: 'Бенуа Бланк' },
      { personId: 202, role: 'Рэнсон Драйсдейл' },
      { personId: 158, role: 'Марта Кабрера' },
      { personId: 203, role: 'Линда Драйсдейл' },
      { personId: 204, role: 'Уолт Тромби' },
      { personId: 205, role: 'Ричард Драйсдейл' },
      { personId: 206, role: 'Джони Тромби' },
      { personId: 169, role: 'Харлан Тромби' },
      { personId: 207, role: 'Мэг Тромби' },
      { personId: 208, role: 'Джейкоб Тромби' },
      { personId: 209, role: 'Донна Тромби' },
    ],
    director: [
      { personId: 210, role: 'Rian Johnson' },
    ],
    producers: [
      { personId: 211, role: 'Ram Bergman' },
      { personId: 210, role: 'Rian Johnson' },
      { personId: 212, role: 'Tom Karnowski' },
    ],
    facts: [
      'Манеру речи своего героя Дэниел Крейг позаимствовал у писателя, историка и журналиста Шелби Фута.',
      'Когда Бенуа Блан впервые появляется на экране, он показан в кабинете, где лейтенант Эллиот допрашивает членов семейства Тромби. Блан нажимает на клавиатуре одну и ту же ноту вроде бы в случайном порядке, однако порядок этот отнюдь не случаен. Когда Блан нажимает клавишу, Эллиот всё время задаёт один и тот же вопрос: «Когда вы вернулись домой?», т.е. звук этой ноты служит для Эллиота сигналом, чтобы задать вопрос.',
      'Для начальных кадров требовалось, чтобы две собаки пробежали от одного дрессировщика к другому, однако никак не получалось сделать так, чтобы они пробежали поближе к камере. В конце концов пришлось построить небольшой пандус, чтобы собаки не проскочили прямо под камерой.',
    ],
    type: 'film',
    film: {
      name: 'Достать ножи',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BZGI3ODkzOTUtNzJjNS00ODhkLThkMzMtZjM4NjViZTYxNGY5XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      src: '18.mp4',
      subtitles: [
        {
          src: '18-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '18-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 61,
    name: 'Интерстеллар',
    slogan: 'Космическая одиссея 21 века',
    ratings: [8.6, 8.6],
    age: '16+',
    originalName: 'Interstellar',
    poster: 'https://www.teahub.io/photos/full/357-3579460_interstellar-ice-planet-poster-interstellar-cover.jpg',
    summary: 'фантастика, драма, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_QL75_UX500_CR0,46,500,281_.jpg',
        src: '19.mp4',
        subtitles: [
          {
            src: '19-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '19-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMTc0NDQ4MjkyOF5BMl5BanBnXkFtZTgwNDE2NzUzOTE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ0MjQ3NjE1MF5BMl5BanBnXkFtZTgwMzMyODgxMzE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTg4MTY3MDUyNl5BMl5BanBnXkFtZTgwMDMyODgxMzE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTAyOTI5MTg5MDFeQTJeQWpwZ15BbWU4MDYyMjg4MTMx._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTQ4OTQyMTMwOF5BMl5BanBnXkFtZTgwOTQ0Mjk3MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMWY1YmY4ZjItYTdlMi00OTNkLTk3NGEtODBkOGI5ZDYxNmQxXkEyXkFqcGdeQXVyMTE0NTczNDAz._V1_.jpg',
    ],
    description: 'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.',
    usersRating: 5,
    reviews: [''],
    genre: 'фантастика, драма, приключения',
    release: ['26 октября 2014', '6 ноября 2014'],
    wins: [
      'Oscar: Best Achievement in Visual Effects',
      'Saturn Award: Best Science Fiction Film',
      'Saturn Award: Best Production Design',
      'Saturn Award: Best Special Effects',
      'Saturn Award: Best Performance by a Younger Actor',
      'Saturn Award: Best Writing',
      'Saturn Award: Best Music',
      'AFI Award: Movie of the Year',
    ],
    audio: 'Английский, Русский',
    studio: [
      'Legendary Pictures',
      'Lynda Obst Productions',
      'Paramount Pictures',
      'Syncopy',
      'Warner Bros. Pictures',
    ],
    countries: 'США, Великобритания, Канада',
    actors: [
      { personId: 213, role: 'Купер' },
      { personId: 214, role: 'Брэнд' },
      { personId: 215, role: 'Мёрф' },
      { personId: 216, role: 'Профессор Брэнд' },
      { personId: 217, role: 'Ромилли' },
      { personId: 218, role: 'Дойл' },
      { personId: 219, role: 'Том' },
      { personId: 220, role: 'Манн' },
    ],
    director: [
      { personId: 221, role: 'Christopher Nolan' },
    ],
    producers: [
      { personId: 221, role: 'Christopher Nolan' },
      { personId: 222, role: 'Lynda Obst' },
      { personId: 223, role: 'Emma Thomas' },
    ],
    facts: [
      'Сценарий основан на научных работах физика-теоретика Кипа Торна.',
      'Во время съемок фильма изображение окружающей среды, созданное заранее, проецировалось на экраны, расположенные вокруг съемочной площадки, чтобы актеры, смотря в окна космического корабля, видели реальную картинку, а не зеленый экран.',
      'На создание описываемой в фильме апокалиптической обстановки на Земле Кристофера Нолана вдохновила серия катастрофических пыльных бурь, происходивших в США в 1930-е.',
    ],
    type: 'film',
    film: {
      name: 'Интерстеллар',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_QL75_UX500_CR0,46,500,281_.jpg',
      src: '19.mp4',
      subtitles: [
        {
          src: '19-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '19-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 62,
    name: 'Остров собак',
    slogan: 'Трогательная история о дружбе',
    ratings: [7.8, 8.1],
    age: '12+',
    originalName: 'Isle of Dogs',
    poster: 'https://wallpaperaccess.com/full/4734723.jpg',
    summary: 'комедия, приключения, 2018',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjZkYzYwNmQtNjk3ZC00Y2M2LThhY2EtODIzOThiNDJmMTk2XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR86,0,500,281_.jpg',
        src: '20.mp4',
        subtitles: [
          {
            src: '20-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '20-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BNTkxMTQ1Njc1Ml5BMl5BanBnXkFtZTgwNDA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTUyNjQ5MzgzMV5BMl5BanBnXkFtZTgwNTA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODQyMTg1MDkyMl5BMl5BanBnXkFtZTgwNjA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTU0NTkyMTUzMl5BMl5BanBnXkFtZTgwODA5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODUyNDUzODcyNF5BMl5BanBnXkFtZTgwMTE5OTc5NDM@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODRhOWExNDktZmYyOS00NTFjLTk4MWQtZmY0MWY4Mzc0YTA3XkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_.jpg',
    ],
    description: 'История 12-летнего мальчика Атари Кобаяси, опекаемого коррумпированным мэром Кобаяши. Когда по Указу последнего все домашние собаки города Мегасаки изгоняются на громадную свалку, Атари в одиночку отправляется на миниатюрном летательном аппарате на мусорный остров, чтобы найти своего верного пса по прозвищу Спотс. Там на острове вместе со стаей новых друзей-дворняг он начнет эпичное путешествие, которое решит будущую судьбу всей Префектуры.',
    usersRating: 4,
    reviews: [''],
    genre: 'мультфильм, фантастика, драма, комедия, приключения',
    release: ['29 июня 2018', '15 февраля 2018'],
    wins: [
      'Annie Awards: Outstanding Achievement for Voice Acting in an Animated Feature Production',
      'Art Directors Guild: Animated Film',
      'Atlanta Film Critics Circle: Best Animated Film',
    ],
    audio: 'Английский, Русский',
    studio: [
      '20th Century Fox Animation',
      'American Empirical Pictures',
      'Indian Paintbrush',
      'Studio Babelsberg',
    ],
    countries: 'США, Германия, Япония, Великобритания',
    actors: [
      { personId: 224, role: 'Шеф' },
      { personId: 225, role: 'Атари' },
      { personId: 185, role: 'Рэкс' },
      { personId: 226, role: 'Король' },
      { personId: 227, role: 'Граф' },
      { personId: 228, role: 'Босс' },
      { personId: 229, role: 'Трейси Уолкер' },
      { personId: 230, role: 'Переводчица Нэльсон' },
    ],
    director: [
      { personId: 190, role: 'Wes Anderson' },
    ],
    producers: [
      { personId: 190, role: 'Wes Anderson' },
      { personId: 231, role: 'Ben Adler' },
      { personId: 232, role: 'Eli Bush' },
    ],
    facts: [
      'Название «Isle of Dogs» (Остров собак) — игра слов. Если произнести его быстро, оно звучит как «I love dogs» (я люблю собак).',
      'Для фильма было создано порядка 20 000 лиц, для второстепенных персонажей создали 2 000 кукол. На создание куклы одного из главных героев обычно уходило 2-3 месяца.',
      'Режиссёр Уэс Андерсон организовал соревнование для желающих озвучить какую-нибудь роль в фильме. От соискателей требовалось только перечислить любую сумму свыше $10 долларов на счёт некоммерческой организации, которую основал Мартин Скорсезе для восстановления и сохранения старых фильмов.',
    ],
    type: 'film',
    film: {
      name: 'Остров собак',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BYjZkYzYwNmQtNjk3ZC00Y2M2LThhY2EtODIzOThiNDJmMTk2XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR86,0,500,281_.jpg',
      src: '20.mp4',
      subtitles: [
        {
          src: '20-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '20-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
  {
    id: 63,
    name: 'Джон Уик',
    slogan: 'Его лучше не трогать',
    ratings: [7.4, 7.0],
    age: '16+',
    originalName: 'John Wick',
    poster: 'https://live.staticflickr.com/5610/15540738980_9d0a3230dd_b.jpg',
    summary: 'боевик, криминал, 2014',
    trailer: [
      {
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTAxNDk2ODYzMzleQTJeQWpwZ15BbWU4MDY5NDExNzIx._V1_QL75_UX500_CR0,47,500,281_.jpg',
        src: '21.mp4',
        subtitles: [
          {
            src: '21-en.vtt',
            srcLang: 'en',
            label:'English',
          },
          {
            src: '21-ru.vtt',
            srcLang: 'ru',
            label:'Russian',
          },
        ]
      }
    ],
    thumbnails: [
      'https://m.media-amazon.com/images/M/MV5BMjA1OTUxNjU4M15BMl5BanBnXkFtZTgwNTY3MDk5MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTk1MDQ0ODUzNF5BMl5BanBnXkFtZTgwMjY3MDk5MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTEyODY0MDI1MDNeQTJeQWpwZ15BbWU4MDQ2NzA5OTIx._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNzI0ODk2MjY0OV5BMl5BanBnXkFtZTgwMzg1MTI4MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjAwNjA1Mjk2OV5BMl5BanBnXkFtZTgwNDg1MTI4MjE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNTYzMTcxNzcyNl5BMl5BanBnXkFtZTgwODc1MTI4MjE@._V1_.jpg',
    ],
    description: 'Джон Уик - на первый взгляд, самый обычный среднестатистический американец, который ведет спокойную мирную жизнь. Однако мало кто знает, что он был наёмным убийцей, причём одним из лучших профессионалов в своём деле. После того как сынок главы бандитской группы со своими приятелями угоняет его любимый «Мустанг» 1969 года выпуска, при этом убив его собаку Дейзи, которая была подарком недавно почившей супруги, Джон вынужден вернуться к своему прошлому. Теперь Уик начинает охоту за теми, кто имел неосторожность перейти ему дорогу, и он готов на всё, чтобы отомстить.',
    usersRating: 4,
    reviews: [''],
    genre: 'боевик, триллер, криминал',
    release: ['19 сентября 2014', '1 января 2015'],
    wins: [
      'Golden Schmoes Awards: Biggest Surprise of the Year',
      'Golden Trailer Awards: Best Thriller Poster',
      'IGN Summer Movie Awards: Best Action Movie',
    ],
    audio: 'Английский, Русский',
    studio: [
      '87Eleven',
      'Company Films',
      'Cutting Edge Group',
      'DefyNite Films',
      'Huayi Brothers Media',
      'MJW Films',
      'Poquito Productions',
      'Summit Entertainment',
      'Thunder Road',
      'Unbelievable Entertainment',
    ],
    countries: 'США, Китай',
    actors: [
      { personId: 233, role: 'Джон Уик' },
      { personId: 234, role: 'Вигго Тарасов' },
      { personId: 235, role: 'Йозеф Тарасов' },
      { personId: 184, role: 'Маркус' },
      { personId: 236, role: 'Эви' },
      { personId: 237, role: 'Мисс Перкинс' },
    ],
    director: [
      { personId: 238, role: 'Chad Stahelski' },
      { personId: 239, role: 'David Leitch' },
    ],
    producers: [
      { personId: 240, role: 'Basil Iwanyk' },
      { personId: 239, role: 'David Leitch' },
      { personId: 241, role: 'Eva Longoria' },
    ],
    facts: [
      'По словам Киану Ривза он сам исполнил 90% трюков в фильме.',
      'В сценах рукопашного боя можно заметить, что Джон Уик использует приемы дзюдо, а его соперница мисс Перкинс — джиу-джитсу.',
      'Охранник, который машет Уику на взлетно-посадочной полосе, читает роман Треваньяна (Род Уитакер) «Шибуми». В этом романе описываются события, схожие с сюжетом фильма: ушедший на покой наемный убийца вынужден вновь взяться за свое ремесло. Также история, которую рассказывает Вигго о том, как Уик убил трех людей при помощи карандаша, является отсылкой к роману «Шибуми», герой которого использовал для совершения убийств различные предметы быта.',
    ],
    type: 'film',
    film: {
      name: 'Джон Уик',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTAxNDk2ODYzMzleQTJeQWpwZ15BbWU4MDY5NDExNzIx._V1_QL75_UX500_CR0,47,500,281_.jpg',
      src: '21.mp4',
      subtitles: [
        {
          src: '21-en.vtt',
          srcLang: 'en',
          label:'English',
        },
        {
          src: '21-ru.vtt',
          srcLang: 'ru',
          label:'Russian',
        },
      ]
    },
  },
];
export default films;
