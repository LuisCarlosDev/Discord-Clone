import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-Livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="LoLzinho" />
      <ChannelButton channelName="Cod" />
      <ChannelButton channelName="Programação" />
    </Container>
  );
};

export default ChannelList;
