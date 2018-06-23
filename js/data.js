const images = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

const levelTemplates = [
  {
    question: `Угадай, фото или рисунок?`,
    type: `single`,
    answers: [
      {
        type: `painting`,
        url: images.paintings[1]
      }
    ]
  },
  {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    type: `double`,
    answers: [
      {
        type: `photo`,
        url: images.photos[0]
      },
      {
        type: `painting`,
        url: images.paintings[2]
      }
    ]
  },
  {
    question: `Найдите рисунок среди изображений`,
    type: `triple`,
    answers: [
      {
        type: `photo`,
        url: images.photos[1]
      },
      {
        type: `painting`,
        url: images.paintings[0]
      },
      {
        type: `photo`,
        url: images.photos[2]
      }
    ]
  }
];

const LEVELS_COUNT = 10;

const getRandomIntFromRange = (from, to) => {
  return Math.floor(Math.random() * to) + from;
};

export const generateLevelsData = () => {
  const data = [];

  for (let i = 1; i <= LEVELS_COUNT; i++) {
    data.push(levelTemplates[getRandomIntFromRange(0, 2)]);
  }

  return data;
};

export const INITIAL_STATE = {
  livesNumber: 3,
  time: 50,
  isOver: false,
  isWin: false,
  username: ``,
  answers: []
};
