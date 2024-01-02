import { HomeContainer } from "./Home.style"

import HomeHead from "../../components/homeHead/HomeHead.component"
import { getTime } from "../../assets/utils"
import { useEffect, useState, useRef } from "react"
import { Divider, DotLoading, Swiper } from "antd-mobile"
import { Link } from "react-router-dom"
import NewsItem from "../../components/newsItem/NewsItem.component"
import SkeletonPlus from "../../components/skeletonPlus/SkeletonPlus.component"

import { queryNewsLatest, queryBanners } from "../../api"
export default function Home() {
  const [today, _] = useState(getTime())

  const [banners, setBanners] = useState([])

  const [newsList, setNewsList] = useState([])

  const loadMoreRef = useRef()

  useEffect(() => {
    // 因为使用restrictMode,
    // 所以这里初始化会被调用两次
    ;(async () => {
      let bannerList = await queryBanners()
      // 设置列表数值的时候，必须set方法是之前的变量，
      // 只能对之前的变量进行修改，然后结构copy一份调用set方法，坑爹......!
      banners.push(...bannerList)
      setBanners([...banners])
      console.log("1.设置banner执行一次")

      let dataList = await queryNewsLatest()
      newsList.push(...dataList)
      setNewsList([...newsList])
      console.log("2.设置newsList执行一次")
    })()
  }, [])

  useEffect(() => {
    let ob = new IntersectionObserver(async (changes) => {
      if (changes[0].isIntersecting) {
        // console.log(today, banners, newsList)
        let dataList = await queryNewsLatest()
        // dataList.forEach((item) => newsList.push(item)) // 这种也行
        newsList.push(...dataList)
        setNewsList([...newsList])
      }
    })

    ob.observe(loadMoreRef.current)

    // 将组件保存下来，如果不保存，在useEffect返回销毁函数后，执行销毁函数的时候可能对象已经不存在了
    let loadMoreDom = loadMoreRef.current

    // 在组件销毁释放，需要手动销毁监听器
    return () => {
      ob.unobserve(loadMoreDom)
      // ob.disconnect()
    }
  }, [])

  return (
    <HomeContainer>
      <HomeHead today={today} />

      <div className="swiperBox">
        {banners.length > 0 && (
          <Swiper autoplay loop>
            {banners.map((item, _) => {
              return (
                <Swiper.Item key={item.id}>
                  <Link to={`detail/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                    <div className="desc">
                      <div className="title">{item.title}</div>
                      <p className="author">{item.author}</p>
                    </div>
                  </Link>
                </Swiper.Item>
              )
            })}
          </Swiper>
        )}
      </div>

      <div className="news-box">
        {newsList.length === 0 ? (
          <SkeletonPlus />
        ) : (
          newsList.map((news, index) => {
            let { id } = news
            return (
              <div key={id}>
                {index > 0 && <Divider />}
                <NewsItem {...news} />
              </div>
            )
          })
        )}
      </div>

      <div
        className="loadmore-box"
        style={{ display: newsList.length === 0 ? "none" : "block" }}
        ref={loadMoreRef}
      >
        <DotLoading />
        数据加载中
      </div>
    </HomeContainer>
  )
}
