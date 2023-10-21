import { v1 } from "uuid";
export type FilmType = {
  [key: string]: any;
  id: string;
  title: string;
  description: string;
  posters: string | null;
  rating: number | null;
  duration: number;
  comments: CommentType[];
  year: number;
};
export type CommentType = {
  id: string;
  author: string;
  content: string;
};

export const filmsData: FilmType[] = [
  {
    id: v1(),
    title: "The Green Mile",
    description:
      "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
    posters: "src/assets/images/green-mile.jpeg",
    rating: 1,
    duration: 45,
    comments: [
      { id: v1(), author: "dad", content: "content" },
      { id: v1(), author: "mom", content: "content content content content " },
    ],
    year: 1999,
  },
  {
    id: v1(),
    title: "Побег из Шоушенка",
    description:
      "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
    posters: "src/assets/images/shawshank.jpeg",
    rating: 2,
    duration: 120,
    comments: [
      { id: v1(), author: "qwerty", content: "content" },
      { id: v1(), author: "root", content: "content content content content " },
    ],
    year: 1994,
  },
  {
    id: v1(),
    title: "Форрест Гамп",
    description:
      "Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни.С самого малолетства парень страдал от заболевания ног, соседские мальчишки дразнили его, но в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись.",
    posters: "src/assets/images/forest.webp",
    rating: 3,
    duration: 85,
    comments: [
      { id: v1(), author: "sad qwerty", content: "content" },
      { id: v1(), author: "var", content: "content content content content " },
    ],
    year: 1920,
  },
  {
    id: v1(),
    title: "1+1",
    description:
      "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
    posters: "src/assets/images/first.webp",
    rating: 4,
    duration: 220,
    comments: [
      { id: v1(), author: "let", content: "content" },
      {
        id: v1(),
        author: "const",
        content: "content content content content ",
      },
    ],
    year: 1974,
  },
  {
    id: v1(),
    title: "Список Шиндлера",
    description:
      "Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.",
    posters: "src/assets/images/schendler.webp",
    rating: 5,
    duration: 300,
    comments: [
      { id: v1(), author: "11", content: "content" },
      { id: v1(), author: "1222", content: "content content content content " },
    ],
    year: 2003,
  },
];
