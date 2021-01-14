import axios from '../utils/axios'

export function getAddressDetail(id) {
  return axios.get(`/address/${id}`)
}

export function getDefaultAddressDetail() {
  return axios.get(`/address/default`)
}