import axios from "axios"


const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

// 1.

// export function retrieveHelloWorldRestApi() {
//     return axios.get('http://localhost:8080/hello-world')
// }

export const retrieveHelloWorldRestApi = () => apiClient.get('/hello-world')

// 2.

// export function retrieveHelloWorldBeanRestApi() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retrieveHelloWorldBeanRestApi = () => apiClient.get('/hello-world-bean')

//3.

export const retrieveHelloWorldUserNameRestApi = (username) => apiClient(`/hello-world/path-variable/${username}`)