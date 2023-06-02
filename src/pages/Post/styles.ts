import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const ContainerPost = styled.div`
  position: absolute;

  width: 864px;
  height: 168px;
  padding: 32px 40px;

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  top: 208px;
  left: calc(50% - 864px / 2);
`;

export const ContainerPostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme["base-blue"]};
  }

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
  }
`;

export const ContainerPostTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 8px;
  h1 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const ContainerPostFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    color: ${(props) => props.theme["base-span"]};
  }

  img {
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const ContainerTextPost = styled.div`
  position: relative;
  top: 80px;
  width: 864px;
  padding: 32px 40px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme["base-text"]};
`;
