import styled from "../../assets/styled-px2rem"

export const DetailContainer = styled.div`
  .content {
    overflow-x: hidden;
    padding: 20px;
  }

  .tab-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #ddd;
    padding: 10px 20px;
    box-sizing: border-box;

    .back {
      font-size: 40px;
      width: 40px;
      margin-right: 20px;
    }

    .icons {
      font-size: 40px;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
    }
  }
`
