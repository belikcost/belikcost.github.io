import jpg1 from "./assets/images/1.jpg";
import jpg4 from "./assets/images/4.jpg";
import jpg6 from "./assets/images/6.jpg";
import jpg2 from "./assets/images/2.jpg";
import jpg3 from "./assets/images/3.jpg";
import jpg5 from "./assets/images/5.jpg";

export const PRODUCTS = [
    {
        id: 1,
        name: "Кровать TATRANTATRANTATRANTATRANTATRAN",
        price: 120000,
        description: "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
        img: jpg1
    },
    {
        id: 2,
        name: "Кресло VILORA",
        price: 21000,
        description: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
        img: jpg4
    },
    {
        id: 3,
        name: "Стол MENU",
        price: 34000,
        description: "Европейский дуб - отличается особой прочностью и стабильностью.",
        img: jpg6
    },
    {
        id: 4,
        name: "Диван ASKESTA",
        price: 68000,
        description: "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
        img: jpg2
    },
    {
        id: 5,
        name: "Кресло LUNAR",
        price: 400000,
        description: "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
        img: jpg3
    },
    {
        id: 6,
        name: "Шкаф Nastan",
        price: 80000,
        description: "Мебель может быть оснащена разнообразными системами подсветки.",
        img: jpg5
    }
];

export const MIN_CART_COUNT = 1;
export const MAX_CART_COUNT = 99;