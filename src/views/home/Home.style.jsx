import styled from "../../assets/styled-px2rem"
export const HomeContainer = styled.div`
  .swiperBox {
    width: 750px;
    height: 750px;
    box-sizing: border-box;
    background: #ddd;

    .adm-swiper {
      height: 100%;

      a {
        display: block;
        height: 100%;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      .desc {
        position: absolute;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        padding: 0 30px;
        width: 100%;

        .title {
          font-size: 36px;
          color: #fff;
          padding: 0;
        }

        .author {
          font-size: 24px;
          line-height: 60px;
          color: rgba(255, 255, 255, 0.7);
          padding: 0;
        }
      }
    }
  }
`
