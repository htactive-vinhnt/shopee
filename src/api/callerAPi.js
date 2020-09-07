import * as config from '../constant/config';
import axios from 'axios';

export function callAPI(){
    return axios.post(`${config.URL_API}`)
}

export function getAPI(enponit){
    return axios.get(`${config.URL_API}/${enponit}`)
}

export function updateAPI(enponit, id, dataUpdate){
    return axios.put(`${config.URL_API}/${enponit}/${id}`, dataUpdate)
}

export function deleteAPI(enponit, id){
    return axios.delete(`${config.URL_API}/${enponit}/${id}`)
}

