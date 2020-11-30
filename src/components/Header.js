import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPath from '../images/logo.svg';
import NavBar from './NavBar';

function Header({ loggedIn, userData, logout }) {

	const currentPath = useLocation();
	console.log(currentPath)

	return (
		<header className="header">
			<a href='/'><img className="header__logo" src={logoPath} alt='изображение логотипа' /></a>
			{loggedIn
				? <NavBar {...userData} logout={logout}/>
				: <Link to={currentPath.pathname === '/sign-in' ? '/sign-up' : '/sign-in'} className="link header__link">{currentPath.pathname === '/sign-in' ? 'Регистрация' : 'Войти'}</Link>
			}
		</header>
	);
}

export default Header;