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

import { Card } from "../../components/Card";
import { Link, useNavigate } from "react-router-dom";
import { Buildings, GithubLogo, Share, Users } from "phosphor-react";
import { useTheme } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface UserData {
  name: string;
  company: string;
  bio: string;
  followers: number;
  avatar_url: string;
  login: string;
  html_url: string;
}

interface PostData {
  body: string;
  number: number;
  created_at: string;
  html_url: string;
  comments: number;
  title: string;
  login: string;
}

const texto: string = "";

export function Home() {
  const color = useTheme();
  const [userData, setUserData] = useState<UserData>();
  const [posts, setPosts] = useState<PostData[]>([]);

  const navigate = useNavigate();

  const userApi = () => {
    const response = axios
      .get(`https://api.github.com/users/mateusfcd`)
      .then((response) => {
        setUserData(response.data);
      });
    return response;
  };

  const post = () => {
    const response = axios
      .get(`https://api.github.com/repos/MateusFCD/GitHubBlog/issues`)
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      });
    return response;
  };

  function formatarData(data: string) {
    const dataFormatada = formatDistance(new Date(data), new Date(), {
      locale: ptBR,
    });
    return dataFormatada;
  }

  useEffect(() => {
    userApi();
    post();
  }, []);

  return (
    <ProfileContainer>
      <ProfileContent>
        <img
          src="https://avatars.githubusercontent.com/u/93829757?v=4"
          alt=""
        />
        <ProfileDescription>
          <ProfileDescriptionHead>
            <h1>{userData?.name}</h1>
            <div>
              <a href={userData?.html_url}>GITHUB</a>
              <Share weight="fill" size={16} color={color["base-blue"]} />
            </div>
          </ProfileDescriptionHead>
          <ProfileDescriptionBody>
            <p>{userData?.bio}</p>
          </ProfileDescriptionBody>
          <ProfileDescriptionFooter>
            <span>
              <GithubLogo weight="fill" size={20} color={color["base-span"]} />
              <p>{userData?.login}</p>
            </span>
            <span>
              <Buildings weight="fill" size={20} color={color["base-span"]} />
              <p>{userData?.company}</p>
            </span>
            <span>
              <Users weight="fill" size={20} color={color["base-span"]} />
              <p>{userData?.followers} seguidores</p>
            </span>
          </ProfileDescriptionFooter>
        </ProfileDescription>
      </ProfileContent>
      <Box>
        <h1>Publicações</h1>
        <span>{posts.length} publicações</span>
      </Box>
      <SaerchBar placeholder="Buscar conteúdo" />
      <Grid>
        {posts.map((post) => (
          <div
            key={post.number}
            onClick={() => navigate(`/post/${post.number}`)}
          >
            <Card
              id={post.number}
              title={post.title}
              date={formatarData(post.created_at)}
              paragraphy={post.body}
            />
          </div>
        ))}
      </Grid>
    </ProfileContainer>
  );
}

// {
//   state: {
//     title: post.title,
//     date: formatarData(post.created_at),
//     paragraphy: post.body,
//     comments: post.comments,
//     html_url: post.html_url,
//     body: post.body,
//   },
// }
