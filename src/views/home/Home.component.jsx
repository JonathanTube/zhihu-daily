import { HomeContainer } from "./Home.style"

import HomeHead from "../../components/homeHead/HomeHead.component"
import { getTime } from "../../assets/utils"
import { useState } from "react"
import { Swiper } from "antd-mobile"
import { Link } from "react-router-dom"
export default function Home() {
  const [today, setToday] = useState(getTime())
  return (
    <HomeContainer>
      <HomeHead today={today} />
      <div className="swiperBox">
        <Swiper autoplay loop>
          <Swiper.Item>
            <Link to="/detail/1">
              <img
                src="https://img2.baidu.com/it/u=2694711369,1213164129&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500"
                alt=""
              />
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
