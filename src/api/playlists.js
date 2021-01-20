import request from '@/utils/request'

export function highquality({ cat }) {
  return request({
    url: '/top/playlist/highquality',
    method: 'get',
    params: {
      limit: 1,
      cat
    }
  })
}
export function topList({ cat, offset }) {
  return request({
    url: '/top/playlist',
    method: 'get',
    params: {
      limit: 10, 
      offset,
      cat
    }
  })
}