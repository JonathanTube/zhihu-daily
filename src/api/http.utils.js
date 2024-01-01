import qs from "qs"
import { Toast } from "antd-mobile"
import { isPlainObject } from "../assets/utils.js"

const http = function http(config) {
  if (!isPlainObject(config)) {
    config = {}
  }
  config = Object.assign(
    {
      url: "",
      method: "GET",
      /**
       * fetch方法默认是不携带cookie的，如果需要携带cookie，加上以下字段即可，
       * 跨域申请中需要带有cookie时，
       * 可在fetch方法的第二个参数对象中增加credentials属性，并将值设置为”include”。
       *
       * include：发送请求时，包括凭据（如cookie和HTTP认证信息）
       * omit：发送请求时，仅包括同源凭据（如cookie和HTTP认证信息）
       * same-origin：发送请求时，不包括凭据（如cookie和HTTP认证信息）
       */
      credentials: "include",
      headers: null,
      params: null,
      body: null,
      responseType: "json",
      signal: null // signal 中断请求的信号
    },
    config
  )
  if (!config.url) throw new TypeError("config.url can not be empty")
  if (!isPlainObject(config.headers)) config.headers = {}

  if (config.params !== null && !isPlainObject(config.params))
    config.params = null

  let { url, method, credentials, headers, params, body, responseType } = config
  if (params) {
    let connector = url.indexOf("?") !== -1 ? "&" : "?"
    url = `${url}${connector}${qs.stringify(params)}`
  }

  if (isPlainObject(body)) {
    body = qs.stringify(body)
    header["content-type"] = "application/x-www-form-urlencoded"
  }

  let token = localStorage.getItem("token")
  if (token) headers["authorization"] = token

  method = method.toUpperCase()
  config = {
    method,
    credentials,
    headers,
    cache: "no-cache"
  }

  if (/^(POST|PUT|PATCH)$/i.test(method) && body) {
    config.body = body
  }
  return fetch(url, config)
    .then((response) => {
      console.log(response)
      let { status, statusText } = response
      if (/^(2|3)\d{2}$/.test(status)) {
        let result
        switch (responseType.toLowerCase()) {
          case "text":
            result = response.text()
            break

          case "arraybuffer":
            result = response.arrayBuffer()
            break

          case "blob":
            result = response.blob()
            break

          default:
            result = response.json()
        }
        return result
      }
      return Promise.reject({
        code: -100,
        status,
        statusText
      })
    })
    .catch((err) => {
      Toast.show({
        icon: "fail",
        content: "接口请求异常"
      })
      return Promise.reject(err)
    })
}

;["GET", "HEAD", "DELETE", "OPTIONS"].forEach((item) => {
  http[item.toLowerCase()] = (url, config) => {
    if (!isPlainObject(config)) {
      config = {}
    }
    config.method = item
    config.url = url
    return http(config)
  }
})
;["POST", "PUT", "PATCH"].forEach((item) => {
  http[item.toLowerCase()] = (url, body, config) => {
    if (!isPlainObject(config)) {
      config = {}
    }
    config.method = item
    config.url = url
    config.body = body
    return http(config)
  }
})

export default http
