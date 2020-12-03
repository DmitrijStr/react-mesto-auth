import React from 'react';

function PopupWithForm({ name, isOpen, onClose, title, children, onSubmit }) {

	return (
		<section className={`pop-up popup_type_${name} ${isOpen && 'pop-up_type_opened'}`} >
			<div className="pop-up__container">
				<button className="pop-up__btn pop-up__btn_action_deny hover-button" type="button" onClick={onClose}>
				</button>
				<p className="pop-up__title">{title}</p>
				<form className="pop-up__input pop-up__form" method="GET" noValidate onSubmit={onSubmit}>
					{children}
					<button className="pop-up__btn pop-up__btn_action_save" type="submit">
						Сохранить
				</button>
				</form>
			</div>
		</section>
	)
}

export default PopupWithForm;