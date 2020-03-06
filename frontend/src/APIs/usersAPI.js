import { 
    SERVER_NAME, 
    SERVER_PORT,
} from './apiParameters'
import axios from 'axios'
// const API_REGISTER_USER = `${SERVER_NAME}:${SERVER_PORT}/users/registerUser`
const API_LOGIN_USER = `${SERVER_NAME}:${SERVER_PORT}/parse/users`
console.log(API_LOGIN_USER)
// export const registerUser = async (name, email, password) => {
//     try {
//         let response = await fetch(API_REGISTER_USER, {
//             method: 'POST',
            // body: `name=${name}&email=${email}&password=${password}`,
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//             },            
//         })
//         let responseJson = await response.json()
//         if(responseJson.result === "ok") {
//             return new APIResponse(
//                 responseJson.data, 
//                 responseJson.message,true)
//         } else {
//             return new APIResponse(
//                 null, 
//                 responseJson.message,false)
//         }
//     } catch (error) {
//         return new APIResponse(null, error.message, false) //false
//     }
// }
export const loginUser = async () => {
    try {
        let response = await axios(API_LOGIN_USER, {
            method: 'POST',
            body: {
                "username": 'pxson.001',
                "password": '123456'
            },
            headers: {
                "X-Parse-REST-API-Key": "01c896577245da140fcf9f0fd247c16f",
                "X-Parse-Application-Id": "SONTUNGDEV",
                "Content-type": "application/json",
            },            
        })
        console.log(response)
        let responseJson = await response.json()
        if(responseJson.result === "ok") {
            return responseJson.data
        } else {
            return {}
        }
    } catch (error) {
        return {}
    }
}