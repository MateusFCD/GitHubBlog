import {
  ContainerPost,
  Container,
  ContainerTextPost,
  Text,
  ContainerPostHeader,
  ContainerPostTitle,
  ContainerPostFooter,
} from "./styles";

import {
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Share,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface User {
  login: string;
}

interface Data {
  body: string;
  number: number;
  created_at: string;
  html_url: string;
  comments: number;
  title: string;
  user: User;
}

export function Post() {
  const color = useTheme();
  const { issuesNumber } = useParams();
  const [data, setData] = useState<Data>();

  const fetch = () => {
    const response = axios
      .get(
        `https://api.github.com/repos/MateusFCD/GitHubBlog/issues/${issuesNumber}`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    return response;
  };

  function formatarData(date: any) {
    const dataFormatada = formatDistance(new Date(date), new Date(), {
      locale: ptBR,
    });
    return dataFormatada;
  }

  useEffect(() => {
    fetch();
  }, []);

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
            <a href={data?.html_url}>VER NO GITHUB</a>
            <Share weight="fill" size={16} color={color["base-blue"]} />
          </span>
        </ContainerPostHeader>
        <ContainerPostTitle>
          <h1>{data?.title}</h1>
        </ContainerPostTitle>
        <ContainerPostFooter>
          <span>
            <GithubLogo weight="fill" size={20} color={color["base-span"]} />
            <p>{data?.user.login}</p>
          </span>
          <span>
            <CalendarBlank weight="fill" size={20} color={color["base-span"]} />
            <p>{data?.created_at}</p>
          </span>
          <span>
            <ChatCircle weight="fill" size={20} color={color["base-span"]} />
            <p>{data?.comments}comentários</p>
          </span>
        </ContainerPostFooter>
      </ContainerPost>
      <ContainerTextPost>
        <ReactMarkdown children={data?.body} />
      </ContainerTextPost>
    </Container>
  );
}
