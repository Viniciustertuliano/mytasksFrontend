import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://mytasks-back.herokuapp.com/mytasks'
})

export default httpClient