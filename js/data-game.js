export const INITIAL_STATE = {
  level: 0,
  lives: 3,
  time: 300,
  points: 0
};

export const levels = {
  '1': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    type: `artist`,
    answers: [
      {
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        artist: `Gunnar Olsen`,
        correct: false
      },
      {
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`,
        correct: true
      },
      {
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: false
      }
    ]
  },
  '2': {
    genre: `Electronic`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: true,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Electronic`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        correct: false,
        autoplay: false
      },
    ]
  },
  '3': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    type: `artist`,
    answers: [
      {
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: false
      },
      {
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`,
        correct: false
      },
      {
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: true
      }
    ]
  },
  '4': {
    genre: `Rock`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`,
        correct: false,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Rock`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Rock`,
        correct: true,
        autoplay: false
      }
    ]
  },
  '5': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    type: `artist`,
    answers: [
      {
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: false
      },
      {
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`,
        correct: true
      },
      {
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        artist: `Gunnar Olsen`,
        correct: false
      }
    ]
  },
  '6': {
    genre: `Rock`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false,
        autoplay: false
      }
    ]
  },
  '7': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    type: `artist`,
    answers: [
      {
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`,
        correct: false
      },
      {
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: false
      },
      {
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`,
        correct: true
      }
    ]
  },
  '8': {
    genre: `Pop`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: true,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false,
        autoplay: false
      }
    ]
  },
  '9': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    type: `artist`,
    answers: [
      {
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: true
      },
      {
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: false
      },
      {
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        artist: `Gunnar Olsen`,
        correct: false
      }
    ]
  },
  '10': {
    genre: `Electronic`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: true,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: true,
        autoplay: false
      }
    ]
  }
};

export let results = [];
