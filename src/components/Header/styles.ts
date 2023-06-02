import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 296px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme["base-profile"]};
`;
