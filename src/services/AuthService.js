import axios from 'axios';

const AUTH_API_BASE_URL = "http://localhost:8080/api";

class AuthService {

    signIn(loginRequest){
        return axios.post(AUTH_API_BASE_URL +'/signin',loginRequest );
    }


  



}
export default new AuthService()