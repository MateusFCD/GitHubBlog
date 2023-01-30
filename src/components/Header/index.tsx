import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/logo.svg";
import EffectOne from "../../assets/effectOne.svg";
import EffectTwo from "../../assets/effectTwo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={EffectOne} alt="" />
      <img src={LogoImg} alt="" />
      <img src={EffectTwo} alt="" />
    </HeaderContainer>
  );
}
