import { LoginDTO, SignupDTO } from "src/constant";
import { apiCore } from "./apiCore";

const api = new apiCore();

const LoginRequest = async(data:LoginDTO) => {
    const result = await api.post('/users/search', data);
    if ( result === undefined ) {
        return {
            error: 'failed',
            message : "Server is downed"
        }
    }
    return result;
}

const SignupRequest = async(data:SignupDTO) => {
    const result = await api.post('/users/create',data);
    if ( result === undefined) {
        return {
            error: 'failed',
            message : 'server is downed'
        }
    }
    return result ;
}

export {
    LoginRequest,
    SignupRequest
};