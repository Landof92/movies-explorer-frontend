import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  return (
    <section className="profile">
      <h1 className="profile__title">
        {`Привет, ${props.name}!`}
      </h1>
      <div className="profile__table">
        <div className="profile__table-row" >
          <div className="profile__table-cell profile__table-cell_bold">Имя</div>
          <div className="profile__table-cell">{props.name}</div>
        </div>
        <div className="profile__table-divider"></div>
        <div className="profile__table-row">
          <div className="profile__table-cell profile__table-cell_bold">E-mail</div>
          <div className="profile__table-cell">{props.email}</div>
        </div>
      </div>
      <nav className="profile__nav">
        <button className="profile__button">Редактировать</button>
        <Link to="/signin" className="profile__link ">Выйти из аккаунта</Link>
      </nav>
    </section>
  )
};

export default Profile;