import request from '@/utils/request'

export const register = (data) => {
  return request.post('/user/register', data)
}
