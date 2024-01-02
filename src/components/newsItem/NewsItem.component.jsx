import { Image } from "antd-mobile"
import NewsItemBox from "./NewsItem.style"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

const NewsItem = ({ id, title, author, image }) => {
  return (
    <NewsItemBox>
      <Link to={{ pathname: `/detail/${id}` }}>
        <div className="content">
          <div className="title">${title}</div>
          <div className="author">${author}</div>
        </div>
        <Image lazy src={image} />
      </Link>
    </NewsItemBox>
  )
}

NewsItem.defaultProps = {
  id: "",
  title: "empty title",
  author: "nobody",
  image: ""
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired
}

export default NewsItem
