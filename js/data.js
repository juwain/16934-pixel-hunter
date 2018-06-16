const levelsData = {
  'level-1': {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    type: `double`,
    images: new Set(
      `https://k42.kn3.net/CF42609C8.jpg`,
      `http://i.imgur.com/1KegWPz.jpg`
    ),
    answers: new Set(
      `painting`,
      `photo`
    )
  },
  'level-2': {
    question: `Угадай, фото или рисунок?`,
    type: `single`,
    images: [
      {
        url: `https://k42.kn3.net/D2F0370D6.jpg`,
        type: `painting`
      }
    ]
  },
  'level-3': {
    question: `Найдите рисунок среди изображений`,
    type: `triple`,
    images: [
      {
        url: `https://k32.kn3.net/5C7060EC5.jpg`,
        type: `painting`
      },
      {
        url: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      },
      {
        url: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`
      }
    ]
  }
};

export default levelsData;
