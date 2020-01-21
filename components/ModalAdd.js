import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OnShowModal } from '../store/actions/actions';
import { Text } from 'native-base';

const ModalAdd = ({ OnShowModal, showModal: { showAdd } }) => {
  console.log('hello');
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
          padding: '5%',
          zIndex: 10,
          backgroundColor: 'white'
        }}
      >
        <Text>Hello World!</Text>
      </View>
    </Modal>
  );
};

ModalAdd.propTypes = {
  OnShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showModal: state.showModal
});

export default connect(mapStateToProps, { OnShowModal })(ModalAdd);
