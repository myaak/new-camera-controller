import { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openAddCameraModal } from "../../store/Reducers/cameraAddReducer";
import { addCamera } from "../../store/Reducers/cameraReducer";
import { openCanvas } from "../../store/Reducers/cameraSelectionReducer";
import { postNewCamera } from "../../http/postCamera";

export default function CameraAdd() {
  const cameras = useAppSelector((state) => state.cameraArray.cameraArray);
  const selectedCamera = useAppSelector((state) => state.currentCamera.selectedCamera);

  const dispatch = useAppDispatch();

  const [cameraName, setCameraName] = useState<string>("");
  const [cameraLink, setCameraLink] = useState<string>("");
  const [cameraProcessDelay, setCameraProcessDelay] = useState<string>("");
  const [onError, setError] = useState<boolean>(false);

  const DEFAULT_PROCESS_DELAY = 5;

  const addCameraHandler = async (name: string, link: string) => {
    if (name === "") {
      setError(true);
      return;
    }

    const newPostCamera = {
      name: name,
      link: link,
      areas: JSON.stringify([]),
      processDelay: cameraProcessDelay !== "" ? Number(cameraProcessDelay) : DEFAULT_PROCESS_DELAY
    };

    const response = await postNewCamera(newPostCamera);

    if (response) {
      const newCameraObject = {
        ...response.data,
        areas: JSON.parse(response.data.areas),
        openedCanvas: false
      };

      dispatch(addCamera(newCameraObject));
    }

    closeWindow();
    canvasPreviousState();
  };

  const closeWindow = () => {
    canvasPreviousState();
    dispatch(openAddCameraModal(false));
  };

  const canvasPreviousState = () => {
    cameras.map((item: any) =>
      item.id === selectedCamera?.id ? (item.openedCanvas === true ? dispatch(openCanvas()) : null) : null
    );
  };

  const blinkingPlaceholder = () => {
    let blink: any;

    if (onError) {
      blink = setTimeout(() => {
        setError(false);
      }, 200);
    }

    return () => {
      clearTimeout(blink);
    };
  };

  useEffect(() => {
    blinkingPlaceholder();
  }, [onError]);

  return (
    <div className="camera-add__container">
      <div className="camera-add__background"></div>
      <div className="camera-add__item">
        <div className="camera-add__item__title">Добавить камеру</div>
        <form className="camera-add__item__form">
          <div>
            <div>Имя</div>
            <Input
              maxLength={20}
              placeholder="Название камеры"
              value={cameraName}
              onChange={(e) => setCameraName(e.target.value)}
              _placeholder={{ color: `${onError ? "red" : ""}` }}
            />
          </div>
          <div>
            <div>Ссылка</div>
            <Input placeholder="Ссылка на камеру" value={cameraLink} onChange={(e) => setCameraLink(e.target.value)} />
          </div>
          <div>
            <div>Интервал обработки</div>
            <Input
              placeholder={`По умолчанию 5`}
              value={cameraProcessDelay}
              onChange={(e) => setCameraProcessDelay(e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, ""))}
              pattern="[0-9]+"
            />
          </div>
        </form>
        <div className="camera-add__item__buttons">
          <button onClick={closeWindow}>Отмена</button>
          <button onClick={() => addCameraHandler(cameraName, cameraLink)}>Добавить</button>
        </div>
      </div>
    </div>
  );
}
