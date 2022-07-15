import './header.scss';
import {FC} from "react";
import {Link} from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <span className="header__icon"/>
      </Link>
      <h1 className="header__title">Визуализатор алгоритмов сортировки</h1>
    </header>
  );
};

export default Header;
