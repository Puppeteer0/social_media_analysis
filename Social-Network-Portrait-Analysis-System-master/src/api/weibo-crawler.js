import request from 'axios'
import qs from 'qs'

export function crawlerWeibo(data) {
  return request({
    url: 'http://localhost:8000/api/weibo_crawler',
    method: 'post',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data:qs.stringify(data)
  })
}
