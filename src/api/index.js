import http from "./http.utils"

export const queryBanners = () => {
  return http.get("/api/banners")
}

export const queryNewsLatest = () => {
  return http.get("/api/news_latest")
}
