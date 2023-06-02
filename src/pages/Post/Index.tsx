import {
  ContainerPost,
  Container,
  ContainerTextPost,
  Text,
  ContainerPostHeader,
  ContainerPostTitle,
  ContainerPostFooter,
} from "./styles";

import GitLogo from "../../assets/icons/Type=github-brands.svg";
import Calendar from "../../assets/icons/Type=calendar-day-solid.svg";
import Comment from "../../assets/icons/Type=comment-solid.svg";
import {
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Share,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

export function Post() {
  const color = useTheme();
  return (
    <Container>
      <ContainerPost>
        <ContainerPostHeader>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span>
              <CaretLeft weight="fill" size={16} color={color["base-blue"]} />
              <p>VOLTAR</p>
            </span>
          </Link>
          <span>
            <p>VER NO GITHUB</p>
            <Share weight="fill" size={16} color={color["base-blue"]} />
          </span>
        </ContainerPostHeader>
        <ContainerPostTitle>
          <h1>Post</h1>
        </ContainerPostTitle>
        <ContainerPostFooter>
          <span>
            <GithubLogo weight="fill" size={20} color={color["base-span"]} />
            <p>mateusfcd</p>
          </span>
          <span>
            <CalendarBlank weight="fill" size={20} color={color["base-span"]} />
            <p>Há 1 dia</p>
          </span>
          <span>
            <ChatCircle weight="fill" size={20} color={color["base-span"]} />
            <p>5 comentários</p>
          </span>
        </ContainerPostFooter>
      </ContainerPost>
      <ContainerTextPost>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet debitis
          hic possimus quia ullam praesentium tempore dignissimos asperiores,
          excepturi similique ut officiis incidunt nesciunt dolorem quasi
          corporis, nobis, sunt id?
        </Text>
      </ContainerTextPost>
    </Container>
  );
}
