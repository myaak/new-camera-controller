interface CameraItemProps {
  name: string;
  onPress: () => void;
  isSelected?: boolean;
}

const CameraItem: React.FC<CameraItemProps> = ({ name, onPress, isSelected }) => {
  return (
    <div className={`camera__item ${isSelected ? "camera__item__selected" : ""}`} onClick={onPress}>
      <div className="camera__title">{name}</div>
    </div>
  );
};

export default CameraItem;
