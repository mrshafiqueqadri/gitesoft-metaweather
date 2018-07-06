import * as http from './Http'

/**
 * @return {Promise} mixed Promise
 */
export const _search = key => http.get(`?command=search&keyword=${key}`).then(res => res.body)

/**
 * @return {Promise} mixed Promise
 */
export const _location = key => http.get(`?command=location&woeid=${key}`).then(res => res.body)

