import './header.scss';
import {FC} from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <span className="header__icon" />
      <h1 className="header__title">Визуализатор алгоритмов сортировки</h1>
    </header>
  );
};

export default Header;
