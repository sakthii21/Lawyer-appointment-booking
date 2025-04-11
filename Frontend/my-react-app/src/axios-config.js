import axios from 'axios';

const successHandler = function(response){
    return response;
};

const errorHandler = function(error){


    if(error.response.status ===401){
        localStorage.removeItem("token");
        window.location="/login";
    }
    return Promise.reject(error);
    };

    axios.interceptors.response.use(successHandler,errorHandler);

    export default axios;


