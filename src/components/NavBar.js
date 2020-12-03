import React from 'react';

const NavBar = ({ email, logout }) => {

	return (
		<div className="navbar">
			<p className="navbar__email">{email}</p>
			<button className="navbar__logout-button" onClick={logout}>Выйти</button>
		</div>
	)
}

export default NavBar;