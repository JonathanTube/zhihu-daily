import { DetailContainer } from "./Detail.style"
import SkeletonPlus from "../../components/skeletonPlus/SkeletonPlus.component"
import {
  LeftOutline,
  LinkOutline,
  MessageOutline,
  MoreOutline,
  StarOutline
} from "antd-mobile-icons"
import { useEffect, useState } from "react"
import { queryNewsDetail } from "../../api"

export default function Detail(props) {
  let { navigate, params } = props

  let [info, setInfo] = useState(null)
  let [extra, setExtra] = useState(null)

  useEffect(() => {
    ;(async () => {
      let result = await queryNewsDetail(params.id)
      setInfo(result)
    })()
  }, [])

  return (
    <DetailContainer>
      {info ? (
        <div
          className="content"
          // react中使用富文本渲染！！！
          dangerouslySetInnerHTML={{
            __html: info.content
          }}
        ></div>
      ) : (
        <SkeletonPlus />
      )}

      <div className="tab-bar">
        <div
          className="back"
          onClick={() => {
            navigate(-1)
          }}
        >
          <LeftOutline />
        </div>
        <div className="icons">
          <MessageOutline />
          <LinkOutline />
          <StarOutline />
          <MoreOutline />
        </div>
      </div>
    </DetailContainer>
  )
}
