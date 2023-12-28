import { Suspense } from "react"
import {
  Routes,
  Route,
  useLocation,
  useSearchParams,
  useParams,
  useNavigate
} from "react-router-dom"
import routes from "./routes"

import { Mask, DotLoading } from "antd-mobile"

export default function AutoRoutes() {
  /**
   * 统一渲染的组件:在这里可以做一些事情下例如: 权限/登录态校验，传递路由信息的属性...J
   */
  const Element = (props) => {
    // 解构出需要渲染的组件
    let { component: Component, meta = {} } = props

    // 设置title
    let { title = "知乎日报" } = meta
    document.title = title

    // 注入路由钩子函数
    const location = useLocation(),
      navigate = useNavigate(),
      [usp] = useSearchParams(),
      params = useParams()
    return (
      <Component
        navigate={navigate}
        usp={usp}
        params={params}
        location={location}
      />
    )
  }

  /**
   * 递归构建路由表
   *
   * @param {*} routers
   * @returns
   */
  const buildRoutes = (routers) => {
    return routers.map((item, key) => {
      let { path, children = [] } = item
      return (
        // 将router map中的参数全部传入Element中
        <Route key={key} path={path} element={<Element {...item} />}>
          {buildRoutes(children)}
        </Route>
      )
    })
  }

  const Loading = () => {
    return (
      <Mask visible>
        <DotLoading
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            fontSize: "50px",
            transform: "translate(-50%,-50%)"
          }}
        />
      </Mask>
    )
  }

  return (
    // 默认包含起来，才能实现component-lazyload
    <Suspense fallback={<Loading />}>
      <Routes>{buildRoutes(routes)}</Routes>
    </Suspense>
  )
}
