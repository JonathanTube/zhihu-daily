import { lazy } from "react"

const routes = [
  {
    name: "home",
    path: "/",
    component: lazy(() => import("../views/home/Home.component")),
    meta: {
      title: "知乎日报-首页"
    }
  },
  {
    name: "detail",
    path: "/detail/:id",
    component: lazy(() => import("../views/detail/Detail.component")),
    meta: {
      title: "知乎日报-详情"
    }
  },
  {
    name: "personal",
    path: "/personal",
    component: lazy(() => import("../views/personal/Personal.component")),
    meta: {
      title: "知乎日报-个人中心"
    }
  },
  {
    name: "store",
    path: "/store",
    component: lazy(() => import("../views/store/Store.component")),
    meta: {
      title: "知乎日报-我的收藏"
    }
  },
  {
    name: "update",
    path: "/update",
    component: lazy(() => import("../views/update/Update.component")),
    meta: {
      title: "知乎日报-修改个人信息"
    }
  },
  {
    name: "login",
    path: "/login",
    component: lazy(() => import("../views/login/Login.component")),
    meta: {
      title: "知乎日报-登录/注册"
    }
  },
  {
    name: "404",
    path: "/*",
    component: lazy(() => import("../views/404/404.component")),
    meta: {
      title: "知乎日报-404"
    }
  }
]

export default routes
