import styled from "../../assets/styled-px2rem"

const NewsItemBox = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-decoration: none;

    .content {
      width: 530px;
      .title {
        font-weight: bold;
        font-size: 32px;
        color: #000;
        line-height: 45px;
        max-height: 90px;
        overflow-wrap: break-word;
        overflow-y: hidden;
      }
      .author {
        line-height: 40px;
        font-size: 24px;
        color: #999;
      }
    }

    .adm-image {
      width: 130px;
      height: 130px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    /* a标签，被访问过的颜色 */
    &:visited {
      .content {
        .title {
          color: #ccc;
        }
        .author {
          color: #aaa;
        }
      }
    }
  }
`

export default NewsItemBox
