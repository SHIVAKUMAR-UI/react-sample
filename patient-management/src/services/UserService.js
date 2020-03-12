import http from "./HttpService";

let { REACT_APP_BASE_URL: url } = process.env;
url += 'api/users';

export const getAllActiveUsers = () => {
  //   try {
  //   const promise = await http.post(`${url}`, loginDetails);
  //   console.log('Response: ', promise);
  //   return promise.response;
  //   } catch (ex){
  //       console.log('Excpetion Called', ex);
  //      return Promise.reject(ex);
  //   }
  return http.get(`${url}`);
};

export const createUser = user => {
  //   try {
  //   const promise = await http.post(`${url}`, loginDetails);
  //   console.log('Response: ', promise);
  //   return promise.response;
  //   } catch (ex){
  //       console.log('Excpetion Called', ex);
  //      return Promise.reject(ex);
  //   }
  return http.post(`${url}`, user);
};

export const updateUser = user => {
    return http.put(`${url}/${user.id}`, user);
}

export const deleteUser = id => {
    return http.delete(`${url}/${id}`);
}