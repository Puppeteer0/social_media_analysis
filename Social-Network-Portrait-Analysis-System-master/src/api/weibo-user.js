import request from 'axios'
import qs from 'qs'

export function fetchList() {
  return request({
    url: 'http://localhost:8000/api/get_weibo_user_info',
    method: 'get'
  })
}

export function fetchDataCount() {
  return request({
    url: 'http://localhost:8000/api/get_all_user_data',
    method: 'get'
  })
}

export function deleteWeiboUser(data) {
  return request({
    url:'http://localhost:8000/api/delete_weibo_user/'+data,
    method: 'delete',
  })
}

export function createUserPortrait(weibo_user_id) {
  return request({
    url:'http://localhost:8000/api/create_user_portrait',
    method: 'post',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:qs.stringify({weibo_user_id:weibo_user_id})
  })
}

export function getUserPortrait(weibo_user_id) {
  return request({
    url:'http://localhost:8000/api/get_user_portrait/'+weibo_user_id,
    method: 'get',
  })
}

export function deleteUserPortrait(weibo_user_id){
  return request({
    url:'http://localhost:8000/api/delete_user_portrait/'+weibo_user_id,
    method: 'delete',
  })
}

export function fetchWeiboTimeLine(weibo_user_id) {
  return request({
    url:'http://localhost:8000/api/get_user_weibo/'+weibo_user_id,
    method: 'get',
  })
}

export function fetchUserInterest(weibo_user_id) {
  return request({
    url:'http://localhost:8000/api/get_user_interest/'+weibo_user_id,
    method: 'get',
  })
}

export function fetchUserProbability(weibo_user_id) {
  return request({
    url:'http://localhost:8000/api/get_user_probability/'+weibo_user_id,
    method: 'get',
  })
}

export function fetchUserLocation(weibo_user_id) {
  return request({
    url:'http://localhost:8000/api/get_user_all_location/'+weibo_user_id,
    method: 'get',
  })
}

export function changeInterest(weibo_user_id,interest) {
  return request({
    url:'http://localhost:8000/api/modify_interest',
    method: 'post',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:qs.stringify({weibo_user_id:weibo_user_id,interest:interest})
  })
}

