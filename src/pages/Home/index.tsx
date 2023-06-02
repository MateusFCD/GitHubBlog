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

import LinkIcon from "../../assets/icons/Type=arrow-up-right-from-square-solid.svg";
import { Card } from "../../components/Card";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Buildings, GithubLogo, Share, Users } from "phosphor-react";
import { useTheme } from "styled-components";

export function Home() {
  const color = useTheme();

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
              <Share weight="fill" size={16} color={color["base-blue"]} />
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
              <GithubLogo weight="fill" size={20} color={color["base-span"]} />
              <p>mateusfcd</p>
            </span>
            <span>
              <Buildings weight="fill" size={20} color={color["base-span"]} />
              <p>Rocketseat</p>
            </span>
            <span>
              <Users weight="fill" size={20} color={color["base-span"]} />
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
        <Link to={"/post"} style={{ textDecoration: "none" }}>
          <Card
            title="JavaScript data types and data structures"
            date="Há 1 dia"
            paragraphy="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
          />
        </Link>

        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          paragraphy="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
        />
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          paragraphy="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
        />
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          paragraphy="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
        />
      </Grid>
    </ProfileContainer>
  );
}
