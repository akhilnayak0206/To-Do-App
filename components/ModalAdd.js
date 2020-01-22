import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OnShowModal, OnAdd } from '../store/actions/actions';
import {
  Text,
  Button,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Content,
  Form,
  Textarea,
  Input
} from 'native-base';
import uuid from 'uuid/v1';

const ModalAdd = ({ OnAdd, OnShowModal, showModal: { showAdd } }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addToDo = () => {
    if (title.length !== 0) {
      if (description.length !== 0) {
        setTitle('');
        setDescription('');
        OnAdd({ id: uuid(), title, description, status: 'NC' });
        OnShowModal({ type: 'showAdd', showAdd: false });
      } else {
        alert('Enter description');
      }
    } else {
      alert('Enter Title');
    }
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={showAdd}
      onRequestClose={() => {
        OnShowModal({ type: 'showAdd', showAdd: false });
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
            OnShowModal({ type: 'showAdd', showAdd: false });
          }}
        />
      </View>
      <View
        style={{
          flex: 5,
          zIndex: 10,
          backgroundColor: 'white'
        }}
      >
        <View style={{ flex: 8 }}>
          <Header style={{ backgroundColor: '#FFC107' }}>
            <Left>
              <Button
                transparent
                onPress={() => {
                  OnShowModal({ type: 'showAdd', showAdd: false });
                }}
              >
                <Icon type='AntDesign' name='arrowleft' />
              </Button>
            </Left>
            <Body>
              <Title>Add To-Do</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <ScrollView>
              <Form>
                <Input
                  style={{ borderBottomColor: 'black', borderWidth: 1 }}
                  placeholder='Title'
                  value={title}
                  onChangeText={value => setTitle(value)}
                />
                <Textarea
                  rowSpan={5}
                  style={{
                    borderBottomColor: 'black',
                    borderWidth: 1,
                    marginTop: '1%'
                  }}
                  placeholder='Description'
                  value={description}
                  onChangeText={value => setDescription(value)}
                />
              </Form>
            </ScrollView>
          </Content>
        </View>
        <Button
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            backgroundColor: '#FFC107'
          }}
          onPress={() => addToDo()}
        >
          <Text>Save</Text>
        </Button>
      </View>
    </Modal>
  );
};

ModalAdd.propTypes = {
  OnShowModal: PropTypes.func.isRequired,
  OnAdd: PropTypes.func.isRequired,
  showModal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showModal: state.showModal
});

export default connect(mapStateToProps, { OnShowModal, OnAdd })(ModalAdd);
