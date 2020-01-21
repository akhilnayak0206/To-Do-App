import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Icon } from 'native-base';
import HeaderApp from './components/HeaderApp';
import ModalAdd from './components/ModalAdd';
import ListToDo from './components/ListToDo';
import { connect } from 'react-redux';
import { OnShowModal } from './store/actions/actions';
import ModalDetails from './components/ModalDetails';
import ModalFilter from './components/ModalFilter';

const MainView = ({ OnShowModal }) => {
  return (
    <View style={{ flex: 1 }}>
      <ModalAdd />
      <ModalDetails />
      <ModalFilter />
      <HeaderApp />
      <ScrollView>
        <ListToDo />
      </ScrollView>
      <Button
        style={styles.bottomButton}
        rounded
        large
        onPress={() => OnShowModal({ type: 'showFilter', showFilter: true })}
      >
        <Icon type='Feather' name='filter' />
      </Button>
    </View>
  );
};

MainView.propTypes = {
  OnShowModal: PropTypes.func.isRequired
};

export default connect(null, { OnShowModal })(MainView);

const styles = StyleSheet.create({
  bottomButton: {
    position: 'absolute',
    zIndex: 5,
    bottom: '5%',
    right: '5%',
    height: 75,
    width: 75,
    flex: 1,
    backgroundColor: '#FFC107'
  }
});
