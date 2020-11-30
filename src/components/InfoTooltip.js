import React from 'react';
import successImg from '../images/success.svg';
import failImg from '../images/fail.svg';

const InfoTooltip = ({ onClose, renderState }) => {

	return (
		<section className={`pop-up popup_type_info ${renderState.open && 'pop-up_type_opened'}`} >
			<div className="pop-up__container">
				<button className="pop-up__btn pop-up__btn_action_deny hover-button" type="button" onClick={onClose}>
				</button>
				<img className="pop-up__info-img" src={renderState.success === true ? successImg : failImg} alt={renderState.message} />
				<p className="pop-up__title">{renderState.message}</p>
			</div>


		</section>


	)
}

export default InfoTooltip;