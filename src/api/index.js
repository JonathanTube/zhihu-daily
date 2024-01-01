import http from "./http.utils"

export const queryNewsLatest = () => {
  return http.get("/api/news_latest")
}
