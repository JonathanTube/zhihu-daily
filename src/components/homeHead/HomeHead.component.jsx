import { HomeHeadBox, AvatarBox, InfoBox } from "./HomeHead.style"
// 这里必须导入方式
// 直接在jsx中使用，webpack打包后会修改image的路径指向到static
// 导致找不到图片
import logo from "../../assets/images/avatar.jpg"
import { useMemo } from "react"
export default function HomeHead(props) {
  let { today } = props
  console.log(today)
  let time = useMemo(() => {
    let [_, month, day] = today.match(/^\d{4}(\d{2})(\d{2})$/)
    let cnMonth = [
      "零",
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九",
      "十",
      "十一",
      "十二"
    ]
    return {
      month: cnMonth[month],
      day
    }
  }, [today])
  return (
    <HomeHeadBox>
      <InfoBox>
        <div className="time">
          <span>{time.day}</span>
          <span>{time.month}</span>
        </div>
        <h2 className="title">知乎日报</h2>
      </InfoBox>
      <AvatarBox>
        <img src={logo} />
      </AvatarBox>
    </HomeHeadBox>
  )
}
