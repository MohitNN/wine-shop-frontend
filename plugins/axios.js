// export default function ({ $axios, redirect }) {
//   $axios.onRequest((config) => {
//     console.log("Making request to " + config.url);
//   });

//   $axios.onError((error) => {
//     const code = parseInt(error.response && error.response.status);
//     if (code === 400) {
//       redirect("/400");
//     }
//   });
// }
import { baseURL } from "@/config/urls";
export default app => {
  const $axios = app.$axios;
  // Set baseURL to something different
  $axios.setBaseURL(baseURL.API_URL);

  $axios.onRequest(config => {
    return config;
  });

  $axios.onResponse(response => {
    return response;
  });

  $axios.onError(err => {
    //    TODO:: will create the global error message
    return err;
  });
};