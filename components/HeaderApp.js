import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OnShowModal } from '../store/actions/actions';

const HeaderApp = ({ OnShowModal }) => {
  return (
    <Header style={{ backgroundColor: '#FF9800' }}>
      <Body style={{ marginLeft: '5%' }}>
        <Title>To-Do List</Title>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => OnShowModal({ type: 'showAdd', showAdd: true })}
        >
          <Icon type='AntDesign' name='plus' />
        </Button>
      </Right>
    </Header>
  );
};

HeaderApp.propTypes = {
  OnShowModal: PropTypes.func.isRequired
};

export default connect(null, { OnShowModal })(HeaderApp);
