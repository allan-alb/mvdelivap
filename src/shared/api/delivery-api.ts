import axios from "axios";
import { Platform } from "react-native";

const baseURL = Platform.select({
  android: "http://192.168.15.4:3001",
  ios: "http://localhost:3001",
});

export const deliveryApi = axios.create({
  baseURL,
});
