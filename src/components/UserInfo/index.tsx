import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

import avatarImg from '../../assets/avatar.jpg'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar src={avatarImg} />
        <UserData>
          <strong>Luis Carlos</strong>
          <span>#2689</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
