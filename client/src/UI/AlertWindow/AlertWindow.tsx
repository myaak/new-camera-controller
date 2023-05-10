import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { disactivateAlert } from "../../store/Reducers/alertReducer"
import './AlertWindow.css'

export default function AlertWindow() {

  const isActive = useAppSelector(state => state.alertModal.activeAlert)

  const dispatch = useAppDispatch()

  useEffect(() => {
    let isVisible: any

    if (isActive) {

      isVisible = setTimeout(() => {
        dispatch(disactivateAlert())
      }, 3000)
    }
    return () => {
      clearTimeout(isVisible)
    }
  }, [isActive])

  return (
    <div className={`alert__window ${isActive ? "open" : ""}`}>
      <p>Внимание!</p>
      <p>Новое нарушение</p>
    </div>
  )
}
