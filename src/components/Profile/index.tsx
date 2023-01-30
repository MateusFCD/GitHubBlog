import {
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileDescriptionBody,
  ProfileDescriptionFooter,
  ProfileDescriptionHead,
} from "./styles";

import GitLogo from "../../assets/icons/Type=github-brands.svg";
import Company from "../../assets/icons/Type=building-solid.svg";
import Followers from "../../assets/icons/Type=user-group-solid.svg";
import Link from "../../assets/icons/Type=arrow-up-right-from-square-solid.svg";

export function Profile() {
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
              <img src={Link} alt="" />
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
    </ProfileContainer>
  );
}
