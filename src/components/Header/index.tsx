import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/logo.svg";
import EffectOne from "../../assets/effectOne.svg";
import EffectTwo from "../../assets/effectTwo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={EffectOne} alt="" />
      <NavLink to={"/"}>
        <img src={LogoImg} alt="" />
      </NavLink>
      <img src={EffectTwo} alt="" />
    </HeaderContainer>
  );
}
