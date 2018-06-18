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

const levelTypes = {
  '1': {
    question: `Угадай, фото или рисунок?`,
    type: `single`,
    answers: [
      {
        type: `painting`,
        url: images.paintings[1]
      }
    ]
  },
  '2': {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    type: `double`,
    answers: [
      {
        type: `photo`,
        url: images.photos[0]
      },
      {
        type: `painting`,
        url: images.paintings[0]
      }
    ]
  },
  '3': {
    question: `Найдите рисунок среди изображений`,
    type: `triple`,
    answers: [
      {
        type: `photo`,
        url: images.photos[1]
      },
      {
        type: `painting`,
        url: images.paintings[2]
      },
      {
        type: `photo`,
        url: images.photos[2]
      }
    ]
  }
};

const LEVELS_COUNT = 3;

export const generateLevelsData = () => {
  let data = [];

  for (let i = 1; i <= LEVELS_COUNT; i++) {
    data.push(levelTypes[i]);
  }

  return data;
};

export const gameState = {
  livesCount: 3,
  time: 50,
  isOver: false
};
