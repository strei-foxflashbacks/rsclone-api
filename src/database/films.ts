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
      'Фильм снят по мотивам романа Терри Пратчетта «Опочтарение» (Going Postal, 2004)',
      'Не будучи профессиональным актером, Терри Пратчетт испытал некоторые затруднения со своей ролью, которая заключалась в том, чтобы просто пройтись по комнате. По словам самого писателя, ему «понадобилось шесть дублей, чтобы справиться с этой непростой задачей».',
      'Почтальон в последней сцене — Терри Пратчетт, автор книги.', 'Термин «опочтарение» (англ. going postal) применяется для обозначения актов массовых убийств, которые совершаются в порыве ярости или в состоянии эмоциональной нестабильности.',
    ],
    wins: 'Телевизионная премия BAFTA: Лучшие визуальные эффекты',
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
  {
    id: 2,
    name: 'Опочтарение',
    slogan: 'Вам письмо!',
    ratings: [7.8, 7.7],
    age: '16+',
    originalName: 'Going Postal',
    poster: 'https://i.imgur.com/u0QyCmo.jpg',
    summary: '1 сезон / фэнтези, приключения, 2010',
    trailer: [{ thumbnail: 'https://pic.showjet.ru/pics/4440a521-5663-4d4e-8326-02bf205b665f/10x5/550.jpg', src: '' }],
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
    wins: 'Телевизионная премия BAFTA: Лучшие визуальные эффекты',
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
  {
    id: 3,
    name: 'Сын',
    slogan: 'В главной роли Пирс Броснан',
    ratings: [7.5, 6.8],
    age: '16+',
    originalName: 'The Son',
    poster: 'https://pic.showjet.ru/pics/c5f48991-e55c-44b4-991d-b15ee8f374d5/10x5/1250.jpg',
    summary: '2 сезона / вестерн, драма, 2017 - 2019',
    trailer: [{ thumbnail: 'https://pic.showjet.ru/pics/a6ba8fe9-96c4-4247-adf1-08a586b41fcd/10x5/550.jpg', src: '' }],
    thumbnails: ['https://pic.showjet.ru/pics/f57d97e2-4343-4190-ba62-e7b35f21aa13/10x7/1000.jpg', 'https://pic.showjet.ru/pics/bd46c3b8-d2ce-4467-b18d-76d820bd136c/10x7/1000.jpg', 'https://pic.showjet.ru/pics/90147cc5-81e0-4920-9525-b1a2859b30dd/10x7/1000.jpg', 'https://pic.showjet.ru/pics/095bf496-1b81-4a55-a7a3-1e01be77bf7f/10x7/1000.jpg', 'https://pic.showjet.ru/pics/6c6a7ceb-e19e-47b3-8fd5-9697e703de36/10x7/1000.jpg', 'https://pic.showjet.ru/pics/51961699-1ce6-4cea-a0d0-3656d908495e/10x7/1000.jpg'],
    description: 'Жестокий и эпический вестерн о становлении Америки, показанном через историю одной семьи. В главной роли — Пирс Броснан. \n1849 год, центральный Техас. Юный Илай Маккалоу попадает в плен к индейцам после того, как те ворвались в дом и безжалостно расправились с его сёстрами и матерью. Неопытный, но смелый парень учится выживать и договариваться с диким племенем. \n1915 год, южный Техас. Параллельно разворачивается история уже взрослого Илая Маккалоу в окружении детей и внуков. Властный и уважаемый глава семьи, он владеет ранчо и пытается отыскать нефть. Теперь вместо индейцев его главными врагами стали мексиканцы, которые вот-вот развяжут войну. Однако сын Илая, Пит, не готов мириться с жестокими методами отца и отпускает одного мексиканца, которого Маккалоу взяли в плен. Это грозит разрушить не только семейные узы, но и всю империю Илая Маккалоу, которую тот строил много лет...',
    usersRating: 5,
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
            { name: 'Нумунуу', thumbnail: 'https://pic.showjet.ru/pics/4b29fa99-d5d6-4a0b-8961-c303c8dfd4dc/10x7/400.jpg', src: '' },
            { name: 'Десять долларов и ощипанный гусь', thumbnail: 'https://pic.showjet.ru/pics/4db1a856-346f-4169-bfe3-0ef37a4e3a96/10x7/400.jpg', src: '' },
            { name: 'Слепой тигр', thumbnail: 'https://pic.showjet.ru/pics/f6a0943c-1338-492d-aa09-9003f246f5d5/10x7/400.jpg', src: '' },
            { name: 'Оскальпированная собака', thumbnail: 'https://pic.showjet.ru/pics/e5293d71-6402-402d-aeb1-e56e8fb2f434/10x7/400.jpg', src: '' },
            { name: 'Горячее масло', thumbnail: 'https://pic.showjet.ru/pics/8bef34f2-b1e8-425b-9485-ae55a67666cc/10x7/400.jpg', src: '' },
            { name: 'Голубой свет', thumbnail: 'https://pic.showjet.ru/pics/32cefeef-a8f2-44c4-8edc-636bdd20ee90/10x7/400.jpg', src: '' },
            { name: 'Кто-то взял лопату', thumbnail: 'https://pic.showjet.ru/pics/ed8c9aa6-23ec-47fb-825d-924c6971618a/10x7/400.jpg', src: '' },
            { name: 'Все их обвинительные следы', thumbnail: 'https://pic.showjet.ru/pics/d18d3370-c8a7-43f4-b7da-b224d8047045/10x7/400.jpg', src: '' },
            { name: 'Медведь', thumbnail: 'https://pic.showjet.ru/pics/2828829f-7c9f-4f1f-9fd4-f1525519604a/10x7/400.jpg', src: '' },
            { name: 'Легенда', thumbnail: 'https://pic.showjet.ru/pics/6939ca8f-e8ba-464c-9c9a-cd0c24257542/10x7/400.jpg', src: '' },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2017',
          episodes: [
            { name: 'Первый сын Техаса', thumbnail: 'https://pic.showjet.ru/pics/a00f09db-c2aa-4e01-a641-65480ad71301/10x7/400.jpg', src: '' },
            { name: 'Сливовое дерево', thumbnail: 'https://pic.showjet.ru/pics/b7aba7f2-6805-46b3-867c-c3ebc1fe6c7c/10x7/400.jpg', src: '' },
            { name: 'Вторая империя', thumbnail: 'https://pic.showjet.ru/pics/5ff4588a-7cc2-4ddc-86da-e95799ac46a5/10x7/400.jpg', src: '' },
            { name: 'Песня смерти', thumbnail: 'https://pic.showjet.ru/pics/8bf58de5-79e9-4262-a1aa-4a88b879706c/10x7/400.jpg', src: '' },
            { name: 'Никаких пленных', thumbnail: 'https://pic.showjet.ru/pics/4f17fb20-62d6-4746-a205-4ab51ce98401/10x7/400.jpg', src: '' },
            { name: 'Охотник на буйволов', thumbnail: 'https://pic.showjet.ru/pics/99af408e-6c9a-46f2-9809-01d5d6bd7786/10x7/400.jpg', src: '' },
            { name: 'Брачные узы', thumbnail: 'https://pic.showjet.ru/pics/0e377e3f-380d-4c92-bcff-89fe04257c55/10x7/400.jpg', src: '' },
            { name: 'Медовая охота', thumbnail: 'https://pic.showjet.ru/pics/cf2ec742-6a20-4212-8c64-dd40fa605610/10x7/400.jpg', src: '' },
            { name: 'Пророчество', thumbnail: 'https://pic.showjet.ru/pics/497eedd0-2953-4600-b348-0fcb4049bdc2/10x7/400.jpg', src: '' },
            { name: 'Скальпы', thumbnail: 'https://pic.showjet.ru/pics/6f2f017b-5fab-48fd-b93d-7a0fa7a8f171/10x7/400.jpg', src: '' },
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
    trailer: [{ thumbnail: 'https://pic.showjet.ru/pics/121a0a7b-a56b-4ed5-aa7c-25a4c26f62a3/10x5/550.jpg', src: '' }],
    thumbnails: [
      'https://pic.showjet.ru/pics/278d3a15-9dd9-4fa2-a499-c9cc25796322/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/0cfc2e39-9dc0-489f-b66a-b6f5f7dcd807/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/cd318c1d-e3b1-4058-9c59-efac23c16965/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5f2e456f-081b-4015-9db0-c98d4d2b63de/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3a5f58d3-3ef6-4855-a7ce-b536e2a37af2/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3b436cb2-1d88-40ef-8a6c-95844c1754e5/10x7/1000.jpg',
    ],
    description: 'Драматическая история любви и борьбы за власть в лучших традициях «Аббатства Даунтон». \nИндия, 1932 год. С приближением лета английские аристократы устремляются на север страны в город Шимла, расположенный у подножия Гималаев. Здесь, в закрытом клубе для британцев, они предаются изысканным развлечениям и танцуют ночи напролёт, не замечая, что местные жители уже начали борьбу за независимость. На фоне тревожных событий и политических интриг между героями вспыхивают чувства, которые ведут к необратимым последствиям…',
    usersRating: 5,
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
            { name: 'Индиец в английском костюме', thumbnail: 'https://pic.showjet.ru/pics/bc109e10-ea6f-40ab-b1b7-047fba82d2ac/10x7/400.jpg', src: '' },
            { name: 'Чёрная змея', thumbnail: 'https://pic.showjet.ru/pics/b50f9d21-a89f-46fc-b555-a6f991c41d40/10x7/400.jpg', src: '' },
            { name: 'Белые боги', thumbnail: 'https://pic.showjet.ru/pics/6393e2c2-a0f1-4176-a2be-744b611a791f/10x7/400.jpg', src: '' },
            { name: 'Пустое кресло', thumbnail: 'https://pic.showjet.ru/pics/b9193410-fe21-45b7-ab4c-388cb901aaa0/10x7/400.jpg', src: '' },
            { name: 'Игра в прятки', thumbnail: 'https://pic.showjet.ru/pics/917274f0-e40e-4185-a364-b4b7ce0dceea/10x7/400.jpg', src: '' },
            { name: 'Подарок для короля', thumbnail: 'https://pic.showjet.ru/pics/43356090-ccce-4d1b-8b70-ec92dd68eff2/10x7/400.jpg', src: '' },
            { name: 'Предложение', thumbnail: 'https://pic.showjet.ru/pics/0596b831-2c25-4776-9eca-05bb8c7ac74e/10x7/400.jpg', src: '' },
            { name: 'День рождения', thumbnail: 'https://pic.showjet.ru/pics/6dd94ed7-bef4-46b3-8fa5-9bc8672ffb58/10x7/400.jpg', src: '' },
            { name: 'Победитель забирает всё', thumbnail: 'https://pic.showjet.ru/pics/5bed2232-bfc6-46de-9961-591741cbf549/10x7/400.jpg', src: '' },
            { name: 'Отъезд из дома', thumbnail: 'https://pic.showjet.ru/pics/59687dc9-9431-4d07-8d68-56fcff9e80a7/10x7/400.jpg', src: '' },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2015',
          episodes: [
            { name: 'Эпизод 1', thumbnail: 'https://pic.showjet.ru/pics/285a7f76-5d82-48f4-bc87-78670f464015/10x7/400.jpg', src: '' },
            { name: 'Эпизод 2', thumbnail: 'https://pic.showjet.ru/pics/e021d111-96ee-4bae-b651-d4c9b41b555a/10x7/400.jpg', src: '' },
            { name: 'Эпизод 3', thumbnail: 'https://pic.showjet.ru/pics/6623d27d-8d09-4858-aac5-5b20a2067569/10x7/400.jpg', src: '' },
            { name: 'Эпизод 4', thumbnail: 'https://pic.showjet.ru/pics/875d952a-e889-4cee-9491-23836ca85576/10x7/400.jpg', src: '' },
            { name: 'Эпизод 5', thumbnail: 'https://pic.showjet.ru/pics/fe79ab1c-ff16-44ca-90f9-c52091558fd0/10x7/400.jpg', src: '' },
            { name: 'Эпизод 6', thumbnail: 'https://pic.showjet.ru/pics/4a9e003f-1f71-46f7-8158-b1acac914233/10x7/400.jpg', src: '' },
            { name: 'Эпизод 7', thumbnail: 'https://pic.showjet.ru/pics/ee9138a6-c10e-414c-9d63-6928b152a5e0/10x7/400.jpg', src: '' },
            { name: 'Эпизод 8', thumbnail: 'https://pic.showjet.ru/pics/2b8a943b-e609-410d-b931-f2e49779cca8/10x7/400.jpg', src: '' },
            { name: 'Эпизод 9', thumbnail: 'https://pic.showjet.ru/pics/a8e808c2-2fc9-4039-ae5e-de1b833b2514/10x7/400.jpg', src: '' },
            { name: 'Эпизод 10', thumbnail: 'https://pic.showjet.ru/pics/02b76b56-d3ce-4378-b681-ef15cb2b24db/10x7/400.jpg', src: '' },
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
    trailer: [{ thumbnail: 'https://pic.showjet.ru/pics/adb38dc6-441c-442b-af92-33456eb57f7f/10x5/550.jpg', src: '' }],
    thumbnails: [
      'https://pic.showjet.ru/pics/e0ae03d8-d9df-40ff-a36a-9d62bf590c51/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5c8a6c40-9bd4-4061-b67e-a524e51d6151/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a5b9805e-d7f4-497c-9588-d9d975746ddf/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/9c43cc69-6c59-4562-8ca1-7dab4c4f85df/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/a62afcff-ef43-40ec-a1fa-f2158d13520b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/d9bfe531-1404-4a65-aefb-1b7afc9fdbbf/10x7/1000.jpg',
    ],
    description: 'Для поклонников «Властелина колец»: масштабный фэнтези-сериал «Хроники Шаннары», основанный на романе Терри Брукса. \nВ далёком постапокалиптическом будущем мир разделился на 4 Земли: территории людей, эльфов, троллей и дварфов. После войны рас, уничтожившей магию, всё зло заключили в дереве Элькрис, которое бережно охраняют эльфы. Для молодого поколения истории про магию и демонов — лишь сказки. Всё меняется, когда древние тёмные силы пробуждаются, а судьба мира оказывается в руках трёх юных героев.  \nЭмберли, принцесса королевства эльфов, получает пугающее видения о конце мира. Уилл, юный эльф-полукровка, после смерти матери узнаёт о своей причастности к древнему роду Шаннары — великих королей и магов. Эретрия, сирота и юная воровка, становится преданным другом Уилла и Эмберли. Вместе с друидом Алланоном героям предстоит тяжелый путь по спасению всех 4 Земель от гибели.',
    usersRating: 5,
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
            { name: 'Друид', thumbnail: 'https://pic.showjet.ru/pics/360459d2-7868-4ce4-a4f8-05c46e9627e6/10x7/400.jpg', src: '' },
            { name: 'Дух', thumbnail: 'https://pic.showjet.ru/pics/3b7cb649-939d-49eb-afcb-3a2a8c72a843/10x7/400.jpg', src: '' },
            { name: 'Грэймарк', thumbnail: 'https://pic.showjet.ru/pics/2a53e92d-acf6-41dc-856f-de9a7d32d6d6/10x7/400.jpg', src: '' },
            { name: 'Обитатель', thumbnail: 'https://pic.showjet.ru/pics/4641e4cc-1131-476f-93cb-e830400f6079/10x7/400.jpg', src: '' },
            { name: 'Паранор', thumbnail: 'https://pic.showjet.ru/pics/45e54d0d-7b9f-4d60-9ae4-caacf1de4171/10x7/400.jpg', src: '' },
            { name: 'Алый', thumbnail: 'https://pic.showjet.ru/pics/0d5e8203-870d-45e9-baf3-375e13341740/10x7/400.jpg', src: '' },
            { name: 'Чародей', thumbnail: 'https://pic.showjet.ru/pics/3c6474a9-cb81-4ac4-a325-4f5683534922/10x7/400.jpg', src: '' },
            { name: 'Эмберли', thumbnail: 'https://pic.showjet.ru/pics/b733396c-16ab-4468-b8d7-0085783bb0a6/10x7/400.jpg', src: '' },
            { name: 'Уайлдерун', thumbnail: 'https://pic.showjet.ru/pics/58f03822-be47-4493-8fb1-8eb6b14d9bb8/10x7/400.jpg', src: '' },
            { name: 'Кровь', thumbnail: 'https://pic.showjet.ru/pics/168aeb9b-247c-4141-bdef-ac1feb7d4cb1/10x7/400.jpg', src: '' },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2016',
          episodes: [
            { name: 'Избранная: Часть 1', thumbnail: 'https://pic.showjet.ru/pics/25e8bd73-c497-41cb-9c18-3562c52b1552/10x7/400.jpg', src: '' },
            { name: 'Избранная: Часть 2', thumbnail: 'https://pic.showjet.ru/pics/c3077ef4-48a5-4293-8f92-d07d2402be3d/10x7/400.jpg', src: '' },
            { name: 'Фурия', thumbnail: 'https://pic.showjet.ru/pics/fc4e239a-0969-44c2-abe0-55d480d16356/10x7/400.jpg', src: '' },
            { name: 'Подмена', thumbnail: 'https://pic.showjet.ru/pics/f8a9e6ba-eb86-4ec5-ac74-cc73d02c43f7/10x7/400.jpg', src: '' },
            { name: 'Жнец', thumbnail: 'https://pic.showjet.ru/pics/0d47802d-da71-44fd-8e03-6da42a744b3c/10x7/400.jpg', src: '' },
            { name: 'Пайкон', thumbnail: 'https://pic.showjet.ru/pics/63ed40ac-b2b6-4eb1-af1b-3a05c8ca22d9/10x7/400.jpg', src: '' },
            { name: 'Разлом', thumbnail: 'https://pic.showjet.ru/pics/f0f8e6e1-8acb-4181-b1df-11b57b37dfca/10x7/400.jpg', src: '' },
            { name: 'Утопия', thumbnail: 'https://pic.showjet.ru/pics/c5534b8b-fc9f-4895-96c7-a998e524e492/10x7/400.jpg', src: '' },
            { name: 'Убежище', thumbnail: 'https://pic.showjet.ru/pics/e8c5a84f-4b56-4a41-a7cd-19c973a0d83c/10x7/400.jpg', src: '' },
            { name: 'Элькрис', thumbnail: 'https://pic.showjet.ru/pics/4b843bd5-d6e8-44c4-bc6e-d6e3c3cdc4b2/10x7/400.jpg', src: '' },
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
    trailer: [{ thumbnail: 'https://pic.showjet.ru/pics/fab57c5e-75a3-4310-a431-f7b576b5cd26/10x5/550.jpg', src: '' }],
    thumbnails: [
      'https://pic.showjet.ru/pics/c308d35e-35a1-4408-83b3-69789451002e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/3d42a3b4-4322-4c19-9c86-92ed6017aa7e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/b7d4f3ad-548d-4a6a-bf44-74f3cc8c187e/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/2546855e-9f9b-40e5-afda-ac0a5afa2c8b/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/049063c3-020d-40bc-a1a7-f3ffb4010cb6/10x7/1000.jpg',
      'https://pic.showjet.ru/pics/5d376ad7-002c-40db-b9c1-6c7065752bf7/10x7/1000.jpg',
    ],
    description: 'Для поклонников культового сериала «Касл»: испанская комедия о том, как женщина-детектив пытается совместить работу, развод и воспитание близнецов. \nЛаура — уважаемый детектив с идеальной интуицией, который одинаково хорошо может справиться как с хитрым продавцом в мясном магазине, так и с опасным преступником. Неудачи настигают женщину только в личной жизни: сыновья-близнецы сводят с ума проделками, экс-супруг стал начальником, и активно пытается помириться, а коллега Мартин, который нравится Лауре ещё со времен академии, относится к ней как к подруге, отдавая предпочтение сексапильным свидетельницам. \nПоможет ли шестое чувство Лауры стать ей не только счастливым профессионалом, но и счастливой женщиной?',
    usersRating: 5,
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
            { name: 'Лаура и загадка комнаты 308', thumbnail: 'https://pic.showjet.ru/pics/93d09f2d-7696-499a-b199-953ecf4894f9/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна капсулы времени. Часть 1', thumbnail: 'https://pic.showjet.ru/pics/f1b9d562-a17e-4a2a-845d-dd27c881c0a6/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна капсулы времени. Часть 2', thumbnail: 'https://pic.showjet.ru/pics/29dfe795-588d-4968-9b3e-39047d02d821/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна гостя', thumbnail: 'https://pic.showjet.ru/pics/787f7dd5-8730-4e0d-9e75-cd3c5dfd7529/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна одной женщины', thumbnail: 'https://pic.showjet.ru/pics/078a8ccd-2dd5-4c3d-acc6-89724aa8d6f2/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна невидимого убийцы', thumbnail: 'https://pic.showjet.ru/pics/a29bb785-a12c-4ef6-ab1f-79f839784e05/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна преступления века', thumbnail: 'https://pic.showjet.ru/pics/b9cc4b88-996d-4029-a448-7bab02beea11/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна призрака', thumbnail: 'https://pic.showjet.ru/pics/ba4671c0-71ed-441c-8932-0aeb5e809732/10x7/400.jpg', src: '' },
            { name: 'Лаура и шпион, который много болтал', thumbnail: 'https://pic.showjet.ru/pics/f2c1a40c-0227-450e-9fb6-f318cb63627e/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна пойманных мышей', thumbnail: 'https://pic.showjet.ru/pics/ac2c6427-5383-40c9-b9bc-804a8e0c5a78/10x7/400.jpg', src: '' },
            { name: 'Лаура и тайна ликов истины', thumbnail: 'https://pic.showjet.ru/pics/8baefd1f-51c0-4adb-ab58-88ae3556f9e5/10x7/400.jpg', src: '' },
            { name: 'Лаура и загадка числа 17. Часть 1', thumbnail: 'https://pic.showjet.ru/pics/14c862ac-2ca3-4832-ad90-cde6baa21627/10x7/400.jpg', src: '' },
            { name: 'Лаура и загадка числа 17. Часть 2', thumbnail: 'https://pic.showjet.ru/pics/937aef3f-43c4-4b3f-ac27-ccc7d613b174/10x7/400.jpg', src: '' },
            { name: 'Лаура и загадка числа 17. Часть 3', thumbnail: 'https://pic.showjet.ru/pics/937aef3f-43c4-4b3f-ac27-ccc7d613b174/10x7/400.jpg', src: '' },
          ],
        },
        {
          seasonInfo: 'Сезон 2 / 2011',
          episodes: [
            { name: 'Тайна молчуна', thumbnail: 'https://pic.showjet.ru/pics/0f83463c-d300-4588-9321-b93b3bba96c1/10x7/400.jpg', src: '' },
            { name: 'Тайна клуба', thumbnail: 'https://pic.showjet.ru/pics/438c316f-df2c-42d3-8c18-7d709b90b22a/10x7/400.jpg', src: '' },
            { name: 'Тайна человека, которого не было', thumbnail: 'https://pic.showjet.ru/pics/46a728a5-0e7a-4308-b2ca-22e9c7139e38/10x7/400.jpg', src: '' },
            { name: 'Тайна недовольного пациента', thumbnail: 'https://pic.showjet.ru/pics/438a6834-2657-4fbc-be57-0f3c6003a25c/10x7/400.jpg', src: '' },
            { name: 'Тайна человека, который не хотел умирать', thumbnail: 'https://pic.showjet.ru/pics/ef5143b8-7223-45fe-b46e-0273a266f3ea/10x7/400.jpg', src: '' },
            { name: 'Тайна восьми мужчин', thumbnail: 'https://pic.showjet.ru/pics/16111a03-134f-4c73-ba79-d697cf7e34be/10x7/400.jpg', src: '' },
            { name: 'Тайна кричащего свидетеля', thumbnail: 'https://pic.showjet.ru/pics/9ec1cfee-6d95-4999-84e1-1269f534ea10/10x7/400.jpg', src: '' },
            { name: 'Тайна необычного трюка', thumbnail: 'https://pic.showjet.ru/pics/6995ac7b-5fbf-4bd5-86a2-c4172d6b04a1/10x7/400.jpg', src: '' },
            { name: 'Тайна преступного аббатства', thumbnail: 'https://pic.showjet.ru/pics/17a59cdd-8507-4f9f-923f-36a6e5bbec33/10x7/400.jpg', src: '' },
            { name: 'Тайна красной леди', thumbnail: 'https://pic.showjet.ru/pics/f0ecb1cf-be3b-4dc2-bdb5-eb4d7506cc8d/10x7/400.jpg', src: '' },
            { name: 'Тайна десяти незнакомцев. Часть 1', thumbnail: 'https://pic.showjet.ru/pics/5affa3d5-68c6-4a48-9fb8-919f609ca7cd/10x7/400.jpg', src: '' },
            { name: 'Тайна десяти незнакомцев. Часть 2', thumbnail: 'https://pic.showjet.ru/pics/182848c5-62bd-47c1-aaf1-10e8d28444a9/10x7/400.jpg', src: '' },
          ],
        },
        {
          seasonInfo: 'Сезон 1 / 2009',
          episodes: [
            { name: 'Тайна запечатанной комнаты. Часть 1', thumbnail: 'https://pic.showjet.ru/pics/cff1a7d9-2c46-49c9-97dd-f215a82b0df1/10x7/400.jpg', src: '' },
            { name: 'Тайна запечатанной комнаты. Часть 2', thumbnail: 'https://pic.showjet.ru/pics/24e77673-eb0a-40bf-a7a1-d3b670c1bd6d/10x7/400.jpg', src: '' },
            { name: 'Тайна идеального соседа. Часть 1', thumbnail: 'https://pic.showjet.ru/pics/2842bfef-d0b7-4772-997c-4e3a3d00b714/10x7/400.jpg', src: '' },
            { name: 'Тайна идеального соседа. Часть 2', thumbnail: 'https://pic.showjet.ru/pics/0db050a1-ee55-4f55-992b-bd6f9b1252f2/10x7/400.jpg', src: '' },
            { name: 'Тайна идеального алиби. Часть 1', thumbnail: 'https://pic.showjet.ru/pics/bc7e30c8-d704-437d-8fcf-3a981581dfaa/10x7/400.jpg', src: '' },
            { name: 'Тайна идеального алиби. Часть 2', thumbnail: 'https://pic.showjet.ru/pics/503d32b5-7769-425a-95fc-9461a3614272/10x7/400.jpg', src: '' },
            { name: 'Тайна места преступления', thumbnail: 'https://pic.showjet.ru/pics/8da94e6e-01a7-4b1b-8ed5-a887fd0faf35/10x7/400.jpg', src: '' },
            { name: 'Тайна синего попугая. Часть 1', thumbnail: 'https://pic.showjet.ru/pics/e24cc7b0-325e-489a-8779-4336c1ab9332/10x7/400.jpg', src: '' },
            { name: 'Тайна синего попугая. Часть 2', thumbnail: 'https://pic.showjet.ru/pics/f7d93d95-17a2-47d0-bb9c-ff2ef9e6b7f3/10x7/400.jpg', src: '' },
            { name: 'Тайна найденного трупа', thumbnail: 'https://pic.showjet.ru/pics/7a97aa9d-ceac-4e29-915e-36e0455fca50/10x7/400.jpg', src: '' },
          ],
        },
      ],
    },
  },
];
export default films;
