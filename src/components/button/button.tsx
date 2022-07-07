import './button.scss';

const Button = ({children, icon}: any) => {
  return (
    <button className="button">
      {icon && <img src={icon} alt="иконка" className="button__icon"/>}
      {children}
    </button>
  );
};

export default Button;
