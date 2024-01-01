import { HomeContainer } from "./Home.style"

import HomeHead from "../../components/homeHead/HomeHead.component"
import { getTime } from "../../assets/utils"
import { useEffect, useState } from "react"
import { Swiper } from "antd-mobile"
import { Link } from "react-router-dom"

import { queryNewsLatest } from "../../api"
export default function Home() {
  const [today, setToday] = useState(getTime())

  useEffect(() => {
    // 应为使用restrictMode,
    // 所以这里初始化会被调用两次
    queryNewsLatest().then((res) => {
      console.log(res)
    })
  }, [])

  let img =
    "https://img2.baidu.com/it/u=2694711369,1213164129&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500"

  return (
    <HomeContainer>
      <HomeHead today={today} />
      <div className="swiperBox">
        <Swiper autoplay loop>
          <Swiper.Item>
            <Link to="/detail/1">
              <img src={img} alt="" />
              <div className="desc">
                <div className="title">ddddddd</div>
                <p className="author">xxxx</p>
              </div>
            </Link>
          </Swiper.Item>
        </Swiper>
      </div>
    </HomeContainer>
  )
}
