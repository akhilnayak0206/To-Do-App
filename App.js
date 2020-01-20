import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import { Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import HeaderApp from './HeaderApp';
import ListToDo from './ListToDo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers/reducer';
const statusBarHeight = Constants.statusBarHeight;

const store = createStore(reducers);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <HeaderApp />
          <ScrollView>
            <ListToDo />
          </ScrollView>
          <Button style={styles.bottomButton} rounded large>
            <Icon type='Feather' name='filter' />
          </Button>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0
  },
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
