import {$authHost, $host} from "./index";

export const getCourse = async () => {
    const {data} = await $host.get('api/courses')
    return data
}

export const getOneCourse = async (id) => {
    const {data} = await $host.get('api/courses/' + id)
    return data
}


