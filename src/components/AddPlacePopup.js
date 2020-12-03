import React from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
	const [placeLink, setPlaceLink] = React.useState('')
	const [placeName, setPlaceName] = React.useState('')

	function handlePlaceNameChange(e) {
		setPlaceName(e.target.value);
	}

	function handlePlaceLinkChange(e) {
		setPlaceLink(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		onAddPlace({
			name: placeName,
			link: placeLink
		});
	}

	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name='new-card' title='Новое место' onSubmit={handleSubmit}>
			<input id='place' type="text" className="pop-up__text pop-up__text_type_place" placeholder="Название"
				name="name" required minLength="1" maxLength="30" onChange={handlePlaceNameChange} value={placeName} />
			<span id="place-error" className=""></span>
			<input id='url' type="url" className="pop-up__text pop-up__text_type_link" placeholder="Ссылка на картинку"
				name='link' required onChange={handlePlaceLinkChange} value={placeLink} />
			<span id="url-error" className=""></span>
		</PopupWithForm>
	)
}

export default AddPlacePopup;




