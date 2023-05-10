import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cameraSlice from "./Reducers/cameraReducer";
import addCameraModal from './Reducers/cameraAddReducer'
import currentCamera from "./Reducers/cameraSelectionReducer";
import canvasSlice from './Reducers/CanvasReducer'
import { socketMiddleware } from "./Middleware/WebSocket";
import { webSocketUrl } from "../server-info";
import alertReducer from "./Reducers/alertReducer";

export const store = configureStore({
  reducer: {
    cameraArray: cameraSlice,
    addCameraModal: addCameraModal,
    currentCamera: currentCamera,
    canvasActiveAdding: canvasSlice,
    alertModal: alertReducer
  },
  middleware: [socketMiddleware(new WebSocket(webSocketUrl)), ...getDefaultMiddleware()]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
