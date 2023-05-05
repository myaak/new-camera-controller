import { serverUrl } from "../server-info";
import axios from "axios";

const modifyCamera = async (cameraDataToPost: any) => {
  try {
    await axios.post(`${serverUrl}/post/modify/camera`, JSON.stringify(cameraDataToPost))

  } catch (error) {
    console.log(error)
  }
}

export { modifyCamera }

