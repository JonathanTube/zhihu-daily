import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
// 这个插件，自动根据post-pxtorem配置的比例，将写的px编译为rem
// 比如post-csstorem配置的html.style.fontSize=75px； 参考屏幕宽度是750px；那1rem = 75px
// 那20px被换算为：20 / 75 = 0.26666rem 这个比例不会改变，编译时已经确定了
import "lib-flexible"
// 当浏览器宽度变化时，html.style.fontSize会变化，那实际像素 = 0.26666 * 新的fontSize

import { ConfigProvider } from "antd-mobile"
import zhCN from "antd-mobile/es/locales/zh-CN"

// Redux配置
import { Provider } from "react-redux"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
)
