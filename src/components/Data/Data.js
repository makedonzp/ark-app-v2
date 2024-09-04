import feo from "../../assets/feo.png";
import section__2_image_1 from "../../assets/section__2_image_1.png";
import section__2_image_2 from "../../assets/section__2_image_2.png";
import section__2_image_3 from "../../assets/section__2_image_3.png";
import evpatoriya from "../../assets/evpatoria.jpg";
import saki from "../../assets/saki.jpg";
import alushta from "../../assets/alushta.jpeg";
import sudak from "../../assets/sudak.jpeg";
const mockData = [
  {
    new: [
      {
        city: "Евпатория",
        title: "Актуальные комплексы Евпатории",
        desc: "Мы работаем только с проверенными застройщиками",
        image: evpatoriya,
        path: "/evpatoriya",
        complexes: [
          {
            name: 'ЖК "Кубики"',
            path: "/evpatoriya/kubiki",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'ЖК "MOINACO Riviera"',
            path: "/evpatoriya/moinaco-riviera",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'Отель "ОДИССЕЙ"',
            path: "/evpatoriya/odissie",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'Комплекс "Новая керкинитида"',
            path: "/evpatoriya/novaya-kerkinitida",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'ЖК "Море"',
            path: "/evpatoriya/more",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Евпатория – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Евпатория территорию протяжённостью более 70 км, включающую Евпаторию (административный центр), Алупку и несколько посёлков. Большая Ялта простирается от Фороса на западе до Краснокаменки на востоке.",
            image: evpatoriya,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Евпатория – жемчужина Черного моря",
            image_1: section__2_image_1,
            image_2: section__2_image_2,
            image_3: section__2_image_3,
          },
        ],
      },
      {
        city: "Саки",
        title: "Актуальные комплексы Саки",
        desc: "Мы работаем только с проверенными застройщиками",
        image: saki,
        path: "/saki",
        complexes: [
          {
            name: 'Комплекс "Ола Апарт"',
            path: "/saki/ola-apart",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'ЖК "Розовое озеро"',
            path: "/saki/rovoze-ozero",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Саки – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Саки территорию протяжённостью более 70 км, включающую Саки (административный центр), Алупку и несколько посёлков. Большая Саки простирается от Фороса на западе до Краснокаменки на востоке.",
            image: saki,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Саки – жемчужина Черного моря",
            image_1: "section__2_image_1.jpg",
            image_2: "section__2_image_2.jpg",
            image_3: "section__2_image_3.jpg",
          },
        ],
      },
      {
        city: "Алушта",
        title: "Актуальные комплексы Алушта",
        desc: "Мы работаем только с проверенными застройщиками",
        image: alushta,
        path: "/alushta",
        complexes: [
          {
            name: 'ЖК "Парковая резиденция"',
            path: "/alushta/parkovaya-rezidencia",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'ЖК "На Фонтанке"',
            path: "/alushta/na-fontanke",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'ЖК "Галерея"',
            path: "/alushta/galereya",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'ЖК "Континент"',
            path: "/alushta/kontinent",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Алушта – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Алушта территорию протяжённостью более 70 км, включающую Алушта (административный центр), Алупку и несколько посёлков. Большая Алушта простирается от Фороса на западе до Краснокаменки на востоке.",
            image: alushta,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Алушта – жемчужина Черного моря",
            image_1: "section__2_image_1.jpg",
            image_2: "section__2_image_2.jpg",
            image_3: "section__2_image_3.jpg",
          },
        ],
      },
      {
        city: "Судак",
        title: "Актуальные комплексы Судак",
        desc: "Мы работаем только с проверенными застройщиками",
        image: sudak,
        path: "/sudak",
        complexes: [
          {
            name: 'Комплекс "Бирюзовый квартал"',
            path: "/sudak/biryuzovyi-kvartal",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'ЖК "Долина Роз"',
            path: "/sudak/dolina-roz",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Судак – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Судак территорию протяжённостью более 70 км, включающую Судак (административный центр), Алупку и несколько посёлков. Большая Судак простирается от Фороса на западе до Краснокаменки на востоке.",
            image: sudak,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Судак – жемчужина Черного моря",
            image_1: section__2_image_1,
            image_2: section__2_image_2,
            image_3: section__2_image_3,
          },
        ],
      },
      {
        city: "Феодосия",
        title: "Актуальные комплексы Феодосии",
        desc: "Мы работаем только с проверенными застройщиками",
        image: feo,
        path: "/feo",
        complexes: [
          {
            name: 'ЖК "Утесов"',
            path: "/feo/utesov",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'ЖК "Просторы Крыма"',
            path: "/feo/prostoryi-kryma",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Феодосия – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Феодосия территорию протяжённостью более 70 км, включающую Феодосия (административный центр),Феодосия несколько посёлков. Большая Феодосия простирается от Фороса на западе до Краснокаменки на востоке.",
            image: feo,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Феодосия – жемчужина Черного моря",
            image_1: section__2_image_1,
            image_2: section__2_image_2,
            image_3: section__2_image_3,
          },
        ],
      },
    ],
    plots: [
      {
        city: "Евпатория",
        title: "Актуальные районы Евпатории",
        desc: "Мы работаем только с проверенными застройщиками",
        image: evpatoriya,
        path: "/evpatoriya",
        complexes: [
          {
            name: 'Район "Центральный"',
            path: "/evpatoriya/centralnyi",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'Район "Приморский"',
            path: "/evpatoriya/primorskyi",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Евпатория – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Евпатория территорию протяжённостью более 70 км, включающую Евпаторию (административный центр), Алупку и несколько посёлков. Большая Ялта простирается от Фороса на западе до Краснокаменки на востоке.",
            image: evpatoriya,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Евпатория – жемчужина Черного моря",
            image_1: section__2_image_1,
            image_2: section__2_image_2,
            image_3: section__2_image_3,
          },
        ],
      },
      {
        city: "Саки",
        title: "Актуальные районы Саки",
        desc: "Мы работаем только с проверенными застройщиками",
        image: saki,
        path: "/saki",
        complexes: [
          {
            name: 'Район "Южный"',
            path: "/saki/yuzhnyi",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'Район "Северный"',
            path: "/saki/severnyi",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Саки – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Саки территорию протяжённостью более 70 км, включающую Саки (административный центр), Алупку и несколько посёлков. Большая Саки простирается от Фороса на западе до Краснокаменки на востоке.",
            image: saki,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Саки – жемчужина Черного моря",
            image_1: section__2_image_1,
            image_2: section__2_image_2,
            image_3: section__2_image_3,
          },
        ],
      },
      {
        city: "Алушта",
        title: "Актуальные районы Алушта",
        desc: "Мы работаем только с проверенными застройщиками",
        image: alushta,
        path: "/alushta",
        complexes: [
          {
            name: 'Район "Горный"',
            path: "/alushta/gornyi",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'Район "Морской"',
            path: "/alushta/morskoi",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Алушта – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Алушта территорию протяжённостью более 70 км, включающую Алушта (административный центр), Алупку и несколько посёлков. Большая Алушта простирается от Фороса на западе до Краснокаменки на востоке.",
            image: alushta,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Алушта – жемчужина Черного моря",
            image_1: section__2_image_1,
            image_2: section__2_image_2,
            image_3: section__2_image_3,
          },
        ],
      },
      {
        city: "Судак",
        title: "Актуальные районы Судак",
        desc: "Мы работаем только с проверенными застройщиками",
        image: sudak,
        path: "/sudak",
        complexes: [
          {
            name: 'Район "Старого города"',
            path: "/sudak/starogorod",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'Район "Нового города"',
            path: "/sudak/novogorod",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Судак – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Судак территорию протяжённостью более 70 км, включающую Судак (административный центр), Алупку и несколько посёлков. Большая Судак простирается от Фороса на западе до Краснокаменки на востоке.",
            image: sudak,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Судак – жемчужина Черного моря",
            image_1: section__2_image_1,
            image_2: section__2_image_2,
            image_3: section__2_image_3,
          },
        ],
      },
      {
        city: "Феодосия",
        title: "Актуальные районы Феодосии",
        desc: "Мы работаем только с проверенными застройщиками",
        image: feo,
        path: "/feo",
        complexes: [
          {
            name: 'Район "Центральный"',
            path: "/feo/centralnyi",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
          {
            name: 'Район "Приморский"',
            path: "/feo/primorskyi",
            studia: 625,
            one: 625,
            two: 625,
            three: 625,
          },
        ],
        section_1: [
          {
            title: "Феодосия – жемчужина Черного моря",
            desc: "Различают собственно город и так называемую Большую Феодосия территорию протяжённостью более 70 км, включающую Феодосия (административный центр),Феодосия несколько посёлков. Большая Феодосия простирается от Фороса на западе до Краснокаменки на востоке.",
            image: feo,
            loc: "южное побережье полуострова",
          },
        ],
        section_2: [
          {
            desc: "Феодосия – жемчужина Черного моря",
            image_1: section__2_image_1,
            image_2: section__2_image_2,
            image_3: section__2_image_3,
          },
        ],
      },
    ],
  },
];

export default mockData;
