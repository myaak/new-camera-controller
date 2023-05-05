import { serverUrl } from "../server-info";
import axios from "axios";

const postNewCamera = async (newObjectToPost: any) => {
    try {
      const response = await axios.post(`${serverUrl}/post/camera`, JSON.stringify(newObjectToPost))
      return response

    } catch (error) {
      console.log(error)
      return
    }
}

export { postNewCamera }
