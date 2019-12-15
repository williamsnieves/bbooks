import axios from "axios";
import services from "./services";
export const auth = data => {
  const authUrl = `${services.login}`;
  const formData = {
    userName: data.username,
    password: data.password
  };
  return axios
    .post(authUrl, formData)
    .then(authResponse => authResponse)
    .catch(error => console.log("handle errors to loggers like sentry"));
};
