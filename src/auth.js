export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

const register = (email, password) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ 
			password, email})
	})
		.then(checkResponse)
}

const authorize = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ password, email })
	})
		.then(checkResponse)
}

const getContent = (token) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
		.then(checkResponse)
}

export {register, authorize, getContent};