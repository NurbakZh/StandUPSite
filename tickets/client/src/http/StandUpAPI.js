import {$authHost, $host} from "./index";

export const getStandUp = async () => {
    const {data} = await $host.get('api/stand_up')
    return data
}

export const getOneStandUp = async (id) => {
    const {data} = await $host.get('api/stand_up/' + id)
    return data
}


