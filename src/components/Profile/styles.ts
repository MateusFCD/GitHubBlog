import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: absolute;

  width: 864px;
  height: 212px;

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin: auto;
  border-radius: 10px;

  top: 208px;
  left: calc(50% - 864px / 2);
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 40px;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ProfileDescriptionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 612px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["base-blue"]};

    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;

    margin-right: 8px;
  }

  img {
    width: 12px;
    height: 12px;
  }
`;
export const ProfileDescriptionBody = styled.div`
  width: 612px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }
`;
export const ProfileDescriptionFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme["base-background"]};
  }
`;
