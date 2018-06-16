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
  'single': {
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        type: `painting`,
        url: images.questionpaintings[0]
      }
    ]
  },
  'double': {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        type: `photo`,
        url: images.photos[0]
      },
      {
        type: `painting`,
        url: images.painting[1]
      }
    ]
  },
  'triple': {
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        type: `photo`,
        url: images.photos[1]
      },
      {
        type: `painting`,
        url: images.painting[2]
      },
      {
        type: `photo`,
        url: images.photos[2]
      }
    ]
  }
};

const LEVELS_COUNT = 10;

export const generateLevelsData = () => {
  for (let i = 0; i < LEVELS_COUNT; i++) {

  }
};
