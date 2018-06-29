import {assert} from 'chai';
import {adaptServerData} from '../data/data-adapter';

const artistServer = [
  {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `path/to/file.mp3`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/705x455`,
          "width": 300,
          "height": 300
        },
        "title": `Пелагея`,
        "isCorrect": false
      },
      {
        "image": {
          "url": `http://placehold.it/705x455`,
          "width": 300,
          "height": 300
        },
        "title": `Краснознамённая дивизия имени моей Бабушки`,
        "isCorrect": false
      },
      {
        "image": {
          "url": `http://placehold.it/705x455`,
          "width": 300,
          "height": 300
        },
        "title": `Кровосток`,
        "isCorrect": true
      }
    ]
  }
];

const artistLocal = [
  {
    type: `artist`,
    audio: `path/to/file.mp3`,
    question: `Кто исполняет эту песню?`,
    answers: [
      {
        image: `http://placehold.it/705x455`,
        artist: `Пелагея`,
        correct: false
      },
      {
        image: `http://placehold.it/705x455`,
        artist: `Краснознамённая дивизия имени моей Бабушки`,
        correct: false
      },
      {
        image: `http://placehold.it/705x455`,
        artist: `Кровосток`,
        correct: true
      }
    ]
  }
];


describe(`Adapt server data`, () => {
  it(`should have several format server and local data`, () => {
    assert.deepEqual(artistLocal, adaptServerData(artistServer));
  });
});
