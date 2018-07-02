const SERVER_URL = `https://es.dump.academy/guess-melody`;
const APP_ID = 3040506;
const toJSON = (res) => res.json();
const checkStatus = (response) => {
  if (response.status === 404) {
    return [];
  } else if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}`);
  }
};


export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
      .then(checkStatus)
      .then(toJSON);
  }

  static loadResults() {
    return fetch(`${SERVER_URL}/stats/${APP_ID}`)
      .then(checkStatus)
      .then(toJSON);
  }


  static saveResults(data) {
    const requestSettings = {
      method: `POST`,
      body: JSON.stringify(data.results),
      headers: {
        'Content-Type': `application/json`
      }
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}`, requestSettings)
      .then(checkStatus);
  }
}
