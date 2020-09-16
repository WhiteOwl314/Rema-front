import axios from 'axios';

//send username, password to the Server
export const executeJwtAuthenticationService = async formData => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/authenticate',
        //formData: username, psssword 필요
        data: formData
    });

    return response.data;
};

export const registerSuccessfulLoginForJwt = (username, token) => {
    console.log('===registerSuccessfulLoginForLoginForJwt');
    localStorage.setItem('token',token);
    localStorage.setItem('authenticatedUser',username);

    setupAxiosInterceptors();
};

export const createJWTToken = (token) => {
    return 'Bearer ' + token;
};

export const setupAxiosInterceptors = () => {
    axios.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            if(token){
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            // config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => {
            Promise.reject(error)
        }
    );
};

export const logout = () => {
    localStorage.removeItem("authenticatedUser");
    localStorage.removeItem("token");
};

//토큰 있나?
export const isUserLoggedIn = () => {
    const token = localStorage.getItem('token');
    console.log('===UserLoggedInCheck===');
    console.log(token);

    if(token) {
        return true;
    }

    return false;
};

//id가 뭐야??
export const getLoggedInUserName = () => {
    //let user = sessionStorage.getItem('authenticatedUser')
    let user = localStorage.getItem('authenticatedUser');
    if(user===null) return '';
    return user;
};
