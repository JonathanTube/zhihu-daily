import SkeletonPlusBox from "./SkeletonPlus.style"
import { Skeleton } from "antd-mobile"
export default function NewsItem() {
  return (
    <SkeletonPlusBox>
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </SkeletonPlusBox>
  )
}
