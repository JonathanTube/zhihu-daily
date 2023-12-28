import { Page404Container } from "./404.style"
import { Empty } from "antd-mobile"

export default function Page404() {
  return (
    <Page404Container>
      <Empty description="暂无数据" imageStyle={{ width: 100 }} />
    </Page404Container>
  )
}
