import React from 'react';

function ImagePopup({ card, isOpen, onClose }) {

	return (
		<section className={`pop-up popup_type_image ${isOpen && 'pop-up_type_opened'}`}>
			<div className="pop-up__content">
				<div className="pop-up__image-contnaiter">
					<button className="pop-up__btn pop-up__btn_action_deny hover-button" type="button" onClick={onClose}>
					</button>
					<img className="pop-up__image" src={card.link} alt='изображение' />
					<p className='pop-up__image-name'>{card.name}</p>
				</div>
			</div>
		</section>
	)
}

export default ImagePopup;

