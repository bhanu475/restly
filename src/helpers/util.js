var _ = require("lodash");
export const isSignin = () => {
    const token = sessionStorage.getItem("@App:token");
    return Boolean(token);
  };
  export const getToken = () => {
    return sessionStorage.getItem("@App:token");
  };
  
  export const setToken = (token) => {
    return sessionStorage.setItem("@App:token",token);
  };
  export const Logout = () => {
    sessionStorage.removeItem("@App:token");
    sessionStorage.removeItem("@App:user");
  };

  export const findResult = (results, name) => {
    var result = _.find(results, function (obj) {
      return obj.types[0] == name && obj.types[1] == "political";
    });
    return result ? result.long_name : null;
  };
export const getUserDetails=()=>{
  const storagedUser= sessionStorage.getItem("@App:user");
  const storagedUserObj = JSON.parse(storagedUser);
  return JSON.parse(storagedUserObj.userData);

}
  //TODO store openFrom