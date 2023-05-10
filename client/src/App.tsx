import { useAppDispatch, useAppSelector } from './app/hooks'
import { Header } from './components'
import './styles/main.scss'
import CanvasSelection from './components/CanvasSelection/CanvasSelection'
import { BrowserRouter } from 'react-router-dom'
import CameraAdd from './components/Cameras/CameraAdd'
import CameraSettingsRouter from './components/AppRouter/CameraSettingsRouter'
import Video from './components/Video/Video'
import { useEffect } from 'react'
import AlertWindow from './UI/AlertWindow/AlertWindow'

function App() {

  const { openedAddCamera } = useAppSelector(state => state.addCameraModal)
  const selectedCamera = useAppSelector(state => state.currentCamera.selectedCamera)
  const alert = useAppSelector(state => state.alertModal.activeAlert)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: "socket/connect" })

    return () => {
      dispatch({ type: "socket/close" })
    }
  }, [])

  return (
    <div className="App">
      <AlertWindow />
      <BrowserRouter>
        <Header />
        {openedAddCamera &&
          <CameraAdd />
        }
        <main className="content">
          {selectedCamera !== undefined && selectedCamera.id !== null ? <Video /> : null}
          {selectedCamera !== undefined ? selectedCamera.openedCanvas && <CanvasSelection /> : null}
        </main>
        <footer>
          <CameraSettingsRouter />
        </footer>
      </BrowserRouter>
    </div >
  )
}

export default App

