import { IPostNewArea } from "../models/ICamera";
import { serverUrl } from "../server-info";
import axios from "axios";

const postNewArea = async (newObjectToPost: IPostNewArea) => {
  try {
    await axios.post(`${serverUrl}/post/newArea`, JSON.stringify(newObjectToPost));
  } catch (error) {
    console.log(error);
  }
};

export { postNewArea };
