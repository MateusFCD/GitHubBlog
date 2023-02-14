import {
  Box,
  Grid,
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileDescriptionBody,
  ProfileDescriptionFooter,
  ProfileDescriptionHead,
  SaerchBar,
} from "./styles";

import GitLogo from "../../assets/icons/Type=github-brands.svg";
import Company from "../../assets/icons/Type=building-solid.svg";
import Followers from "../../assets/icons/Type=user-group-solid.svg";
import LinkIcon from "../../assets/icons/Type=arrow-up-right-from-square-solid.svg";
import { Card } from "../../components/Card";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img
          src="https://avatars.githubusercontent.com/u/93829757?v=4"
          alt=""
        />
        <ProfileDescription>
          <ProfileDescriptionHead>
            <h1>Mateus Drumond</h1>
            <div>
              <a href="">GITHUB</a>
              <img src={LinkIcon} alt="" />
            </div>
          </ProfileDescriptionHead>
          <ProfileDescriptionBody>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nam enim nemo minus, ipsam rerum doloremque ratione
              quis placeat optio fugiat?
            </p>
          </ProfileDescriptionBody>
          <ProfileDescriptionFooter>
            <span>
              <img src={GitLogo} alt="" />
              <p>mateusfcd</p>
            </span>
            <span>
              <img src={Company} alt="" />
              <p>Rocketseat</p>
            </span>
            <span>
              <img src={Followers} alt="" />
              <p>32 seguidores</p>
            </span>
          </ProfileDescriptionFooter>
        </ProfileDescription>
      </ProfileContent>
      <Box>
        <h1>Publicações</h1>
        <span>2 publicações</span>
      </Box>
      <SaerchBar placeholder="Buscar conteúdo" />
      <Grid>
        <NavLink to={"/post"}>
          <Card
            title="JavaScript data types and data structures"
            date="Há 1 dia"
            paragraphy="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          />
        </NavLink>

        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          paragraphy="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
        />
      </Grid>
    </ProfileContainer>
  );
}
