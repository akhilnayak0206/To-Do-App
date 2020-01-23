import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import {
  Body,
  Right,
  Icon,
  List,
  ListItem,
  Text,
  Picker,
  Toast
} from 'native-base';
import { connect } from 'react-redux';
import {
  OnShowModal,
  OnChangeStatus,
  OnDelete
} from '../store/actions/actions';

const ListToDo = ({
  toDoList,
  OnShowModal,
  OnChangeStatus,
  OnDelete,
  filterTask
}) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (filterTask.selectFilter === 'SAF') {
      setFilteredList([...toDoList]);
    } else {
      let list = toDoList.filter(obj => {
        return obj.status === filterTask.selectFilter;
      });
      setFilteredList([...list]);
    }
  }, [filterTask, toDoList]);

  const onValueChange = (key, value) => {
    OnChangeStatus({ key, status: value });
  };

  const deleteToDo = value => {
    Alert.alert(
      `Delete Task`,
      `Do you want to delete ${value.data.title}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed for delete'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            OnDelete(value.key);
            Toast.show({
              text: `${value.data.title} deleted`,
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
    <List>
      {filteredList &&
        filteredList.map((data, key) => (
          <ListItem
            style={{ flex: 1 }}
            button
            onPress={() =>
              OnShowModal({
                type: 'showDetails',
                showDetails: true,
                details: data
              })
            }
            key={key}
          >
            <Icon
              type='Feather'
              name='x-circle'
              onPress={() => deleteToDo({ data, key: data.id })}
              style={{ flex: 1 }}
            />
            <Body style={{ flex: 6 }}>
              <Text>{data.title}</Text>
            </Body>
            <Right style={{ flex: 5 }}>
              <Picker
                mode='dropdown'
                iosIcon={<Icon name='arrow-down' />}
                placeholder='Select'
                style={{ width: '100%' }}
                selectedValue={data.status}
                onValueChange={value => onValueChange(data.id, value)}
              >
                <Picker.Item label='Not Completed' value='NC' />
                <Picker.Item label='Partially Completed' value='PC' />
                <Picker.Item label='Completed' value='C' />
              </Picker>
            </Right>
          </ListItem>
        ))}
    </List>
  );
};

ListToDo.propTypes = {
  OnShowModal: PropTypes.func.isRequired,
  OnDelete: PropTypes.func.isRequired,
  OnChangeStatus: PropTypes.func.isRequired,
  toDoList: PropTypes.array.isRequired,
  filterTask: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  toDoList: state.toDoList,
  filterTask: state.filterTask
});

export default connect(mapStateToProps, {
  OnShowModal,
  OnChangeStatus,
  OnDelete
})(ListToDo);
