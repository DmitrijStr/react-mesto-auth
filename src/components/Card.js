import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import classNames from 'classnames'

function Card({ card, link, name, likes, onCardClick, onCardDelete, onCardLike, onCardDislike }) {
	const currentUser = React.useContext(CurrentUserContext);
	const isOwnCard = card.owner._id === currentUser._id;
	const isLiked = card.likes.some(i => i._id === currentUser._id);
	const cardLikeButtonClassName = classNames('photo-grid__like-button', 'hover-button', {
		'photo-grid__like-button_type_active': isLiked
	});

	function handleClick() {
		onCardClick(card);
	}

	function handleDeleteClick() {
		onCardDelete(card._id);
	}

	function handleCardLike() {
		onCardLike(card._id);
	}

	function handleCardDislike() {
		onCardDislike(card._id);
	}

	return (
		<div className="photo-grid__item">
			{isOwnCard && <button type="button" className='photo-grid__trash-button hover-button' onClick={handleDeleteClick}></button>}
			<div style={{ backgroundImage: `url(${link})` }} className="photo-grid__image photo-grid__image-button hover-button" type='button' onClick={handleClick}></div>
			<div className="photo-grid__description">
				<h2 className="photo-grid__place">{name}</h2>
				<div className="photo-grid__like-wrapper">
					<button className={cardLikeButtonClassName} type="button" onClick={isLiked ? handleCardDislike : handleCardLike}></button>
					<p className="photo-grid__likes-count">{likes.length}</p>
				</div>
			</div>
		</div>
	)
}

export default Card;