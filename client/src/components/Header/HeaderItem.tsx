import { Link } from "react-router-dom";

interface HeaderItemProps {
  name: string;
  iconName: string;
  link: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ name, iconName, link }) => {
  return (
    <Link className="nav__item" to={link}>
      <div className="nav__item-icon">
        <i className={iconName}></i>
      </div>
      <div className="nav__title">{name}</div>
    </Link>
  );
};

export default HeaderItem;
