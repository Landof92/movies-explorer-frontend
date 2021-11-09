import './NotFound.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const NotFound = () => {
  const { goBack } = useHistory();
  return (
    <section className="not-found">
      <h1 className="not-found__title">
        404
      </h1>
      <h2 className="not-found__subtitle">
        Страница не найдена
      </h2>
      <Link className="not-found__link" onClick={goBack}>Назад</Link>
    </section>
  )
};

export default NotFound;