import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Luis Carlos" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Guilherme Rodz" />
      <UserRow nickname="Luiz Batanero" />
      <UserRow nickname="Luke Morales" />
      <UserRow nickname="Guilherme Pellizzetti" />
      <UserRow nickname="João Paulo de Magalhães" />
      <UserRow nickname="Cleiton Souza" />
      <UserRow nickname="Hugo Duarte" />
      <UserRow nickname="João Pedro Schmitz" />
      <UserRow nickname="Micaelli Medeiros" />
    </Container>
  );
};

export default UserList;
