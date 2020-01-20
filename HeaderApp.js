import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const HeaderApp = () => {
  return (
    <Header style={{ backgroundColor: '#FF9800' }}>
      <Body style={{ marginLeft: '5%' }}>
        <Title>To-Do List</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon type='AntDesign' name='plus' />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderApp;
