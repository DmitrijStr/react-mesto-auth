import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = ({ handleRegister }) => {

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
		handleRegister(email, password)
	}

	return (
		<div className="register">
			<p className="register__title">Регистрация</p>
			<form className="form register__form" onSubmit={handleSubmit}>
				<input id="email" className="input register__input" placeholder="Email" type="email" name="email" value={data.email} onChange={handleChange} />
				<input id="password" className="input register__input" placeholder="Пароль" type="password" name="password" value={data.password} onChange={handleChange} />
				<button className="button hover-button register__button" type="submit" >Зарегистрироваться</button>
			</form>
			<Link to="sign-in" className="link register__link">Уже зарегистрированы? Войти</Link>
		</div>
	)
}

export default Register;
