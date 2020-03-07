import { 
    SERVER_NAME, 
    SERVER_PORT,
    APIResponse 
} from './apiParameters'
import axios from 'axios'
const instance = axios.create({
    baseURL: `${SERVER_NAME}:${SERVER_PORT}/`,
    timeout: 1000,
    headers: {
            "X-Parse-REST-API-Key": "01c896577245da140fcf9f0fd247c16f",
            "X-Parse-Application-Id": "SONTUNGDEV",
            "Content-type": "application/json",
    }
    });

export const registerUser = async (username, password) => {
    try {
        let response = await instance.post(`parse/users`, {
            "username": `${username}`,
            "password": `${password}`
        }).then(res=>{
            return res
        }).catch(e => {
            console.log(e)
        })
        if(response.statusText === "Created") {
            return new APIResponse(
                response.data, true)
        } else {
            return new APIResponse(
                null, false)
        }
    } catch (error) {
        return new APIResponse(null, false)
    }
}
export const loginUser = async (username, password) => {
    try {
        let response = await instance.post(`parse/login`, {
            "username": `${username}`,
            "password": `${password}`
        }).then(res=>{
            return res
        }).catch(e => {
            console.log(e)
        })
        if(response.statusText === "OK") {
            return new APIResponse(
                response.data, true)
        } else {
            return new APIResponse(
                null, false)
        }
    } catch (error) {
        return new APIResponse(null, false)
    }
}