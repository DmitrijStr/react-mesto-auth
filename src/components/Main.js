import React from 'react';
import plusButtonPath from '../images/plus.svg';
// import api from '../utils/Api'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardDelete, onCardLike, onCardDislike }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__infos">
          <figure className="profile__avatar-wrapper" onClick={onEditAvatar}>
            <div style={{ backgroundImage: `url(${currentUser.avatar})` }} className="profile__avatar" src="#" alt="изображение аватара">
            </div>
          </figure>
          <div className="profile__description">
            <div className='profile__info'>
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__button profile__button_action_edit hover-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__profession">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__button profile__button_action_add hover-button" type="button" onClick={onAddPlace}>
          <img src={plusButtonPath} alt='изображение кнопки добавить' />
        </button>
      </section>
      <section className="photo-grid">
        {cards.map((card) => (
          <Card key={card._id} {...card} onCardClick={onCardClick} card={card} onCardDelete={onCardDelete} onCardLike={onCardLike} onCardDislike={onCardDislike}/>
        ))}
      </section>
    </main>
  );
}

export default Main;