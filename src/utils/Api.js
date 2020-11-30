class Api {
	constructor(options) {
		this._baseUrl = options.baseUrl;
		this._headers = options.headers;
	}

	_getResponseData() {
		return res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(new Error(`Ошибка: ${res.status}`))
				.then((result) => {
					return result
				})
		}
	}

	getInitialCards() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers
		}).then(this._getResponseData())
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers
		}).then(this._getResponseData())
	}

	postCard(newCard) {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: newCard.name,
				link: newCard.link
			})
		}).then(this._getResponseData())
	}

	deleteCard(id) {
		return fetch(`${this._baseUrl}/cards/${id}`, {
			method: 'DELETE',
			headers: this._headers
		}).then(this._getResponseData())
	}

	patchUserInfo(newData) {
		return fetch(`${this._baseUrl}/users/me/`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: newData.name,
				about: newData.about
			})
		}).then(this._getResponseData())
	}

	patchAvatar(newData) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: newData.avatar
			})
		}).then(this._getResponseData())
	}

	putLike(id) {
		return fetch(`${this._baseUrl}/cards/likes/${id}`, {
			method: 'PUT',
			headers: this._headers
		})
			.then(this._getResponseData())
			// .then((data) => {
			// 	return (data.likes.length)
			// })
	}

	removeLike(id) {
		return fetch(`${this._baseUrl}/cards/likes/${id}`, {
			method: 'DELETE',
			headers: this._headers
		})
			.then(this._getResponseData())
			// .then((data) => {
			// 	return (data.likes.length)
			// })
	}
}

const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
	headers: {
		authorization: 'bfb56561-5ac4-4046-893e-dcc4ab3eace0',
		'Content-Type': 'application/json'
	}
});

export default api
