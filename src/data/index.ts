import person1 from "../assets/team/person1.png";
import person2 from "../assets/team/person2.png";
import person3 from "../assets/team/person3.png";
import person4 from "../assets/team/person4.png";
import person5 from "../assets/team/person5.png";
import person6 from "../assets/team/person6.png";

export type navItem = {
  id: string;
  title: string;
  hashlink: string;
};

export const NAV_ITEMS: navItem[] = [
  {
    id: "ni001",
    title: "Каталог",
    hashlink: "catalog",
  },

  {
    id: "ni002",
    title: "О нас",
    hashlink: "about_us",
  },
  {
    id: "ni003",
    title: "Подбор товара",
    hashlink: "goods",
  },
  {
    id: "ni004",
    title: "Наша команда",
    hashlink: "team",
  },
  {
    id: "ni005",
    title: "FAQs",
    hashlink: "faqs",
  },
  {
    id: "ni006",
    title: "Контакты",
    hashlink: "contact_us",
  },
];

export const TEAM = [
  {
    id: "t001",
    name: "Егор Очкин",
    position: "Плетун лаптей",
    img: person1,
  },
  {
    id: "t002",
    name: "Анжелика Целофанова",
    position: "Плетунья лаптей",
    img: person2,
  },
  {
    id: "t003",
    name: "Василий Плейсхолдеров",
    position: "Плетун лаптей",
    img: person3,
  },
  {
    id: "t004",
    name: "Арсений Черненко",
    position: "Плетун лаптей",
    img: person4,
  },
  {
    id: "t005",
    name: "Елизавета Ротова",
    position: "Плетунья лаптей",
    img: person5,
  },
  {
    id: "t006",
    name: "Ариадна Кудравцева",
    position: "Плетунья лаптей",
    img: person6,
  },
];

export const FAQS = [
  {
    id: "fq001",
    question: "Модно ли носить лапти в XXI веке?",
    answer: "Очень модно!",
    collapsed: true,
  },
  {
    id: "fq002",
    question: "Можно ли в лаптях играть в лапту?",
    answer: "Нужно :)",
    collapsed: true,
  },
  {
    id: "fq003",
    question: "В чём основаня выгода приобретения лаптей?",
    answer:
      "Этот экологически чистый и природосообразный продукт поможет вам избавится от тенет капитализма и гнёта трансконтинентальных корпораций",
    collapsed: true,
  },
];
