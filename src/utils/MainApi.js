class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
      this._checkResponse
    );
  }
  refreshToken(token) {
    this._headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }
  createMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    nameRU,
    nameEN = "none",
    movieId,
  }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: country || "unknown",
        director,
        duration,
        year,
        description,
        image,
        trailer: trailer || "https://www.youtube.com/",
        thumbnail,
        nameRU,
        nameEN: nameEN ? nameEN : nameRU,
        movieId,
      }),
    }).then(this._checkResponse);
  }
  setUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  getInitialFilms() {
    return fetch(`${this._baseUrl}/movies`, { headers: this._headers }).then(
      this._checkResponse
    );
  }
  deleteFilm(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
const token = localStorage.getItem("token");
export default new MainApi({
  baseUrl: "https://api.movies-explorer.lina.nomoredomains.club",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
