// 第一行import报错，需要删除package.json中babel和eslint配置
// 见：https://blog.csdn.net/qq_33715850/article/details/124549320
import { HashRouter } from "react-router-dom/dist"
import AutoRoutes from "./router/index"

function App() {
  return (
    <HashRouter>
      <AutoRoutes />
    </HashRouter>
  )
}

export default App
