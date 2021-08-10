import { http, getApi, METHOD } from "./http"

const apiUrl = {
    login: getApi('/login'),
    logout: getApi('/logout')
}

export const getLoginInfo = params => http(apiUrl.login, params, METHOD.POST)
export const getLogout = params => http(apiUrl.logout, params, METHOD.POST)
