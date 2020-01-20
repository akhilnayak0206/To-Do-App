import React, { Component, useState, useEffect } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
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
import { OnAdd } from './store/actions/actions';

const ListToDo = ({ toDoList, OnAdd }) => {
  const [selected, setSelected] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(false);

  const onValueChange = value => {
    setSelected(value);
  };

  console.log(toDoList, 'here');
  return (
    <List>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View
          style={{
            flex: 3,
            backgroundColor: 'black',
            zIndex: 10,
            opacity: 0.5
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
        <View
          style={{
            flex: 5,
            padding: '5%',
            zIndex: 10,
            backgroundColor: 'white'
          }}
        >
          <Text>Hello World!</Text>
        </View>
      </Modal>
      <ListItem
        style={{ flex: 1 }}
        button
        onPress={() => setModalVisible(true)}
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

const mapStateToProps = state => ({
  toDoList: state.toDoList
});

export default connect(mapStateToProps, { OnAdd })(ListToDo);
