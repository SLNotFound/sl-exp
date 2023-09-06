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

export const getDetail = (id) => {
  const token = getToken()

  return request.get('/interview/show', {
    params: {
      id
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const updateLike = (id) => {
  return request.post('/interview/opt', {
    id,
    optType: 1
  })
}

export const updateCollect = (id) => {
  return request.post('/interview/opt', {
    id,
    optType: 2
  })
}

export const getArticlesCollect = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page,
      pageSize: 5,
      optType: 2
    }
  })
}

export const getArticlesLike = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page,
      pageSize: 5,
      optType: 2
    }
  })
}
