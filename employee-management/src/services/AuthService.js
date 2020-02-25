import http from "./HttpService";

const { REACT_APP_BASE_URL: url } = process.env;

export const authenticate = loginDetails => {
//   try {
//   const promise = await http.post(`${url}`, loginDetails);
//   console.log('Response: ', promise);
//   return promise.response;
//   } catch (ex){
//       console.log('Excpetion Called', ex);
//      return Promise.reject(ex);
//   }
 return http.post(`${url}`, loginDetails);
};
