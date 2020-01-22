import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OnShowModal, OnChangeStatus } from '../store/actions/actions';
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
  Picker
} from 'native-base';

const ModalDetails = ({
  OnShowModal,
  OnChangeStatus,
  showModal: { showDetails, details }
}) => {
  const onValueChange = (key, value) => {
    OnChangeStatus({ key, status: value });
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
            <Right />
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
        {showDetails && (
          <Button
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              backgroundColor:
                details.status === 'C' // Check for completed
                  ? '#FFC107' // Completed === true
                  : details.status === 'NC' // If false then check Not Completed
                  ? '#D1BA72' // Not  Completed
                  : '#FFD862' // Partially Completed
            }}
          >
            <Picker
              mode='dropdown'
              iosIcon={<Icon name='arrow-up' />}
              placeholder='Select'
              style={{ width: '100%' }}
              selectedValue={details.status}
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
  showModal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showModal: state.showModal
});

export default connect(mapStateToProps, { OnShowModal, OnChangeStatus })(
  ModalDetails
);
