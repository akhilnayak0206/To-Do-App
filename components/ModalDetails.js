import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, ScrollView, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  OnShowModal,
  OnChangeStatus,
  OnDelete
} from '../store/actions/actions';
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
  Input,
  Picker,
  Toast
} from 'native-base';

const ModalDetails = ({
  OnShowModal,
  OnChangeStatus,
  toDoList,
  OnDelete,
  showModal: { showDetails, details }
}) => {
  const onValueChange = (key, value) => {
    OnChangeStatus({ key, status: value });
  };

  const [listKey, setListKey] = useState();

  const getStatusKey = () => {
    details &&
      toDoList.some((obj, key) => {
        if (obj.id === details.id) {
          return setListKey(key);
        }
      });
  };

  useEffect(() => {
    getStatusKey();
  }, [details]);

  const deleteToDo = value => {
    Alert.alert(
      `Delete Task`,
      `Do you want to delete ${value.details.title}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed for delete'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            setListKey(undefined);
            OnDelete(value.key);
            OnShowModal({ type: 'showDetails', showDetails: false });
            Toast.show({
              text: `${value.details.title} deleted`,
              buttonText: 'Okay',
              type: 'danger'
            });
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={showDetails}
      onRequestClose={() => {
        OnShowModal({ type: 'showDetails', showDetails: false });
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
            OnShowModal({ type: 'showDetails', showDetails: false });
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
                  OnShowModal({ type: 'showDetails', showDetails: false });
                }}
              >
                <Icon type='AntDesign' name='arrowleft' />
              </Button>
            </Left>
            <Body>{showDetails && <Title>{details.title}</Title>}</Body>
            <Right>
              <Button
                transparent
                onPress={() => deleteToDo({ details, key: details.id })}
              >
                <Icon type='AntDesign' name='delete' />
              </Button>
            </Right>
          </Header>
          <Content padder>
            <ScrollView>
              <Form>
                {showDetails && (
                  <Textarea
                    rowSpan={10}
                    style={{
                      borderBottomColor: 'black',
                      borderWidth: 1,
                      marginTop: '1%'
                    }}
                    placeholder='Description'
                    value={details.description}
                    disabled
                  />
                )}
              </Form>
            </ScrollView>
          </Content>
        </View>
        {showDetails && listKey >= 0 && (
          <Button
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              backgroundColor:
                toDoList[listKey].status === 'C' // Check for completed
                  ? '#FFC107' // Completed === true
                  : toDoList[listKey].status === 'NC' // If false then check Not Completed
                  ? '#D1BA72' // Not  Completed
                  : '#FFD862' // Partially Completed
            }}
          >
            <Picker
              mode='dropdown'
              iosIcon={<Icon name='arrow-up' />}
              placeholder='Select'
              style={{ width: '100%' }}
              selectedValue={toDoList[listKey].status}
              onValueChange={value => onValueChange(details.id, value)}
            >
              <Picker.Item label='Not Completed' value='NC' />
              <Picker.Item label='Partially Completed' value='PC' />
              <Picker.Item label='Completed' value='C' />
            </Picker>
          </Button>
        )}
      </View>
    </Modal>
  );
};

ModalDetails.propTypes = {
  OnShowModal: PropTypes.func.isRequired,
  OnChangeStatus: PropTypes.func.isRequired,
  showModal: PropTypes.object.isRequired,
  toDoList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  showModal: state.showModal,
  toDoList: state.toDoList
});

export default connect(mapStateToProps, {
  OnShowModal,
  OnChangeStatus,
  OnDelete
})(ModalDetails);
