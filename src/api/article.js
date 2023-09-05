import request from '@/utils/request'
import { getToken } from '@/utils/storage'

export const getArticles = (obj) => {
  const token = getToken()

  return request.get('/interview/query', {
    params: {
      current: obj.current || 1,
      pageSize: obj.pageSize || 10,
      sorter: obj.sorter
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
