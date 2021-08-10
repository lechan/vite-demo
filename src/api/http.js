import Axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'

const API_CODE = {
    sUCCESS: 0,
    EXPIRE: 101,
    INVALID: 107,
    NOAUTH: 108
}
const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT:'PUT',
    DELETE: 'DELETE'
}
const HOST = {
    development: '/damportal',
    production: '/damportal'
}

let messageShow = true
let messageTimer = null
const showErrorMsg = msg => {
    clearTimeout(messageTimer)
    messageTimer = setTimeout(() => {
        messageShow = true
    }, 500)
    messageShow &&
    ElMessage({
        type: 'error',
        message: msg,
        showClose: true
    })
    messageShow = false
}

window.HOST = HOST
window.Promise = Promise

Axios.interceptors.request.use( config =>{
    const qs = getQueryString()
    const getToken = qs.token
    const token = window.localStorage.getItem( 'token') || getToken
    if (token && token !== '') {
        config.headers.token = token
    }
    config.cache = 'no-cache'
    return config
}, error => Promise.reject(error))

Axios.interceptors.response.use(res => {
    return new Promise((resolve, reject) => {
        const { code, msg } = res.data
        if (code === API_CODE.EXPIRE || API_CODE.INVALID || API_CODE.NOAUTH) {
            if (router.history.current.name !== 'Login') {
                const redirectUrl = router.history.current.fullPath.split('?')[0]
                let routerObj = {}
                if (code === API_CODE.NOAUTH) {
                    routerObj = {
                        path: window.PREFIX + '/login'
                    }
                } else {
                    routerObj = {
                        path: window.PREFIX + '/login',
                        query: {
                            redirect: redirectUrl
                        }
                    }
                }
                router.push(routerObj)
                showErrorMsg(msg)
            } else {
                resolve(res.data)
            }
            code !== API_CODE.NOAUTH && localStorage.clear()
        } else {
            resolve(res.data)
        }
    })
}, error => {
    return Promise.reject(error)
})

const http = (url, params = {}, method = METHOD.GET, headers = {}) => {
    const options = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            ...headers
        },
        method
    }

    if (method === METHOD. POST) {
        options.data = params
    } else if (method === METHOD.GET) {
        options.params = params
        options.params._t = Date.parse(new Date()) / 1000
    }
    return Axios({
        url,
        ...options
    })
}

const getApi = url => HOST[process.env.NODE_ENV] + url

export {
    http,
    getApi,
    METHOD
}
    