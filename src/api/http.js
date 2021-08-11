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
    development: '/api',
    production: '/api'
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
        message: msg
    })
    messageShow = false
}

window.HOST = HOST
window.Promise = Promise
Axios.defaults.timeout = 10000
Axios.interceptors.request.use(config =>{
    const token = window.localStorage.getItem('token')
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
    showErrorMsg('网络异常')
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
    