import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  List,
  ListItem,
  Text,
  Picker,
  Form
} from 'native-base';
import { connect } from 'react-redux';
import { OnShowModal } from '../store/actions/actions';

const ListToDo = ({ toDoList, OnShowModal, showModal }) => {
  const [selected, setSelected] = useState(undefined);
  const [visible, setVisible] = useState(false);

  const onValueChange = value => {
    setSelected(value);
  };

  return (
    <List>
      <ListItem
        style={{ flex: 1 }}
        button
        onPress={() => OnShowModal({ type: 'showDetails', showDetails: true })}
      >
        <Icon
          type='Feather'
          name='x-circle'
          onPress={() => alert('ok')}
          style={{ flex: 1 }}
        />
        <Body style={{ flex: 6 }}>
          <Text>Airplane Modesdkvjbsdkjvbsdkjvbsjk</Text>
        </Body>
        <Right style={{ flex: 5 }}>
          <Picker
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' />}
            placeholder='Select'
            style={{ width: '100%' }}
            selectedValue={selected}
            onValueChange={value => onValueChange(value)}
          >
            <Picker.Item label='Not Completed' value='key0' />
            <Picker.Item label='Partially Completed' value='key1' />
            <Picker.Item label='Completed' value='key2' />
          </Picker>
        </Right>
      </ListItem>
    </List>
  );
};

ListToDo.propTypes = {
  OnShowModal: PropTypes.func.isRequired,
  toDoList: PropTypes.array.isRequired,
  showModal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  toDoList: state.toDoList,
  showModal: state.showModal
});

export default connect(mapStateToProps, { OnShowModal })(ListToDo);
