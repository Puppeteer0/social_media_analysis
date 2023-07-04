import request from 'axios'
import qs from 'qs'

export function fetchList() {
  return request({
    url: 'http://localhost:8000/api/get_system_user_list',
    method: 'get'
  })
}

export function createUser(data) {
  return request({
    url: 'http://localhost:8000/api/insert_system_user',
    method: 'post',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:qs.stringify({user_id:data.user_id,user_name:data.user_name,is_admin:data.is_admin})
  })
}


export function deleteSystemUser(data) {
  return request({
    url:'http://localhost:8000/api/delete_system_user/'+data,
    method: 'delete',
  })
}


export function updateSystemUser(data){
  return request({
    url:'http://localhost:8000/api/modify_system_user_info',
    method: 'post',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:qs.stringify(data)
  })
}
