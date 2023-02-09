import styled from "styled-components";

export const CardContainer = styled.div`
  width: 416px;
  height: 260px;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};
`;

export const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.25rem;
  margin: 0;

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: ${(props) => props.theme["base-title"]};
    flex: 1;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }
`;
