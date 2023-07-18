interface ZonesItemProps {
  name: string;
  onPress: () => void;
  isSelected?: boolean;
}

const ZonesItem: React.FC<ZonesItemProps> = ({ name, onPress, isSelected }) => {
  return (
    <div className={`zone__item ${isSelected ? "zone__item__selected" : ""}`} onClick={onPress}>
      <div className="zone__title">{name}</div>
      <div className="zone__icons">
        <i className="uil uil-setting"></i>
        <i className="uil uil-trash"></i>
      </div>
    </div>
  );
};

export default ZonesItem;
