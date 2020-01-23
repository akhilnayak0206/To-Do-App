import React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OnShowModal, OnFilter } from '../store/actions/actions';
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
  Picker
} from 'native-base';

const ModalFilter = ({
  OnShowModal,
  OnFilter,
  filterTask,
  showModal: { showFilter }
}) => {
  const onValueChange = filterKey => {
    OnFilter(filterKey);
  };
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={showFilter}
      onRequestClose={() => {
        OnShowModal({ type: 'showFilter', showFilter: false });
      }}
    >
      <View
        style={{
          flex: 8,
          backgroundColor: 'black',
          zIndex: 10,
          opacity: 0.5
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            OnShowModal({ type: 'showFilter', showFilter: false });
          }}
        />
      </View>
      <View
        style={{
          flex: 4,
          zIndex: 10,
          backgroundColor: 'white'
        }}
      >
        <View style={{ flex: 3 }}>
          <Header style={{ backgroundColor: '#FFC107' }}>
            <Left>
              <Button
                transparent
                onPress={() => {
                  OnShowModal({ type: 'showFilter', showFilter: false });
                }}
              >
                <Icon type='AntDesign' name='arrowleft' />
              </Button>
            </Left>
            <Body>
              <Title>Select a filter</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Picker
              mode='dropdown'
              iosIcon={<Icon name='arrow-down' />}
              Icon={<Icon name='arrow-down' />}
              placeholder='Select a filter'
              style={{ width: '100%' }}
              selectedValue={filterTask.selectFilter}
              onValueChange={value => onValueChange(value)}
            >
              <Picker.Item label='Select a Filter' value='SAF' />
              <Picker.Item label='Not Completed' value='NC' />
              <Picker.Item label='Partially Completed' value='PC' />
              <Picker.Item label='Completed' value='C' />
            </Picker>
          </Content>
        </View>
        <Button
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            backgroundColor: '#FFC107'
          }}
          onPress={() => onValueChange('SAF')}
        >
          <Text>Clear Filter</Text>
        </Button>
      </View>
    </Modal>
  );
};

ModalFilter.propTypes = {
  OnShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.object.isRequired,
  OnFilter: PropTypes.func.isRequired,
  filterTask: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showModal: state.showModal,
  filterTask: state.filterTask
});

export default connect(mapStateToProps, { OnShowModal, OnFilter })(ModalFilter);
