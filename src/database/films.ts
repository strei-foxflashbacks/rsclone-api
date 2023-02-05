import { Film } from '../types/Film';

const films: Film[] = [
  {
    id: 1,
    name: '',
    slogan: '',
    ratings: [],
    age: '',
    originalName: '',
    poster: '',
    trailer: '',
    thumbnails: ['', '', ''],
    description: '',
    usersRating: 1,
    reviews: [''],
    genre: '',
    release: [''],
    audio: '',
    studio: '',
    countries: '',
    actors: [],
    director: [],
    producers: [],
    facts: [],
    wins: '',
    type: 'film',
    filmSrc: '',
  },
  {
    id: 2,
    name: 'Опочтарение',
    slogan: 'Вам письмо!',
    ratings: [7.8, 7.7],
    age: '16+',
    originalName: 'Going Postal',
    poster: 'https://i.imgur.com/u0QyCmo.jpg',
    trailer: '',
    thumbnails: ['https://i.imgur.com/imKqvro.jpg', 'https://i.imgur.com/rea5SbN.jpg', 'https://i.imgur.com/583EUaK.jpg', 'https://i.imgur.com/qBnAEFW.jpg', 'https://i.imgur.com/jtAWyJm.jpg', 'https://i.imgur.com/KYKoPyY.jpg'],
    description: 'Добро пожаловать в воображариум Терри Пратчетта! \nМокрист фон Губвиг был гениальным мошенником: подделывал предметы искусства и мастерски обкрадывал людей — настоящий Остап Бендер в мире стимпанка. Однажды Мокриста всё-таки поймали и приговорили к смертной казни, но вместо исполнения приговора предложили сделку: восстановить работу единственного городского почтамта. \nВсё бы хорошо, но писем там скопилось просто тьма, а над самим почтамтом висит страшное проклятье: 4 предшественника Губвига погибли при очень странных обстоятельствах. Вдобавок ко всему у главного героя появляется неприятный конкурент — Взяткер Позолот.',
    usersRating: 5,
    reviews: [''],
    genre: 'фэнтези, приключения, мелодрама, детектив, комедия',
    release: ['30 мая 2010 г.', '30 мая 2010 г.'],
    audio: 'Английский, Русский',
    studio: 'Sky',
    countries: 'Великобритания',
    actors: [{ personId: 1, role: 'Барабант' }, { personId: 2, role: 'Лорд Витинари' }, { personId: 3, role: 'Мисс Крипслок' }, { personId: 4, role: 'Мокрист фон Губвиг' }, { personId: 5, role: 'Мистер Грыль' }, { personId: 6, role: 'Взяткер Позолот' }, { personId: 7, role: 'Почтальон' }, { personId: 8, role: 'Стэнли' }, { personId: 9, role: 'Ангела Красота Добросерд' }],
    director: [{ personId: 10, role: 'Jon Jones' }],
    producers: [{ personId: 11, role: 'Rod Brown' }, { personId: 12, role: 'Vadim Jean' }, { personId: 13, role: 'Sue De Beauvoir' }, { personId: 14, role: 'Sarah Conroy' }],
    facts: ['Фильм снят по мотивам романа Терри Пратчетта «Опочтарение» (Going Postal, 2004)', 'Не будучи профессиональным актером, Терри Пратчетт испытал некоторые затруднения со своей ролью, которая заключалась в том, чтобы просто пройтись по комнате. По словам самого писателя, ему «понадобилось шесть дублей, чтобы справиться с этой непростой задачей».', 'Почтальон в последней сцене — Терри Пратчетт, автор книги.', 'Термин «опочтарение» (англ. going postal) применяется для обозначения актов массовых убийств, которые совершаются в порыве ярости или в состоянии эмоциональной нестабильности.'],
    wins: 'Телевизионная премия BAFTA: Лучшие визуальные эффекты',
    type: 'serial',
    serial: {
      seasonsQty: 1,
      seasons: [
        {
          episodes: [{ name: 'Эпизод 1', thumbnail: 'https://pic.showjet.ru/pics/91b51c45-7915-4c7a-a3fc-8c9213eaab0e/10x7/400.jpg', src: '' }, { name: 'Эпизод 2', thumbnail: 'https://pic.showjet.ru/pics/ee3ce08e-c57c-463e-b3d5-0592358160d3/10x7/400.jpg', src: '' }, { name: 'Эпизод 3', thumbnail: 'https://pic.showjet.ru/pics/fb8f8a02-cc38-4aaa-bf5a-3365488f3a83/10x7/400.jpg', src: '' }, { name: 'Эпизод 4', thumbnail: 'https://pic.showjet.ru/pics/f4079f61-9e69-4664-950f-dc47917233b0/10x7/400.jpg', src: '' }],
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Сын',
    slogan: '',
    ratings: [],
    age: '',
    originalName: 'The Son',
    poster: '',
    trailer: '',
    thumbnails: ['', '', ''],
    description: 'Жестокий и эпический вестерн о становлении Америки, показанном через историю одной семьи. В главной роли — Пирс Броснан. \n1849 год, центральный Техас. Юный Илай Маккалоу попадает в плен к индейцам после того, как те ворвались в дом и безжалостно расправились с его сёстрами и матерью. Неопытный, но смелый парень учится выживать и договариваться с диким племенем. \n1915 год, южный Техас. Параллельно разворачивается история уже взрослого Илая Маккалоу в окружении детей и внуков. Властный и уважаемый глава семьи, он владеет ранчо и пытается отыскать нефть. Теперь вместо индейцев его главными врагами стали мексиканцы, которые вот-вот развяжут войну. Однако сын Илая, Пит, не готов мириться с жестокими методами отца и отпускает одного мексиканца, которого Маккалоу взяли в плен. Это грозит разрушить не только семейные узы, но и всю империю Илая Маккалоу, которую тот строил много лет...',
    usersRating: 5,
    reviews: [''],
    genre: 'вестерн, драма',
    release: ['08 апреля 2017 г.'],
    audio: 'Английский, Русский',
    studio: 'AMC Studios',
    countries: 'Соединенные Штаты Америки',
    actors: [],
    director: [],
    producers: [],
    facts: [],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          episodes: [{ name: 'Первый сын Техаса', thumbnail: '', src: '' }, { name: 'Сливовое дерево', thumbnail: '', src: '' }, { name: 'Вторая империя', thumbnail: '', src: '' }, { name: 'Песня смерти', thumbnail: '', src: '' }, { name: 'Никаких пленных', thumbnail: '', src: '' }, { name: 'Охотник на буйволов', thumbnail: '', src: '' }, { name: 'Брачные узы', thumbnail: '', src: '' }, { name: 'Медовая охота', thumbnail: '', src: '' }, { name: 'Пророчество', thumbnail: '', src: '' }, { name: 'Скальпы', thumbnail: '', src: '' }],
        },
        {
          episodes: [{ name: 'Нумунуу', thumbnail: '', src: '' }, { name: 'Десять долларов и ощипанный гусь', thumbnail: '', src: '' }, { name: 'Слепой тигр', thumbnail: '', src: '' }, { name: 'Оскальпированная собака', thumbnail: '', src: '' }, { name: 'Горячее масло', thumbnail: '', src: '' }, { name: 'Голубой свет', thumbnail: '', src: '' }, { name: 'Кто-то взял лопату', thumbnail: '', src: '' }, { name: 'Все их обвинительные следы', thumbnail: '', src: '' }, { name: 'Медведь', thumbnail: '', src: '' }, { name: 'Легенда', thumbnail: '', src: '' }],
        },
      ],
    },
  },
  {
    id: 4,
    name: 'Сын',
    slogan: '',
    ratings: [],
    age: '',
    originalName: 'The Son',
    poster: '',
    trailer: '',
    thumbnails: ['', '', ''],
    description: 'Жестокий и эпический вестерн о становлении Америки, показанном через историю одной семьи. В главной роли — Пирс Броснан. \n1849 год, центральный Техас. Юный Илай Маккалоу попадает в плен к индейцам после того, как те ворвались в дом и безжалостно расправились с его сёстрами и матерью. Неопытный, но смелый парень учится выживать и договариваться с диким племенем. \n1915 год, южный Техас. Параллельно разворачивается история уже взрослого Илая Маккалоу в окружении детей и внуков. Властный и уважаемый глава семьи, он владеет ранчо и пытается отыскать нефть. Теперь вместо индейцев его главными врагами стали мексиканцы, которые вот-вот развяжут войну. Однако сын Илая, Пит, не готов мириться с жестокими методами отца и отпускает одного мексиканца, которого Маккалоу взяли в плен. Это грозит разрушить не только семейные узы, но и всю империю Илая Маккалоу, которую тот строил много лет...',
    usersRating: 5,
    reviews: [''],
    genre: 'вестерн, драма',
    release: ['08 апреля 2017 г.'],
    audio: 'Английский, Русский',
    studio: 'AMC Studios',
    countries: 'Соединенные Штаты Америки',
    actors: [],
    director: [],
    producers: [],
    facts: [],
    type: 'serial',
    serial: {
      seasonsQty: 2,
      seasons: [
        {
          episodes: [{ name: 'Первый сын Техаса', thumbnail: '', src: '' }, { name: 'Сливовое дерево', thumbnail: '', src: '' }, { name: 'Вторая империя', thumbnail: '', src: '' }, { name: 'Песня смерти', thumbnail: '', src: '' }, { name: 'Никаких пленных', thumbnail: '', src: '' }, { name: 'Охотник на буйволов', thumbnail: '', src: '' }, { name: 'Брачные узы', thumbnail: '', src: '' }, { name: 'Медовая охота', thumbnail: '', src: '' }, { name: 'Пророчество', thumbnail: '', src: '' }, { name: 'Скальпы', thumbnail: '', src: '' }],
        },
        {
          episodes: [{ name: 'Нумунуу', thumbnail: '', src: '' }, { name: 'Десять долларов и ощипанный гусь', thumbnail: '', src: '' }, { name: 'Слепой тигр', thumbnail: '', src: '' }, { name: 'Оскальпированная собака', thumbnail: '', src: '' }, { name: 'Горячее масло', thumbnail: '', src: '' }, { name: 'Голубой свет', thumbnail: '', src: '' }, { name: 'Кто-то взял лопату', thumbnail: '', src: '' }, { name: 'Все их обвинительные следы', thumbnail: '', src: '' }, { name: 'Медведь', thumbnail: '', src: '' }, { name: 'Легенда', thumbnail: '', src: '' }],
        },
      ],
    },
  },
];
export default films;
