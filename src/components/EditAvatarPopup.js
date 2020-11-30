import React from 'react';
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
	const { isOpen, onClose, onUpdateAvatar } = props;
	const avatarRef = React.useRef('');

	function handleSubmit(e) {
		e.preventDefault();
		onUpdateAvatar({
			avatar: avatarRef.current.value
		});
	}
	
	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name='edit-avatar' title='Обновить аватар' onSubmit={handleSubmit}>
			<input id='place' type="url" className="pop-up__text pop-up__text_type_place" placeholder="ссылка"
				name="avatar" required ref={avatarRef} defaultValue=''/>
			<span id="place-error" className=""></span>
		</PopupWithForm>
	)
}

export default EditAvatarPopup;