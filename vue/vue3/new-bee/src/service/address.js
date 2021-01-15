import axios from '../utils/axios'

export function getAddressDetail(id) {
  return axios.get(`/address/${id}`)
}

export function getDefaultAddressDetail() {
  return axios.get(`/address/default`)
}

export function getAddressList() {
  return axios.get(`/address`,{ pageNumber: 1, pageSize: 1000  })
}

// 新增地址
export function addAddressList(params) {
  return axios.post(`/address`,params)
}

// 修改地址
export function EditAddressList(params) {
  return axios.put(`/address`,params)
}

// 删除地址
export function DeleteAddressList(id) {
  return axios.delete(`/address/${id}`)
}