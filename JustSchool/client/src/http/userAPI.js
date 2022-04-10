import {$authHost, $host} from "./index";

export const registration = async (email, name, password) => {
    const response = await $host.post('api/user/registration', {email,name,password})
    return response
}

export const logen = async (email, password) => {
    const response = await $host.post('api/user/login', {email,password})
    return response
}