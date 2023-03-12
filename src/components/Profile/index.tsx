import {
  ProfileContainer,
  ProfileName,
  ProfileBiography,
  ProfileInformations,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/kaiqueCovo.png" alt="" />

      <div>
        <ProfileName>
          <h3>Kaique Covo</h3>
          <a
            href="https://github.com/kaiqueCovo"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileName>

        <ProfileBiography>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass. Tristique volutpat pulvinar vel massa,
            pellentesque egestas. Eu viverra massa quam dignissim aenean
            malesuada suscipit. Nunc, volutpat pulvinar vel mass.a suscipit.
            Nunc, volutpat pulvinar vel mass. Tristique volutpat pulvinar vel
            massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
            malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
        </ProfileBiography>

        <ProfileInformations>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            kaiqueCovo
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Descomplica
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            1.2k seguidores
          </span>
        </ProfileInformations>
      </div>
    </ProfileContainer>
  );
}
