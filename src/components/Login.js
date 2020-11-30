import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

	const [data, setData] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let { email, password } = data;
		handleLogin(email, password)
	}

	return (
		<div className="login">
			<p className="login__title">Вход</p>
			<form className="form login__form" onSubmit={handleSubmit}>
				<input id="email" className="input login__input" placeholder="Email" type="email" name="email" value={data.email} onChange={handleChange} />
				<input id="password" className="input login__input" placeholder="Пароль" type="password" name="password" value={data.password} onChange={handleChange} />
				<button className="button hover-button login__button" type="submit" >Войти</button>
			</form>
		</div>
	)
}

export default Login;