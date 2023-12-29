import httpUtils from "./http.utils"

const queryNewsLatest = () => {
  return httpUtils.get("/api/news_latest")
}
