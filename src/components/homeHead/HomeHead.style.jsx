// import { styled } from "styled-px2rem"
// https://github.com/win-winFE/styled-px2rem
import styled from "../../assets/styled-px2rem"

export const InfoBox = styled.div`
  display: flex;
  align-items: center;

  .time {
    padding-right: 30px;
    height: 70px;

    span {
      display: block;
      text-align: center;
      line-height: 35px;
      font-size: 24px;

      &:nth-child(1) {
        font-size: 32px;
      }
    }
  }

  .title {
    padding-left: 24px;
    height: 64px;
    line-height: 64px;
    font-size: 40px;
    border-left: 2px solid #eee;
  }
`

export const AvatarBox = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 50%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`
export const HomeHeadBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px 30px;
`
