import React from 'react';
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
	const [name, setName] = React.useState("")
	const [description, setDescription] = React.useState("")
	const currentUser = React.useContext(CurrentUserContext);

	React.useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser]);

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleDiscriptionChange(e) {
		setDescription(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		onUpdateUser({
			name,
			about: description,
		});
	}

	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name='edit' title='Редактировать профиль' onSubmit={handleSubmit}>
			<input id='name-input' type="text" className="pop-up__input pop-up__text" name="name" required minLength="2" maxLength="40" autoComplete="off" defaultValue={name} onChange={handleNameChange} />
			<span id="name-input-error" className=""></span>
			<input id='profession-input' type="text" className="pop-up__input pop-up__text " name="about"
				required minLength="2" maxLength="200" autoComplete="off" defaultValue={description} onChange={handleDiscriptionChange} />
			<span id="profession-input-error" className=""></span>
		</PopupWithForm>
	)
}
export default EditProfilePopup;